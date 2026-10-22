import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Beer, ArrowRight, Package } from 'lucide-react';
import { BEERS } from '../data/products';
import ScrollReveal from '../components/ScrollReveal';

export default function BeersOverviewPage() {
  const navigate = useNavigate();

  const beers = [
    BEERS['foam-west-coast'],
    BEERS['foam-lager'],
    BEERS['foam-blanche'],
    BEERS['lou-foam-daqui'],
    BEERS['wheat-ale'],
    BEERS['french-ipa']
  ];

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Informationnel Riviera */}
      <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foam-navy leading-tight">
          Nos Bières Artisanales
        </h1>
        <p className="text-base text-foam-text leading-relaxed">
          Élaborées et brassées au 3 Quai des Deux Emmanuels par Stéphane, notre maître brasseur. 
          Découvrez les 6 recettes permanentes et signatures de notre maison : profils gustatifs, houblons maîtres et accords mets-bières de la Riviera.
        </p>
      </ScrollReveal>

      {/* Grille des 6 Bières FOAM */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beers.map((beer, idx) => (
          <ScrollReveal key={beer.slug} delay={(idx % 3) * 110}>
            <div
              onClick={() => navigate(`/bieres/${beer.slug}`)}
              className="card-riviera p-6 sm:p-7 flex flex-col justify-between space-y-6 group cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 h-full"
            >
              <div className="space-y-5">
                
                {/* Photo de bouteille en lumière naturelle */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-foam-subtle border border-foam-borderWarm/60 relative">
                  <img
                    src={beer.image}
                    alt={beer.fullName}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
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

              {/* Actions vers la fiche recette et les coffrets */}
              <div className="pt-4 border-t border-foam-border space-y-2.5">
                <div className="btn-riviera-outline w-full text-xs sm:text-sm flex items-center justify-center gap-2 text-center group-hover:bg-foam-navy group-hover:text-white group-hover:border-foam-navy transition-all">
                  <Beer className="w-4 h-4 shrink-0 text-foam-terracotta group-hover:text-white stroke-[2] transition-colors" />
                  <span>Découvrir la fiche dégustation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-center pt-0.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/coffrets');
                    }}
                    className="text-[11px] font-serif font-bold text-foam-terracotta hover:text-foam-navy underline cursor-pointer"
                  >
                    Commander en coffret dégustation →
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Présentation des Coffrets Dégustation Riviera + CTA */}
      <ScrollReveal delay={0}>
        <div 
          onClick={() => navigate('/coffrets')}
          className="card-riviera p-8 sm:p-10 space-y-6 cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 group"
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-foam-terracotta">
              À emporter ou livrés chez vous
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors">
              Nos Coffrets de Dégustation de la Riviera
            </h2>
            <p className="text-sm sm:text-base text-foam-text leading-relaxed">
              Retrouvez nos créations artisanales réunies dans nos deux coffrets signature : le <strong>Coffret Découverte</strong> et le <strong>Coffret Exotique</strong>. Disponibles en formats <strong>Pack de 3 (15,00 €)</strong> ou <strong>Pack de 6 (26,00 €)</strong> dans leur étui kraft anti-casse écoresponsable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
            <div 
              onClick={(e) => {
                e.stopPropagation();
                navigate('/coffrets/decouverte');
              }}
              className="p-4 rounded-xl bg-foam-subtle/80 border border-foam-borderWarm/80 hover:border-foam-terracotta/60 transition-all cursor-pointer"
            >
              <span className="px-2 py-0.5 rounded bg-foam-terracotta text-white text-[10px] font-semibold mb-2 inline-block">Coffret Signature</span>
              <h4 className="font-serif font-bold text-sm text-foam-navy">Coffret Découverte</h4>
              <p className="text-[11px] text-foam-text mt-1">L'assortiment classique : French IPA, Lou FOAM d’Aqui et Wheat Ale. À partir de 15 €.</p>
            </div>

            <div 
              onClick={(e) => {
                e.stopPropagation();
                navigate('/coffrets/exotique');
              }}
              className="p-4 rounded-xl bg-foam-subtle/80 border border-foam-borderWarm/80 hover:border-foam-pine/60 transition-all cursor-pointer"
            >
              <span className="px-2 py-0.5 rounded bg-foam-pine text-white text-[10px] font-semibold mb-2 inline-block">Édition Spéciale</span>
              <h4 className="font-serif font-bold text-sm text-foam-navy">Coffret Exotique</h4>
              <p className="text-[11px] text-foam-text mt-1">Sélection cuvées phares : Lou FOAM d’Aqui, Wheat Ale et French IPA. À partir de 15 €.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-foam-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foam-text font-medium">
              Click & Collect gratuit sous 2h dans nos deux bars à Nice ou livraison à domicile.
            </p>
            <div className="btn-riviera-terracotta text-xs sm:text-sm flex items-center gap-2 group-hover:shadow-terracotta-glow transition-all">
              <span>Accéder à tous nos coffrets</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
