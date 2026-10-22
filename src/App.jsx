import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import { trackPageView } from './utils/analytics';

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

// Top route progress bar giving instant visual feedback on page changes
function TopProgressBar() {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(35);

    const timer1 = setTimeout(() => setProgress(80), 60);
    const timer2 = setTimeout(() => setProgress(100), 180);
    const timer3 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 320);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="h-full bg-gradient-to-r from-foam-terracotta via-foam-gold to-foam-terracotta transition-all duration-200 ease-out shadow-[0_0_8px_rgba(195,83,43,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Floating button to smoothly scroll to top on long pages
function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Remonter en haut de page"
      className={`fixed bottom-6 right-6 z-30 p-3 rounded-full bg-white/95 backdrop-blur-md text-foam-navy border border-foam-borderWarm shadow-riviera hover:border-foam-terracotta hover:text-foam-terracotta hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
    </button>
  );
}

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

  // Handle smooth scroll for anchors or instant reset for new page entrance
  useEffect(() => {
    if (hash && !hash.startsWith('#/')) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  // GA4 Page View tracking on SPA route navigation
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-foam-bg text-foam-text selection:bg-foam-terracotta selection:text-white font-sans">
      
      {/* Top Route Progress Indicator */}
      <TopProgressBar />

      {/* Navigation & Smooth Scroll Helper */}
      <NavigationHelper />

      {/* Legal Age Gate (Loi Évin) */}
      <LegalAgeModal />

      {/* Shopify-Standard Header with authentic Logo */}
      <Header />

      {/* Independent Multi-Page Routing with smooth page transition */}
      <main className="flex-1 overflow-x-hidden">
        <div key={location.pathname} className="animate-page-enter">
          <Routes location={location}>
            {/* Home Landing Page */}
            <Route path="/" element={<HomePage />} />
            <Route path="/accueil" element={<HomePage />} />

            {/* Dedicated Sets Overview Page (Offers) */}
            <Route path="/coffrets" element={<SetsOverviewPage />} />
            <Route path="/coffret" element={<SetsOverviewPage />} />
            <Route path="/nos-coffrets" element={<SetsOverviewPage />} />

            {/* Dedicated Set Sales Pages */}
            <Route path="/coffrets/decouverte" element={<SetSalesPage defaultSlug="coffret-decouverte" />} />
            <Route path="/coffrets/exotique" element={<SetSalesPage defaultSlug="coffret-exotique" />} />
            <Route path="/coffret/decouverte" element={<SetSalesPage defaultSlug="coffret-decouverte" />} />
            <Route path="/coffret/exotique" element={<SetSalesPage defaultSlug="coffret-exotique" />} />
            <Route path="/coffrets/:slug" element={<SetSalesPage />} />
            <Route path="/coffret/:slug" element={<SetSalesPage />} />
            <Route path="/coffret-decouverte" element={<SetSalesPage defaultSlug="coffret-decouverte" />} />
            <Route path="/coffret-exotique" element={<SetSalesPage defaultSlug="coffret-exotique" />} />

            {/* Dedicated Single Beer Product Pages */}
            <Route path="/bieres" element={<BeersOverviewPage />} />
            <Route path="/biere" element={<BeersOverviewPage />} />
            <Route path="/nos-bieres" element={<BeersOverviewPage />} />
            <Route path="/bieres/:slug" element={<BeerProductPage />} />
            <Route path="/biere/:slug" element={<BeerProductPage />} />
            <Route path="/biere-west-coast" element={<BeerProductPage defaultSlug="foam-west-coast" />} />
            <Route path="/biere-lager" element={<BeerProductPage defaultSlug="foam-lager" />} />
            <Route path="/biere-blanche" element={<BeerProductPage defaultSlug="foam-blanche" />} />
            <Route path="/biere-lou-foam-daqui" element={<BeerProductPage defaultSlug="lou-foam-daqui" />} />
            <Route path="/biere-wheat-ale" element={<BeerProductPage defaultSlug="wheat-ale" />} />
            <Route path="/biere-french-ipa" element={<BeerProductPage defaultSlug="french-ipa" />} />

            {/* Dedicated Groupe Paloma 1948 Page */}
            <Route path="/groupe-paloma" element={<PalomaPage />} />
            <Route path="/paloma" element={<PalomaPage />} />

            {/* Dedicated Nos Bars Page */}
            <Route path="/nos-bars" element={<BarsPage />} />
            <Route path="/bars" element={<BarsPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </main>

      {/* Shopify-Standard Footer */}
      <Footer />

      {/* Smooth Scroll To Top Floating Button */}
      <ScrollToTopButton />

      {/* Slide-Over Cart Drawer */}
      <SlideOverCart />

      {/* Checkout Modal */}
      <CheckoutModal />

      {/* Order Confirmation */}
      <ConfirmationModal />

    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
