import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Check, MapPin, Beer, Utensils, Award } from 'lucide-react';
import { BEERS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function BeerProductPage({ beerSlug, navigateTo }) {
  const beer = BEERS[beerSlug] || BEERS['west-coast'];
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAddToCart = () => {
    addItem(beer, 'bottle', quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const otherBeers = Object.values(BEERS).filter(b => b.slug !== beer.slug);

  return (
    <div className="py-8 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={() => navigateTo('home')}
          className="text-xs font-semibold text-kraft-muted hover:text-kraft-ink flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au catalogue</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column : Kraft Bottle Visual Placeholder */}
        <div className="lg:col-span-5 space-y-4">
          <div className="w-full aspect-[3/4] rounded-2xl bg-kraft-stone border-2 border-kraft-border flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            <span className="text-6xl mb-4">🍺</span>
            <span className="text-sm font-bold uppercase tracking-wider text-kraft-ink">
              {beer.name}
            </span>
            <span className="text-xs text-kraft-terracotta font-semibold mt-1">
              {beer.style} • 33cl
            </span>
            <p className="text-[11px] text-kraft-muted mt-3 max-w-xs">
              Brassée & embouteillée au Port de Nice par Stéphane
            </p>
            <div className="mt-4 px-3 py-1 bg-white/80 rounded-full text-[10px] font-semibold text-kraft-muted border border-kraft-border">
              (Espace réservé pour votre photo de bouteille)
            </div>
          </div>

          <div className="p-4 bg-kraft-cream rounded-xl border border-kraft-border space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-kraft-border">
              <span className="text-kraft-muted">Degré d'alcool</span>
              <strong className="text-kraft-ink">{beer.abv}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-kraft-border">
              <span className="text-kraft-muted">Houblons utilisés</span>
              <strong className="text-kraft-ink">{beer.hops}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-kraft-border">
              <span className="text-kraft-muted">Amertume (IBU)</span>
              <strong className="text-kraft-ink">{beer.ibu} / 100</strong>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-kraft-muted">Volume</span>
              <strong className="text-kraft-ink">33 cl</strong>
            </div>
          </div>
        </div>

        {/* Right Column : Beer Profile & Conversion */}
        <div className="lg:col-span-7 space-y-6">
          
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-kraft-olive bg-kraft-stone border border-kraft-border mb-2">
              {beer.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-kraft-ink">
              {beer.name}
            </h1>
            <p className="text-sm font-medium text-kraft-muted mt-0.5">
              {beer.subtitle}
            </p>
            <div className="mt-3 font-serif text-2xl font-bold text-kraft-ink">
              {beer.price.toFixed(2)} € <span className="text-xs font-normal text-kraft-muted">la bouteille de 33cl</span>
            </div>
          </div>

          {/* Profile & Description from foamnice.com */}
          <div className="space-y-3 text-xs sm:text-sm text-kraft-ink leading-relaxed">
            <p className="font-medium text-kraft-terracotta">
              « {beer.profile} »
            </p>
            <p className="text-kraft-ink/80">
              {beer.fullDesc}
            </p>
          </div>

          {/* Brewer's Note */}
          <div className="p-4 bg-kraft-stone/50 rounded-xl border border-kraft-border text-xs text-kraft-ink space-y-1.5">
            <h4 className="font-bold uppercase tracking-wider text-kraft-ink flex items-center gap-1.5">
              <Award className="w-4 h-4 text-kraft-terracotta" />
              <span>Le Mot du Brasseur (Stéphane, Port de Nice) :</span>
            </h4>
            <p className="text-kraft-muted leading-relaxed">
              {beer.brewerNotes}
            </p>
          </div>

          {/* Pairing */}
          <div className="p-4 bg-kraft-cream rounded-xl border border-kraft-border text-xs flex items-start gap-2.5">
            <Utensils className="w-4 h-4 text-kraft-terracotta shrink-0 mt-0.5" />
            <div>
              <strong className="text-kraft-ink block">Accords mets & cuisine niçoise :</strong>
              <span className="text-kraft-muted mt-0.5 block">{beer.pairing}</span>
            </div>
          </div>

          {/* Single Bottle Add to Cart CTA */}
          <div className="pt-4 border-t border-kraft-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-kraft-border rounded-lg bg-white p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded text-kraft-ink hover:bg-kraft-stone flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-bold text-kraft-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded text-kraft-ink hover:bg-kraft-stone flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 rounded-xl bg-kraft-ink hover:bg-kraft-terracotta text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {addedNotice ? '✓ Ajouté au panier !' : `Ajouter ${(beer.price * quantity).toFixed(2)} €`}
                </span>
              </button>
            </div>

            <p className="text-[11px] text-kraft-muted text-center">
              Retrait Click & Collect 0 € disponible dans nos bars FOAM (Port et Place du Pin).
            </p>
          </div>

          {/* Opportunity to buy in the 3 or 6 pack instead */}
          <div className="p-4 bg-kraft-stone/40 rounded-xl border border-kraft-border text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-kraft-ink">
                Envie de découvrir nos 3 recettes ?
              </span>
              <span className="text-kraft-terracotta font-bold">Dès 15,00 €</span>
            </div>
            <p className="text-kraft-muted text-[11px]">
              Retrouvez la {beer.name} dans notre Coffret Découverte (Pack de 3 à 15 € ou Pack de 6 à 26 €).
            </p>
            <button
              onClick={() => navigateTo('coffret-decouverte')}
              className="text-xs font-bold text-kraft-terracotta hover:underline inline-block pt-1"
            >
              Voir le Coffret Découverte →
            </button>
          </div>

          {/* Explore Other Beers */}
          <div className="pt-4 border-t border-kraft-border">
            <span className="text-xs font-bold uppercase tracking-wider text-kraft-muted block mb-2">
              Autres bières de la microbrasserie :
            </span>
            <div className="grid grid-cols-2 gap-2">
              {otherBeers.map((ob) => (
                <button
                  key={ob.slug}
                  onClick={() => navigateTo(`biere-${ob.slug}`)}
                  className="p-2.5 rounded-lg border border-kraft-border text-left hover:bg-kraft-stone transition-colors text-xs"
                >
                  <strong className="text-kraft-ink block truncate">{ob.name}</strong>
                  <span className="text-[11px] text-kraft-muted block">{ob.style} (6 €)</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
