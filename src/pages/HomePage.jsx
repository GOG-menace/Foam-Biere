import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Beer, Package, Star, ShieldCheck, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { SETS, BEERS } from '../data/products';

export default function HomePage() {
  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];
  const beers = Object.values(BEERS);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION ORIENTÉE CONVERSION (DNVB / SHOPIFY STYLE) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foam-redSoft/60 via-foam-bg to-foam-bg pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-foam-border/60">
        
        {/* Subtle decorative Mediterranean red light glow */}
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-foam-red/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-foam-red/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              <p className="text-xs font-bold uppercase tracking-widest text-foam-red">
                Microbrasserie du Port de Nice • Groupe Paloma (1948)
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-foam-navy leading-[1.12] tracking-tight">
                La bière artisanale du Port de Nice, <span className="text-foam-red underline decoration-foam-red/40">en direct</span> de nos cuves.
              </h1>

              <p className="text-base sm:text-lg text-foam-text font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Brassée au Quai des Deux Emmanuels par Stéphane, notre maître brasseur. 
                Commandez nos coffrets dégustation prêts à offrir avec <strong className="text-foam-navy font-bold">Retrait Click & Collect GRATUIT</strong> dans nos 2 bars à Nice ou livraison sécurisée anti-casse.
              </p>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-foam-muted font-medium pt-1">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-foam-navy text-sm">4.9 / 5</span>
                <span className="text-foam-border">•</span>
                <span className="text-foam-text font-medium">Plus de 1 200 dégustations par semaine au bar du Port</span>
              </div>

              {/* Dual CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/coffrets"
                  className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-shopify hover:shadow-red-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Package className="w-5 h-5" />
                  <span>Découvrir nos Offres de Coffrets (Dès 15 €)</span>
                </Link>

                <Link
                  to="/bieres"
                  className="w-full sm:w-auto py-4 px-7 rounded-2xl bg-white hover:bg-foam-subtle text-foam-navy font-bold text-sm sm:text-base border-2 border-foam-navy/20 hover:border-foam-navy transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Beer className="w-5 h-5 text-foam-red" />
                  <span>Découvrir nos 3 Bières à l'Unité</span>
                </Link>
              </div>

              {/* Click & collect note */}
              <p className="text-xs text-foam-olive font-semibold flex items-center justify-center lg:justify-start gap-1.5">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Retrait gratuit 0 € disponible sous 2h aux bars FOAM Port et Place du Pin</span>
              </p>

            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">

                <div className="rounded-3xl bg-white border border-foam-border p-4 shadow-shopify-hover space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-foam-subtle relative">
                    <img
                      src={decouverte.image}
                      alt="Coffret Découverte bières artisanales FOAM Nice"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foam-navy/80 via-transparent to-transparent flex items-end p-5">
                      <div className="text-white">
                        <h3 className="font-serif text-xl font-bold">
                          Coffret Découverte 3 ou 6 bières
                        </h3>
                        <p className="text-xs text-slate-200">
                          West Coast IPA • Lager Dorée • Blanche Riviera
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <div>
                      <span className="text-foam-muted block text-[11px]">Format au choix</span>
                      <strong className="text-foam-navy font-bold text-sm">Pack 3 (15 €) • Pack 6 (26 €)</strong>
                    </div>

                    <Link
                      to="/coffrets/decouverte"
                      className="py-2.5 px-4 rounded-xl bg-foam-red hover:bg-foam-redDark text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Commander</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars Trust Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-foam-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-2xl bg-white border border-foam-border flex items-center gap-3.5 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-foam-redSoft text-foam-red flex items-center justify-center shrink-0">
                <Beer className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-navy">Brassée au Port de Nice</h4>
                <p className="text-xs text-foam-muted">Par Stéphane au Quai des Deux Emmanuels</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-foam-oliveSoft border border-foam-olive/30 flex items-center gap-3.5 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-foam-olive text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-olive">Click & Collect 0 €</h4>
                <p className="text-xs text-foam-olive font-medium">Retrait immédiat au Port et Place du Pin</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-foam-border flex items-center gap-3.5 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-foam-goldSoft text-foam-gold flex items-center justify-center shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-navy">Étuis Cadeau Rigides</h4>
                <p className="text-xs text-foam-muted">Protection anti-casse recyclable</p>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* 2. SECTION COFFRETS CADEAUX (PAGES DE VENTE DÉDIÉES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-foam-red">
            Gamme Coffrets Cadeaux
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-foam-navy">
            Nos Coffrets Dégustation
          </h2>
          <p className="text-sm sm:text-base text-foam-text leading-relaxed">
            Chaque coffret est disponible en format <strong>3 bouteilles (15,00 €)</strong> ou <strong>6 bouteilles (26,00 €)</strong>. 
            <Link to="/coffrets" className="text-xs font-bold text-foam-red hover:underline block mt-1.5">
              Accéder à la page de toutes nos offres de coffrets →
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* CARTE COFFRET DÉCOUVERTE */}
          <div className="rounded-3xl bg-white border-2 border-foam-border hover:border-foam-red p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-foam-subtle border border-foam-border">
                <img
                  src={decouverte.image}
                  alt={decouverte.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-red transition-colors">
                  {decouverte.name}
                </h3>
                <p className="text-xs font-bold text-foam-red uppercase tracking-wider mt-0.5">
                  {decouverte.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-foam-text mt-3 leading-relaxed">
                  {decouverte.description}
                </p>
              </div>

              {/* Inclus dans le coffret */}
              <div className="p-4 rounded-xl bg-foam-bg border border-foam-border space-y-2 text-xs">
                <strong className="text-foam-navy block uppercase tracking-wider text-[11px]">
                  Les 3 bières permanentes incluses :
                </strong>
                <ul className="space-y-1.5 text-foam-text">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-red" />
                    <span><strong>FOAM West Coast IPA</strong> (Houblonnée & résineuse)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-gold" />
                    <span><strong>FOAM Lager</strong> (Blonde florale & désaltérante)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-olive" />
                    <span><strong>FOAM Blanche</strong> (Bière de froment aux agrumes doux)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-foam-border flex items-center justify-between">
              <div>
                <span className="text-xs text-foam-muted">À partir de</span>
                <div className="font-serif text-2xl font-black text-foam-navy">
                  15,00 € <span className="text-xs font-normal text-foam-muted">les 3 x 33cl</span>
                </div>
                <span className="text-[11px] text-foam-red font-bold">26,00 € le pack de 6 (-10 €)</span>
              </div>

              <Link
                to="/coffrets/decouverte"
                className="py-3.5 px-6 rounded-xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Accéder à la page de vente</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CARTE COFFRET EXOTIQUE */}
          <div className="rounded-3xl bg-white border-2 border-foam-border hover:border-foam-olive p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-foam-subtle border border-foam-border">
                <img
                  src={exotique.image}
                  alt={exotique.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-olive transition-colors">
                  {exotique.name}
                </h3>
                <p className="text-xs font-bold text-foam-olive uppercase tracking-wider mt-0.5">
                  {exotique.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-foam-text mt-3 leading-relaxed">
                  {exotique.description}
                </p>
              </div>

              {/* Inclus dans le coffret exotique */}
              <div className="p-4 rounded-xl bg-foam-bg border border-foam-border space-y-2 text-xs">
                <strong className="text-foam-navy block uppercase tracking-wider text-[11px]">
                  Cuvées éphémères du Brasseur incluses :
                </strong>
                <ul className="space-y-1.5 text-foam-text">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span><strong>Brassin Riviera Tropicale</strong> (Mangue & fruits de la passion)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    <span><strong>Cuvée Houblon Niçois Solaire</strong> (Houblons cultivés à Nice)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    <span><strong>Blanche Exotique Éphémère</strong> (Zestes d'agrumes rares)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-foam-border flex items-center justify-between">
              <div>
                <span className="text-xs text-foam-muted">À partir de</span>
                <div className="font-serif text-2xl font-black text-foam-navy">
                  15,00 € <span className="text-xs font-normal text-foam-muted">les 3 x 33cl</span>
                </div>
                <span className="text-[11px] text-foam-olive font-bold">26,00 € le pack de 6 (-10 €)</span>
              </div>

              <Link
                to="/coffrets/exotique"
                className="py-3.5 px-6 rounded-xl bg-foam-navy hover:bg-foam-navyLight text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Accéder à la page de vente</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </section>


      {/* 3. SECTION LES 3 BIÈRES PERMANENTES (PAGES PRODUITS INDIVIDUELLES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-foam-border pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-foam-muted">
              Les Bières du Port de Nice à l'Unité (33cl • 6,00 €)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foam-navy mt-1">
              Les 3 Créations Permanentes de Stéphane
            </h2>
          </div>
          <Link
            to="/bieres"
            className="text-xs font-bold text-foam-red hover:text-foam-redDark flex items-center gap-1"
          >
            <span>Voir toute la gamme et comparatif</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {beers.map((beer) => (
            <div
              key={beer.slug}
              className="rounded-3xl bg-white border border-foam-border hover:border-foam-navy/40 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="aspect-[4/3] bg-foam-subtle overflow-hidden">
                  <img
                    src={beer.image}
                    alt={beer.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-foam-red uppercase tracking-wider">{beer.style}</span>
                    <span className="text-foam-navy font-semibold">{beer.abv} • IBU {beer.ibu}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-foam-navy group-hover:text-foam-red transition-colors">
                    {beer.name}
                  </h3>

                  <p className="text-xs text-foam-text leading-relaxed">
                    {beer.shortDesc}
                  </p>

                  <div className="pt-2 text-xs text-foam-navy">
                    <strong className="text-foam-muted font-semibold">Houblons : </strong>
                    <span className="font-bold">{beer.hops}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-foam-border/60 flex items-center justify-between mt-4">
                <span className="font-serif text-2xl font-bold text-foam-navy">
                  {beer.price.toFixed(2)} €
                </span>

                <Link
                  to={`/bieres/${beer.slug}`}
                  className="py-2.5 px-4 rounded-xl bg-foam-navy hover:bg-foam-red text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Fiche Produit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* 4. BANNIÈRES PALOMA 1948 & NOS BARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="rounded-3xl bg-foam-navy text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-shopify">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-foam-redSoft">
              Caution Groupe Paloma • Maison Familiale Fondée en 1948
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              76 Ans de Passion Culinaire Azuréenne
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              De la trattoria <em>Le Virginie</em> fondée en 1948 au Port de Nice par la famille Vannini jusqu’à l'inauguration de la microbrasserie FOAM en 2022. Découvrez pourquoi nous sommes l’un des rares groupes de restauration à brasser nos propres bières sur place.
            </p>
          </div>

          <Link
            to="/groupe-paloma"
            className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white text-foam-navy hover:bg-foam-red hover:text-white font-bold text-xs self-start transition-colors"
          >
            <span>Découvrir l'Histoire du Groupe Paloma</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="rounded-3xl bg-foam-oliveSoft border-2 border-foam-olive/30 p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-shopify">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-foam-olive">
              Click & Collect Gratuit 0 €
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy">
              Nos 2 Bars FOAM au Port et Place du Pin
            </h3>
            <p className="text-xs sm:text-sm text-foam-text leading-relaxed">
              Venez déguster nos bières à la pression sur nos terrasses ou retirez vos commandes de coffrets gratuitement sous 2h. Cuves inox visibles au Port, ambiance festive sous les pins de la Place du Pin.
            </p>
          </div>

          <Link
            to="/nos-bars"
            className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-foam-olive hover:bg-emerald-900 text-white font-bold text-xs self-start transition-colors"
          >
            <span>Voir les adresses, horaires & spécificités</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>

    </div>
  );
}
