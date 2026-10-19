import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, MapPin, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foam-black text-white mt-20 pt-16 pb-12 border-t-4 border-foam-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b-2 border-white/20">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo-foam.png"
                alt="FOAM Logo"
                className="w-12 h-12 object-contain bg-white border-2 border-white shadow-[2px_2px_0px_#FF4800]"
              />
              <span className="font-impact text-3xl tracking-tight text-white group-hover:text-foam-orange transition-colors">
                FOAM
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Microbrasserie artisanale indépendante du Port de Nice. Créée par le <strong>Groupe Paloma</strong>, maison familiale azuréenne fondée en 1948 par la famille Vannini.
            </p>
            <div className="font-mono text-xs text-foam-neon font-bold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-foam-orange shrink-0 stroke-[2.5]" />
              <span>3 QUAI DES DEUX EMMANUELS & PLACE DU PIN</span>
            </div>
          </div>

          {/* Coffrets */}
          <div className="space-y-3 font-mono">
            <h4 className="font-impact uppercase tracking-wider text-sm text-white">
              NOS COFFRETS
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/coffrets" className="text-foam-neon font-bold block pb-1 hover:text-white transition-colors">
                  → VOIR TOUTES LES OFFRES
                </Link>
              </li>
              <li>
                <Link to="/coffrets/decouverte" className="hover:text-foam-orange transition-colors">
                  COFFRET DÉCOUVERTE
                </Link>
              </li>
              <li>
                <Link to="/coffrets/exotique" className="hover:text-foam-orange transition-colors">
                  COFFRET EXOTIQUE ÉPHÉMÈRE
                </Link>
              </li>
            </ul>
          </div>

          {/* Bières */}
          <div className="space-y-3 font-mono">
            <h4 className="font-impact uppercase tracking-wider text-sm text-white">
              NOS BIÈRES (33CL)
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/bieres" className="hover:text-foam-orange transition-colors">
                  FOAM FRENCH IPA
                </Link>
              </li>
              <li>
                <Link to="/bieres" className="hover:text-foam-orange transition-colors">
                  LOU FOAM D’AQUI
                </Link>
              </li>
              <li>
                <Link to="/bieres" className="hover:text-foam-orange transition-colors">
                  FOAM WHEAT ALE
                </Link>
              </li>
              <li>
                <Link to="/bieres" className="text-foam-orange font-bold block pt-1 hover:text-white transition-colors">
                  → VOIR TOUTE LA GAMME
                </Link>
              </li>
            </ul>
          </div>

          {/* Maison & Bars */}
          <div className="space-y-3 font-mono">
            <h4 className="font-impact uppercase tracking-wider text-sm text-white">
              LA MAISON FOAM
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/groupe-paloma" className="hover:text-foam-orange transition-colors">
                  GROUPE PALOMA (DEPUIS 1948)
                </Link>
              </li>
              <li>
                <Link to="/nos-bars" className="hover:text-foam-orange transition-colors">
                  NOS 2 BARS À NICE (RETRAIT 0 €)
                </Link>
              </li>
              <li>
                <span className="sticker sticker-neon text-[10px] mt-2 inline-block">
                  CLICK & COLLECT SOUS 2H
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal Notices & Alcohol Warnings */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldAlert className="w-4 h-4 text-foam-orange shrink-0 stroke-[2.5]" />
            <span>L’ABUS D’ALCOOL EST DANGEREUX POUR LA SANTÉ. À CONSOMMER AVEC MODÉRATION. VENTE INTERDITE AUX MINEURS DE MOINS DE 18 ANS.</span>
          </div>

          <div className="text-[11px] text-slate-400 text-center md:text-right">
            © {new Date().getFullYear()} FOAM NICE • GROUPE PALOMA 1948 • TOUS DROITS RÉSERVÉS
          </div>
        </div>

      </div>
    </footer>
  );
}
