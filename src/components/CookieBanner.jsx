import React, { useState } from 'react';
import { Cookie, Check, X, SlidersHorizontal, Shield } from 'lucide-react';
import { useAnalytics } from '../context/AnalyticsContext';

export default function CookieBanner() {
  const { cookieConsent, setConsent } = useAnalytics();
  const [showDetails, setShowDetails] = useState(false);
  const [matomoEnabled, setMatomoEnabled] = useState(true);

  if (cookieConsent) return null;

  return (
    <div className="fixed bottom-12 left-4 right-4 md:left-6 md:max-w-xl z-40 bg-foam-navy text-white rounded-2xl shadow-2xl border border-foam-gold/30 p-5 backdrop-blur-lg animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-foam-amber/20 text-foam-amber shrink-0 border border-foam-amber/30">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-foam-sand flex items-center gap-1.5">
              <span>Respect de votre vie privée & Mesure d'Audience (RGPD)</span>
            </h3>
          </div>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Nous utilisons Matomo Analytics configuré en mode respectueux de la vie privée (sans cookies publicitaires tiers) pour évaluer l'intérêt pour nos bières artisanales du Port de Nice.
          </p>

          {showDetails && (
            <div className="mt-3 p-3 bg-foam-navyLight/70 rounded-xl border border-white/10 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">Cookies Essentiels (Obligatoires)</p>
                  <p className="text-[11px] text-slate-400">Panier d'achat, vérification d'âge +18 ans.</p>
                </div>
                <span className="text-[10px] font-semibold bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded">Toujours Actifs</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div>
                  <p className="font-medium text-white">Matomo Analytics (Anonymisé)</p>
                  <p className="text-[11px] text-slate-400">Mesure des clics Click & Collect sans profilage.</p>
                </div>
                <input
                  type="checkbox"
                  checked={matomoEnabled}
                  onChange={(e) => setMatomoEnabled(e.target.checked)}
                  className="rounded border-foam-border text-foam-amber focus:ring-foam-amber h-4 w-4"
                />
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setConsent('all')}
              className="py-1.5 px-3.5 bg-foam-amber hover:bg-foam-amberDark text-white font-medium text-xs rounded-lg transition-colors shadow"
            >
              Tout accepter
            </button>
            <button
              onClick={() => setConsent('rejected')}
              className="py-1.5 px-3 bg-white/10 hover:bg-white/20 text-slate-200 text-xs rounded-lg transition-colors"
            >
              Refuser non-essentiels
            </button>
            <button
              onClick={() => {
                if (showDetails) {
                  setConsent(matomoEnabled ? 'custom_allowed' : 'essential_only');
                } else {
                  setShowDetails(true);
                }
              }}
              className="py-1.5 px-2.5 text-slate-400 hover:text-white text-xs inline-flex items-center gap-1 transition-colors underline decoration-dotted"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{showDetails ? 'Enregistrer mon choix' : 'Personnaliser'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
