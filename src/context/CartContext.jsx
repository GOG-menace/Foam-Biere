import React, { createContext, useContext, useState, useEffect } from 'react';
import { SHIPPING_RATES, BARS_DATA } from '../data/products';
import { trackAddToCart } from '../utils/analytics';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('foam_cart');
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return parsed.map(it => {
        const itemKey = it.key || it.id || `${it.slug}_${it.format || 'pack6'}`;
        const itemImage = it.image || (
          it.slug === 'coffret-exotique' 
            ? '/images/coffret-exotique-packshot.jpg' 
            : '/images/classique-team.jpg'
        );
        return {
          ...it,
          id: itemKey,
          key: itemKey,
          image: itemImage,
          formatLabel: it.formatLabel || it.formatName || (it.format === 'pack3' ? 'Coffret 3 Bouteilles (3 x 33cl)' : 'Coffret 6 Bouteilles (6 x 33cl)')
        };
      });
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

    const itemImage = product.image || (
      product.slug === 'coffret-exotique' 
        ? '/images/coffret-exotique-packshot.jpg' 
        : '/images/classique-team.jpg'
    );

    setItems(prev => {
      const index = prev.findIndex(item => item.key === key || item.id === key);
      if (index > -1) {
        const next = [...prev];
        next[index] = {
          ...next[index],
          quantity: next[index].quantity + quantity,
          image: next[index].image || itemImage
        };
        return next;
      }
      return [...prev, {
        id: key,
        key,
        slug: product.slug,
        name: product.name,
        format,
        formatLabel,
        price: itemPrice,
        quantity,
        badge: product.badge,
        image: itemImage,
        imagePlaceholder: product.imagePlaceholder
      }];
    });

    // GA4 Standard e-commerce event: add_to_cart
    trackAddToCart({
      id: key,
      name: product.name || product.fullName,
      price: itemPrice,
      quantity,
      format: formatLabel
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (keyOrId, deltaOrNewQty) => {
    setItems(prev => prev.map(item => {
      if (item.key === keyOrId || item.id === keyOrId) {
        let newQty;
        if (deltaOrNewQty === 1 || deltaOrNewQty === -1) {
          newQty = item.quantity + deltaOrNewQty;
        } else {
          newQty = deltaOrNewQty;
        }
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeItem = (keyOrId) => {
    setItems(prev => prev.filter(item => item.key !== keyOrId && item.id !== keyOrId));
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const isClickAndCollect = deliveryMethod === 'clickAndCollect' || deliveryMethod === 'click_and_collect';
  const shippingCost = isClickAndCollect ? 0.00 : (SHIPPING_RATES.homeDelivery || SHIPPING_RATES.shipping || 6.90);
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
