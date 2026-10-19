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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-foam-border shadow-xs">
      
      {/* Main Navbar (Top announcement bar removed as requested) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo FOAM (navigates to Home) */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/logo-foam.png"
              alt="Logo FOAM Bière & Manger Port de Nice"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform border border-foam-border"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tight text-foam-navy group-hover:text-foam-red transition-colors">
                FOAM NICE
              </span>
              <span className="text-[10px] font-semibold text-foam-muted uppercase tracking-widest">
                Microbrasserie du Port • Paloma 1948
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-1 text-sm font-bold tracking-tight transition-all ${
                  isActive(link.path)
                    ? 'text-foam-red border-b-2 border-foam-red'
                    : 'text-foam-navy hover:text-foam-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action buttons (Clean Cart Trigger) */}
          <div className="flex items-center gap-3">
            
            {/* Cart Trigger Button in FOAM Red #904545 */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 py-2.5 px-4 rounded-xl bg-foam-red hover:bg-foam-redDark text-white font-bold text-sm shadow-shopify hover:shadow-red-glow transition-all transform active:scale-95 group"
              aria-label="Voir le panier"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-white" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-5 h-5 bg-foam-navy text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold">
                {totalCount > 0 ? `${grandTotal.toFixed(2)} €` : 'Panier'}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foam-navy hover:bg-foam-subtle rounded-xl transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-foam-border bg-white animate-fade-in space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  isActive(link.path)
                    ? 'bg-foam-redSoft text-foam-red'
                    : 'text-foam-navy hover:bg-foam-subtle'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

      </div>

      {/* Clean Navigation Scroll Bar for Mobile & Compact Preview Panes */}
      <div className="lg:hidden flex items-center gap-3 overflow-x-auto py-2.5 px-4 bg-foam-bg border-t border-foam-border scrollbar-none text-xs">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`shrink-0 px-3 py-1 font-bold transition-all text-xs border-b-2 ${
              isActive(link.path)
                ? 'text-foam-red border-foam-red'
                : 'text-foam-navy hover:text-foam-red border-transparent'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
