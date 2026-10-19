import React, { useState, useEffect } from 'react';
import { AnalyticsProvider, useAnalytics } from './context/AnalyticsContext';
import { CartProvider, useCart } from './context/CartContext';

import LegalAgeModal from './components/LegalAgeModal';
import CookieBanner from './components/CookieBanner';
import TopNotificationBar from './components/TopNotificationBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import StorytellingSection from './components/StorytellingSection';
import BarsLocationsSection from './components/BarsLocationsSection';
import NewsletterSection from './components/NewsletterSection';
import SlideOverCart from './components/SlideOverCart';
import CheckoutModal from './components/CheckoutModal';
import ConfirmationModal from './components/ConfirmationModal';
import JuryMetricsDrawer from './components/JuryMetricsDrawer';
import LegalModals from './components/LegalModals';
import Footer from './components/Footer';

import { ShoppingBag, MapPin, BarChart3, Gift } from 'lucide-react';

function MainApp() {
  const { trackSession, setIsJuryDrawerOpen } = useAnalytics();
  const { totalItemCount, setIsCartOpen, subtotal } = useCart();
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'mentions', 'cgv', 'rgpd'

  useEffect(() => {
    trackSession();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-foam-bg text-foam-navy selection:bg-foam-amber selection:text-white">
      {/* 1. Modale bloquante vérification +18 ans (Loi Évin) */}
      <LegalAgeModal />

      {/* 2. Consentement Cookies RGPD (Matomo) */}
      <CookieBanner />

      {/* 3. Bandeau de transparence académique SAÉ */}
      <TopNotificationBar />

      {/* 4. En-tête Sticky avec Navigation & Panier */}
      <Header />

      {/* 5. Corps de l'application */}
      <main className="flex-1">
        {/* Hero Section orientée conversion (Étape 2 AARRR) */}
        <Hero />

        {/* Catalogue segmenté & Configurateur de pack (Étape 3 AARRR) */}
        <Catalog />

        {/* Storytelling & Ancrage local Paloma 1948 (Étape 4 AARRR) */}
        <StorytellingSection />

        {/* Établissements FOAM Port & Place du Pin (Optimisation Click & Collect) */}
        <BarsLocationsSection />

        {/* Rétention : Brassins éphémères de Noël & RGPD (Étape 5 AARRR) */}
        <NewsletterSection />
      </main>

      {/* 6. Footer avec mentions et bandeau sanitaire Loi Évin */}
      <Footer onOpenLegalModal={(modalType) => setActiveLegalModal(modalType)} />

      {/* 7. Slide-Over Cart (Tiroir Panier Latéral) */}
      <SlideOverCart />

      {/* 8. Tunnel de commande Test SAÉ sans débit */}
      <CheckoutModal />

      {/* 9. Modal de confirmation avec numéro de commande & boucle virale */}
      <ConfirmationModal />

      {/* 10. Cockpit Jury & Indicateurs AARRR en direct */}
      <JuryMetricsDrawer />

      {/* 11. Modales d'informations légales (Mentions, CGV, RGPD) */}
      <LegalModals 
        activeModal={activeLegalModal} 
        onClose={() => setActiveLegalModal(null)} 
      />

      {/* Mobile Sticky Quick Action Bar (Pour les clients au bar sur smartphone) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-foam-navy/95 backdrop-blur-md border-t border-foam-gold/40 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href="#coffrets"
          className="flex-1 py-2 px-3 rounded-xl bg-foam-navyLight text-foam-sand text-xs font-semibold text-center flex items-center justify-center gap-1.5 border border-white/10"
        >
          <Gift className="w-3.5 h-3.5 text-foam-gold" />
          <span>Coffrets</span>
        </a>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 py-2 px-3 rounded-xl bg-foam-amber hover:bg-foam-amberDark text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-amber-glow"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Panier ({totalItemCount}) {subtotal > 0 ? `• ${subtotal.toFixed(2)}€` : ''}</span>
        </button>

        <button
          onClick={() => setIsJuryDrawerOpen(true)}
          className="p-2 rounded-xl bg-foam-navyLight text-foam-gold border border-foam-gold/40"
          aria-label="Vue Jury"
          title="Vue Jury SAÉ"
        >
          <BarChart3 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AnalyticsProvider>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </AnalyticsProvider>
  );
}
