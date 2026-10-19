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
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-foam-border text-foam-navy text-[11px] font-bold uppercase tracking-widest shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-foam-red" />
          <span>Microbrasserie du Port de Nice • Quai des Deux Emmanuels</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-foam-navy leading-tight">
          Nos Deux Coffrets de la Riviera
        </h1>
        <p className="text-base text-foam-text leading-relaxed">
          Découvrez nos deux sélections de bières artisanales niçoises, disponibles en format <strong>Pack de 3 (15,00 €)</strong> ou <strong>Pack de 6 (26,00 €)</strong>. Retrait Click & Collect offert sous 2h dans nos deux bars à Nice.
        </p>
      </div>

      {/* 2 Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* CARTE 1 : COFFRET DÉCOUVERTE */}
        <div className="rounded-xl bg-white border border-foam-border hover:border-foam-red p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
          <div className="space-y-5">
            <div className="aspect-[16/10] rounded-lg overflow-hidden bg-foam-subtle border border-foam-border relative">
              <img
                src={decouverte.image}
                alt={decouverte.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-foam-navy text-white text-[10px] font-bold uppercase tracking-wider">
                Les Incontournables
              </span>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-bold text-foam-red uppercase tracking-wider">
                {decouverte.subtitle}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-red transition-colors">
                {decouverte.name}
              </h2>
              <p className="text-sm text-foam-text leading-relaxed pt-1">
                L'assortiment signature pour découvrir le savoir-faire de Stéphane au Port de Nice. Réunit nos trois bières permanentes : la French IPA houblonnée, Lou FOAM d’Aqui dorée et rafraîchissante, et la Wheat Ale douce aux notes d'agrumes.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-foam-subtle/60 border border-foam-border text-xs text-foam-text space-y-1.5">
              <p className="font-bold text-foam-navy uppercase tracking-wider text-[11px]">Composition du coffret :</p>
              <p>• 1 ou 2 FOAM French IPA (Houblonnée & fruitée)</p>
              <p>• 1 ou 2 Lou FOAM d’Aqui (Blonde fraîche & maltée)</p>
              <p>• 1 ou 2 FOAM Wheat Ale (Froment doux & agrumes)</p>
            </div>

            <div className="pt-2 flex items-baseline justify-between border-t border-foam-border/60">
              <div>
                <p className="text-base font-black text-foam-navy font-serif">
                  15,00 € <span className="text-xs font-normal text-foam-muted font-sans">(Pack 3)</span> • 26,00 € <span className="text-xs font-normal text-foam-muted font-sans">(Pack 6)</span>
                </p>
                <p className="text-xs text-foam-olive font-semibold mt-0.5">
                  ✓ Click & Collect 0 € (Port ou Place du Pin)
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-foam-border">
            <Link
              to="/coffrets/decouverte"
              className="w-full py-3.5 px-6 rounded-lg bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-shopify hover:shadow-craft-flat-red transition-all active:scale-98"
            >
              <span>Accéder à la page du Coffret Découverte</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CARTE 2 : COFFRET EXOTIQUE */}
        <div className="rounded-xl bg-white border border-foam-border hover:border-foam-navy p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
          <div className="space-y-5">
            <div className="aspect-[16/10] rounded-lg overflow-hidden bg-foam-subtle border border-foam-border relative">
              <img
                src={exotique.image}
                alt={exotique.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-foam-navy text-white text-[10px] font-bold uppercase tracking-wider">
                Édition Limitée
              </span>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-bold text-foam-olive uppercase tracking-wider">
                {exotique.subtitle}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-navyLight transition-colors">
                {exotique.name}
              </h2>
              <p className="text-sm text-foam-text leading-relaxed pt-1">
                Une sélection exclusive de brassins éphémères du maître brasseur. Habituellement réservées au service à la pression dans nos bars niçois, ces cuvées rares explorent des houblons solaires et des accords exotiques audacieux.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-foam-subtle/60 border border-foam-border text-xs text-foam-text space-y-1.5">
              <p className="font-bold text-foam-navy uppercase tracking-wider text-[11px]">Composition du coffret :</p>
              <p>• 1 ou 2 Brassin Riviera Tropicale (Mangue & passion)</p>
              <p>• 1 ou 2 Cuvée Houblon Niçois Solaire (Houblons locaux)</p>
              <p>• 1 ou 2 Blanche Exotique Éphémère (Zestes doux)</p>
            </div>

            <div className="pt-2 flex items-baseline justify-between border-t border-foam-border/60">
              <div>
                <p className="text-base font-black text-foam-navy font-serif">
                  15,00 € <span className="text-xs font-normal text-foam-muted font-sans">(Pack 3)</span> • 26,00 € <span className="text-xs font-normal text-foam-muted font-sans">(Pack 6)</span>
                </p>
                <p className="text-xs text-foam-olive font-semibold mt-0.5">
                  ✓ Click & Collect 0 € (Port ou Place du Pin)
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-foam-border">
            <Link
              to="/coffrets/exotique"
              className="w-full py-3.5 px-6 rounded-lg bg-foam-navy hover:bg-foam-navyLight text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-shopify transition-all active:scale-98"
            >
              <span>Accéder à la page du Coffret Exotique</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* CTA vers la page "Nos bières" */}
      <div className="rounded-xl bg-white border border-foam-border p-8 sm:p-12 text-center space-y-4 shadow-xs">
        <p className="text-[11px] font-bold uppercase tracking-widest text-foam-red">
          Dégustation & Notes Aromatiques
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy">
          Envie d'en savoir plus sur chaque recette ?
        </h3>
        <p className="text-sm text-foam-text max-w-2xl mx-auto leading-relaxed">
          Consultez les caractéristiques techniques, les degrés d'alcool, les indices d'amertume (IBU) et les accords mets-bières imaginés par notre brasseur Stéphane.
        </p>
        <div className="pt-2">
          <Link
            to="/bieres"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-lg bg-foam-subtle hover:bg-foam-border border border-foam-border text-foam-navy font-bold text-xs sm:text-sm transition-colors"
          >
            <Beer className="w-4 h-4 text-foam-red" />
            <span>Découvrir la présentation détaillée de nos bières</span>
            <ArrowRight className="w-4 h-4 text-foam-navy" />
          </Link>
        </div>
      </div>

    </div>
  );
}
