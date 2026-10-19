import React, { useState, useEffect } from 'react';
import { ShieldCheck, Beer } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kraft-ink/80 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-kraft-bg rounded-2xl border border-kraft-border shadow-2xl p-6 sm:p-8 text-center text-kraft-ink">
        
        <div className="w-12 h-12 rounded-xl bg-kraft-stone text-kraft-terracotta flex items-center justify-center font-serif text-2xl mx-auto mb-3">
          🍺
        </div>

        <span className="text-[10px] font-bold uppercase tracking-wider text-kraft-muted">
          Microbrasserie du Port de Nice • Groupe Paloma 1948
        </span>

        <h2 className="font-serif text-2xl font-bold text-kraft-ink mt-1">
          FOAM NICE
        </h2>

        {!refused ? (
          <>
            <p className="text-xs text-kraft-muted mt-3 leading-relaxed">
              Pour accéder à notre boutique de bières artisanales, vous devez être âgé(e) de 18 ans ou plus conformément à la réglementation française (Loi Évin).
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                onClick={handleAccept}
                className="py-3 px-4 rounded-xl bg-kraft-ink hover:bg-kraft-terracotta text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Oui, j'ai +18 ans</span>
              </button>

              <button
                onClick={() => setRefused(true)}
                className="py-3 px-4 rounded-xl bg-white border border-kraft-border text-kraft-ink hover:bg-kraft-stone text-xs font-semibold transition-colors"
              >
                J'ai moins de 18 ans
              </button>
            </div>
          </>
        ) : (
          <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-200 text-xs text-red-900 text-left">
            <p className="font-bold">Accès restreint aux personnes majeures</p>
            <p className="mt-1 text-[11px] text-red-800">
              Conformément à l’article L. 3342-1 du Code de la santé publique, la vente d'alcool est interdite aux mineurs de moins de 18 ans.
            </p>
            <button
              onClick={() => setRefused(false)}
              className="mt-3 text-[11px] font-bold underline text-red-900"
            >
              ← Recommencer la vérification
            </button>
          </div>
        )}

        <p className="mt-6 pt-3 border-t border-kraft-border text-[10px] text-kraft-muted uppercase tracking-wider">
          ⚠️ L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
        </p>

      </div>
    </div>
  );
}
