import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Beer, Package, Waves } from 'lucide-react';
import { SETS } from '../data/products';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  const navigate = useNavigate();
  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION RIVIERA RÉTRO & HÉRITAGE PORTUAIRE */}
      <section className="relative overflow-hidden bg-[#FAF6F0] pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-foam-border">
        
        {/* Subtle warm Mediterranean sunlight overlay */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-foam-goldSoft rounded-full blur-3xl pointer-events-none opacity-60" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-foam-terracottaSoft rounded-full blur-3xl pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Expressive Warm Retro Serif & Sun-drenched Narrative */}
            <ScrollReveal animation="fade-up" delay={40} className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* Expressive Warm Retro Serif Title */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foam-navy leading-[1.12] tracking-tight">
                La bière artisanale de la Riviera, <span className="italic font-normal text-foam-terracotta">brassée sous le soleil</span> du Port de Nice.
              </h1>

              <p className="text-base sm:text-lg text-foam-text font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Face aux pointus colorés du Quai des Deux Emmanuels, Stéphane brasse nos recettes méditerranéennes avec amour et authenticité. 
                Commandez nos coffrets dégustation prêts à offrir avec <strong className="text-foam-navy font-semibold">Retrait Click & Collect GRATUIT</strong> dans nos 2 bars à Nice ou livraison soignée chez vous.
              </p>

              {/* Warm Dual CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/coffrets"
                  className="btn-riviera-terracotta w-full sm:w-auto text-sm sm:text-base"
                >
                  <Package className="w-5 h-5 stroke-[2]" />
                  <span>Découvrir nos Coffrets Cadeaux</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/bieres"
                  className="btn-riviera-outline w-full sm:w-auto text-sm sm:text-base"
                >
                  <Beer className="w-5 h-5 text-foam-terracotta stroke-[2]" />
                  <span>Découvrir nos Bières Artisanales</span>
                </Link>
              </div>

              {/* Click & Collect note */}
              <p className="text-xs text-foam-pine font-medium flex items-center justify-center lg:justify-start gap-1.5">
                <MapPin className="w-4 h-4 shrink-0 text-foam-terracotta" />
                <span>Retrait gratuit 0 € disponible sous 2h aux bars FOAM Port et Place du Pin</span>
              </p>

            </ScrollReveal>

            {/* Right Column: Trio de Bouteilles Artisanales FOAM (Détourage Studio Haute Définition) */}
            <ScrollReveal animation="scale-up" delay={120} className="lg:col-span-5 flex items-center justify-center">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none w-full flex flex-col items-center justify-center py-2 sm:py-4">
                
                {/* Halo chaud Riviera en arrière-plan */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-foam-goldSoft/60 via-foam-terracottaSoft/40 to-transparent blur-3xl opacity-80" />
                </div>

                {/* Trio de bouteilles détourées haute fidélité */}
                <div className="relative z-10 flex flex-col items-center select-none">
                  <img
                    src="/foam-3-bottles-hd.png"
                    alt="Trio de bières artisanales FOAM Nice - French IPA, Lou FOAM d'Aqui, Wheat Ale"
                    className="h-[380px] sm:h-[450px] lg:h-[500px] w-auto object-contain filter drop-shadow-[0_22px_28px_rgba(15,37,55,0.16)]"
                    loading="eager"
                  />
                  {/* Ombre portée douce de contact au sol */}
                  <div className="w-60 sm:w-72 h-5 bg-foam-navy/22 rounded-full blur-md -mt-2.5" />
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* 3 Pillars Trust Bar (Ensoleillée & Portuaire) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-10 border-t border-foam-borderWarm/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <ScrollReveal delay={0}>
              <div 
                onClick={() => navigate('/bieres')}
                className="p-4 rounded-2xl bg-white border border-foam-border flex items-center gap-3.5 shadow-riviera-card cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-foam-terracottaSoft text-foam-terracotta flex items-center justify-center shrink-0 border border-foam-terracotta/20 group-hover:scale-105 transition-transform">
                  <Beer className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foam-navy group-hover:text-foam-terracotta transition-colors">Microbrasserie du Port</h4>
                  <p className="text-xs text-foam-muted font-normal">Brassé sur place au Quai des Deux Emmanuels</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div 
                onClick={() => navigate('/nos-bars')}
                className="p-4 rounded-2xl bg-white border border-foam-border flex items-center gap-3.5 shadow-riviera-card cursor-pointer hover:border-foam-pine/50 hover:shadow-riviera transition-all duration-300 group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-foam-pineSoft text-foam-pine flex items-center justify-center shrink-0 border border-foam-pine/20 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foam-navy group-hover:text-foam-pine transition-colors">Click & Collect Gratuit 0 €</h4>
                  <p className="text-xs text-foam-muted font-normal">Retrait immédiat sous 2h au Port et Place du Pin</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div 
                onClick={() => navigate('/coffrets')}
                className="p-4 rounded-2xl bg-white border border-foam-border flex items-center gap-3.5 shadow-riviera-card cursor-pointer hover:border-foam-gold/50 hover:shadow-riviera transition-all duration-300 group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-foam-goldSoft text-foam-gold flex items-center justify-center shrink-0 border border-foam-gold/20 group-hover:scale-105 transition-transform">
                  <Package className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foam-navy group-hover:text-foam-gold transition-colors">Étuis Carton Kraft Rigides</h4>
                  <p className="text-xs text-foam-muted font-normal">Protection anti-casse écoresponsable</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </section>


      {/* 2. SECTION COFFRETS CADEAUX (GRILLE CHALEUREUSE RIVIERA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foam-navy">
            Nos Deux Coffrets de la Riviera
          </h2>
          <p className="text-sm sm:text-base text-foam-text leading-relaxed">
            Chaque coffret est disponible en format <strong>Pack de 3</strong> ou <strong>Pack de 6 bouteilles</strong>, prêt à offrir dans son étui carton kraft rigide écoresponsable.
          </p>
          <div className="pt-1">
            <Link to="/coffrets" className="text-xs font-bold text-foam-terracotta hover:underline inline-flex items-center gap-1 font-serif italic text-sm">
              <span>Consulter la page récapitulative de toutes nos offres →</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* CARTE 1 : COFFRET DÉCOUVERTE */}
          <ScrollReveal delay={0}>
            <div 
              onClick={() => navigate('/coffrets/decouverte')}
              className="card-riviera p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 h-full"
            >
              <div className="space-y-5">
                
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-foam-subtle border border-foam-borderWarm/60 relative">
                  <img
                    src={decouverte.image}
                    alt={decouverte.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foam-terracotta">
                    {decouverte.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors mt-1">
                    {decouverte.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foam-text mt-2 leading-relaxed">
                    {decouverte.description}
                  </p>
                </div>

                {/* Inclus dans le coffret */}
                <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60 space-y-2 text-xs">
                  <strong className="text-foam-navy font-serif font-bold block text-sm">
                    Les 3 bières permanentes de Stéphane incluses :
                  </strong>
                  <ul className="space-y-1.5 text-foam-text">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foam-terracotta shrink-0" />
                      <span><strong>FOAM French IPA</strong> (Houblonnée & fruitée)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foam-gold shrink-0" />
                      <span><strong>Lou FOAM d’Aqui</strong> (Blonde fraîche & désaltérante)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foam-pine shrink-0" />
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
                  <span className="text-[11px] text-foam-pine font-semibold">Click & Collect 0 € sous 2h</span>
                </div>

                <div className="btn-riviera-terracotta text-xs sm:text-sm flex items-center gap-2 group-hover:shadow-terracotta-glow transition-all">
                  <span>Découvrir l'offre</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARTE 2 : COFFRET EXOTIQUE */}
          <ScrollReveal delay={140}>
            <div 
              onClick={() => navigate('/coffrets/exotique')}
              className="card-riviera p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:border-foam-pine/50 hover:shadow-riviera transition-all duration-300 h-full"
            >
              <div className="space-y-5">
                
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-foam-subtle border border-foam-borderWarm/60 relative">
                  <img
                    src={exotique.image}
                    alt={exotique.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foam-pine">
                    {exotique.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-pine transition-colors mt-1">
                    {exotique.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foam-text mt-2 leading-relaxed">
                    {exotique.description}
                  </p>
                </div>

                {/* Inclus dans le coffret exotique */}
                <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60 space-y-2 text-xs">
                  <strong className="text-foam-navy font-serif font-bold block text-sm">
                    Cuvées incluses dans le coffret :
                  </strong>
                  <ul className="space-y-1.5 text-foam-text">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foam-gold shrink-0" />
                      <span><strong>Lou FOAM d’Aqui</strong> (Blonde fraîche & maltée)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foam-pine shrink-0" />
                      <span><strong>FOAM Wheat Ale</strong> (Froment doux & agrumes)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foam-terracotta shrink-0" />
                      <span><strong>FOAM French IPA</strong> (Houblonnée & fruitée)</span>
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
                  <span className="text-[11px] text-foam-pine font-semibold">Édition limitée du brasseur</span>
                </div>

                <div className="btn-riviera-navy text-xs sm:text-sm flex items-center gap-2 group-hover:bg-foam-pine transition-colors">
                  <span>Découvrir l'offre</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </section>


      {/* 3. BANNIÈRES PALOMA 1948 & NOS BARS (ÉLÉGANCE RIVIERA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Carte Groupe Paloma 1948 */}
        <ScrollReveal delay={0}>
          <div 
            onClick={() => navigate('/groupe-paloma')}
            className="rounded-2xl bg-foam-navy text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-riviera relative overflow-hidden group cursor-pointer hover:ring-2 hover:ring-foam-gold/50 hover:shadow-2xl transition-all duration-300 h-full"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                Maison Paloma • Depuis 1948
              </h3>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-foam-gold">
                76 Ans d'Amour Culinaire & d'Artisanat Azuréen
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                De la trattoria historique <em>Le Virginie</em> fondée en 1948 au Port de Nice par la famille Vannini jusqu’à l'inauguration de la microbrasserie FOAM en 2022. Découvrez pourquoi nous sommes l’un des rares groupes de restauration à brasser nos propres bières sur place.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white text-foam-navy group-hover:bg-foam-terracotta group-hover:text-white font-bold text-xs self-start transition-all shadow-xs">
              <span>Découvrir l'Histoire du Groupe Paloma</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </ScrollReveal>

        {/* Carte Nos Bars à Nice */}
        <ScrollReveal delay={140}>
          <div 
            onClick={() => navigate('/nos-bars')}
            className="card-riviera p-8 sm:p-10 flex flex-col justify-between space-y-6 group cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 h-full"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors leading-tight">
                Nos 2 Bars FOAM au Port et Place du Pin
              </h3>
              <p className="text-xs sm:text-sm text-foam-text leading-relaxed font-sans">
                Venez savourer nos bières fraîches à la pression sur nos terrasses ensoleillées ou retirez vos commandes de coffrets gratuitement sous 2h. Cuves inox visibles au Port, ambiance festive sous les pins de la Place du Pin.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-foam-navy group-hover:bg-foam-terracotta text-white font-bold text-xs self-start transition-all shadow-xs">
              <span>Voir les adresses, horaires & terrasses</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </ScrollReveal>

      </section>

    </div>
  );
}
