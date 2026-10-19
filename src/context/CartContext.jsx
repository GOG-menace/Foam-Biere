import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAnalytics } from './AnalyticsContext';
import { BARS_LOCATIONS, TIME_SLOTS } from '../data/products';

const CartContext = createContext();

const FREE_SHIPPING_THRESHOLD = 50.00;
const SHIPPING_FEE = 12.90;

export function CartProvider({ children }) {
  const { trackAddToCart, trackOrderCompleted, logEvent } = useAnalytics();

  // Load cart from localStorage or default
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('foam_cart_items');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    // Start with 1 default discovery item or empty
    return [];
  });

  const [deliveryMethod, setDeliveryMethod] = useState('click_and_collect'); // 'click_and_collect' | 'shipping'
  const [selectedBarId, setSelectedBarId] = useState('foam-port');
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => {
    localStorage.setItem('foam_cart_items', JSON.stringify(items));
  }, [items]);

  const addItem = (item, quantity = 1) => {
    setItems(prevItems => {
      // If it's a custom pack, match by composition signature
      const itemKey = item.customKey || item.id;
      const existingIndex = prevItems.findIndex(i => (i.customKey || i.id) === itemKey);

      if (existingIndex > -1) {
        const next = [...prevItems];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });

    trackAddToCart(item.name, item.price * quantity);
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId, change) => {
    setItems(prevItems => {
      return prevItems
        .map(item => {
          if ((item.customKey || item.id) === itemId) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeItem = (itemId) => {
    setItems(prevItems => prevItems.filter(i => (i.customKey || i.id) !== itemId));
    logEvent('CART_REMOVE', `Article retiré du panier`);
  };

  const clearCart = () => {
    setItems([]);
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingAmount = deliveryMethod === 'click_and_collect' 
    ? 0.00 
    : (isFreeShipping ? 0.00 : SHIPPING_FEE);

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const finalTotal = subtotal + shippingAmount;

  // Selected bar details
  const selectedBar = BARS_LOCATIONS.find(b => b.id === selectedBarId) || BARS_LOCATIONS[0];

  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
    logEvent(
      'DELIVERY_METHOD',
      method === 'click_and_collect' 
        ? 'Méthode choisie : Click & Collect 0€ (Économie 12,90€)' 
        : 'Méthode choisie : Expédition Colis anti-casse'
    );
  };

  const completeOrder = (customerData) => {
    const orderId = 'FOAM-' + Math.floor(100000 + Math.random() * 900000);
    const orderSummary = {
      orderId,
      createdAt: new Date().toISOString(),
      customer: customerData,
      items: [...items],
      subtotal,
      shippingAmount,
      finalTotal,
      deliveryMethod,
      bar: deliveryMethod === 'click_and_collect' ? selectedBar : null,
      slot: deliveryMethod === 'click_and_collect' ? selectedSlot : null,
      status: 'PRÉCOMMANDE TEST ENREGISTRÉE (0€ DÉBITÉ)'
    };

    trackOrderCompleted({
      total: finalTotal,
      isClickAndCollect: deliveryMethod === 'click_and_collect',
      orderId,
      itemsCount: totalItemCount
    });

    setConfirmedOrder(orderSummary);
    setIsCheckoutOpen(false);
    clearCart();
    return orderSummary;
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      subtotal,
      totalItemCount,
      deliveryMethod,
      setDeliveryMethod: handleDeliveryMethodChange,
      selectedBarId,
      setSelectedBarId,
      selectedBar,
      selectedSlot,
      setSelectedSlot,
      shippingAmount,
      isFreeShipping,
      remainingForFreeShipping,
      freeShippingProgress,
      finalTotal,
      isCartOpen,
      setIsCartOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      confirmedOrder,
      setConfirmedOrder,
      completeOrder,
      FREE_SHIPPING_THRESHOLD,
      SHIPPING_FEE
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
