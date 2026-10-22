import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, MapPin, ShieldAlert, Award, ArrowUpRight, Sun, Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foam-navy text-white mt-20 pt-16 pb-12 border-t-4 border-foam-terracotta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Riviera Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/15">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo-foam.png"
                alt="FOAM Logo"
                className="w-12 h-12 object-contain rounded-full border border-white/40 shadow-xs bg-white"
              />
              <span className="font-serif text-3xl font-bold tracking-tight text-white group-hover:text-foam-terracotta transition-colors">
                FOAM
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Microbrasserie artisanale du Port de Nice. Créée avec amour par le <strong>Groupe Paloma</strong>, maison familiale azuréenne fondée en 1948 par la famille Vannini.
            </p>
            <div className="text-xs text-foam-gold font-semibold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-foam-terracotta shrink-0" />
              <span>3 Quai des Deux Emmanuels & Place du Pin</span>
            </div>
          </div>

          {/* Coffrets */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold uppercase tracking-wider text-xs text-slate-200">
              Nos Coffrets Cadeaux
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/coffrets" className="text-foam-gold font-bold block pb-1 hover:underline transition-colors font-serif italic text-sm">
                  Voir toutes les offres de coffrets →
                </Link>
              </li>
              <li>
                <Link to="/coffrets/decouverte" className="hover:text-white transition-colors">
                  Coffret Découverte (3 ou 6 bières)
                </Link>
              </li>
              <li>
                <Link to="/coffrets/exotique" className="hover:text-white transition-colors">
                  Coffret Exotique Éphémère
                </Link>
              </li>
            </ul>
          </div>

          {/* Bières 33cl */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold uppercase tracking-wider text-xs text-slate-200">
              Nos Bières de la Riviera
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/bieres" className="hover:text-white transition-colors">
                  FOAM French IPA (6.2%)
                </Link>
              </li>
              <li>
                <Link to="/bieres" className="hover:text-white transition-colors">
                  Lou FOAM d’Aqui (5.0%)
                </Link>
              </li>
              <li>
                <Link to="/bieres" className="hover:text-white transition-colors">
                  FOAM Wheat Ale (4.8%)
                </Link>
              </li>
              <li>
                <Link to="/bieres" className="text-foam-terracotta font-bold block pt-1 hover:underline transition-colors font-serif italic text-sm">
                  Voir toute la gamme brassée à Nice →
                </Link>
              </li>
            </ul>
          </div>

          {/* Histoire & Bars */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold uppercase tracking-wider text-xs text-slate-200">
              La Maison FOAM
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/groupe-paloma" className="hover:text-white transition-colors">
                  Groupe Paloma (Depuis 1948)
                </Link>
              </li>
              <li>
                <Link to="/nos-bars" className="hover:text-white transition-colors">
                  Nos 2 Bars à Nice (Retrait Gratuit 0 €)
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-foam-gold text-[11px] font-semibold mt-2 border border-white/15">
                  <Sun className="w-3.5 h-3.5 text-foam-gold" />
                  Click & Collect sous 2h
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal Notices & Alcohol Warnings */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldAlert className="w-4 h-4 text-foam-terracotta shrink-0" />
            <span>L’abus d’alcool est dangereux pour la santé, à consommer avec modération. Vente interdite aux mineurs de moins de 18 ans.</span>
          </div>

          <div className="text-[11px] text-slate-400 text-center md:text-right">
            © {new Date().getFullYear()} FOAM NICE • GROUPE PALOMA 1948 • TOUS DROITS RÉSERVÉS
          </div>
        </div>

      </div>
    </footer>
  );
}
