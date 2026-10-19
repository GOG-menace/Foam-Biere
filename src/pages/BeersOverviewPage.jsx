import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, ArrowRight, Package, Sparkles } from 'lucide-react';
import { BEERS } from '../data/products';

export default function BeersOverviewPage() {
  const beers = Object.values(BEERS);

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header purement informationnel */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-foam-border text-foam-navy text-[11px] font-bold uppercase tracking-widest shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-foam-red" />
          <span>Microbrasserie du Port de Nice • Savoir-Faire 1948</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-foam-navy leading-tight">
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
            className="rounded-xl bg-white border border-foam-border p-6 sm:p-7 shadow-shopify flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-5">
              
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-foam-subtle border border-foam-border">
                <img
                  src={beer.image}
                  alt={beer.fullName}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-foam-red uppercase tracking-wider">{beer.style}</span>
                  <span className="font-semibold text-foam-navy">{beer.abv} • IBU {beer.ibu}</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-foam-navy">
                  {beer.name}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-foam-text leading-relaxed">
                {beer.description}
              </p>

              {/* Fiche technique gustative */}
              <div className="p-4 rounded-lg bg-foam-subtle/60 border border-foam-border space-y-2 text-xs">
                <div>
                  <span className="font-bold text-foam-navy block">Profil aromatique :</span>
                  <span className="text-foam-text">{beer.shortDesc}</span>
                </div>
                <div>
                  <span className="font-bold text-foam-navy block">Houblons utilisés :</span>
                  <span className="text-foam-text">{beer.hops}</span>
                </div>
                <div>
                  <span className="font-bold text-foam-navy block">Accords mets & bière :</span>
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
                className="w-full py-3.5 px-4 rounded-lg bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-shopify hover:shadow-craft-flat-red transition-all active:scale-98 text-center"
              >
                <Package className="w-4 h-4 shrink-0" />
                <span>Commander dans le Coffret Découverte</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Présentation des Brassins Éphémères + CTA vers le Coffret Exotique */}
      <div className="rounded-xl bg-white border border-foam-border p-8 sm:p-10 shadow-shopify space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-foam-olive">
            Créations Éphémères de Stéphane
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy">
            Nos Brassins Éphémères au Houblon Niçois
          </h2>
          <p className="text-sm text-foam-text leading-relaxed">
            Au fil des saisons et des récoltes de houblon sous le soleil azuréen, notre brasseur imagine des cuvées confidentielles, servies d'ordinaire uniquement à la pression dans nos bars du Port et de la Place du Pin. Retrouvez ces recettes rares embouteillées dans notre <strong>Coffret Exotique</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-foam-subtle/60 border border-foam-border space-y-1">
            <strong className="text-foam-navy font-bold block text-sm">Brassin Riviera Tropicale</strong>
            <p className="text-foam-text">Notes intenses de mangue mûre et de fruits de la passion. Houblonnage à cru généreux.</p>
          </div>

          <div className="p-4 rounded-lg bg-foam-subtle/60 border border-foam-border space-y-1">
            <strong className="text-foam-navy font-bold block text-sm">Cuvée Houblon Niçois Solaire</strong>
            <p className="text-foam-text">Confectionnée avec du houblon cultivé localement à Nice. Notes résineuses et herbacées typiques du terroir.</p>
          </div>

          <div className="p-4 rounded-lg bg-foam-subtle/60 border border-foam-border space-y-1">
            <strong className="text-foam-navy font-bold block text-sm">Blanche Exotique Éphémère</strong>
            <p className="text-foam-text">Bière de blé veloutée parfumée aux zestes d'agrumes rares de la Côte d'Azur.</p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-foam-border">
          <p className="text-xs text-foam-muted">
            Ces brassins rares sont disponibles exclusivement au sein du Coffret Exotique (Pack 3 ou Pack 6).
          </p>
          <Link
            to="/coffrets/exotique"
            className="w-full sm:w-auto py-3 px-6 rounded-lg bg-foam-navy hover:bg-foam-navyLight text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shrink-0"
          >
            <Sparkles className="w-4 h-4 text-foam-red" />
            <span>Découvrir le Coffret Exotique</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bannière de redirection générale vers les coffrets */}
      <div className="rounded-xl bg-white border border-foam-border p-8 sm:p-10 text-center space-y-4 shadow-xs">
        <h3 className="font-serif text-2xl font-bold text-foam-navy">
          Prêt à déguster nos bières à la maison ?
        </h3>
        <p className="text-sm text-foam-text max-w-2xl mx-auto leading-relaxed">
          Toutes nos bières sont proposées en coffrets cadeaux carton kraft rigides de 3 ou 6 bouteilles, avec retrait gratuit en Click & Collect dans nos deux bars à Nice ou envoi sécurisé anti-casse.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/coffrets"
            className="w-full sm:w-auto py-4 px-8 rounded-lg bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-shopify hover:shadow-craft-flat-red transition-all"
          >
            <span>Voir les deux formules de coffrets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
