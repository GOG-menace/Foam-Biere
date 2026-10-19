import React, { useState, useEffect } from 'react';
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

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return 'home';
  return hash;
}

function MainApp() {
  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    window.location.hash = `#/${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'coffret-decouverte':
        return <SetSalesPage setSlug="coffret-decouverte" navigateTo={navigateTo} />;
      case 'coffret-exotique':
        return <SetSalesPage setSlug="coffret-exotique" navigateTo={navigateTo} />;
      case 'bieres-overview':
        return <BeersOverviewPage navigateTo={navigateTo} />;
      case 'biere-west-coast':
        return <BeerProductPage beerSlug="west-coast" navigateTo={navigateTo} />;
      case 'biere-lager':
        return <BeerProductPage beerSlug="lager" navigateTo={navigateTo} />;
      case 'biere-blanche':
        return <BeerProductPage beerSlug="blanche" navigateTo={navigateTo} />;
      case 'groupe-paloma':
        return <PalomaPage navigateTo={navigateTo} />;
      case 'nos-bars':
        return <BarsPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-kraft-bg text-kraft-ink selection:bg-kraft-terracotta selection:text-white">
      {/* Legal age check on initial visit */}
      <LegalAgeModal />

      {/* Main Header Navigation */}
      <Header currentRoute={currentRoute} navigateTo={navigateTo} />

      {/* Dynamic Route Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Clean Kraft Footer */}
      <Footer navigateTo={navigateTo} />

      {/* Slide-over cart */}
      <SlideOverCart />

      {/* Checkout Modal */}
      <CheckoutModal />

      {/* Confirmation Modal */}
      <ConfirmationModal navigateTo={navigateTo} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
