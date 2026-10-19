import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertCircle, X } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-black/80 backdrop-blur-xs animate-fade-in font-mono">
      <div className="relative w-full max-w-lg bg-white border-2 border-foam-black shadow-brutal p-6 sm:p-8 text-center text-foam-black">
        
        {/* Quick dismiss for preview/testing */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1.5 text-foam-black border-2 border-foam-black hover:bg-foam-neon transition-colors shadow-brutal-sm"
          title="Fermer"
          aria-label="Fermer"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Brand logo image */}
        <img
          src="/logo-foam.png"
          alt="FOAM"
          className="w-16 h-16 object-contain border-2 border-foam-black mx-auto mb-3 shadow-brutal-sm bg-white"
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
          <span className="sticker sticker-neon text-[10px]">
            [ PORT DE NICE // 06300 ]
          </span>
          <span className="sticker sticker-black text-[10px]">
            [ VÉRIFICATION D'ÂGE ]
          </span>
        </div>

        <h2 className="font-impact text-3xl sm:text-4xl uppercase tracking-tight text-foam-black">
          FOAM
        </h2>
        <p className="font-mono text-xs uppercase tracking-wider text-foam-orange font-black mt-1">
          MICROBRASSERIE ARTISANALE INDÉPENDANTE
        </p>

        {!refused ? (
          <div className="mt-5 space-y-4">
            <div className="p-4 bg-foam-bg border-2 border-foam-black text-left">
              <p className="font-impact text-base uppercase text-foam-black">
                AVEZ-VOUS 18 ANS OU PLUS ?
              </p>
              <p className="text-xs text-foam-black mt-1 font-sans font-medium leading-relaxed">
                L’accès à notre boutique de bières artisanales du Port de Nice est strictement réservé aux personnes majeures conformément à la Loi Évin.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleAccept}
                className="btn-brutal-orange py-3.5 px-4 text-xs font-mono font-black uppercase"
              >
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                <span>OUI, J'AI 18 ANS OU PLUS</span>
              </button>

              <button
                onClick={() => setRefused(true)}
                className="btn-brutal-white py-3.5 px-4 text-xs font-mono font-black uppercase"
              >
                NON, JE SUIS MINEUR
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 p-4 bg-foam-bg border-2 border-foam-black text-left text-xs font-mono space-y-2">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-foam-orange shrink-0 mt-0.5 stroke-[2.5]" />
              <div>
                <strong className="block font-black uppercase text-foam-black">ACCÈS STRICTEMENT RÉSERVÉ AUX MAJEURS</strong>
                <p className="mt-1 text-foam-black font-sans font-medium leading-relaxed">
                  Conformément à l’article L. 3342-1 du Code de la santé publique, la vente d’alcool est strictement interdite aux mineurs de moins de 18 ans.
                </p>
                <button
                  onClick={() => setRefused(false)}
                  className="mt-2 text-xs font-mono font-bold underline hover:text-foam-orange"
                >
                  ← Recommencer la vérification
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-3 border-t-2 border-foam-black text-[10px] text-foam-muted font-bold uppercase tracking-wider">
          ⚠️ L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
        </div>

      </div>
    </div>
  );
}
