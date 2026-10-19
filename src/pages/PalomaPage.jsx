import React from 'react';
import { Link } from 'react-router-dom';
import { History, Heart, Beer, CheckCircle2, Award, ArrowRight, MapPin } from 'lucide-react';

export default function PalomaPage() {
  return (
    <div className="py-10 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-foam-red">
          Maison Familiale Azuréenne • Fondée en 1948
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-foam-navy leading-tight">
          L'Histoire du Groupe Paloma & de FOAM
        </h1>
        <p className="text-base text-foam-text font-medium leading-relaxed">
          76 ans d'hospitalité, d'amour de la gastronomie et d'artisanat indépendant sur la Côte d'Azur.
        </p>
      </div>

      {/* Main Narrative Card */}
      <div className="rounded-3xl bg-white border-2 border-foam-border p-6 sm:p-12 shadow-shopify space-y-8 text-foam-text text-sm sm:text-base leading-relaxed">
        
        {/* Quote Block */}
        <div className="border-l-4 border-foam-red pl-4 sm:pl-6 py-1 italic font-serif text-lg sm:text-xl text-foam-navy font-semibold bg-foam-redSoft/60 rounded-r-2xl">
          « De la trattoria historique Le Virginie en 1948 jusqu'aux cuves de notre microbrasserie du Port en 2022, une même passion guide la famille Vannini : le goût du partage et l'authenticité niçoise. »
        </div>

        {/* Chapter 1 : 1948 */}
        <div className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-foam-navy flex items-center gap-2">
            <span className="text-foam-red">1948 :</span> Une dynastie de restaurateurs niçois
          </h2>
          <p>
            L’aventure commence au lendemain de la Seconde Guerre mondiale avec l’ouverture de la célèbre trattoria <em>Le Virginie</em> au Port de Nice. Fondée par la <strong>famille Vannini</strong>, la maison a grandi au fil des décennies en préservant scrupuleusement son indépendance, sa convivialité et son attachement viscéral au terroir méditerranéen.
          </p>
          <p>
            Aujourd’hui fédéré sous le nom de <strong>Groupe Paloma</strong>, ce groupe familial indépendant rassemble plusieurs des établissements les plus vivants de la gastronomie et de la fête azuréenne, toujours guidés par l'accueil bienveillant et la fraîcheur des produits.
          </p>
        </div>

        {/* Chapter 2 : 2022 FOAM */}
        <div className="p-6 sm:p-8 bg-foam-subtle rounded-3xl border border-foam-border space-y-4">
          <div className="flex items-center gap-2 text-foam-navy font-serif font-bold text-xl">
            <Beer className="w-6 h-6 text-foam-red" />
            <span>2022 : La Naissance de la Microbrasserie FOAM au Port</span>
          </div>
          <p className="text-sm text-foam-text leading-relaxed">
            Parce que nous voulions maîtriser l'ensemble de notre chaîne de valeur et offrir à nos clients une bière d’une fraîcheur absolue, nous avons franchi le pas en installant notre propre microbrasserie au <strong>3 Quai des Deux Emmanuels</strong>, face aux pointus colorés du Port de Nice.
          </p>
          <p className="text-sm text-foam-navy font-semibold leading-relaxed">
            FOAM fait ainsi partie des très rares acteurs de la restauration indépendante en France à brasser et embouteiller sa propre bière sur place, en circuit ultra-court.
          </p>
        </div>

        {/* Chapter 3 : Stéphane & Houblon Niçois */}
        <div className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-foam-navy flex items-center gap-2">
            <span className="text-foam-olive">2023 :</span> Stéphane & le Houblon cultivé sous le soleil de Nice
          </h2>
          <p>
            Toutes les créations FOAM sont imaginées et brassées par <strong>Stéphane</strong>, notre maître brasseur. Chaque recette célèbre la lumière et les saveurs de la Riviera : de l'amertume fruitée et résineuse de la <em>West Coast IPA</em> à la douceur veloutée de la <em>Blanche</em> aux agrumes, jusqu'à la fraîcheur désaltérante de notre <em>Lager</em>.
          </p>
          <p>
            Depuis 2023, nous intégrons également dans nos cuvées spéciales du houblon cultivé localement sous le soleil azuréen, pour un ancrage territorial encore plus fort.
          </p>
        </div>

        {/* 4 Pillars of Commitment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-foam-border">
          <div className="p-4 bg-white rounded-2xl border border-foam-border shadow-2xs space-y-1">
            <strong className="text-xs font-bold uppercase tracking-wider text-foam-navy flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-foam-olive" />
              Circuit Ultra-Court
            </strong>
            <p className="text-xs text-foam-muted">
              Brassée au port, bue au bar ou emportée directement chez vous en Click & Collect.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-foam-border shadow-2xs space-y-1">
            <strong className="text-xs font-bold uppercase tracking-wider text-foam-navy flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-foam-olive" />
              100% Non Pasteurisée
            </strong>
            <p className="text-xs text-foam-muted">
              Une bière vivante qui conserve toute la pureté de ses huiles essentielles de houblon.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-foam-border shadow-2xs space-y-1">
            <strong className="text-xs font-bold uppercase tracking-wider text-foam-navy flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-foam-olive" />
              Indépendance Familiale
            </strong>
            <p className="text-xs text-foam-muted">
              La liberté de brasser sans compromis industriel, au service du goût et des Niçois.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-foam-border shadow-2xs space-y-1">
            <strong className="text-xs font-bold uppercase tracking-wider text-foam-navy flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-foam-olive" />
              Convivialité Azuréenne
            </strong>
            <p className="text-xs text-foam-muted">
              Des bières conçues pour sublimer la socca, les petits farcis et les apéritifs au soleil.
            </p>
          </div>
        </div>

      </div>

      {/* Dual CTA bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <Link
          to="/coffrets/decouverte"
          className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-foam-red hover:bg-foam-redDark text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-shopify hover:shadow-red-glow transition-all"
        >
          <Beer className="w-4 h-4" />
          <span>Découvrir nos Coffrets Découverte</span>
        </Link>

        <Link
          to="/nos-bars"
          className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-white hover:bg-foam-subtle text-foam-navy font-bold text-xs sm:text-sm border-2 border-foam-navy flex items-center justify-center gap-2 shadow-xs transition-all"
        >
          <MapPin className="w-4 h-4 text-foam-red" />
          <span>Visiter nos Bars au Port & Place du Pin</span>
        </Link>
      </div>

    </div>
  );
}
