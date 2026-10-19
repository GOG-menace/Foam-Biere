import React from 'react';
import { ArrowRight, MapPin, Package, Sparkles, Shield, Beer } from 'lucide-react';
import { SETS, BEERS } from '../data/products';

export default function HomePage({ navigateTo }) {
  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];
  const beerList = Object.values(BEERS);

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* 1. HERO SOBRE & KRAFT */}
      <section className="text-center max-w-3xl mx-auto pt-4 sm:pt-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-kraft-ink bg-kraft-stone border border-kraft-border mb-4">
          Microbrasserie artisanale • Port de Nice
        </span>
        
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-kraft-ink leading-tight tracking-tight">
          La bière du Port de Nice, <br className="hidden sm:inline" />
          <span className="text-kraft-terracotta italic font-normal">en direct</span> de nos cuves.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-kraft-muted leading-relaxed">
          Élaborée au Quai des Deux Emmanuels par notre maître brasseur Stéphane. 
          Commandez nos coffrets dégustation en <strong className="text-kraft-ink font-semibold">Click & Collect gratuit</strong> dans nos bars ou en livraison sécurisée.
        </p>

        {/* Reassurance pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-kraft-muted font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-kraft-olive" />
            Retrait gratuit 0€ (Port & Place du Pin)
          </span>
          <span className="hidden sm:inline text-kraft-border">•</span>
          <span className="flex items-center gap-1.5">
            <Beer className="w-4 h-4 text-kraft-terracotta" />
            100% brassée au Port de Nice
          </span>
          <span className="hidden sm:inline text-kraft-border">•</span>
          <span className="flex items-center gap-1.5">
            <Package className="w-4 h-4 text-kraft-ink" />
            Étuis kraft protecteurs
          </span>
        </div>
      </section>

      {/* 2. SECTION COFFRETS PHARE (CONVERSION DIRECTE) */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-kraft-ink">
            Nos Coffrets Dégustation
          </h2>
          <p className="text-xs sm:text-sm text-kraft-muted mt-1">
            Conditionnés en étuis kraft rigides. Choisissez entre le format 3 bouteilles (15 €) ou 6 bouteilles (26 €).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARTE COFFRET DÉCOUVERTE */}
          <div className="kraft-card p-6 sm:p-8 flex flex-col justify-between hover:border-kraft-terracotta/60 transition-all duration-300 group">
            <div>
              {/* Image Placeholder Kraft */}
              <div 
                onClick={() => navigateTo('coffret-decouverte')}
                className="w-full aspect-[16/10] rounded-xl bg-kraft-stone border border-kraft-border flex flex-col items-center justify-center p-6 text-center cursor-pointer group-hover:bg-kraft-border/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white text-kraft-terracotta flex items-center justify-center font-serif font-bold text-xl mb-3 shadow-xs">
                  📦
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-kraft-ink">
                  {decouverte.imagePlaceholder}
                </span>
                <span className="text-[11px] text-kraft-muted mt-1">
                  (Emplacement pour votre visuel de coffret kraft)
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-kraft-olive">
                  {decouverte.badge}
                </span>
                <span className="text-kraft-muted">
                  33cl • Recettes permanentes
                </span>
              </div>

              <h3 
                onClick={() => navigateTo('coffret-decouverte')}
                className="font-serif text-2xl font-bold text-kraft-ink mt-2 group-hover:text-kraft-terracotta transition-colors cursor-pointer"
              >
                {decouverte.name}
              </h3>
              
              <p className="text-xs text-kraft-muted mt-1">
                {decouverte.subtitle}
              </p>

              <p className="text-xs text-kraft-ink/80 mt-3 leading-relaxed">
                {decouverte.description}
              </p>

              {/* Composition rapide */}
              <div className="mt-4 p-3 bg-kraft-bg rounded-lg border border-kraft-border/80 text-xs text-kraft-ink space-y-1">
                <p className="font-semibold text-kraft-ink">Composition équilibrée :</p>
                <p className="text-kraft-muted">• FOAM West Coast (IPA houblonnée)</p>
                <p className="text-kraft-muted">• FOAM Lager (Blonde florale & fraîche)</p>
                <p className="text-kraft-muted">• FOAM Blanche (Zestes d’agrumes de la Riviera)</p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-kraft-border flex items-center justify-between">
              <div>
                <div className="text-xs text-kraft-muted">À partir de</div>
                <div className="text-2xl font-serif font-bold text-kraft-ink">
                  15,00 € <span className="text-xs font-normal text-kraft-muted">(3x33cl)</span>
                </div>
                <div className="text-[11px] text-kraft-terracotta font-medium">
                  ou 26,00 € le pack de 6
                </div>
              </div>

              <button
                onClick={() => navigateTo('coffret-decouverte')}
                className="py-3 px-5 rounded-lg bg-kraft-ink text-white hover:bg-kraft-terracotta transition-colors text-xs font-bold flex items-center gap-1.5"
              >
                <span>Commander</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARTE COFFRET EXOTIQUE */}
          <div className="kraft-card p-6 sm:p-8 flex flex-col justify-between hover:border-kraft-terracotta/60 transition-all duration-300 group">
            <div>
              {/* Image Placeholder Kraft */}
              <div 
                onClick={() => navigateTo('coffret-exotique')}
                className="w-full aspect-[16/10] rounded-xl bg-kraft-stone border border-kraft-border flex flex-col items-center justify-center p-6 text-center cursor-pointer group-hover:bg-kraft-border/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white text-kraft-terracotta flex items-center justify-center font-serif font-bold text-xl mb-3 shadow-xs">
                  🌴
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-kraft-ink">
                  {exotique.imagePlaceholder}
                </span>
                <span className="text-[11px] text-kraft-muted mt-1">
                  (Emplacement pour votre visuel de coffret kraft)
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-kraft-terracotta">
                  {exotique.badge}
                </span>
                <span className="text-kraft-muted">
                  33cl • Brassins du moment
                </span>
              </div>

              <h3 
                onClick={() => navigateTo('coffret-exotique')}
                className="font-serif text-2xl font-bold text-kraft-ink mt-2 group-hover:text-kraft-terracotta transition-colors cursor-pointer"
              >
                {exotique.name}
              </h3>
              
              <p className="text-xs text-kraft-muted mt-1">
                {exotique.subtitle}
              </p>

              <p className="text-xs text-kraft-ink/80 mt-3 leading-relaxed">
                {exotique.description}
              </p>

              {/* Composition rapide */}
              <div className="mt-4 p-3 bg-kraft-bg rounded-lg border border-kraft-border/80 text-xs text-kraft-ink space-y-1">
                <p className="font-semibold text-kraft-ink">Les créations de Stéphane :</p>
                <p className="text-kraft-muted">• Brassin Riviera Tropicale (notes mangue & agrumes)</p>
                <p className="text-kraft-muted">• Cuvée au Houblon cultivé sous le soleil de Nice</p>
                <p className="text-kraft-muted">• Blanche Exotique aux fruits de la passion</p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-kraft-border flex items-center justify-between">
              <div>
                <div className="text-xs text-kraft-muted">À partir de</div>
                <div className="text-2xl font-serif font-bold text-kraft-ink">
                  15,00 € <span className="text-xs font-normal text-kraft-muted">(3x33cl)</span>
                </div>
                <div className="text-[11px] text-kraft-terracotta font-medium">
                  ou 26,00 € le pack de 6
                </div>
              </div>

              <button
                onClick={() => navigateTo('coffret-exotique')}
                className="py-3 px-5 rounded-lg bg-kraft-ink text-white hover:bg-kraft-terracotta transition-colors text-xs font-bold flex items-center gap-1.5"
              >
                <span>Commander</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION LES 3 BIÈRES PERMANENTES (ACCÈS AUX FICHES DÉDIÉES) */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-kraft-muted">
              Nos Recettes du Port
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-kraft-ink mt-1">
              Les Bières à l'Unité (33cl • 6,00 €)
            </h2>
          </div>
          <p className="text-xs text-kraft-muted max-w-sm">
            Retrouvez les fiches complètes avec les houblons utilisés, accords mets-bières et histoire de leur brassage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beerList.map((beer) => (
            <div 
              key={beer.slug}
              className="kraft-card p-6 flex flex-col justify-between hover:border-kraft-ink transition-all group"
            >
              <div>
                {/* Image Placeholder */}
                <div 
                  onClick={() => navigateTo(`biere-${beer.slug}`)}
                  className="w-full aspect-[4/3] rounded-lg bg-kraft-stone border border-kraft-border flex flex-col items-center justify-center p-4 text-center cursor-pointer group-hover:bg-kraft-border/30 transition-colors"
                >
                  <span className="text-2xl mb-1">🍺</span>
                  <span className="text-xs font-bold text-kraft-ink">{beer.name}</span>
                  <span className="text-[10px] text-kraft-muted">33cl • {beer.abv}</span>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-kraft-muted">
                  <span className="font-semibold text-kraft-terracotta">{beer.style}</span>
                  <span>{beer.abv}</span>
                </div>

                <h3 
                  onClick={() => navigateTo(`biere-${beer.slug}`)}
                  className="font-serif text-xl font-bold text-kraft-ink mt-1 group-hover:text-kraft-terracotta transition-colors cursor-pointer"
                >
                  {beer.name}
                </h3>

                <p className="text-xs text-kraft-muted mt-2 leading-relaxed">
                  {beer.shortDesc}
                </p>

                <div className="mt-3 text-[11px] text-kraft-ink/70">
                  <strong className="text-kraft-ink">Houblons :</strong> {beer.hops}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-kraft-border flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-kraft-ink">
                  {beer.price.toFixed(2)} €
                </span>

                <button
                  onClick={() => navigateTo(`biere-${beer.slug}`)}
                  className="text-xs font-bold text-kraft-ink hover:text-kraft-terracotta flex items-center gap-1 transition-colors"
                >
                  <span>Fiche détaillée</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BLOCS SOBRES : GROUPE PALOMA & NOS BARS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-kraft-border">
        
        <div className="kraft-card p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-kraft-terracotta">
              Maison Familiale depuis 1948
            </span>
            <h3 className="font-serif text-2xl font-bold text-kraft-ink mt-1">
              L'Histoire du Groupe Paloma
            </h3>
            <p className="text-xs sm:text-sm text-kraft-muted mt-2 leading-relaxed">
              De la trattoria <em>Le Virginie</em> fondée en 1948 par la famille Vannini à la microbrasserie artisanale du Port de Nice créée en 2022. 76 ans de passion culinaire azuréenne.
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => navigateTo('groupe-paloma')}
              className="text-xs font-bold uppercase tracking-wider text-kraft-ink hover:text-kraft-terracotta flex items-center gap-1.5 transition-colors"
            >
              <span>Découvrir notre histoire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="kraft-card p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-kraft-olive">
              Click & Collect Gratuit
            </span>
            <h3 className="font-serif text-2xl font-bold text-kraft-ink mt-1">
              Nos Bars FOAM à Nice
            </h3>
            <p className="text-xs sm:text-sm text-kraft-muted mt-2 leading-relaxed">
              Retirez vos coffrets frais au <strong>Port de Nice (Quai des Deux Emmanuels)</strong> face aux cuves, ou à la <strong>Place du Pin</strong> au cœur du quartier piétonnier.
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => navigateTo('nos-bars')}
              className="text-xs font-bold uppercase tracking-wider text-kraft-ink hover:text-kraft-terracotta flex items-center gap-1.5 transition-colors"
            >
              <span>Voir les adresses & horaires</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}
