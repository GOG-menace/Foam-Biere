import React, { useState } from 'react';
import { Gift, Package, Beer, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { BEER_RECIPES, GIFT_SETS } from '../data/products';
import ProductCard from './ProductCard';
import PackConfigurator from './PackConfigurator';

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'coffrets', 'pack', 'unites'

  const filters = [
    { id: 'all', label: 'Tout voir', icon: Sparkles },
    { id: 'coffrets', label: 'Coffrets Cadeaux', icon: Gift, count: 2 },
    { id: 'pack', label: 'Packs & Configurateur', icon: Package, badge: '-28%' },
    { id: 'unites', label: 'Bouteilles 33cl à l\'unité', icon: Beer, count: 3 }
  ];

  const beerList = Object.values(BEER_RECIPES);

  return (
    <section id="boutique" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foam-stone text-foam-navy text-xs font-bold uppercase tracking-wider border border-foam-border">
          <Beer className="w-3.5 h-3.5 text-foam-amber" />
          Catalogue Artisanal • Fenêtre de Fin d'Année
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foam-navy mt-3">
          Nos Cuves du Port de Nice à votre Table
        </h2>
        <p className="mt-3 text-base text-foam-navy/80">
          Choisissez vos coffrets cadeaux de fête, composez votre pack panaché sur-mesure ou commandez vos bouteilles favorites.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
        <div className="inline-flex p-1.5 rounded-2xl bg-foam-stone/80 border border-foam-border gap-1 sm:gap-2">
          {filters.map((f) => {
            const Icon = f.icon;
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`py-2 px-3.5 sm:px-5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-foam-navy text-foam-sand shadow-sm'
                    : 'text-foam-navy/70 hover:text-foam-navy hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-foam-gold' : 'text-foam-gray'}`} />
                <span>{f.label}</span>
                {f.badge && (
                  <span className="text-[10px] bg-foam-amber text-white px-1.5 py-0.2 rounded font-extrabold">
                    {f.badge}
                  </span>
                )}
                {f.count && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-foam-border text-foam-navy'}`}>
                    {f.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION A: Coffrets Cadeaux (Cible Persona Léa) */}
      {(activeFilter === 'all' || activeFilter === 'coffrets') && (
        <div id="coffrets" className="scroll-mt-24 mb-14">
          <div className="flex items-center justify-between mb-6 border-b border-foam-border pb-3">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-foam-navy flex items-center gap-2">
                <Gift className="w-6 h-6 text-foam-amber" />
                <span>Coffrets Cadeaux Fin d'Année</span>
              </h3>
              <p className="text-xs text-foam-gray mt-0.5">
                Cible : Idée cadeau locale, raffinée et prête à offrir pour les fêtes.
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold text-foam-olive bg-foam-oliveLight px-3 py-1 rounded-full">
              Retrait Click & Collect 0€ conseillé
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {GIFT_SETS.map((coffret) => (
              <ProductCard key={coffret.id} product={coffret} type="coffret" />
            ))}
          </div>
        </div>
      )}

      {/* SECTION B: Configurateur interactif Pack de 6 (Cible Persona Thomas) */}
      {(activeFilter === 'all' || activeFilter === 'pack') && (
        <PackConfigurator />
      )}

      {/* SECTION C: Les 3 Recettes Permanentes (33cl - 6,00 €) */}
      {(activeFilter === 'all' || activeFilter === 'unites') && (
        <div id="bieres" className="scroll-mt-24 mt-14">
          <div className="flex items-center justify-between mb-6 border-b border-foam-border pb-3">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-foam-navy flex items-center gap-2">
                <Beer className="w-6 h-6 text-foam-gold" />
                <span>Les 3 Recettes Permanentes du Port (33cl)</span>
              </h3>
              <p className="text-xs text-foam-gray mt-0.5">
                Brassées et embouteillées au Port de Nice • 6,00 € l'unité
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-medium text-foam-gray">
              Direct cuves Quai Cassini
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {beerList.map((beer) => (
              <ProductCard key={beer.id} product={beer} type="bottle" />
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
