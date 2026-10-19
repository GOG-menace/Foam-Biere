import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, MapPin, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foam-navy text-white mt-20 pt-16 pb-16 border-t-4 border-foam-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-foam-navyLight">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo-foam.png"
                alt="FOAM Logo"
                className="w-12 h-12 object-contain rounded-full border border-white/40 shadow-xs"
              />
              <span className="font-serif text-2xl font-black tracking-tight text-white group-hover:text-foam-red transition-colors">
                FOAM NICE
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed">
              Microbrasserie artisanale du Port de Nice. Créée avec passion par le <strong>Groupe Paloma</strong>, maison familiale azuréenne fondée en 1948 par la famille Vannini.
            </p>
            <div className="text-xs text-slate-200 font-semibold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-foam-red" />
              <span>3 Quai des Deux Emmanuels & Place du Pin</span>
            </div>
          </div>

          {/* Coffrets */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs text-slate-300 mb-3.5">
              Nos Coffrets
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/coffrets" className="text-foam-red font-bold block pb-1 hover:underline transition-colors">
                  Voir toutes les offres de coffrets →
                </Link>
              </li>
              <li>
                <Link to="/coffrets/decouverte" className="hover:text-white transition-colors">
                  Coffret Découverte (15€ / 26€)
                </Link>
              </li>
              <li>
                <Link to="/coffrets/exotique" className="hover:text-white transition-colors">
                  Coffret Exotique Éphémère (15€ / 26€)
                </Link>
              </li>
            </ul>
          </div>

          {/* Bières 33cl */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs text-slate-300 mb-3.5">
              Nos Bières (33cl)
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/bieres/west-coast" className="hover:text-white transition-colors">
                  FOAM West Coast IPA (6,00 €)
                </Link>
              </li>
              <li>
                <Link to="/bieres/lager" className="hover:text-white transition-colors">
                  FOAM Lager Méditerranéenne (6,00 €)
                </Link>
              </li>
              <li>
                <Link to="/bieres/blanche" className="hover:text-white transition-colors">
                  FOAM Blanche Riviera (6,00 €)
                </Link>
              </li>
              <li>
                <Link to="/bieres" className="text-foam-red font-bold block pt-1 hover:underline transition-colors">
                  Voir toute la gamme →
                </Link>
              </li>
            </ul>
          </div>

          {/* Histoire & Bars */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs text-slate-300 mb-3.5">
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
                  Nos 2 Bars à Nice (Adresses & Retrait)
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.foamnice.com/biere-foam"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  <span>Site officiel : foamnice.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Loi Évin Sanitary Warning - High Contrast & Visible */}
        <div className="p-4 rounded-2xl bg-white/10 border-2 border-foam-red text-center text-xs sm:text-sm font-bold text-white tracking-wide">
          ⚠️ L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION. VENTE STRICTEMENT INTERDITE AUX MINEURS DE MOINS DE 18 ANS.
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-2">
          <p>© {new Date().getFullYear()} FOAM Nice • Microbrasserie artisanale du Port. Tous droits réservés.</p>
          <p>Groupe Paloma (Maison familiale fondée en 1948) • Dispositif pilote SAÉ</p>
        </div>

      </div>
    </footer>
  );
}
