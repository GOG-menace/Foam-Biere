import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Header from './components/Header';
import Footer from './components/Footer';
import SlideOverCart from './components/SlideOverCart';
import CheckoutModal from './components/CheckoutModal';
import ConfirmationModal from './components/ConfirmationModal';
import LegalAgeModal from './components/LegalAgeModal';

import HomePage from './pages/HomePage';
import SetSalesPage from './pages/SetSalesPage';
import BeerProductPage from './pages/BeerProductPage';
import BeersOverviewPage from './pages/BeersOverviewPage';
import PalomaPage from './pages/PalomaPage';
import BarsPage from './pages/BarsPage';

// Automatically scroll to top on route change (true multi-page experience)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-foam-bg text-foam-text selection:bg-foam-amber selection:text-white">
          
          {/* Age Gate (Loi Évin) */}
          <LegalAgeModal />

          {/* Shopify-Standard Header with authentic Logo */}
          <Header />

          {/* Independent Multi-Page Routing */}
          <main className="flex-1">
            <Routes>
              {/* Home Landing Page */}
              <Route path="/" element={<HomePage />} />

              {/* Dedicated Set Sales Pages */}
              <Route path="/coffrets/decouverte" element={<SetSalesPage defaultSlug="coffret-decouverte" />} />
              <Route path="/coffrets/exotique" element={<SetSalesPage defaultSlug="coffret-exotique" />} />
              <Route path="/coffret-decouverte" element={<SetSalesPage defaultSlug="coffret-decouverte" />} />
              <Route path="/coffret-exotique" element={<SetSalesPage defaultSlug="coffret-exotique" />} />

              {/* Dedicated Single Beer Product Pages */}
              <Route path="/bieres" element={<BeersOverviewPage />} />
              <Route path="/bieres/:slug" element={<BeerProductPage />} />
              <Route path="/biere-west-coast" element={<BeerProductPage defaultSlug="west-coast" />} />
              <Route path="/biere-lager" element={<BeerProductPage defaultSlug="lager" />} />
              <Route path="/biere-blanche" element={<BeerProductPage defaultSlug="blanche" />} />

              {/* Dedicated Groupe Paloma 1948 Page */}
              <Route path="/groupe-paloma" element={<PalomaPage />} />

              {/* Dedicated Nos Bars Page */}
              <Route path="/nos-bars" element={<BarsPage />} />

              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Shopify-Standard Footer */}
          <Footer />

          {/* Slide-Over Cart Drawer */}
          <SlideOverCart />

          {/* Checkout Modal */}
          <CheckoutModal />

          {/* Order Confirmation */}
          <ConfirmationModal />

        </div>
      </Router>
    </CartProvider>
  );
}
