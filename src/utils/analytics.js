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
 * Événement GA4: begin_checkout
 * Déclenché au clic sur le bouton de passage en caisse ou de paiement
 */
export function trackBeginCheckout({ items = [], totalValue = 0 }) {
  const formattedItems = items.map((it) => ({
    item_id: it.id || it.key || it.slug,
    item_name: it.name,
    item_variant: it.formatLabel || it.format,
    price: Number(it.price) || 0,
    quantity: Number(it.quantity) || 1
  }));

  const value = Number(totalValue) || formattedItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);

  gtag('event', 'begin_checkout', {
    currency: 'EUR',
    value,
    items: formattedItems
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4] Event tracked: begin_checkout', { itemsCount: formattedItems.length, totalValue: value });
  }
}

/**
 * Événement GA4: generate_lead
 * Déclenché à la soumission du formulaire de capture d'email (paiement bloqué / indisponible)
 */
export function trackGenerateLead({ email, source = 'payment_unavailable_waitlist', value = 0 }) {
  if (!email) return;
  const cleanEmail = email.trim().toLowerCase();

  // 1. Persist email locally in anticipation of database syncing
  saveLeadEmail(cleanEmail, source);

  // 2. Dispatch GA4 generate_lead event
  gtag('event', 'generate_lead', {
    currency: 'EUR',
    value: Number(value) || 0,
    lead_source: source,
    lead_type: 'payment_blocked_waitlist'
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
 * Page view tracking for React Router SPA
 */
export function trackPageView(path, title) {
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || (typeof document !== 'undefined' ? document.title : '')
  });
}
