import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beer, Package, Check, Sparkles } from 'lucide-react';
import { SETS } from '../data/products';

export default function SetsOverviewPage() {
  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];

  return (
    <div className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      
      {/* Header Brutaliste */}
      <div className="text-left md:text-center max-w-3xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-2">
          <span className="sticker sticker-neon">
            [ SÉLECTION OFFICIELLE // 06300 NICE ]
          </span>
          <span className="sticker sticker-white">
            [ FORMATS AU CHOIX : PACK 3 OU 6 ]
          </span>
        </div>
        <h1 className="font-impact text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-foam-black">
          NOS DEUX OFFRES DE COFFRETS
        </h1>
        <p className="text-base sm:text-lg text-foam-black font-medium leading-relaxed">
          Découvrez nos deux sélections de bières artisanales niçoises, disponibles en format <strong>Pack de 3 (15,00 €)</strong> ou <strong>Pack de 6 (26,00 €)</strong>. Retrait Click & Collect gratuit sous 2h dans nos deux bars à Nice.
        </p>
      </div>

      {/* 2 Sets Brutalist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* CARTE 1 : COFFRET DÉCOUVERTE */}
        <div className="card-brutal p-6 sm:p-8 flex flex-col justify-between group">
          <div className="space-y-5">
            <div className="aspect-[16/10] overflow-hidden border-2 border-foam-black relative bg-foam-subtle">
              <img
                src={decouverte.image}
                alt={decouverte.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 sticker sticker-neon text-[10px]">
                ★ LES INCONTOURNABLES
              </span>
              <span className="absolute bottom-3 right-3 sticker sticker-black text-[10px]">
                PORT DE NICE
              </span>
            </div>

            <div className="space-y-1.5">
              <p className="font-mono text-[11px] font-bold text-foam-orange uppercase tracking-wider">
                {decouverte.subtitle}
              </p>
              <h2 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-foam-black group-hover:text-foam-orange transition-colors">
                {decouverte.name}
              </h2>
              <p className="text-sm text-foam-black leading-relaxed pt-1">
                L'assortiment signature pour découvrir le savoir-faire de Stéphane au Port de Nice. Réunit nos trois bières permanentes : la French IPA houblonnée, Lou FOAM d’Aqui dorée et rafraîchissante, et la Wheat Ale douce aux agrumes.
              </p>
            </div>

            {/* Fiche composition */}
            <div className="p-4 bg-foam-bg border-2 border-foam-black text-xs font-mono text-foam-black space-y-1.5">
              <p className="font-black uppercase tracking-wider text-[11px] border-b border-foam-borderLight pb-1">
                [ COMPOSITION DU COFFRET ]
              </p>
              <p>• 1 ou 2 FOAM French IPA (Houblonnée & fruitée)</p>
              <p>• 1 ou 2 Lou FOAM d’Aqui (Blonde fraîche & maltée)</p>
              <p>• 1 ou 2 FOAM Wheat Ale (Froment doux & agrumes)</p>
            </div>

            {/* Tarifs explicites */}
            <div className="pt-2 border-t-2 border-foam-black flex items-baseline justify-between">
              <div>
                <p className="text-base sm:text-lg font-impact uppercase text-foam-black">
                  15,00 € <span className="font-mono text-xs font-bold text-foam-muted">(Pack 3)</span> • 26,00 € <span className="font-mono text-xs font-bold text-foam-orange">(Pack 6)</span>
                </p>
                <p className="font-mono text-xs text-foam-black font-bold mt-0.5">
                  ✓ CLICK & COLLECT 0 € (PORT OU PLACE DU PIN)
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t-2 border-foam-black">
            <Link
              to="/coffrets/decouverte"
              className="btn-brutal-orange w-full py-4 text-xs sm:text-sm font-mono font-black"
            >
              <span>COMMANDER LE COFFRET DÉCOUVERTE</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* CARTE 2 : COFFRET EXOTIQUE */}
        <div className="card-brutal p-6 sm:p-8 flex flex-col justify-between group">
          <div className="space-y-5">
            <div className="aspect-[16/10] overflow-hidden border-2 border-foam-black relative bg-foam-subtle">
              <img
                src={exotique.image}
                alt={exotique.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 sticker sticker-orange text-[10px]">
                ⚡ ÉDITION LIMITÉE
              </span>
              <span className="absolute bottom-3 right-3 sticker sticker-black text-[10px]">
                CUVÉES RARES
              </span>
            </div>

            <div className="space-y-1.5">
              <p className="font-mono text-[11px] font-bold text-foam-orange uppercase tracking-wider">
                {exotique.subtitle}
              </p>
              <h2 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-foam-black group-hover:text-foam-orange transition-colors">
                {exotique.name}
              </h2>
              <p className="text-sm text-foam-black leading-relaxed pt-1">
                Une sélection exclusive de brassins éphémères du maître brasseur. Habituellement réservées au service à la pression dans nos bars niçois, ces cuvées rares explorent des houblons solaires et des accords exotiques audacieux.
              </p>
            </div>

            {/* Fiche composition */}
            <div className="p-4 bg-foam-bg border-2 border-foam-black text-xs font-mono text-foam-black space-y-1.5">
              <p className="font-black uppercase tracking-wider text-[11px] border-b border-foam-borderLight pb-1">
                [ CUVÉES DU BRASSEUR ]
              </p>
              <p>• 1 ou 2 Brassin Riviera Tropicale (Mangue & passion)</p>
              <p>• 1 ou 2 Cuvée Houblon Niçois Solaire (Houblons locaux)</p>
              <p>• 1 ou 2 Blanche Exotique Éphémère (Zestes doux)</p>
            </div>

            {/* Tarifs explicites */}
            <div className="pt-2 border-t-2 border-foam-black flex items-baseline justify-between">
              <div>
                <p className="text-base sm:text-lg font-impact uppercase text-foam-black">
                  15,00 € <span className="font-mono text-xs font-bold text-foam-muted">(Pack 3)</span> • 26,00 € <span className="font-mono text-xs font-bold text-foam-orange">(Pack 6)</span>
                </p>
                <p className="font-mono text-xs text-foam-black font-bold mt-0.5">
                  ✓ ÉDITION LIMITÉE DU BRASSEUR
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t-2 border-foam-black">
            <Link
              to="/coffrets/exotique"
              className="btn-brutal-black w-full py-4 text-xs sm:text-sm font-mono font-black"
            >
              <span>COMMANDER LE COFFRET EXOTIQUE</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

      </div>

      {/* Brutalist Call to Action vers "Nos Bières" */}
      <div className="card-brutal p-8 sm:p-12 text-center space-y-4">
        <span className="sticker sticker-neon">
          [ DÉGUSTATION & NOTES AROMATIQUES ]
        </span>
        <h3 className="font-impact text-2xl sm:text-4xl uppercase tracking-tight text-foam-black">
          ENVIE D'EN SAVOIR PLUS SUR CHAQUE RECETTE ?
        </h3>
        <p className="text-sm sm:text-base text-foam-black font-medium max-w-2xl mx-auto leading-relaxed">
          Consultez les caractéristiques techniques, les degrés d'alcool, les indices d'amertume (IBU) et les accords mets-bières imaginés par notre brasseur Stéphane.
        </p>
        <div className="pt-2">
          <Link
            to="/bieres"
            className="btn-brutal-white py-3.5 px-6 text-xs sm:text-sm font-mono font-black"
          >
            <Beer className="w-4 h-4 text-foam-orange stroke-[2.5]" />
            <span>VOIR LA PRÉSENTATION COMPLÈTE DE NOS BIÈRES</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

    </div>
  );
}
