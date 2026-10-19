import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, MapPin, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalCount, setIsCartOpen, grandTotal } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Coffret Découverte', path: '/coffrets/decouverte', badge: '15€ / 26€' },
    { label: 'Coffret Exotique', path: '/coffrets/exotique', badge: 'Éphémère' },
    { label: 'Nos Bières', path: '/bieres' },
    { label: 'Groupe Paloma', path: '/groupe-paloma' },
    { label: 'Nos Bars', path: '/nos-bars' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-foam-border shadow-xs">
      
      {/* Top Announcement Bar (Shopify style) */}
      <div className="bg-foam-navy text-white text-xs py-2 px-4 border-b border-foam-navyLight">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-foam-amber animate-pulse" />
            <span className="text-slate-200">
              Microbrasserie du Port de Nice • <strong className="text-white font-semibold">Retrait Click & Collect GRATUIT (0 €)</strong> au Quai des Deux Emmanuels & Place du Pin
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-300">
            <span className="text-amber-300 font-medium">⭐ 4.9/5 sur plus de 120 avis dégustation</span>
            <span className="text-slate-500">•</span>
            <span>Maison Paloma depuis 1948</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo FOAM avec l'image fournie par l'utilisateur */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/logo-foam.png"
              alt="Logo FOAM Bière & Manger Port de Nice"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-black tracking-tight text-foam-navy group-hover:text-foam-amber transition-colors">
                  FOAM
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-foam-amberSoft text-foam-amber border border-foam-amber/30">
                  Nice
                </span>
              </div>
              <span className="text-[10px] font-semibold text-foam-muted uppercase tracking-widest -mt-0.5">
                Microbrasserie du Port • Paloma 1948
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-sm font-bold tracking-tight transition-all flex items-center gap-1.5 ${
                  isActive(link.path)
                    ? 'text-foam-amber border-b-2 border-foam-amber'
                    : 'text-foam-navy hover:text-foam-amber'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                    link.badge === 'Éphémère'
                      ? 'bg-foam-oliveSoft text-foam-olive border border-foam-olive/30'
                      : 'bg-foam-amberSoft text-foam-amberDark border border-foam-amber/30'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action buttons (Click & Collect shortcut + Cart) */}
          <div className="flex items-center gap-3">
            
            {/* Click & Collect badge link */}
            <Link
              to="/nos-bars"
              className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-foam-oliveSoft text-foam-olive hover:bg-foam-olive hover:text-white transition-all text-xs font-bold border border-foam-olive/20"
              title="Voir les bars pour le retrait gratuit"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Click & Collect 0€</span>
            </Link>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 py-2.5 px-4 rounded-xl bg-foam-amber hover:bg-foam-amberDark text-white font-bold text-sm shadow-shopify hover:shadow-amber-glow transition-all transform active:scale-95 group"
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
          <div className="lg:hidden py-4 border-t border-foam-border bg-white animate-fade-in space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  isActive(link.path)
                    ? 'bg-foam-amberSoft text-foam-amberDark'
                    : 'text-foam-navy hover:bg-foam-subtle'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-foam-border">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}

            <div className="pt-2 border-t border-foam-border">
              <Link
                to="/nos-bars"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-foam-olive"
              >
                <MapPin className="w-4 h-4" />
                <span>Nos adresses au Port et Place du Pin (Retrait 0€)</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
