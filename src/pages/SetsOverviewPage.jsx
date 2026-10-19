import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beer } from 'lucide-react';
import { SETS } from '../data/products';

export default function SetsOverviewPage() {
  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];

  return (
    <div className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-foam-red">
          Microbrasserie du Port de Nice
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-foam-navy leading-tight">
          Nos Coffrets Dégustation
        </h1>
        <p className="text-base text-foam-text leading-relaxed">
          Découvrez nos deux sélections de bières artisanales niçoises, disponibles en format 3 bouteilles (15,00 €) ou 6 bouteilles (26,00 €). Choisissez votre coffret pour accéder à sa page de commande dédiée.
        </p>
      </div>

      {/* 2 Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* CARTE 1 : COFFRET DÉCOUVERTE */}
        <div className="rounded-3xl bg-white border border-foam-border hover:border-foam-navy p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
          <div className="space-y-5">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-foam-subtle border border-foam-border">
              <img
                src={decouverte.image}
                alt={decouverte.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-foam-red uppercase tracking-wider">
                Les Incontournables • {decouverte.subtitle}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-red transition-colors">
                {decouverte.name}
              </h2>
              <p className="text-sm text-foam-text leading-relaxed pt-1">
                L'assortiment signature pour découvrir le savoir-faire de Stéphane au Port de Nice. Réunit nos trois bières permanentes : la West Coast IPA houblonnée, la Lager dorée et rafraîchissante, et la Blanche douce aux notes d'agrumes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-foam-bg border border-foam-border text-xs text-foam-text space-y-1.5">
              <p className="font-bold text-foam-navy">Composition du coffret :</p>
              <p>• 1 ou 2 FOAM West Coast IPA (Houblonnée & fruitée)</p>
              <p>• 1 ou 2 FOAM Lager Méditerranéenne (Fraîche & maltée)</p>
              <p>• 1 ou 2 FOAM Blanche Riviera (Froment & agrumes)</p>
            </div>

            <div className="pt-2">
              <p className="text-sm font-bold text-foam-navy">
                15,00 € <span className="text-xs font-normal text-foam-muted">(Pack de 3)</span> • 26,00 € <span className="text-xs font-normal text-foam-muted">(Pack de 6)</span>
              </p>
              <p className="text-xs text-foam-olive font-semibold mt-0.5">
                Retrait Click & Collect 0 € au Port ou Place du Pin
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-foam-border">
            <Link
              to="/coffrets/decouverte"
              className="w-full py-4 px-6 rounded-2xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-shopify hover:shadow-red-glow transition-all active:scale-98"
            >
              <span>Découvrir le Coffret Découverte</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CARTE 2 : COFFRET EXOTIQUE */}
        <div className="rounded-3xl bg-white border border-foam-border hover:border-foam-navy p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
          <div className="space-y-5">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-foam-subtle border border-foam-border">
              <img
                src={exotique.image}
                alt={exotique.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-foam-olive uppercase tracking-wider">
                Brassins Éphémères • {exotique.subtitle}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-olive transition-colors">
                {exotique.name}
              </h2>
              <p className="text-sm text-foam-text leading-relaxed pt-1">
                Une sélection exclusive de brassins éphémères du maître brasseur. Habituellement réservées au service à la pression dans nos bars niçois, ces cuvées rares explorent des houblons solaires et des accords exotiques audacieux.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-foam-bg border border-foam-border text-xs text-foam-text space-y-1.5">
              <p className="font-bold text-foam-navy">Composition du coffret :</p>
              <p>• 1 ou 2 Brassin Riviera Tropicale (Mangue & passion)</p>
              <p>• 1 ou 2 Cuvée Houblon Niçois Solaire (Houblons locaux)</p>
              <p>• 1 ou 2 Blanche Exotique Éphémère (Zestes doux)</p>
            </div>

            <div className="pt-2">
              <p className="text-sm font-bold text-foam-navy">
                15,00 € <span className="text-xs font-normal text-foam-muted">(Pack de 3)</span> • 26,00 € <span className="text-xs font-normal text-foam-muted">(Pack de 6)</span>
              </p>
              <p className="text-xs text-foam-olive font-semibold mt-0.5">
                Retrait Click & Collect 0 € au Port ou Place du Pin
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-foam-border">
            <Link
              to="/coffrets/exotique"
              className="w-full py-4 px-6 rounded-2xl bg-foam-navy hover:bg-foam-navyLight text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-shopify transition-all active:scale-98"
            >
              <span>Découvrir le Coffret Exotique</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* CTA vers la page "Nos bières" (remplace la section 'Pourquoi choisir FOAM' et les bières à l'unité) */}
      <div className="rounded-3xl bg-foam-subtle border border-foam-border p-8 sm:p-12 text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-wider text-foam-navy">
          Dégustation & Notes Aromatiques
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy">
          Envie d'en savoir plus sur chaque recette ?
        </h3>
        <p className="text-sm text-foam-text max-w-2xl mx-auto leading-relaxed">
          Consultez les caractéristiques techniques, les degrés d'alcool, les indices d'amertume (IBU) et les accords mets-bières imaginés par notre brasseur.
        </p>
        <div className="pt-2">
          <Link
            to="/bieres"
            className="inline-flex items-center gap-2 py-3.5 px-6 rounded-2xl bg-white hover:bg-foam-border border border-foam-border text-foam-navy font-bold text-sm shadow-xs transition-colors"
          >
            <Beer className="w-4 h-4 text-foam-red" />
            <span>Découvrir la présentation de nos bières</span>
            <ArrowRight className="w-4 h-4 text-foam-navy" />
          </Link>
        </div>
      </div>

    </div>
  );
}
