// Google Analytics 4 (GA4) Integration Helper
// Measurement ID: G-QZQX48D1GM

export const GA_MEASUREMENT_ID = 'G-QZQX48D1GM';

/**
 * Safely invoke gtag if present on window
 */
export function gtag(...args) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === 'function') {
      window.gtag(...args);
    } else {
      window.dataLayer.push(args);
    }
  }
}

/**
 * Événement GA4: add_to_cart
 * Déclenché à chaque ajout d'un produit / coffret au panier
 */
export function trackAddToCart({ id, name, price, quantity = 1, format = '' }) {
  const numPrice = Number(price) || 0;
  const numQty = Number(quantity) || 1;
  const itemValue = numPrice * numQty;

  const itemPayload = {
    item_id: id || name,
    item_name: name,
    item_variant: format || undefined,
    price: numPrice,
    quantity: numQty
  };

  gtag('event', 'add_to_cart', {
    currency: 'EUR',
    value: itemValue,
    items: [itemPayload]
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4] Event tracked: add_to_cart', { name, price: numPrice, quantity: numQty, format });
  }
}

/**
 * Événement GA4: remove_from_cart
 * Déclenché à la suppression d'un article ou à la baisse de sa quantité dans le panier
 */
export function trackRemoveFromCart({ id, name, price, quantity = 1, format = '' }) {
  const numPrice = Number(price) || 0;
  const numQty = Number(quantity) || 1;

  gtag('event', 'remove_from_cart', {
    currency: 'EUR',
    value: numPrice * numQty,
    items: [{
      item_id: id || name,
      item_name: name,
      item_variant: format || undefined,
      price: numPrice,
      quantity: numQty
    }]
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4] Event tracked: remove_from_cart', { name, price: numPrice, quantity: numQty, format });
  }
}

/**
 * Événement GA4: view_item
 * Déclenché à l'affichage d'une fiche coffret
 */
export function trackViewItem({ id, name, price, format = '' }) {
  const numPrice = Number(price) || 0;

  gtag('event', 'view_item', {
    currency: 'EUR',
    value: numPrice,
    items: [{
      item_id: id || name,
      item_name: name,
      item_variant: format || undefined,
      price: numPrice,
      quantity: 1
    }]
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4] Event tracked: view_item', { id, name, price: numPrice });
  }
}

/**
 * Événement GA4: view_item_list
 * Déclenché à l'affichage d'une liste de coffrets
 */
export function trackViewItemList({ listId, listName, items = [] }) {
  gtag('event', 'view_item_list', {
    item_list_id: listId,
    item_list_name: listName,
    items: items.map((it, index) => ({
      item_id: it.id,
      item_name: it.name,
      item_variant: it.format || undefined,
      price: Number(it.price) || 0,
      index
    }))
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4] Event tracked: view_item_list', { listId, itemsCount: items.length });
  }
}

/**
 * Libellé GA4 du mode de réception (paramètre shipping_tier)
 */
export function getShippingTier(deliveryMethod) {
  return deliveryMethod === 'clickAndCollect' || deliveryMethod === 'click_and_collect'
    ? 'click_and_collect'
    : 'livraison_domicile';
}

function formatCheckoutItems(items) {
  return items.map((it) => ({
    item_id: it.id || it.key || it.slug,
    item_name: it.name,
    item_variant: it.formatLabel || it.format,
    price: Number(it.price) || 0,
    quantity: Number(it.quantity) || 1
  }));
}

/**
 * Événements GA4: begin_checkout puis add_shipping_info
 * Déclenchés au clic sur le bouton de paiement (panier ou commande Express).
 * add_shipping_info porte le mode de réception choisi (click & collect ou livraison) et le bar de retrait.
 */
export function trackBeginCheckout({ items = [], totalValue = 0, deliveryMethod, pickupBar }) {
  const formattedItems = formatCheckoutItems(items);
  const value = Number(totalValue) || formattedItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);
  const shippingTier = getShippingTier(deliveryMethod);
  const barName = shippingTier === 'click_and_collect' ? pickupBar : undefined;

  gtag('event', 'begin_checkout', {
    currency: 'EUR',
    value,
    shipping_tier: shippingTier,
    pickup_bar: barName,
    items: formattedItems
  });

  gtag('event', 'add_shipping_info', {
    currency: 'EUR',
    value,
    shipping_tier: shippingTier,
    pickup_bar: barName,
    items: formattedItems
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4] Event tracked: begin_checkout + add_shipping_info', { itemsCount: formattedItems.length, totalValue: value, shippingTier, pickupBar: barName });
  }
}

/**
 * Événement GA4: generate_lead
 * Déclenché à la soumission du formulaire de capture d'email (paiement bloqué / indisponible)
 */
export function trackGenerateLead({ email, source = 'payment_unavailable_waitlist', value = 0, deliveryMethod }) {
  if (!email) return;
  const cleanEmail = email.trim().toLowerCase();

  // 1. Persist email locally in anticipation of database syncing
  saveLeadEmail(cleanEmail, source);

  // 2. Dispatch GA4 generate_lead event
  gtag('event', 'generate_lead', {
    currency: 'EUR',
    value: Number(value) || 0,
    lead_source: source,
    lead_type: 'payment_blocked_waitlist',
    shipping_tier: deliveryMethod ? getShippingTier(deliveryMethod) : undefined
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4] Event tracked: generate_lead', { email: cleanEmail, source, value });
  }
}

/**
 * Store email lead in localStorage
 */
export function saveLeadEmail(email, source = 'payment_unavailable_waitlist') {
  if (!email) return;
  try {
    const cleanEmail = email.trim().toLowerCase();
    localStorage.setItem('foam_waitlist_email', cleanEmail);
    localStorage.setItem('foam_last_lead_email', cleanEmail);

    const existing = JSON.parse(localStorage.getItem('foam_leads_db') || '[]');
    const newEntry = {
      email: cleanEmail,
      source,
      date: new Date().toISOString()
    };
    const updated = [newEntry, ...existing.filter((item) => item.email !== cleanEmail)];
    localStorage.setItem('foam_leads_db', JSON.stringify(updated));
  } catch (err) {
    console.warn('Could not store email in localStorage:', err);
  }
}

/**
 * Page view tracking for React Router SPA.
 * La balise de index.html est configurée avec send_page_view: false :
 * c'est le seul endroit qui envoie un page_view, une fois par changement de route.
 */
export function trackPageView(path, title) {
  gtag('event', 'page_view', {
    page_path: path,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
    page_title: title || (typeof document !== 'undefined' ? document.title : '')
  });
}
