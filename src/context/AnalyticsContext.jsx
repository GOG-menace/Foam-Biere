import React, { createContext, useContext, useState, useEffect } from 'react';

const AnalyticsContext = createContext();

const INITIAL_BASE_METRICS = {
  sessions: 142,
  ageVerified: 126, // ~88.7%
  addToCartCount: 41, // ~28.8%
  emailSignups: 36,
  ordersCount: 19,
  clickAndCollectOrders: 15, // ~78.9%
  deliveryOrders: 4,
  totalRevenueSimulated: 512.00,
  clickAndCollectSavingsSimulated: 193.50 // 15 x 12.90€ saved!
};

const TARGETS = {
  sessions: { target: 175, min: 150, max: 200, label: 'Sessions uniques (Scan QR + IG)', unit: '' },
  ageGateRate: { target: 85, label: 'Taux de validation +18 ans (Loi Évin)', unit: '%' },
  cartRate: { target: 25, label: 'Taux d’ajout au panier', unit: '%' },
  emailSignups: { target: 40, label: 'Leads Brassins Éphémères (RGPD)', unit: 'leads' },
  ordersCount: { target: 20, label: 'Précommandes validées (North Star Metric)', unit: 'commandes' },
  clickAndCollectRate: { target: 70, label: 'Part du Click & Collect (Objectif marge)', unit: '%' }
};

export function AnalyticsProvider({ children }) {
  // Load metrics from localStorage or fallback
  const [metrics, setMetrics] = useState(() => {
    const saved = localStorage.getItem('foam_jury_metrics');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_BASE_METRICS;
  });

  const [cookieConsent, setCookieConsent] = useState(() => {
    return localStorage.getItem('foam_cookie_consent') || null; // 'all', 'essential', 'rejected'
  });

  const [isJuryDrawerOpen, setIsJuryDrawerOpen] = useState(false);
  const [eventLogs, setEventLogs] = useState(() => {
    return [
      { id: 1, timestamp: new Date(Date.now() - 1000 * 60 * 12).toLocaleTimeString('fr-FR'), type: 'SCAN_QR', message: 'Visiteur QR code scanné au bar FOAM Port de Nice' },
      { id: 2, timestamp: new Date(Date.now() - 1000 * 60 * 8).toLocaleTimeString('fr-FR'), type: 'AGE_VERIFY', message: 'Vérification légale +18 ans validée' },
      { id: 3, timestamp: new Date(Date.now() - 1000 * 60 * 3).toLocaleTimeString('fr-FR'), type: 'CART_ADD', message: 'Ajout Coffret Signature "Fêtes Riviera" (30,00 €)' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('foam_jury_metrics', JSON.stringify(metrics));
  }, [metrics]);

  const logEvent = (type, message) => {
    const newLog = {
      id: Date.now() + Math.random(),
      timestamp: new Date().toLocaleTimeString('fr-FR'),
      type,
      message
    };
    setEventLogs(prev => [newLog, ...prev.slice(0, 30)]);
  };

  // Trackers
  const trackSession = () => {
    setMetrics(prev => ({ ...prev, sessions: prev.sessions + 1 }));
    logEvent('SESSION', 'Nouvelle session initiée (Source: Direct / QR Code Bar)');
  };

  const trackAgeVerification = (isGranted) => {
    if (isGranted) {
      setMetrics(prev => ({ ...prev, ageVerified: prev.ageVerified + 1 }));
      logEvent('AGE_VERIFIED', 'Conformité Loi Évin validée (+18 ans)');
    } else {
      logEvent('AGE_REFUSED', 'Accès restreint (-18 ans ou refus)');
    }
  };

  const trackAddToCart = (productName, price) => {
    setMetrics(prev => ({ ...prev, addToCartCount: prev.addToCartCount + 1 }));
    logEvent('ADD_TO_CART', `Produit ajouté: ${productName} (${price.toFixed(2)} €)`);
  };

  const trackPackCustomization = (beersCount) => {
    logEvent('PACK_CONFIG', `Configurateur 6 bouteilles personnalisé (${beersCount}/6 bières)`);
  };

  const trackEmailSignup = (email, firstName) => {
    setMetrics(prev => ({ ...prev, emailSignups: prev.emailSignups + 1 }));
    logEvent('EMAIL_LEAD', `Opt-in Brassins Éphémères: ${firstName} (${email.replace(/(.{2})(.*)(@.*)/, "$1***$3")})`);
  };

  const trackOrderCompleted = ({ total, isClickAndCollect, orderId, itemsCount }) => {
    setMetrics(prev => {
      const nextCc = isClickAndCollect ? prev.clickAndCollectOrders + 1 : prev.clickAndCollectOrders;
      const nextDel = !isClickAndCollect ? prev.deliveryOrders + 1 : prev.deliveryOrders;
      const savings = isClickAndCollect ? prev.clickAndCollectSavingsSimulated + 12.90 : prev.clickAndCollectSavingsSimulated;

      return {
        ...prev,
        ordersCount: prev.ordersCount + 1,
        clickAndCollectOrders: nextCc,
        deliveryOrders: nextDel,
        totalRevenueSimulated: prev.totalRevenueSimulated + total,
        clickAndCollectSavingsSimulated: savings
      };
    });

    logEvent(
      'ORDER_SUCCESS',
      `Commande #${orderId} validée (${total.toFixed(2)} € - ${isClickAndCollect ? 'Click & Collect 0€' : 'Colis Anti-Casse'})`
    );
  };

  const setConsent = (choice) => {
    setCookieConsent(choice);
    localStorage.setItem('foam_cookie_consent', choice);
    logEvent('COOKIE_CONSENT', `Consentement cookies Matomo enregistré: ${choice}`);
  };

  const resetMetrics = () => {
    setMetrics(INITIAL_BASE_METRICS);
    setEventLogs([{
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString('fr-FR'),
      type: 'RESET',
      message: 'Compteurs réinitialisés aux valeurs cibles de la soutenance'
    }]);
  };

  const simulateSuccessOrder = () => {
    trackOrderCompleted({
      total: 30.00,
      isClickAndCollect: true,
      orderId: 'SIMU-' + Math.floor(1000 + Math.random() * 9000),
      itemsCount: 1
    });
  };

  // Calculated rates
  const ageGateRate = metrics.sessions > 0 ? ((metrics.ageVerified / metrics.sessions) * 100).toFixed(1) : '0.0';
  const cartRate = metrics.sessions > 0 ? ((metrics.addToCartCount / metrics.sessions) * 100).toFixed(1) : '0.0';
  const totalOrders = metrics.clickAndCollectOrders + metrics.deliveryOrders;
  const clickAndCollectRate = totalOrders > 0 ? ((metrics.clickAndCollectOrders / totalOrders) * 100).toFixed(1) : '0.0';

  return (
    <AnalyticsContext.Provider value={{
      metrics,
      targets: TARGETS,
      rates: {
        ageGateRate: parseFloat(ageGateRate),
        cartRate: parseFloat(cartRate),
        clickAndCollectRate: parseFloat(clickAndCollectRate)
      },
      cookieConsent,
      setConsent,
      isJuryDrawerOpen,
      setIsJuryDrawerOpen,
      eventLogs,
      logEvent,
      trackSession,
      trackAgeVerification,
      trackAddToCart,
      trackPackCustomization,
      trackEmailSignup,
      trackOrderCompleted,
      resetMetrics,
      simulateSuccessOrder
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}
