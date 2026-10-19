import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Header from './components/Header';
import Footer from './components/Footer';
import SlideOverCart from './components/SlideOverCart';
import CheckoutModal from './components/CheckoutModal';
import ConfirmationModal from './components/ConfirmationModal';
import LegalAgeModal from './components/LegalAgeModal';

import HomePage from './pages/HomePage';
import SetsOverviewPage from './pages/SetsOverviewPage';
import SetSalesPage from './pages/SetSalesPage';
import BeerProductPage from './pages/BeerProductPage';
import BeersOverviewPage from './pages/BeersOverviewPage';
import PalomaPage from './pages/PalomaPage';
import BarsPage from './pages/BarsPage';

// Scroll to top on every route navigation & handle legacy hash or query param redirects
function NavigationHelper() {
  const { pathname, hash, search } = useLocation();
  const navigate = useNavigate();

  // If URL has a legacy hash like #/coffrets/decouverte or query param like ?page=/bieres, convert to real pathname
  useEffect(() => {
    if (hash && hash.startsWith('#/')) {
      const targetPath = hash.slice(1);
      navigate(targetPath, { replace: true });
    } else if (search) {
      try {
        const params = new URLSearchParams(search);
        const queryTarget = params.get('page') || params.get('p') || params.get('route');
        if (queryTarget && queryTarget !== pathname) {
          navigate(queryTarget.startsWith('/') ? queryTarget : `/${queryTarget}`, { replace: true });
        }
      } catch (e) {
        console.warn('NavigationHelper query parse error:', e);
      }
    }
  }, [hash, search, pathname, navigate]);

  // Always scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <NavigationHelper />
        <div className="min-h-screen flex flex-col bg-foam-bg text-foam-black selection:bg-foam-orange selection:text-white font-sans">
          
          {/* Legal Age Gate (Loi Évin) */}
          <LegalAgeModal />

          {/* Shopify-Standard Header with authentic Logo */}
          <Header />

          {/* Independent Multi-Page Routing */}
          <main className="flex-1">
            <Routes>
              {/* Home Landing Page */}
              <Route path="/" element={<HomePage />} />

              {/* Dedicated Sets Overview Page (Offers) */}
              <Route path="/coffrets" element={<SetsOverviewPage />} />

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

              {/* Fallback to Home */}
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
