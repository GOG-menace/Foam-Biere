import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertCircle, X, Sun } from 'lucide-react';

export default function LegalAgeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [refused, setRefused] = useState(false);

  useEffect(() => {
    try {
      const verified = localStorage.getItem('foam_age_verified');
      if (!verified) {
        setIsOpen(true);
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('foam_age_verified', 'true');
    } catch (e) {
      console.warn('LocalStorage write failed:', e);
    }
    setIsOpen(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem('foam_age_verified', 'true');
    } catch (e) {
      console.warn('LocalStorage write failed:', e);
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF6F0] rounded-3xl border border-foam-borderWarm shadow-2xl p-6 sm:p-8 text-center text-foam-navy">
        
        {/* Quick dismiss for preview/testing */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 text-foam-muted hover:text-foam-navy hover:bg-foam-subtle rounded-xl transition-colors"
          title="Fermer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Brand logo image */}
        <img
          src="/logo-foam.png"
          alt="FOAM"
          className="w-16 h-16 object-contain rounded-full border border-foam-borderWarm mx-auto mb-3 shadow-xs bg-white"
        />



        <h2 className="font-serif text-3xl font-bold tracking-tight text-foam-navy">
          FOAM
        </h2>
        <p className="text-xs uppercase tracking-widest text-foam-terracotta font-bold mt-1 font-serif">
          Microbrasserie Artisanale Indépendante
        </p>

        {!refused ? (
          <div className="mt-5 space-y-4">
            <div className="p-4 bg-white rounded-2xl border border-foam-border text-left">
              <p className="font-serif font-bold text-base text-foam-navy">
                Avez-vous 18 ans ou plus ?
              </p>
              <p className="text-xs text-foam-text mt-1 font-sans leading-relaxed">
                L’accès à notre boutique de bières artisanales du Port de Nice est strictement réservé aux personnes majeures conformément à la Loi Évin.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleAccept}
                className="btn-riviera-terracotta text-xs sm:text-sm py-3.5"
              >
                <ShieldCheck className="w-4 h-4 stroke-[2]" />
                <span>Oui, j'ai 18 ans ou plus</span>
              </button>

              <button
                onClick={() => setRefused(true)}
                className="btn-riviera-outline text-xs sm:text-sm py-3.5"
              >
                Non, je suis mineur
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 p-4 bg-white rounded-2xl border border-red-200 text-left text-xs space-y-2">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5 stroke-[2]" />
              <div>
                <strong className="block font-bold text-red-900">Accès strictement réservé aux majeurs</strong>
                <p className="mt-1 text-red-800 leading-relaxed font-sans">
                  Conformément à l’article L. 3342-1 du Code de la santé publique, la vente d’alcool est strictement interdite aux mineurs de moins de 18 ans.
                </p>
                <button
                  onClick={() => setRefused(false)}
                  className="mt-2 text-xs font-semibold underline text-foam-navy hover:text-foam-terracotta"
                >
                  ← Recommencer la vérification
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-3 border-t border-foam-border text-[11px] text-foam-muted font-medium">
          L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
        </div>

      </div>
    </div>
  );
}
