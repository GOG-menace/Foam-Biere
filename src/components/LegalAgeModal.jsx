import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertCircle, Beer, Wine } from 'lucide-react';
import { useAnalytics } from '../context/AnalyticsContext';

export default function LegalAgeModal() {
  const { trackAgeVerification } = useAnalytics();
  const [isOpen, setIsOpen] = useState(false);
  const [isRefused, setIsRefused] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('foam_age_verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('foam_age_verified', 'true');
    trackAgeVerification(true);
    setIsOpen(false);
  };

  const handleRefuse = () => {
    trackAgeVerification(false);
    setIsRefused(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-foam-bg border-2 border-foam-gold/40 shadow-2xl p-6 sm:p-8 text-center text-foam-navy">
        
        {/* Subtle decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-foam-amber via-foam-gold to-foam-olive" />

        {/* Brand Header */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foam-stone border border-foam-gold/50 shadow-inner mb-4">
            <Beer className="w-8 h-8 text-foam-amber" />
          </div>
          
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-foam-stone text-foam-navy/80 border border-foam-border">
            Brassée au Port de Nice • Caution Groupe Paloma (1948)
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-foam-navy">
            FOAM NICE
          </h2>
          <p className="text-xs uppercase tracking-widest text-foam-gray mt-1">
            Micro-Brasserie Artisanale Méditerranéenne
          </p>
        </div>

        {!isRefused ? (
          <div>
            <div className="py-4 border-y border-foam-border/70 my-4 bg-white/60 rounded-xl px-4">
              <p className="text-base sm:text-lg font-medium text-foam-navy mb-1">
                Avez-vous 18 ans ou plus ?
              </p>
              <p className="text-xs text-foam-gray">
                L’accès à notre boutique de bières artisanales du Port de Nice est strictement réservé aux personnes majeures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <button
                onClick={handleAccept}
                className="w-full py-3.5 px-5 bg-foam-amber hover:bg-foam-amberDark text-white font-semibold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base flex items-center justify-center gap-2 group"
              >
                <ShieldCheck className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                <span>Oui, j'ai plus de 18 ans</span>
              </button>

              <button
                onClick={handleRefuse}
                className="w-full py-3.5 px-4 bg-foam-stone hover:bg-foam-border text-foam-navy font-medium rounded-xl border border-foam-border transition-colors text-sm"
              >
                Non, j'ai moins de 18 ans
              </button>
            </div>
          </div>
        ) : (
          <div className="py-6 bg-red-50/80 rounded-xl border border-red-200 text-left p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900 text-sm">
                  Accès restreint aux personnes majeures
                </h3>
                <p className="text-xs text-red-800/90 mt-1 leading-relaxed">
                  Conformément à l’article L. 3342-1 du Code de la santé publique (Loi Évin), la vente d’alcool est strictement interdite aux mineurs de moins de 18 ans. Nous ne pouvons malheureusement pas vous autoriser l’accès à notre boutique.
                </p>
                <button
                  onClick={() => setIsRefused(false)}
                  className="mt-4 text-xs font-semibold text-foam-navy underline hover:text-foam-amber"
                >
                  ← Erreur de saisie ? Recommencer la vérification
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bandeau Sanitaire Obligatoire (Loi Évin) */}
        <div className="mt-6 pt-4 border-t border-foam-border/60">
          <p className="text-[11px] font-semibold tracking-wide text-foam-navy/80 uppercase">
            ⚠️ L'abus d'alcool est dangereux pour la santé, à consommer avec modération. Vente interdite aux mineurs.
          </p>
        </div>

      </div>
    </div>
  );
}
