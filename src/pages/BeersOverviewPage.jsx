import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, ArrowRight, Package, Sparkles, Flame, Droplets } from 'lucide-react';
import { BEERS } from '../data/products';

export default function BeersOverviewPage() {
  const beers = [BEERS['french-ipa'], BEERS['lou-foam-daqui'], BEERS['wheat-ale']];

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      
      {/* Header Informationnel Brutaliste */}
      <div className="text-left md:text-center max-w-3xl mx-auto space-y-3.5">
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-2">
          <span className="sticker sticker-neon">
            [ RECETTES PERMANENTES & CUVÉES DU PORT ]
          </span>
          <span className="sticker sticker-white">
            [ MAÎTRE BRASSEUR : STÉPHANE ]
          </span>
        </div>
        <h1 className="font-impact text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-foam-black">
          NOS BIÈRES ARTISANALES
        </h1>
        <p className="text-base sm:text-lg text-foam-black font-medium leading-relaxed">
          Élaborées et brassées au 3 Quai des Deux Emmanuels par Stéphane, notre maître brasseur. 
          Découvrez ici les recettes, les ingrédients, les profils gustatifs et les accords mets-bières de notre maison.
        </p>
      </div>

      {/* Les 3 Bières Permanentes (Informations complètes + CTA vers le Coffret Découverte) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beers.map((beer) => (
          <div
            key={beer.slug}
            className="card-brutal p-6 sm:p-7 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-5">
              
              {/* Photo bouteille au flash direct avec sticker technique */}
              <div className="aspect-[4/3] overflow-hidden border-2 border-foam-black bg-foam-subtle relative">
                <img
                  src={beer.image}
                  alt={beer.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 sticker sticker-black text-[10px]">
                  {beer.style}
                </span>
                <span className="absolute bottom-2 right-2 sticker sticker-neon text-[10px]">
                  {beer.abv} • IBU {beer.ibu}
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="font-mono text-xs font-black text-foam-orange uppercase tracking-wider">
                  // {beer.style}
                </div>

                <h2 className="font-impact text-2xl uppercase tracking-tight text-foam-black group-hover:text-foam-orange transition-colors">
                  {beer.name}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-foam-black font-medium leading-relaxed">
                {beer.description}
              </p>

              {/* Fiche technique gustative en Monospace */}
              <div className="p-4 bg-foam-bg border-2 border-foam-black space-y-2.5 font-mono text-xs">
                <div className="border-b border-foam-borderLight pb-1.5">
                  <span className="font-black text-foam-black block uppercase text-[10px] text-foam-orange">
                    [ PROFIL AROMATIQUE ]
                  </span>
                  <span className="text-foam-black font-bold">{beer.shortDesc}</span>
                </div>
                <div className="border-b border-foam-borderLight pb-1.5">
                  <span className="font-black text-foam-black block uppercase text-[10px] text-foam-orange">
                    [ HOUBLONS SÉLECTIONNÉS ]
                  </span>
                  <span className="text-foam-black font-bold">{beer.hops}</span>
                </div>
                <div>
                  <span className="font-black text-foam-black block uppercase text-[10px] text-foam-orange">
                    [ ACCORDS METS-BIÈRES ]
                  </span>
                  <span className="text-foam-black font-bold">{beer.pairing}</span>
                </div>
              </div>

            </div>

            {/* CTA vers le coffret Découverte qui contient cette bière */}
            <div className="pt-4 border-t-2 border-foam-black space-y-2">
              <span className="font-mono text-[10px] font-black text-foam-muted uppercase tracking-wider block text-center">
                [ DISPONIBLE DANS LE COFFRET DÉCOUVERTE ]
              </span>
              <Link
                to="/coffrets/decouverte"
                className="btn-brutal-orange w-full py-3.5 text-xs font-mono font-black text-center"
              >
                <Package className="w-4 h-4 shrink-0 stroke-[2.5]" />
                <span>COMMANDER DANS LE COFFRET DÉCOUVERTE</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Présentation des Brassins Éphémères + CTA vers le Coffret Exotique */}
      <div className="card-brutal p-8 sm:p-10 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="sticker sticker-orange">
            [ CRÉATIONS ÉPHÉMÈRES DU BRASSEUR ]
          </div>
          <h2 className="font-impact text-2xl sm:text-4xl uppercase tracking-tight text-foam-black">
            LES BRASSINS ÉPHÉMÈRES & CUVÉES LIMITÉES
          </h2>
          <p className="text-sm sm:text-base text-foam-black font-medium leading-relaxed">
            Régulièrement, Stéphane élabore des brassins expérimentaux en petits volumes dans nos cuves inox du Port de Nice : <strong>Brassin Riviera Tropicale</strong> (mangue & passion), <strong>Cuvée Houblon Niçois Solaire</strong>, ou encore nos <strong>Blanches aux agrumes rares</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 font-mono text-xs">
          <div className="p-4 bg-foam-bg border-2 border-foam-black">
            <span className="sticker sticker-black text-[9px] mb-2">BRASSIN #1</span>
            <h4 className="font-impact text-sm uppercase text-foam-black">RIVIERA TROPICALE</h4>
            <p className="text-[11px] text-foam-black font-medium mt-1">Fermentation avec purée de mangue & fruit de la passion. Acidulée et ultra rafraîchissante.</p>
          </div>

          <div className="p-4 bg-foam-bg border-2 border-foam-black">
            <span className="sticker sticker-black text-[9px] mb-2">BRASSIN #2</span>
            <h4 className="font-impact text-sm uppercase text-foam-black">HOUBLON NIÇOIS SOLAIRE</h4>
            <p className="text-[11px] text-foam-black font-medium mt-1">Cuvée 100% houblons de la Côte d'Azur. Notes de pinède, résine et agrumes confits.</p>
          </div>

          <div className="p-4 bg-foam-bg border-2 border-foam-black">
            <span className="sticker sticker-black text-[9px] mb-2">BRASSIN #3</span>
            <h4 className="font-impact text-sm uppercase text-foam-black">BLANCHE EXOTIQUE</h4>
            <p className="text-[11px] text-foam-black font-medium mt-1">Froment doux avec infusion à froid d'écorces de bergamote et de coriandre sauvage.</p>
          </div>
        </div>

        <div className="pt-4 border-t-2 border-foam-black flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs font-bold text-foam-black">
            Ces 3 créations exclusives sont réunies dans notre <strong>Coffret Exotique</strong>.
          </p>
          <Link
            to="/coffrets/exotique"
            className="btn-brutal-black py-3.5 px-6 text-xs font-mono font-black"
          >
            <span>DÉCOUVRIR LE COFFRET EXOTIQUE</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

    </div>
  );
}
