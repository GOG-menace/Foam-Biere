import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function LegalAgeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [refused, setRefused] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('foam_age_verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('foam_age_verified', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border-2 border-foam-amber/40 shadow-2xl p-6 sm:p-8 text-center text-foam-navy">
        
        {/* Brand logo image uploaded by user */}
        <img
          src="/logo-foam.png"
          alt="FOAM Nice Bière & Manger"
          className="w-20 h-20 object-contain rounded-full mx-auto mb-4 shadow-md border-2 border-foam-amber"
        />

        <div className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider uppercase rounded-full bg-foam-amberSoft text-foam-amberDark border border-foam-amber/30">
          Brassée au Port de Nice • Caution Groupe Paloma (1948)
        </div>

        <h2 className="font-serif text-3xl font-black tracking-tight text-foam-navy">
          FOAM NICE
        </h2>
        <p className="text-xs uppercase tracking-widest text-foam-muted font-bold mt-1">
          Boutique Microbrasserie Artisanale
        </p>

        {!refused ? (
          <div className="mt-5 space-y-4">
            <div className="p-4 bg-foam-bg rounded-2xl border border-foam-border">
              <p className="text-base font-bold text-foam-navy">
                Avez-vous 18 ans ou plus ?
              </p>
              <p className="text-xs text-foam-text mt-1 leading-relaxed">
                L’accès à notre boutique de bières artisanales du Port de Nice est strictement réservé aux personnes majeures conformément à la Loi Évin.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleAccept}
                className="w-full py-3.5 px-5 bg-foam-amber hover:bg-foam-amberDark text-white font-extrabold rounded-2xl shadow-shopify transition-all text-sm flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Oui, j'ai plus de 18 ans</span>
              </button>

              <button
                onClick={() => setRefused(true)}
                className="w-full py-3.5 px-4 bg-foam-subtle hover:bg-foam-border text-foam-navy font-bold rounded-2xl border border-foam-border transition-colors text-xs"
              >
                Non, j'ai moins de 18 ans
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 p-5 bg-red-50 rounded-2xl border border-red-200 text-left text-xs text-red-900 space-y-2">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Accès réservé aux personnes majeures</strong>
                <p className="mt-1 text-red-800 leading-relaxed">
                  Conformément à l’article L. 3342-1 du Code de la santé publique, la vente d’alcool est strictement interdite aux mineurs de moins de 18 ans.
                </p>
                <button
                  onClick={() => setRefused(false)}
                  className="mt-3 text-xs font-bold underline text-foam-navy hover:text-foam-amber"
                >
                  ← Recommencer la vérification
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-3 border-t border-foam-border text-[11px] text-foam-muted font-bold uppercase tracking-wider">
          ⚠️ L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
        </div>

      </div>
    </div>
  );
}
