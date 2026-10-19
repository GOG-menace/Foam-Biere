import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, Star, ArrowRight, MapPin, Package, Award } from 'lucide-react';
import { BEERS, SETS } from '../data/products';

export default function BeersOverviewPage() {
  const beers = Object.values(BEERS);
  const decouverte = SETS['coffret-decouverte'];

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-foam-amber bg-foam-amberSoft px-3 py-1 rounded-full border border-foam-amber/30">
          En Direct de nos Cuves au Port de Nice
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-foam-navy">
          Nos Bières Artisanales à l'Unité (33cl)
        </h1>
        <p className="text-sm sm:text-base text-foam-text leading-relaxed">
          Élaborées au 3 Quai des Deux Emmanuels par Stéphane avec l'eau de Nice, des malts français et des houblons de terroir. 
          Non filtrées, non pasteurisées pour une pureté aromatique absolue.
        </p>
      </div>

      {/* 3 Beers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beers.map((beer) => (
          <div
            key={beer.slug}
            className="rounded-3xl bg-white border-2 border-foam-border hover:border-foam-navy shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between overflow-hidden group"
          >
            <div>
              <div className="aspect-[4/3] bg-foam-subtle overflow-hidden relative">
                <img
                  src={beer.image}
                  alt={beer.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white ${
                  beer.badgeColor === 'amber' ? 'bg-foam-amber' : beer.badgeColor === 'olive' ? 'bg-foam-olive' : 'bg-foam-gold'
                }`}>
                  {beer.badge}
                </span>
                <span className="absolute bottom-3 right-3 text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/95 text-foam-navy border border-foam-border">
                  {beer.abv} • IBU {beer.ibu}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-foam-amber uppercase tracking-wider">{beer.style}</span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{beer.rating}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-foam-navy group-hover:text-foam-amber transition-colors">
                  {beer.name}
                </h3>

                <p className="text-xs text-foam-text leading-relaxed">
                  {beer.shortDesc}
                </p>

                <div className="pt-2 text-xs text-foam-navy space-y-1">
                  <p><strong className="text-foam-muted">Houblons :</strong> <span className="font-semibold">{beer.hops}</span></p>
                  <p><strong className="text-foam-muted">Accords :</strong> <span className="text-foam-text">{beer.pairing}</span></p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-foam-border/60 flex items-center justify-between mt-4">
              <div>
                <span className="font-serif text-2xl font-black text-foam-navy">
                  {beer.price.toFixed(2)} €
                </span>
                <span className="text-[10px] text-foam-muted block">33cl • Capsule</span>
              </div>

              <Link
                to={`/bieres/${beer.slug}`}
                className="py-2.5 px-4 rounded-xl bg-foam-navy hover:bg-foam-amber text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Fiche Produit Complète</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Banner to Gift Set (Upsell) */}
      <div className="rounded-3xl bg-gradient-to-r from-foam-amberSoft via-white to-foam-goldSoft p-8 sm:p-10 border-2 border-foam-amber/40 shadow-shopify flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-foam-amber">
            L'Assortiment Idéal pour Découvrir
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy">
            Retrouvez ces 3 bières dans le Coffret Découverte
          </h2>
          <p className="text-xs sm:text-sm text-foam-text max-w-xl">
            Disponible en pack de 3 (15,00 €) ou pack de 6 (26,00 € soit 10 € d'économie) dans un étui cadeau protecteur.
          </p>
        </div>

        <Link
          to="/coffrets/decouverte"
          className="py-4 px-7 rounded-2xl bg-foam-amber hover:bg-foam-amberDark text-white font-bold text-sm shrink-0 flex items-center gap-2 shadow-shopify transition-all"
        >
          <span>Découvrir le Coffret (Dès 15 €)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
