import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Beer, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function PalomaPage() {
  const navigate = useNavigate();

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      
      {/* Header Riviera Rétro */}
      <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foam-navy leading-tight">
          L'Histoire du Groupe Paloma & de FOAM
        </h1>
        <p className="text-base text-foam-text font-medium leading-relaxed">
          76 ans d'hospitalité, d'amour de la gastronomie et d'artisanat indépendant sur la Côte d'Azur.
        </p>
      </ScrollReveal>

      {/* Main Narrative Card Riviera */}
      <div className="card-riviera p-8 sm:p-14 space-y-8 text-foam-text text-sm sm:text-base leading-relaxed font-sans">
        
        {/* Quote Block */}
        <ScrollReveal delay={0}>
          <div className="border-l-4 border-foam-terracotta pl-5 sm:pl-7 py-3 italic font-serif text-lg sm:text-xl text-foam-navy font-semibold bg-foam-terracottaSoft rounded-r-2xl">
            « De la trattoria historique Le Virginie en 1948 jusqu'aux cuves de notre microbrasserie du Port en 2022, une même passion guide la famille Vannini : le goût du partage et l'authenticité niçoise. »
          </div>
        </ScrollReveal>

        {/* Chapter 1 : 1948 */}
        <ScrollReveal delay={80}>
          <div className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy flex items-center gap-2">
              <span className="text-foam-terracotta font-serif">1948 :</span> Une dynastie de restaurateurs niçois
            </h2>
            <p>
              L’aventure commence au lendemain de la Seconde Guerre mondiale avec l’ouverture de la célèbre trattoria <em>Le Virginie</em> au Port de Nice. Fondée par la <strong>famille Vannini</strong>, la maison a grandi au fil des décennies en préservant scrupuleusement son indépendance, sa convivialité et son attachement viscéral au terroir méditerranéen.
            </p>
            <p>
              Aujourd’hui fédéré sous le nom de <strong>Groupe Paloma</strong>, ce groupe familial indépendant rassemble plusieurs des établissements les plus vivants de la gastronomie et de la fête azuréenne, toujours guidés par l'accueil bienveillant et la fraîcheur des produits.
            </p>
          </div>
        </ScrollReveal>

        {/* Chapter 2 : 2022 FOAM (100% Clickable to /bieres) */}
        <ScrollReveal delay={120}>
          <div 
            onClick={() => navigate('/bieres')}
            className="p-6 sm:p-8 bg-foam-subtle/70 rounded-2xl border border-foam-borderWarm/60 space-y-4 cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-foam-navy font-serif font-bold text-xl group-hover:text-foam-terracotta transition-colors">
                <Beer className="w-6 h-6 text-foam-terracotta stroke-[2] group-hover:scale-110 transition-transform" />
                <span>2022 : La Naissance de la Microbrasserie FOAM au Port</span>
              </div>
              <ArrowRight className="w-5 h-5 text-foam-muted group-hover:text-foam-terracotta group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-sm text-foam-text leading-relaxed">
              Parce que nous voulions maîtriser l'ensemble de notre chaîne de valeur et offrir à nos clients une bière d’une fraîcheur absolue, nous avons franchi le pas en installant notre propre microbrasserie au <strong>3 Quai des Deux Emmanuels</strong>, face aux pointus colorés du Port de Nice.
            </p>
            <p className="text-sm font-semibold leading-relaxed text-foam-navy">
              FOAM fait ainsi partie des très rares acteurs de la restauration indépendante en France à brasser et embouteiller sa propre bière sur place, en circuit ultra-court.
            </p>
          </div>
        </ScrollReveal>

        {/* Chapter 3 : Stéphane */}
        <ScrollReveal delay={80}>
          <div className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy flex items-center gap-2">
              <span className="text-foam-pine font-serif">Le Brasseur :</span> Stéphane et les saveurs de la Riviera
            </h2>
            <p>
              Toutes les créations FOAM sont imaginées et brassées par <strong>Stéphane</strong>, notre maître brasseur. Chaque recette célèbre la lumière et les saveurs de la Riviera : de l'aromatique fruitée de la <em>FOAM French IPA</em> à la douceur veloutée de la <em>FOAM Wheat Ale</em> aux agrumes, jusqu'à la fraîcheur dorée de <em>Lou FOAM d'Aqui</em>.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Pillars of Commitment (Clickable) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-foam-border">
          <ScrollReveal delay={0}>
            <div 
              onClick={() => navigate('/nos-bars')}
              className="p-4 bg-white rounded-xl border border-foam-border shadow-xs space-y-1 cursor-pointer hover:border-foam-pine/60 hover:shadow-riviera transition-all duration-300 group h-full"
            >
              <strong className="text-xs font-serif font-bold uppercase tracking-wider text-foam-navy flex items-center gap-1.5 group-hover:text-foam-pine transition-colors">
                <CheckCircle2 className="w-4 h-4 text-foam-pine group-hover:scale-110 transition-transform" />
                Circuit Ultra-Court
              </strong>
              <p className="text-xs text-foam-muted font-sans">
                Brassée au port, bue au bar ou emportée directement chez vous en Click & Collect.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div 
              onClick={() => navigate('/bieres')}
              className="p-4 bg-white rounded-xl border border-foam-border shadow-xs space-y-1 cursor-pointer hover:border-foam-gold/60 hover:shadow-riviera transition-all duration-300 group h-full"
            >
              <strong className="text-xs font-serif font-bold uppercase tracking-wider text-foam-navy flex items-center gap-1.5 group-hover:text-foam-gold transition-colors">
                <CheckCircle2 className="w-4 h-4 text-foam-gold group-hover:scale-110 transition-transform" />
                100% Non Pasteurisée
              </strong>
              <p className="text-xs text-foam-muted font-sans">
                Une bière vivante qui conserve toute la pureté de ses huiles essentielles de houblon.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Call to action (100% Clickable to /coffrets) */}
        <ScrollReveal delay={0}>
          <div 
            onClick={() => navigate('/coffrets')}
            className="pt-6 border-t border-foam-border flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer hover:opacity-95 group"
          >
            <span className="text-xs text-foam-navy font-semibold font-serif italic text-sm group-hover:text-foam-terracotta transition-colors">
              Goûtez le savoir-faire de notre maison dans nos coffrets dégustation.
            </span>
            <div className="btn-riviera-terracotta text-xs sm:text-sm flex items-center gap-2 group-hover:shadow-terracotta-glow transition-all">
              <span>Découvrir nos coffrets</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </ScrollReveal>

      </div>

    </div>
  );
}
