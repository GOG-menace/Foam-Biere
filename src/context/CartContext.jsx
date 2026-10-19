import React, { createContext, useContext, useState, useEffect } from 'react';
import { SHIPPING_RATES, BARS_DATA } from '../data/products';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('foam_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [deliveryMethod, setDeliveryMethod] = useState('clickAndCollect'); // 'clickAndCollect' | 'homeDelivery'
  const [selectedBar, setSelectedBar] = useState(BARS_DATA[0].id);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  useEffect(() => {
    localStorage.setItem('foam_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product, format = 'pack3', quantity = 1) => {
    // Unique key per product + format (e.g., 'coffret-decouverte_pack6')
    const key = `${product.slug}_${format}`;
    let itemPrice = product.price;
    let formatLabel = 'Bouteille 33cl';

    if (product.pack3 && format === 'pack3') {
      itemPrice = product.pack3.price;
      formatLabel = product.pack3.format;
    } else if (product.pack6 && format === 'pack6') {
      itemPrice = product.pack6.price;
      formatLabel = product.pack6.format;
    }

    setItems(prev => {
      const index = prev.findIndex(item => item.key === key);
      if (index > -1) {
        const next = [...prev];
        next[index] = {
          ...next[index],
          quantity: next[index].quantity + quantity
        };
        return next;
      }
      return [...prev, {
        key,
        slug: product.slug,
        name: product.name,
        format,
        formatLabel,
        price: itemPrice,
        quantity,
        badge: product.badge,
        imagePlaceholder: product.imagePlaceholder
      }];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (key, delta) => {
    setItems(prev => prev.map(item => {
      if (item.key === key) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeItem = (key) => {
    setItems(prev => prev.filter(item => item.key !== key));
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const shippingCost = deliveryMethod === 'clickAndCollect' ? SHIPPING_RATES.clickAndCollect : SHIPPING_RATES.homeDelivery;
  const grandTotal = subtotal + (items.length > 0 ? shippingCost : 0);

  const completeOrder = (customerData) => {
    const orderNumber = 'FOAM-' + Math.floor(100000 + Math.random() * 900000);
    const chosenBar = BARS_DATA.find(b => b.id === selectedBar) || BARS_DATA[0];

    const order = {
      orderNumber,
      date: new Date().toLocaleDateString('fr-FR'),
      customer: customerData,
      items: [...items],
      subtotal,
      shippingCost,
      grandTotal,
      deliveryMethod,
      bar: deliveryMethod === 'clickAndCollect' ? chosenBar : null
    };

    setOrderConfirmed(order);
    setIsCheckoutOpen(false);
    clearCart();
    return order;
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      totalCount,
      subtotal,
      shippingCost,
      grandTotal,
      deliveryMethod,
      setDeliveryMethod,
      selectedBar,
      setSelectedBar,
      isCartOpen,
      setIsCartOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      orderConfirmed,
      setOrderConfirmed,
      completeOrder
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
