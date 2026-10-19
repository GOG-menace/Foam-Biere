import React, { useState } from 'react';
import { ShoppingBag, MapPin, Beer, Menu, X, BarChart3, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAnalytics } from '../context/AnalyticsContext';

export default function Header() {
  const { totalItemCount, subtotal, setIsCartOpen, deliveryMethod } = useCart();
  const { setIsJuryDrawerOpen } = useAnalytics();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Coffrets de Noël', href: '#coffrets' },
    { label: 'Pack 6 sur-mesure', href: '#configurateur' },
    { label: 'Nos 3 Bières', href: '#bieres' },
    { label: 'Histoire Paloma (1948)', href: '#histoire' },
    { label: 'Nos Bars & Retrait', href: '#bars' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-foam-bg/95 backdrop-blur-md border-b border-foam-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-foam-navy text-foam-sand flex items-center justify-center font-bold shadow-md group-hover:bg-foam-amber transition-colors border border-foam-gold/30">
                <span className="font-editorial text-2xl tracking-tighter">F</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-editorial text-2xl font-bold tracking-tight text-foam-navy group-hover:text-foam-amber transition-colors">
                    FOAM
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-foam-gold/20 text-foam-navy border border-foam-gold/40">
                    NICE
                  </span>
                </div>
                <span className="text-[10px] text-foam-gray tracking-wider uppercase font-medium">
                  Maison Paloma 1948 • Port de Nice
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-foam-navy/85 hover:text-foam-amber transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions : Jury button & Cart Drawer Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Jury Mode Pill */}
            <button
              onClick={() => setIsJuryDrawerOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-foam-navy text-foam-sand hover:bg-foam-navyLight border border-foam-gold/50 shadow-sm transition-all"
              title="Ouvrir le panneau d'évaluation AARRR pour le Jury"
            >
              <BarChart3 className="w-3.5 h-3.5 text-foam-gold animate-pulse" />
              <span>Vue Jury AARRR</span>
            </button>

            {/* Click & Collect pill info */}
            <a
              href="#bars"
              onClick={(e) => handleNavClick(e, '#bars')}
              className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-foam-olive/10 text-foam-olive text-xs font-semibold border border-foam-olive/30 hover:bg-foam-olive/20 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Click & Collect 0€</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 py-2.5 px-4 bg-foam-amber hover:bg-foam-amberDark text-white font-semibold rounded-xl shadow-md transition-all transform active:scale-95 group"
              aria-label="Voir le panier"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-white group-hover:scale-105 transition-transform" />
                {totalItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-foam-navy text-foam-gold font-bold text-xs rounded-full flex items-center justify-center border-2 border-foam-bg shadow">
                    {totalItemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-sm font-medium">
                {subtotal > 0 ? `${subtotal.toFixed(2)} €` : 'Panier'}
              </span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-foam-navy hover:bg-foam-stone transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-foam-border animate-fade-in bg-foam-bg">
            <nav className="flex flex-col space-y-3 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-base font-semibold text-foam-navy hover:bg-foam-stone rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-foam-border flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsJuryDrawerOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-foam-navy text-foam-sand"
                >
                  <BarChart3 className="w-4 h-4 text-foam-gold" />
                  <span>Afficher la Vue Jury & KPIs AARRR</span>
                </button>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
