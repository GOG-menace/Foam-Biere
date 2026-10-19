import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalCount, setIsCartOpen, grandTotal } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean navigation links per user request:
  // - "Nos Coffrets" -> intermediate offers page (/coffrets)
  // - "Nos Bières" -> beers presentation page (/bieres)
  // - "Groupe Paloma" & "Nos Bars"
  const navLinks = [
    { label: 'Nos Coffrets', path: '/coffrets' },
    { label: 'Nos Bières', path: '/bieres' },
    { label: 'Groupe Paloma', path: '/groupe-paloma' },
    { label: 'Nos Bars', path: '/nos-bars' },
  ];

  const isActive = (path) => {
    if (location.pathname === path) return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-foam-border">
      
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo FOAM strictly */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo-foam.png"
                alt="Logo FOAM"
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-full border border-foam-borderWarm shadow-xs group-hover:scale-105 transition-transform bg-white"
              />
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foam-navy group-hover:text-foam-terracotta transition-colors">
                FOAM
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav Links (Centrés, Typographie Riviera) */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-all py-1 ${
                    active
                      ? 'text-foam-terracotta font-bold border-b-2 border-foam-terracotta'
                      : 'text-foam-navy hover:text-foam-terracotta'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Cart & Mobile Menu */}
          <div className="flex-1 flex items-center justify-end gap-3">
            
            {/* Cart Button: Warm Terracotta Ocre */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 py-2.5 px-4 rounded-xl bg-foam-terracotta hover:bg-foam-terracottaDark text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-terracotta-glow transition-all transform active:scale-95"
              aria-label="Voir le panier"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
                {totalCount > 0 && (
                  <span className="absolute -top-2.5 -right-3 w-5 h-5 bg-foam-navy text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">
                {totalCount > 0 ? `${grandTotal.toFixed(2)} €` : 'Panier'}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foam-navy rounded-xl hover:bg-foam-subtle transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2]" /> : <Menu className="w-5 h-5 stroke-[2]" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu (Centré) */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-foam-border bg-[#FAF6F0] animate-fade-in space-y-1 text-center">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-all mx-2 ${
                    active
                      ? 'bg-foam-terracottaSoft text-foam-terracotta'
                      : 'text-foam-navy hover:bg-foam-subtle'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Clean Navigation Scroll Bar for Mobile */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2.5 px-4 bg-[#FAF6F0] border-t border-foam-border scrollbar-none text-xs">
        {navLinks.map((link) => {
          const active = isActive(link.path);
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`shrink-0 px-3 py-1 font-semibold rounded-full transition-all text-xs border ${
                active
                  ? 'bg-foam-terracotta text-white border-foam-terracotta'
                  : 'bg-white text-foam-navy border-foam-border hover:border-foam-terracotta'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
