import React from 'react';
import { ArrowLeft, History, Heart, Beer, CheckCircle2, Award } from 'lucide-react';
import { PALOMA_HISTORY } from '../data/products';

export default function PalomaPage({ navigateTo }) {
  return (
    <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => navigateTo('home')}
          className="text-xs font-semibold text-kraft-muted hover:text-kraft-ink flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-kraft-terracotta bg-kraft-stone px-3 py-1 rounded-full border border-kraft-border">
          Maison Familiale Fondée en 1948
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-kraft-ink">
          Le Groupe Paloma & FOAM
        </h1>
        <p className="text-base text-kraft-muted font-medium">
          76 ans d'hospitalité, d'amour du terroir et d'artisanat sur la Côte d'Azur.
        </p>
      </div>

      {/* Story narrative */}
      <div className="kraft-card p-6 sm:p-10 space-y-8 leading-relaxed text-sm sm:text-base text-kraft-ink/85">
        
        <div className="border-l-2 border-kraft-terracotta pl-4 sm:pl-6 italic font-serif text-lg sm:text-xl text-kraft-ink">
          « De la trattoria historique Le Virginie en 1948 jusqu'aux cuves de notre microbrasserie du Port en 2022, une même passion guide la famille Vannini : le goût du partage et l'authenticité niçoise. »
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-kraft-ink">
            Une histoire de famille depuis 1948
          </h2>
          <p>
            L’aventure commence au lendemain de la guerre avec l’ouverture du restaurant <em>Le Virginie</em> au Port de Nice. Fondée par la <strong>famille Vannini</strong>, la maison a grandi au fil des décennies en préservant son âme indépendante, conviviale et profondément attachée à l’identité méditerranéenne.
          </p>
          <p>
            Aujourd’hui réuni sous l'enseigne <strong>Groupe Paloma</strong>, ce collectif familial fait vivre plusieurs adresses emblématiques de la gastronomie et de la fête niçoise, toujours animées par la même exigence de qualité et d’accueil chaleureux.
          </p>
        </div>

        <div className="p-6 bg-kraft-stone/50 rounded-2xl border border-kraft-border space-y-3">
          <div className="flex items-center gap-2 text-kraft-terracotta font-serif font-bold text-lg">
            <Beer className="w-5 h-5" />
            <span>2022 : La naissance de la microbrasserie FOAM</span>
          </div>
          <p className="text-xs sm:text-sm text-kraft-muted leading-relaxed">
            Parce que nous souhaitions maîtriser l'ensemble de la chaîne et proposer à nos clients une bière d’une fraîcheur absolue, nous avons installé notre propre atelier de brassage au <strong>3 Quai des Deux Emmanuels</strong>, face aux pointus colorés du Port de Nice.
          </p>
          <p className="text-xs sm:text-sm text-kraft-muted leading-relaxed">
            Nous sommes fiers d’être l’un des très rares groupes de restauration indépendants de France à posséder ses propres cuves de brassage et à embouteiller sa bière sur place.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-kraft-ink">
            Stéphane, Maître Brasseur & Terroir Niçois
          </h2>
          <p>
            Toutes nos bières sont créées et brassées par <strong>Stéphane</strong>, notre brasseur passionné. Chaque recette est travaillée pour refléter la lumière azuréenne : de la fraîcheur désaltérante de notre <em>Lager</em> aux notes de résine et d'agrumes de notre <em>West Coast IPA</em>, jusqu'à la douceur fruitée de notre <em>Blanche</em>.
          </p>
          <p>
            Depuis 2023, nous intégrons également dans nos brassins spéciaux du houblon cultivé localement sous le soleil de Nice, pour pousser encore plus loin notre engagement en circuit ultra-court.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-kraft-border">
          <div className="p-4 bg-kraft-bg rounded-xl border border-kraft-border space-y-1">
            <strong className="text-xs font-bold uppercase tracking-wider text-kraft-ink flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-kraft-olive" />
              Circuit Ultra-Court
            </strong>
            <p className="text-xs text-kraft-muted">
              Brassée au port, dégustée au port ou emportée directement chez vous.
            </p>
          </div>

          <div className="p-4 bg-kraft-bg rounded-xl border border-kraft-border space-y-1">
            <strong className="text-xs font-bold uppercase tracking-wider text-kraft-ink flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-kraft-olive" />
              Non Pasteurisée
            </strong>
            <p className="text-xs text-kraft-muted">
              Une bière vivante qui conserve l'intégralité de ses arômes et de sa fraîcheur.
            </p>
          </div>

          <div className="p-4 bg-kraft-bg rounded-xl border border-kraft-border space-y-1">
            <strong className="text-xs font-bold uppercase tracking-wider text-kraft-ink flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-kraft-olive" />
              Maison Familiale (1948)
            </strong>
            <p className="text-xs text-kraft-muted">
              L'indépendance et l'authenticité d'une dynastie de restaurateurs niçois.
            </p>
          </div>

          <div className="p-4 bg-kraft-bg rounded-xl border border-kraft-border space-y-1">
            <strong className="text-xs font-bold uppercase tracking-wider text-kraft-ink flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-kraft-olive" />
              Convivialité Méditerranéenne
            </strong>
            <p className="text-xs text-kraft-muted">
              Des bières créées pour rassembler autour d'une socca, d'une table ou d'un coucher de soleil.
            </p>
          </div>
        </div>

      </div>

      {/* CTA to Products */}
      <div className="text-center pt-4">
        <button
          onClick={() => navigateTo('coffret-decouverte')}
          className="py-3 px-6 rounded-xl bg-kraft-ink hover:bg-kraft-terracotta text-white text-xs font-bold transition-colors shadow-xs"
        >
          <span>Découvrir nos coffrets artisanaux</span>
        </button>
      </div>

    </div>
  );
}
