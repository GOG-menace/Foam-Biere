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
    <header className="sticky top-0 z-40 bg-foam-bg/95 backdrop-blur-sm border-b-2 border-foam-black">
      
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo FOAM strictly */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo-foam.png"
                alt="Logo FOAM"
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain border-2 border-foam-black shadow-[2px_2px_0px_#0A0A0A] group-hover:scale-105 group-hover:-rotate-3 transition-transform bg-white"
              />
              <span className="font-impact text-2xl sm:text-3xl tracking-tight text-foam-black group-hover:text-foam-orange transition-colors">
                FOAM
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav Links (Strictly Centered & Brutalist Typography) */}
          <nav className="hidden lg:flex items-center justify-center gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 transition-all border-2 ${
                    active
                      ? 'bg-foam-black text-foam-neon border-foam-black shadow-[2px_2px_0px_#0A0A0A]'
                      : 'border-transparent text-foam-black hover:border-foam-black hover:bg-foam-neon hover:text-foam-black hover:shadow-[2px_2px_0px_#0A0A0A]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Cart & Mobile Menu */}
          <div className="flex-1 flex items-center justify-end gap-3">
            
            {/* Cart Trigger Button: Neo-Brutalist in Punchy Hop Orange */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 py-2.5 px-4 bg-foam-orange hover:bg-foam-orangeHover text-foam-black hover:text-white font-mono text-xs font-black uppercase tracking-wider border-2 border-foam-black shadow-brutal hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:translate-x-1 active:translate-y-1"
              aria-label="Voir le panier"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                {totalCount > 0 && (
                  <span className="absolute -top-2.5 -right-3 w-5 h-5 bg-foam-neon text-foam-black font-mono text-[11px] font-black border-2 border-foam-black flex items-center justify-center shadow-[1px_1px_0px_#0A0A0A]">
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
              className="lg:hidden p-2 text-foam-black border-2 border-foam-black bg-white hover:bg-foam-neon transition-colors shadow-[2px_2px_0px_#0A0A0A]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu (Centered Brutalist Grid) */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t-2 border-foam-black bg-foam-bg animate-fade-in space-y-2 text-center">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider border-2 mx-2 transition-all ${
                    active
                      ? 'bg-foam-black text-foam-neon border-foam-black shadow-[2px_2px_0px_#0A0A0A]'
                      : 'bg-white text-foam-black border-foam-black hover:bg-foam-neon'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Clean Navigation Bar for Mobile */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2 px-3 bg-white border-t-2 border-foam-black scrollbar-none">
        {navLinks.map((link) => {
          const active = isActive(link.path);
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`shrink-0 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider border-2 transition-all ${
                active
                  ? 'bg-foam-black text-foam-neon border-foam-black'
                  : 'bg-foam-bg text-foam-black border-foam-black hover:bg-foam-neon'
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
