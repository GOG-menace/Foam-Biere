import React, { useState } from 'react';
import { Plus, Minus, Check, Sparkles, ShoppingBag, ShieldCheck, HelpCircle } from 'lucide-react';
import { BEER_RECIPES } from '../data/products';
import { useCart } from '../context/CartContext';
import { useAnalytics } from '../context/AnalyticsContext';

export default function PackConfigurator() {
  const { addItem } = useCart();
  const { trackPackCustomization } = useAnalytics();

  // Quantities for the 3 recipes
  const [pack, setPack] = useState({
    ipa: 2,
    lager: 2,
    blanche: 2
  });

  const totalSelected = pack.ipa + pack.lager + pack.blanche;
  const targetTotal = 6;
  const isComplete = totalSelected === targetTotal;
  const remaining = targetTotal - totalSelected;

  const handleUpdate = (recipeKey, delta) => {
    const current = pack[recipeKey];
    if (delta > 0 && totalSelected >= targetTotal) return;
    if (delta < 0 && current <= 0) return;

    const newPack = { ...pack, [recipeKey]: current + delta };
    setPack(newPack);
    trackPackCustomization(newPack.ipa + newPack.lager + newPack.blanche);
  };

  const handleAddToCart = () => {
    if (!isComplete) return;

    const compositionSummary = [
      pack.ipa > 0 ? `${pack.ipa}x IPA` : null,
      pack.lager > 0 ? `${pack.lager}x Lager` : null,
      pack.blanche > 0 ? `${pack.blanche}x Blanche` : null
    ].filter(Boolean).join(' • ');

    const customItem = {
      id: 'pack-6-sur-mesure',
      customKey: `pack-6-${pack.ipa}-${pack.lager}-${pack.blanche}`,
      name: 'Pack 6 Bouteilles Panaché Sur-Mesure',
      price: 26.00,
      originalPrice: 36.00,
      image: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&w=600&q=80',
      description: `Composition personnalisée : ${compositionSummary}`,
      details: { ...pack },
      type: 'custom-pack'
    };

    addItem(customItem, 1);
  };

  return (
    <div id="configurateur" className="scroll-mt-24 my-12 bg-white rounded-3xl border-2 border-foam-amber/30 shadow-elevated overflow-hidden p-6 sm:p-8 lg:p-10 relative">
      
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-foam-border">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foam-amber/15 text-foam-amber text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Configurateur Atelier • Cible Amateurs de Craft
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-foam-navy mt-2">
            Compose ton Pack de 6 sur-mesure
          </h3>
          <p className="text-sm text-foam-gray mt-1">
            Panachez librement vos 6 bières artisanales favorites parmi nos 3 recettes du Port.
          </p>
        </div>

        {/* Price callout badge */}
        <div className="text-right bg-foam-sand/70 p-3.5 rounded-2xl border border-foam-gold/40">
          <div className="flex items-baseline gap-2 justify-end">
            <span className="text-sm text-foam-gray line-through">36,00 €</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-foam-amber">26,00 €</span>
          </div>
          <p className="text-[11px] font-bold text-foam-olive uppercase tracking-wide">
            Économisez 10,00 € (-28%)
          </p>
        </div>
      </div>

      {/* Visual Bottle Gauge (0 to 6 slots) */}
      <div className="my-8 bg-foam-stone/50 p-5 rounded-2xl border border-foam-border">
        <div className="flex items-center justify-between mb-3 text-xs font-semibold text-foam-navy">
          <span className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${isComplete ? 'bg-emerald-500' : 'bg-foam-amber animate-pulse'}`} />
            Jauge du Pack ({totalSelected} / {targetTotal} bouteilles)
          </span>
          <span className={isComplete ? 'text-foam-olive font-bold' : 'text-foam-amber font-bold'}>
            {isComplete ? '✓ Pack complet prêt à brasser !' : `Encore ${remaining} bouteille${remaining > 1 ? 's' : ''} à ajouter`}
          </span>
        </div>

        {/* Visual Slots representation */}
        <div className="grid grid-cols-6 gap-2 sm:gap-3">
          {[...Array(6)].map((_, index) => {
            let beerType = null;
            let currentCount = 0;

            if (index < pack.ipa) {
              beerType = { label: 'IPA', color: 'bg-foam-amber text-white border-foam-amberDark' };
            } else if (index < pack.ipa + pack.lager) {
              beerType = { label: 'LAGER', color: 'bg-foam-gold text-foam-navy border-amber-600' };
            } else if (index < pack.ipa + pack.lager + pack.blanche) {
              beerType = { label: 'BLANCHE', color: 'bg-foam-olive text-white border-emerald-900' };
            }

            return (
              <div
                key={index}
                className={`h-16 sm:h-20 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                  beerType
                    ? `${beerType.color} shadow-sm font-bold scale-100`
                    : 'border-dashed border-foam-border/80 bg-white/60 text-foam-gray/40'
                }`}
              >
                {beerType ? (
                  <>
                    <span className="text-lg">🍺</span>
                    <span className="text-[10px] sm:text-xs tracking-tighter uppercase font-extrabold mt-0.5">
                      {beerType.label}
                    </span>
                  </>
                ) : (
                  <span className="text-xs font-semibold">#{index + 1}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Recipe Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        
        {/* IPA Selector */}
        <div className="p-4 rounded-2xl bg-white border border-foam-border shadow-xs hover:border-foam-amber/50 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-foam-amber/20 text-foam-amberDark">
                West Coast IPA • 6.2%
              </span>
              <span className="text-xs font-bold text-foam-navy">IBU 55</span>
            </div>
            <h4 className="font-editorial text-lg font-bold text-foam-navy mt-2">
              FOAM West Coast IPA
            </h4>
            <p className="text-xs text-foam-gray mt-1 leading-snug">
              Amertume résineuse franche et notes fruitées d’agrumes.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-foam-border/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-foam-navy">Quantité :</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleUpdate('ipa', -1)}
                disabled={pack.ipa <= 0}
                className="w-8 h-8 rounded-lg bg-foam-stone hover:bg-foam-border text-foam-navy flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold"
                aria-label="Diminuer IPA"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center font-bold text-base text-foam-navy">
                {pack.ipa}
              </span>
              <button
                onClick={() => handleUpdate('ipa', 1)}
                disabled={totalSelected >= targetTotal}
                className="w-8 h-8 rounded-lg bg-foam-amber hover:bg-foam-amberDark text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold shadow-xs"
                aria-label="Augmenter IPA"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Lager Selector */}
        <div className="p-4 rounded-2xl bg-white border border-foam-border shadow-xs hover:border-foam-gold/60 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                Lager Dorée • 5.0%
              </span>
              <span className="text-xs font-bold text-foam-navy">IBU 22</span>
            </div>
            <h4 className="font-editorial text-lg font-bold text-foam-navy mt-2">
              FOAM Lager
            </h4>
            <p className="text-xs text-foam-gray mt-1 leading-snug">
              Blonde de soif, pureté des céréales et fraîcheur florale.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-foam-border/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-foam-navy">Quantité :</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleUpdate('lager', -1)}
                disabled={pack.lager <= 0}
                className="w-8 h-8 rounded-lg bg-foam-stone hover:bg-foam-border text-foam-navy flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold"
                aria-label="Diminuer Lager"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center font-bold text-base text-foam-navy">
                {pack.lager}
              </span>
              <button
                onClick={() => handleUpdate('lager', 1)}
                disabled={totalSelected >= targetTotal}
                className="w-8 h-8 rounded-lg bg-foam-amber hover:bg-foam-amberDark text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold shadow-xs"
                aria-label="Augmenter Lager"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Blanche Selector */}
        <div className="p-4 rounded-2xl bg-white border border-foam-border shadow-xs hover:border-foam-olive/60 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Blanche Riviera • 4.8%
              </span>
              <span className="text-xs font-bold text-foam-navy">IBU 15</span>
            </div>
            <h4 className="font-editorial text-lg font-bold text-foam-navy mt-2">
              FOAM Blanche
            </h4>
            <p className="text-xs text-foam-gray mt-1 leading-snug">
              Notes de froment, zestes d'agrumes locaux et douceur vive.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-foam-border/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-foam-navy">Quantité :</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleUpdate('blanche', -1)}
                disabled={pack.blanche <= 0}
                className="w-8 h-8 rounded-lg bg-foam-stone hover:bg-foam-border text-foam-navy flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold"
                aria-label="Diminuer Blanche"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center font-bold text-base text-foam-navy">
                {pack.blanche}
              </span>
              <button
                onClick={() => handleUpdate('blanche', 1)}
                disabled={totalSelected >= targetTotal}
                className="w-8 h-8 rounded-lg bg-foam-amber hover:bg-foam-amberDark text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold shadow-xs"
                aria-label="Augmenter Blanche"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Call to action for adding the custom pack */}
      <div className="mt-8 pt-6 border-t border-foam-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-foam-gray">
          <ShieldCheck className="w-4 h-4 text-foam-olive shrink-0" />
          <span>Retrait gratuit sous 2h en Click & Collect aux bars FOAM Port ou Place du Pin.</span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!isComplete}
          className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-all shadow-md ${
            isComplete
              ? 'bg-foam-amber hover:bg-foam-amberDark text-white shadow-amber-glow cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0'
              : 'bg-foam-stone text-foam-gray cursor-not-allowed opacity-60'
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span>
            {isComplete
              ? 'Ajouter mon pack panaché au panier (26,00 €)'
              : `Sélectionnez encore ${remaining} bière${remaining > 1 ? 's' : ''}`}
          </span>
        </button>
      </div>

    </div>
  );
}
