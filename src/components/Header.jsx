import React, { useState } from 'react';
import { ShoppingBag, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header({ currentRoute, navigateTo }) {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Accueil', route: 'home' },
    { label: 'Coffret Découverte', route: 'coffret-decouverte' },
    { label: 'Coffret Exotique', route: 'coffret-exotique' },
    { label: 'Nos Bières', route: 'bieres-overview' },
    { label: 'Groupe Paloma', route: 'groupe-paloma' },
    { label: 'Nos Bars', route: 'nos-bars' }
  ];

  const handleNav = (route) => {
    navigateTo(route);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-kraft-bg/95 backdrop-blur-sm border-b border-kraft-border">
      {/* Top subtle reassurance */}
      <div className="bg-kraft-stone border-b border-kraft-border py-1.5 px-4 text-center text-xs text-kraft-muted">
        <span>Microbrasserie du Port de Nice • </span>
        <strong className="text-kraft-ink font-semibold">Retrait gratuit Click & Collect</strong>
        <span> dans nos bars (Port & Place du Pin)</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo - Minimalist Kraft */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-kraft-ink text-kraft-bg flex items-center justify-center font-serif text-xl font-bold tracking-tight">
              F
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-kraft-ink tracking-tight group-hover:text-kraft-terracotta transition-colors">
                FOAM
              </div>
              <p className="text-[10px] text-kraft-muted uppercase tracking-widest -mt-1 font-medium">
                Port de Nice • Paloma 1948
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNav(link.route)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors pb-0.5 border-b-2 ${
                  currentRoute === link.route || (link.route === 'bieres-overview' && currentRoute.startsWith('biere-'))
                    ? 'border-kraft-terracotta text-kraft-ink'
                    : 'border-transparent text-kraft-muted hover:text-kraft-ink'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Cart & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 py-2 px-3.5 rounded-lg bg-kraft-ink text-white hover:bg-kraft-terracotta transition-colors text-xs font-semibold"
              aria-label="Ouvrir le panier"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Panier</span>
              {totalCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-kraft-terracotta text-white text-[11px] font-bold flex items-center justify-center -mr-1">
                  {totalCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-kraft-ink hover:text-kraft-terracotta"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-kraft-border space-y-2">
            {links.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNav(link.route)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-kraft-ink hover:bg-kraft-stone rounded-lg"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
