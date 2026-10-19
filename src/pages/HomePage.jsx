import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Beer, Package, Star, ShieldCheck, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { SETS } from '../data/products';

export default function HomePage() {
  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION CRAFT BRUT (QUAI D'ATELIER & MICROBRASSERIE) */}
      <section className="relative overflow-hidden bg-foam-bg pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-foam-border">
        
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#15191E_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-foam-border text-foam-navy text-[11px] font-bold uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-foam-red" />
                <span>Microbrasserie du Port • Quai des Deux Emmanuels</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-foam-navy leading-[1.12] tracking-tight">
                La bière artisanale du Port de Nice, <span className="text-foam-red">en direct</span> de nos cuves.
              </h1>

              <p className="text-base sm:text-lg text-foam-text font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Brassée au Quai des Deux Emmanuels par Stéphane, notre maître brasseur. 
                Commandez nos coffrets dégustation prêts à offrir avec <strong className="text-foam-navy font-bold">Retrait Click & Collect GRATUIT</strong> dans nos 2 bars à Nice ou expédition soignée anti-casse.
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
                  className="w-full sm:w-auto py-4 px-8 rounded-lg bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-shopify hover:shadow-craft-flat-red transition-all transform active:scale-98"
                >
                  <Package className="w-5 h-5" />
                  <span>Découvrir nos Offres de Coffrets</span>
                </Link>

                <Link
                  to="/bieres"
                  className="w-full sm:w-auto py-4 px-7 rounded-lg bg-white hover:bg-foam-subtle text-foam-navy font-bold text-sm sm:text-base border border-foam-border hover:border-foam-navy transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Beer className="w-5 h-5 text-foam-red" />
                  <span>Découvrir nos Bières Artisanales</span>
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

                <div className="rounded-xl bg-white border border-foam-border p-5 shadow-shopify space-y-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-foam-subtle relative border border-foam-border/60">
                    <img
                      src={decouverte.image}
                      alt="Coffret Découverte bières artisanales FOAM Nice"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foam-navy/85 via-foam-navy/25 to-transparent flex items-end p-5">
                      <div className="text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-200 block mb-1">
                          Prêt à offrir ou à partager
                        </span>
                        <h3 className="font-serif text-xl font-bold">
                          Coffret Découverte 3 ou 6 bières
                        </h3>
                        <p className="text-xs text-slate-200 mt-0.5">
                          French IPA • Lou FOAM d’Aqui • Wheat Ale
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <div>
                      <span className="text-foam-muted block text-[11px]">Format au choix</span>
                      <strong className="text-foam-navy font-bold text-sm">Pack de 3 ou 6 bouteilles</strong>
                    </div>

                    <Link
                      to="/coffrets/decouverte"
                      className="py-2.5 px-5 rounded-lg bg-foam-red hover:bg-foam-redDark text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Découvrir l'offre</span>
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
            <div className="p-4 rounded-xl bg-white border border-foam-border flex items-center gap-3.5 shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-foam-redSoft text-foam-red flex items-center justify-center shrink-0 border border-foam-redBorder/40">
                <Beer className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-navy">Brassée au Port de Nice</h4>
                <p className="text-xs text-foam-muted">Par Stéphane au Quai des Deux Emmanuels</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-foam-border flex items-center gap-3.5 shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-foam-oliveSoft text-foam-olive flex items-center justify-center shrink-0 border border-foam-olive/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-navy">Click & Collect 0 €</h4>
                <p className="text-xs text-foam-muted">Retrait immédiat au Port et Place du Pin</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-foam-border flex items-center gap-3.5 shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-foam-subtle text-foam-navy flex items-center justify-center shrink-0 border border-foam-border">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-navy">Étuis Carton Kraft Rigides</h4>
                <p className="text-xs text-foam-muted">Protection anti-casse recyclable</p>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* 2. SECTION COFFRETS CADEAUX (PAGES DE VENTE DÉDIÉES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-foam-subtle border border-foam-border text-foam-navy text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-foam-red" />
            <span>Sélection Cadeaux & Dégustation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-foam-navy">
            Nos Deux Coffrets de la Riviera
          </h2>
          <p className="text-sm sm:text-base text-foam-text leading-relaxed">
            Chaque coffret est disponible en format <strong>Pack de 3</strong> ou <strong>Pack de 6 bouteilles</strong>, prêt à offrir dans son étui carton kraft rigide écoresponsable.
          </p>
          <div className="pt-1">
            <Link to="/coffrets" className="text-xs font-bold text-foam-red hover:underline inline-flex items-center gap-1">
              <span>Consulter la page récapitulative de toutes nos offres</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* CARTE COFFRET DÉCOUVERTE */}
          <div className="rounded-xl bg-white border border-foam-border hover:border-foam-red p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
            <div className="space-y-5">
              
              <div className="aspect-[16/10] rounded-lg overflow-hidden bg-foam-subtle border border-foam-border relative">
                <img
                  src={decouverte.image}
                  alt={decouverte.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-foam-navy text-white text-[10px] font-bold uppercase tracking-wider">
                  Incontournable
                </span>
              </div>

              <div>
                <p className="text-[11px] font-bold text-foam-red uppercase tracking-wider">
                  {decouverte.subtitle}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-red transition-colors mt-0.5">
                  {decouverte.name}
                </h3>
                <p className="text-xs sm:text-sm text-foam-text mt-2.5 leading-relaxed">
                  {decouverte.description}
                </p>
              </div>

              {/* Inclus dans le coffret */}
              <div className="p-4 rounded-lg bg-foam-subtle/60 border border-foam-border space-y-2 text-xs">
                <strong className="text-foam-navy block uppercase tracking-wider text-[11px]">
                  Les 3 bières permanentes de Stéphane incluses :
                </strong>
                <ul className="space-y-1.5 text-foam-text">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-red shrink-0" />
                    <span><strong>FOAM French IPA</strong> (Houblonnée & fruitée)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-gold shrink-0" />
                    <span><strong>Lou FOAM d’Aqui</strong> (Blonde fraîche & désaltérante)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-olive shrink-0" />
                    <span><strong>FOAM Wheat Ale</strong> (Froment doux aux agrumes)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-foam-border flex items-center justify-between">
              <div>
                <span className="text-xs text-foam-muted block">Format au choix</span>
                <div className="font-serif text-lg font-bold text-foam-navy">
                  Pack de 3 ou 6 bières
                </div>
                <span className="text-[11px] text-foam-olive font-semibold">Click & Collect 0 € sous 2h</span>
              </div>

              <Link
                to="/coffrets/decouverte"
                className="py-3 px-5 rounded-lg bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Découvrir l'offre</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CARTE COFFRET EXOTIQUE */}
          <div className="rounded-xl bg-white border border-foam-border hover:border-foam-navy p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
            <div className="space-y-5">
              
              <div className="aspect-[16/10] rounded-lg overflow-hidden bg-foam-subtle border border-foam-border relative">
                <img
                  src={exotique.image}
                  alt={exotique.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-foam-navy text-white text-[10px] font-bold uppercase tracking-wider">
                  Cuvée Rare
                </span>
              </div>

              <div>
                <p className="text-[11px] font-bold text-foam-olive uppercase tracking-wider">
                  {exotique.subtitle}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-navyLight transition-colors mt-0.5">
                  {exotique.name}
                </h3>
                <p className="text-xs sm:text-sm text-foam-text mt-2.5 leading-relaxed">
                  {exotique.description}
                </p>
              </div>

              {/* Inclus dans le coffret exotique */}
              <div className="p-4 rounded-lg bg-foam-subtle/60 border border-foam-border space-y-2 text-xs">
                <strong className="text-foam-navy block uppercase tracking-wider text-[11px]">
                  Cuvées éphémères du Brasseur incluses :
                </strong>
                <ul className="space-y-1.5 text-foam-text">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-navy shrink-0" />
                    <span><strong>Brassin Riviera Tropicale</strong> (Mangue & fruits de la passion)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-gold shrink-0" />
                    <span><strong>Cuvée Houblon Niçois Solaire</strong> (Houblons cultivés à Nice)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foam-red shrink-0" />
                    <span><strong>Blanche Exotique Éphémère</strong> (Zestes d'agrumes rares)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-foam-border flex items-center justify-between">
              <div>
                <span className="text-xs text-foam-muted block">Format au choix</span>
                <div className="font-serif text-lg font-bold text-foam-navy">
                  Pack de 3 ou 6 bières
                </div>
                <span className="text-[11px] text-foam-olive font-semibold">Édition limitée du brasseur</span>
              </div>

              <Link
                to="/coffrets/exotique"
                className="py-3 px-5 rounded-lg bg-foam-navy hover:bg-foam-navyLight text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Découvrir l'offre</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </section>


      {/* 4. BANNIÈRES PALOMA 1948 & NOS BARS (QUAI D'ATELIER & CRAFT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Carte Groupe Paloma 1948 */}
        <div className="rounded-xl bg-foam-navy text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-shopify border border-white/10 relative overflow-hidden">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-amber-200 text-[10px] font-bold uppercase tracking-widest border border-white/15">
              <span>Maison Familiale Fondée en 1948</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              76 Ans d'Amour Culinaire & d'Artisanat Azuréen
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              De la trattoria historique <em>Le Virginie</em> fondée en 1948 au Port de Nice par la famille Vannini jusqu’à l'inauguration de la microbrasserie FOAM en 2022. Découvrez pourquoi nous sommes l’un des rares groupes de restauration à brasser nos propres bières sur place.
            </p>
          </div>

          <Link
            to="/groupe-paloma"
            className="inline-flex items-center gap-2 py-3 px-5 rounded-lg bg-white text-foam-navy hover:bg-foam-red hover:text-white font-bold text-xs self-start transition-all shadow-xs"
          >
            <span>Découvrir l'Histoire du Groupe Paloma</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Carte Nos Bars à Nice */}
        <div className="rounded-xl bg-white border border-foam-border p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-shopify">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-foam-subtle text-foam-navy text-[10px] font-bold uppercase tracking-widest border border-foam-border">
              <span>Click & Collect Gratuit 0 €</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy leading-tight">
              Nos 2 Bars FOAM au Port et Place du Pin
            </h3>
            <p className="text-xs sm:text-sm text-foam-text leading-relaxed">
              Venez savourer nos bières fraîches à la pression sur nos terrasses ensoleillées ou retirez vos commandes de coffrets gratuitement sous 2h. Cuves inox visibles au Port, ambiance festive sous les pins de la Place du Pin.
            </p>
          </div>

          <Link
            to="/nos-bars"
            className="inline-flex items-center gap-2 py-3 px-5 rounded-lg bg-foam-navy hover:bg-foam-navyLight text-white font-bold text-xs self-start transition-all shadow-xs"
          >
            <span>Voir les adresses, horaires & terrasses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>

    </div>
  );
}
