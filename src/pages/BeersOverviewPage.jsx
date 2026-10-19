import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, ArrowRight, Package, Sun, Waves, Sparkles, Utensils } from 'lucide-react';
import { BEERS } from '../data/products';

export default function BeersOverviewPage() {
  const beers = [BEERS['french-ipa'], BEERS['lou-foam-daqui'], BEERS['wheat-ale']];

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Informationnel Riviera */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-foam-borderWarm text-foam-navy text-xs font-semibold shadow-xs">
          <Sun className="w-3.5 h-3.5 text-foam-gold shrink-0" />
          <span>Microbrasserie du Port de Nice • Savoir-Faire 1948</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foam-navy leading-tight">
          Nos Bières Artisanales
        </h1>
        <p className="text-base text-foam-text leading-relaxed">
          Élaborées et brassées au 3 Quai des Deux Emmanuels par Stéphane, notre maître brasseur. 
          Découvrez ici les recettes, les ingrédients, les profils gustatifs et les accords mets-bières de notre maison.
        </p>
      </div>

      {/* Les 3 Bières Permanentes (Informations complètes + CTA vers le Coffret Découverte) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beers.map((beer) => (
          <div
            key={beer.slug}
            className="card-riviera p-6 sm:p-7 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-5">
              
              {/* Photo de bouteille en lumière naturelle */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-foam-subtle border border-foam-borderWarm/60 relative">
                <img
                  src={beer.image}
                  alt={beer.fullName}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-foam-navy text-white text-[10px] font-semibold tracking-wide">
                  {beer.style}
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/95 text-foam-navy text-[10px] font-bold shadow-xs border border-foam-borderWarm">
                  {beer.abv} • IBU {beer.ibu}
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-foam-terracotta uppercase tracking-wider">{beer.style}</span>
                  <span className="font-semibold text-foam-muted">{beer.abv} • IBU {beer.ibu}</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors">
                  {beer.name}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-foam-text leading-relaxed">
                {beer.description}
              </p>

              {/* Fiche technique gustative */}
              <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60 space-y-2 text-xs">
                <div>
                  <span className="font-serif font-bold text-foam-navy block text-xs">Profil aromatique :</span>
                  <span className="text-foam-text">{beer.shortDesc}</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-foam-navy block text-xs">Houblons utilisés :</span>
                  <span className="text-foam-text">{beer.hops}</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-foam-navy block text-xs">Accords mets & bière :</span>
                  <span className="text-foam-text">{beer.pairing}</span>
                </div>
              </div>

            </div>

            {/* CTA vers le coffret Découverte qui contient cette bière */}
            <div className="pt-4 border-t border-foam-border space-y-2">
              <span className="text-[11px] font-bold text-foam-muted uppercase tracking-wider block text-center">
                Disponible dans le Coffret Découverte
              </span>
              <Link
                to="/coffrets/decouverte"
                className="btn-riviera-terracotta w-full text-xs sm:text-sm flex items-center justify-center gap-2 text-center"
              >
                <Package className="w-4 h-4 shrink-0 stroke-[2]" />
                <span>Commander dans le Coffret Découverte</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Présentation des Brassins Éphémères + CTA vers le Coffret Exotique */}
      <div className="card-riviera p-8 sm:p-10 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foam-pineSoft text-foam-pine text-xs font-semibold border border-foam-pine/20">
            <span>Créations Éphémères de Stéphane</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy">
            Les Brassins Éphémères & Cuvées Limitées
          </h2>
          <p className="text-sm sm:text-base text-foam-text leading-relaxed">
            Régulièrement, Stéphane élabore des brassins expérimentaux en petits volumes dans nos cuves inox du Port de Nice : <strong>Brassin Riviera Tropicale</strong> (mangue & passion), <strong>Cuvée Houblon Niçois Solaire</strong>, ou encore nos <strong>Blanches aux agrumes rares</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60">
            <span className="px-2 py-0.5 rounded-full bg-foam-navy text-white text-[10px] font-semibold mb-2 inline-block">Brassin #1</span>
            <h4 className="font-serif font-bold text-sm text-foam-navy">Riviera Tropicale</h4>
            <p className="text-[11px] text-foam-text mt-1">Fermentation avec purée de mangue & fruit de la passion. Acidulée et rafraîchissante.</p>
          </div>

          <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60">
            <span className="px-2 py-0.5 rounded-full bg-foam-gold text-white text-[10px] font-semibold mb-2 inline-block">Brassin #2</span>
            <h4 className="font-serif font-bold text-sm text-foam-navy">Houblon Niçois Solaire</h4>
            <p className="text-[11px] text-foam-text mt-1">Cuvée 100% houblons de la Côte d'Azur. Notes de pinède, résine et agrumes confits.</p>
          </div>

          <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60">
            <span className="px-2 py-0.5 rounded-full bg-foam-terracotta text-white text-[10px] font-semibold mb-2 inline-block">Brassin #3</span>
            <h4 className="font-serif font-bold text-sm text-foam-navy">Blanche Exotique</h4>
            <p className="text-[11px] text-foam-text mt-1">Froment doux avec infusion à froid d'écorces d'agrumes rares et de coriandre sauvage.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-foam-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foam-text font-medium">
            Ces 3 créations exclusives sont réunies dans notre <strong>Coffret Exotique</strong>.
          </p>
          <Link
            to="/coffrets/exotique"
            className="btn-riviera-navy text-xs sm:text-sm"
          >
            <span>Découvrir le Coffret Exotique</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
