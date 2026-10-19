import React from 'react';
import { ArrowRight, Beer, MapPin } from 'lucide-react';
import { BEERS } from '../data/products';

export default function BeersOverviewPage({ navigateTo }) {
  const beers = Object.values(BEERS);

  return (
    <div className="py-10 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-kraft-olive bg-kraft-stone px-3 py-1 rounded-full border border-kraft-border">
          Microbrasserie du Port de Nice
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-kraft-ink mt-3">
          Nos 3 Bières Artisanales
        </h1>
        <p className="text-sm text-kraft-muted mt-3 leading-relaxed">
          Brassées au 3 Quai des Deux Emmanuels par Stéphane avec l'eau de Nice et des houblons rigoureusement sélectionnés. 
          Disponibles à l'unité (6,00 €) ou en coffrets panachés (15 € les 3 / 26 € les 6).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beers.map((beer) => (
          <div 
            key={beer.slug}
            className="kraft-card p-6 flex flex-col justify-between hover:border-kraft-ink transition-all group"
          >
            <div>
              <div 
                onClick={() => navigateTo(`biere-${beer.slug}`)}
                className="w-full aspect-[4/3] rounded-lg bg-kraft-stone border border-kraft-border flex flex-col items-center justify-center p-4 text-center cursor-pointer group-hover:bg-kraft-border/30 transition-colors"
              >
                <span className="text-4xl mb-2">🍺</span>
                <span className="text-xs font-bold text-kraft-ink">{beer.name}</span>
                <span className="text-[11px] text-kraft-muted">{beer.style} • {beer.abv}</span>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-kraft-muted">
                <span className="font-bold text-kraft-terracotta">{beer.style}</span>
                <span className="font-mono">{beer.abv}</span>
              </div>

              <h2 
                onClick={() => navigateTo(`biere-${beer.slug}`)}
                className="font-serif text-2xl font-bold text-kraft-ink mt-1 group-hover:text-kraft-terracotta transition-colors cursor-pointer"
              >
                {beer.name}
              </h2>

              <p className="text-xs text-kraft-muted mt-2 leading-relaxed">
                {beer.shortDesc}
              </p>

              <div className="mt-4 pt-3 border-t border-kraft-border text-xs space-y-1">
                <p className="text-kraft-ink"><strong className="text-kraft-muted">Houblons :</strong> {beer.hops}</p>
                <p className="text-kraft-ink"><strong className="text-kraft-muted">Amertume :</strong> {beer.ibu} IBU</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-kraft-border flex items-center justify-between">
              <div>
                <span className="font-serif text-xl font-bold text-kraft-ink">
                  {beer.price.toFixed(2)} €
                </span>
                <span className="text-[10px] text-kraft-muted block">33cl • Capsule</span>
              </div>

              <button
                onClick={() => navigateTo(`biere-${beer.slug}`)}
                className="py-2.5 px-4 rounded-lg bg-kraft-ink text-white hover:bg-kraft-terracotta transition-colors text-xs font-bold flex items-center gap-1"
              >
                <span>Fiche Produit</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to sets */}
      <div className="p-6 bg-kraft-stone/50 rounded-2xl border border-kraft-border text-center space-y-3">
        <h3 className="font-serif text-xl font-bold text-kraft-ink">
          Vous préférez un assortiment prêt à offrir ?
        </h3>
        <p className="text-xs text-kraft-muted max-w-lg mx-auto">
          Nos 3 bières permanentes sont réunies dans le Coffret Découverte (15 € le pack de 3 ou 26 € le pack de 6) avec étui carton kraft rigide.
        </p>
        <button
          onClick={() => navigateTo('coffret-decouverte')}
          className="py-3 px-6 rounded-xl bg-kraft-terracotta hover:bg-kraft-terracottaHover text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
        >
          <span>Découvrir le Coffret Découverte</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
