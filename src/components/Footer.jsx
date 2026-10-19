import React from 'react';
import { Beer, MapPin } from 'lucide-react';

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-kraft-stone border-t border-kraft-border mt-20 pt-12 pb-16 text-xs text-kraft-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-kraft-ink text-white flex items-center justify-center font-serif font-bold text-base">
                F
              </div>
              <span className="font-serif text-xl font-bold text-kraft-ink">
                FOAM NICE
              </span>
            </div>
            <p className="text-[11px] text-kraft-muted leading-relaxed">
              Microbrasserie artisanale du Port de Nice. Créée par le <strong>Groupe Paloma</strong>, maison familiale fondée en 1948 par la famille Vannini.
            </p>
            <p className="text-[10px] text-kraft-ink font-medium">
              📍 3 Quai des Deux Emmanuels & Place du Pin • Nice
            </p>
          </div>

          {/* Coffrets */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-kraft-ink mb-2.5">
              Coffrets Cadeaux
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => navigateTo('coffret-decouverte')} className="hover:text-kraft-ink transition-colors">
                  Coffret Découverte (15€ / 26€)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('coffret-exotique')} className="hover:text-kraft-ink transition-colors">
                  Coffret Exotique Éphémère (15€ / 26€)
                </button>
              </li>
              <li>
                <span className="text-kraft-olive font-semibold block text-[11px] pt-1">
                  ✓ Click & Collect Gratuit 0€
                </span>
              </li>
            </ul>
          </div>

          {/* Bières */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-kraft-ink mb-2.5">
              Nos Bières (33cl)
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => navigateTo('biere-west-coast')} className="hover:text-kraft-ink transition-colors">
                  FOAM West Coast IPA (6,00 €)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('biere-lager')} className="hover:text-kraft-ink transition-colors">
                  FOAM Lager (6,00 €)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('biere-blanche')} className="hover:text-kraft-ink transition-colors">
                  FOAM Blanche (6,00 €)
                </button>
              </li>
            </ul>
          </div>

          {/* Maison & Bars */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-kraft-ink mb-2.5">
              La Maison FOAM
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => navigateTo('groupe-paloma')} className="hover:text-kraft-ink transition-colors">
                  Groupe Paloma (Depuis 1948)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('nos-bars')} className="hover:text-kraft-ink transition-colors">
                  Nos 2 Bars à Nice & Retrait 0€
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Loi Évin Sanitary warning - discreet, sober, clear */}
        <div className="p-3 bg-kraft-bg rounded-xl border border-kraft-border text-center text-[11px] font-bold text-kraft-ink uppercase tracking-wide">
          ⚠️ L'abus d'alcool est dangereux pour la santé, à consommer avec modération. Vente interdite aux mineurs de moins de 18 ans.
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-kraft-muted pt-2 border-t border-kraft-border/60">
          <p>© {new Date().getFullYear()} FOAM Nice • Microbrasserie artisanale du Port. Tous droits réservés.</p>
          <p>Groupe Paloma (1948) • Dispositif pilote précommandes</p>
        </div>

      </div>
    </footer>
  );
}
