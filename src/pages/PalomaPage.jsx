import React from 'react';
import { Link } from 'react-router-dom';
import { History, Heart, Beer, CheckCircle2, Award, ArrowRight, MapPin } from 'lucide-react';

export default function PalomaPage() {
  return (
    <div className="py-10 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Brutaliste */}
      <div className="text-left md:text-center max-w-3xl mx-auto space-y-3.5">
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-2">
          <span className="sticker sticker-neon">
            [ MAISON FAMILIALE // DEPUIS 1948 ]
          </span>
          <span className="sticker sticker-white">
            [ PORT DE NICE 06300 ]
          </span>
        </div>
        <h1 className="font-impact text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-foam-black">
          L'HISTOIRE DU GROUPE PALOMA & DE FOAM
        </h1>
        <p className="text-base sm:text-lg text-foam-black font-medium leading-relaxed">
          76 ans d'hospitalité, d'amour de la gastronomie et d'artisanat indépendant sur la Côte d'Azur.
        </p>
      </div>

      {/* Main Narrative Card Brutaliste */}
      <div className="card-brutal p-6 sm:p-12 space-y-8 text-foam-black text-sm sm:text-base leading-relaxed font-sans">
        
        {/* Quote Block */}
        <div className="border-l-4 border-foam-orange pl-4 sm:pl-6 py-3 font-impact text-lg sm:text-xl text-foam-black uppercase tracking-tight bg-foam-neon border-2 border-foam-black shadow-brutal-sm">
          « DE LA TRATTORIA HISTORIQUE LE VIRGINIE EN 1948 JUSQU'AUX CUVES DE NOTRE MICROBRASSERIE DU PORT EN 2022, UNE MÊME PASSION GUIDE LA FAMILLE VANNINI : LE GOÛT DU PARTAGE ET L'AUTHENTICITÉ NIÇOISE. »
        </div>

        {/* Chapter 1 : 1948 */}
        <div className="space-y-3">
          <h2 className="font-impact text-2xl uppercase tracking-tight text-foam-black flex items-center gap-2">
            <span className="text-foam-orange">1948 :</span> UNE DYNASTIE DE RESTAURATEURS NIÇOIS
          </h2>
          <p>
            L’aventure commence au lendemain de la Seconde Guerre mondiale avec l’ouverture de la célèbre trattoria <em>Le Virginie</em> au Port de Nice. Fondée par la <strong>famille Vannini</strong>, la maison a grandi au fil des décennies en préservant scrupuleusement son indépendance, sa convivialité et son attachement viscéral au terroir méditerranéen.
          </p>
          <p>
            Aujourd’hui fédéré sous le nom de <strong>Groupe Paloma</strong>, ce groupe familial indépendant rassemble plusieurs des établissements les plus vivants de la gastronomie et de la fête azuréenne, toujours guidés par l'accueil bienveillant et la fraîcheur des produits.
          </p>
        </div>

        {/* Chapter 2 : 2022 FOAM */}
        <div className="p-6 sm:p-8 bg-foam-bg border-2 border-foam-black space-y-4">
          <div className="flex items-center gap-2 text-foam-black font-impact text-xl uppercase tracking-tight">
            <Beer className="w-6 h-6 text-foam-orange stroke-[2.5]" />
            <span>2022 : LA NAISSANCE DE LA MICROBRASSERIE FOAM AU PORT</span>
          </div>
          <p className="text-sm text-foam-black leading-relaxed">
            Parce que nous voulions maîtriser l'ensemble de notre chaîne de valeur et offrir à nos clients une bière d’une fraîcheur absolue, nous avons franchi le pas en installant notre propre microbrasserie au <strong>3 Quai des Deux Emmanuels</strong>, face aux pointus colorés du Port de Nice.
          </p>
          <p className="text-sm font-bold leading-relaxed">
            FOAM fait ainsi partie des très rares acteurs de la restauration indépendante en France à brasser et embouteiller sa propre bière sur place, en circuit ultra-court.
          </p>
        </div>

        {/* Chapter 3 : Stéphane */}
        <div className="space-y-3">
          <h2 className="font-impact text-2xl uppercase tracking-tight text-foam-black flex items-center gap-2">
            <span className="text-foam-orange">CRAFT :</span> STÉPHANE, LE MAÎTRE BRASSEUR
          </h2>
          <p>
            Toutes les créations FOAM sont imaginées et brassées par <strong>Stéphane</strong>, notre maître brasseur. Chaque recette célèbre la lumière et les saveurs de la Riviera : de l'aromatique fruitée de la <em>FOAM French IPA</em> à la douceur veloutée de la <em>FOAM Wheat Ale</em> aux agrumes, jusqu'à la fraîcheur dorée de <em>Lou FOAM d'Aqui</em>.
          </p>
        </div>

        {/* 4 Pillars of Commitment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-foam-black font-mono">
          <div className="p-4 bg-white border-2 border-foam-black shadow-brutal-sm space-y-1">
            <strong className="text-xs font-black uppercase tracking-wider text-foam-black flex items-center gap-1.5">
              <span className="w-2 h-2 bg-foam-orange border border-foam-black" />
              CIRCUIT ULTRA-COURT
            </strong>
            <p className="text-xs text-foam-muted font-sans">
              Brassée au port, bue au bar ou emportée directement chez vous en Click & Collect.
            </p>
          </div>

          <div className="p-4 bg-white border-2 border-foam-black shadow-brutal-sm space-y-1">
            <strong className="text-xs font-black uppercase tracking-wider text-foam-black flex items-center gap-1.5">
              <span className="w-2 h-2 bg-foam-neon border border-foam-black" />
              100% NON PASTEURISÉE
            </strong>
            <p className="text-xs text-foam-muted font-sans">
              Une bière vivante qui conserve toute la pureté de ses huiles essentielles de houblon.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="pt-6 border-t-2 border-foam-black flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <span className="text-xs font-bold text-foam-black">
            GOÛTEZ LE SAVOIR-FAIRE DE NOTRE MAISON DANS NOS COFFRETS.
          </span>
          <Link
            to="/coffrets"
            className="btn-brutal-orange py-3.5 px-6 text-xs font-mono font-black"
          >
            <span>DÉCOUVRIR LES COFFRETS</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

      </div>

    </div>
  );
}
