import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Beer, Package, Star, ShieldCheck, Sparkles, Check, Flame } from 'lucide-react';
import { SETS } from '../data/products';

export default function HomePage() {
  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION CRAFT BRUTALISTE & CONTEMPORAIN */}
      <section className="relative overflow-hidden bg-foam-bg pt-8 pb-14 sm:pt-16 sm:pb-20 border-b-2 border-foam-black">
        
        {/* Visible industrial background grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#0A0A0A_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Massive Grotesk & Brutalist Badges */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Sticker Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="sticker sticker-neon -rotate-1">
                  [ DIRECT CUVES // PORT DE NICE ]
                </span>
                <span className="sticker sticker-orange rotate-1">
                  [ 100% INDÉPENDANT ]
                </span>
                <span className="sticker sticker-white hidden sm:inline-flex">
                  [ QUAI DES 2 EMMANUELS ]
                </span>
              </div>

              {/* Massive Main Title */}
              <h1 className="font-impact text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-foam-black">
                LA BIÈRE ARTISANALE DU PORT DE NICE, <span className="text-foam-orange underline decoration-foam-black decoration-4">EN DIRECT</span> DE NOS CUVES.
              </h1>

              <p className="text-base sm:text-lg text-foam-black font-medium leading-relaxed max-w-2xl">
                Brassée au Quai des Deux Emmanuels par Stéphane, notre maître brasseur. 
                Commandez nos coffrets dégustation prêts à offrir avec <strong className="font-black bg-foam-neon px-1.5 py-0.5 border border-foam-black text-black">Retrait Click & Collect GRATUIT</strong> dans nos 2 bars à Nice ou expédition sécurisée.
              </p>

              {/* Technical Spec Row (Monospace) */}
              <div className="p-3.5 bg-white border-2 border-foam-black shadow-brutal-sm flex flex-wrap items-center gap-3 text-xs font-mono font-bold">
                <span className="text-foam-orange flex items-center gap-1">
                  <Flame className="w-4 h-4 fill-foam-orange" />
                  MICROBRASSERIE POINTUE
                </span>
                <span className="text-foam-borderLight">|</span>
                <span>NON PASTEURISÉE</span>
                <span className="text-foam-borderLight">|</span>
                <span>HOUBLONS SELECTIONNÉS</span>
                <span className="text-foam-borderLight">|</span>
                <span className="text-foam-black bg-foam-neon px-1.5 py-0.2 border border-foam-black">NOTE : 4.9/5 (1 200+ AVIS)</span>
              </div>

              {/* Dual Brutalist CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/coffrets"
                  className="btn-brutal-orange py-4 px-8 text-sm sm:text-base"
                >
                  <Package className="w-5 h-5 stroke-[2.5]" />
                  <span>DÉCOUVRIR NOS COFFRETS</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </Link>

                <Link
                  to="/bieres"
                  className="btn-brutal-white py-4 px-7 text-sm sm:text-base"
                >
                  <Beer className="w-5 h-5 text-foam-orange stroke-[2.5]" />
                  <span>DÉCOUVRIR NOS BIÈRES</span>
                </Link>
              </div>

              {/* Click & Collect note */}
              <div className="pt-1 flex items-center gap-2 text-xs font-mono font-bold text-foam-black">
                <MapPin className="w-4 h-4 text-foam-orange shrink-0 stroke-[2.5]" />
                <span>RETRAIT 0 € EN 2H AUX BARS FOAM PORT & PLACE DU PIN</span>
              </div>

            </div>

            {/* Right Column: Packshot au flash direct / lumière dure */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Floating Stamp Badge */}
                <div className="absolute -top-4 -right-2 z-10 sticker sticker-neon rotate-6 shadow-brutal text-xs sm:text-sm">
                  ★ PACK PRÊT À OFFRIR ★
                </div>

                <div className="card-brutal p-4 space-y-4">
                  <div className="aspect-[4/3] overflow-hidden border-2 border-foam-black relative bg-foam-subtle group">
                    <img
                      src={decouverte.image}
                      alt="Coffret Découverte bières artisanales FOAM Nice"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 sticker sticker-black text-[10px]">
                      COFFRET SIGNATURE
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-foam-black/90 p-3 text-white border-t-2 border-foam-black">
                      <p className="font-mono text-[10px] text-foam-neon font-bold uppercase tracking-wider">
                        FRENCH IPA • LOU FOAM D'AQUI • WHEAT ALE
                      </p>
                      <h3 className="font-impact text-lg uppercase tracking-tight text-white">
                        COFFRET DÉCOUVERTE 3 OU 6 BIÈRES
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="font-mono text-xs">
                      <span className="text-foam-muted block text-[10px] uppercase font-bold">FORMATS DISPONIBLES</span>
                      <strong className="text-foam-black font-black uppercase text-xs sm:text-sm">PACK 3 OU 6 BOUTEILLES</strong>
                    </div>

                    <Link
                      to="/coffrets/decouverte"
                      className="btn-brutal-orange py-2.5 px-4 text-xs font-mono font-black"
                    >
                      <span>VOIR L'OFFRE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars Trust Bar (Visible Grid) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t-2 border-foam-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 bg-white border-2 border-foam-black shadow-brutal-sm flex items-center gap-3.5">
              <div className="w-12 h-12 bg-foam-orange border-2 border-foam-black text-black flex items-center justify-center shrink-0 font-black shadow-[2px_2px_0px_#0A0A0A]">
                <Beer className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-foam-orange block">ATELIER DU PORT</span>
                <h4 className="font-impact uppercase text-sm text-foam-black">BRASSÉE AU PORT DE NICE</h4>
                <p className="text-xs text-foam-muted font-medium">Par Stéphane au Quai des 2 Emmanuels</p>
              </div>
            </div>

            <div className="p-4 bg-white border-2 border-foam-black shadow-brutal-sm flex items-center gap-3.5">
              <div className="w-12 h-12 bg-foam-neon border-2 border-foam-black text-black flex items-center justify-center shrink-0 font-black shadow-[2px_2px_0px_#0A0A0A]">
                <MapPin className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-foam-black block">RETRAIT EXPRESS</span>
                <h4 className="font-impact uppercase text-sm text-foam-black">CLICK & COLLECT 0 €</h4>
                <p className="text-xs text-foam-muted font-medium">Prêt sous 2h au Port et Place du Pin</p>
              </div>
            </div>

            <div className="p-4 bg-white border-2 border-foam-black shadow-brutal-sm flex items-center gap-3.5">
              <div className="w-12 h-12 bg-white border-2 border-foam-black text-black flex items-center justify-center shrink-0 font-black shadow-[2px_2px_0px_#0A0A0A]">
                <Package className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-foam-black block">EXPÉDITION SÉCURISÉE</span>
                <h4 className="font-impact uppercase text-sm text-foam-black">ÉTUIS KRAFT ULTRA-RIGIDES</h4>
                <p className="text-xs text-foam-muted font-medium">Protection anti-casse recyclable</p>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* 2. SECTION COFFRETS CADEAUX (GRILLE BRUTALISTE AVEC STICKERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-left md:text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="sticker sticker-neon">
              [ ÉDITIONS CADEAUX & DÉGUSTATION ]
            </span>
          </div>
          <h2 className="font-impact text-3xl sm:text-5xl uppercase tracking-tight text-foam-black">
            NOS DEUX COFFRETS DE LA RIVIERA
          </h2>
          <p className="text-sm sm:text-base text-foam-black font-medium leading-relaxed">
            Chaque coffret est disponible en format <strong>Pack de 3</strong> ou <strong>Pack de 6 bouteilles</strong>, prêt à offrir dans son étui carton kraft ultra-rigide.
          </p>
          <div className="pt-1">
            <Link to="/coffrets" className="font-mono text-xs font-bold text-foam-orange hover:text-foam-black uppercase tracking-wider inline-flex items-center gap-1.5 underline decoration-2">
              <span>CONSULTER LA PAGE RÉCAPITULATIVE DES OFFRES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
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
                  ★ INCONTOURNABLE
                </span>
                <span className="absolute bottom-3 right-3 sticker sticker-black text-[10px]">
                  PORT DE NICE
                </span>
              </div>

              <div>
                <p className="font-mono text-[11px] font-bold text-foam-orange uppercase tracking-wider">
                  {decouverte.subtitle}
                </p>
                <h3 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-foam-black group-hover:text-foam-orange transition-colors mt-1">
                  {decouverte.name}
                </h3>
                <p className="text-xs sm:text-sm text-foam-black mt-2 leading-relaxed">
                  {decouverte.description}
                </p>
              </div>

              {/* Inclus dans le coffret */}
              <div className="p-4 bg-foam-bg border-2 border-foam-black space-y-2 text-xs font-mono">
                <strong className="text-foam-black block uppercase tracking-wider text-[11px] font-black border-b border-foam-borderLight pb-1">
                  [ COMPOSITION DU COFFRET ]
                </strong>
                <ul className="space-y-2 text-foam-black pt-1">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-foam-orange border border-foam-black shrink-0" />
                    <span><strong>FOAM FRENCH IPA</strong> (Houblonnée & fruitée)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-foam-neon border border-foam-black shrink-0" />
                    <span><strong>LOU FOAM D’AQUI</strong> (Blonde fraîche & désaltérante)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-white border border-foam-black shrink-0" />
                    <span><strong>FOAM WHEAT ALE</strong> (Froment doux & agrumes)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-foam-black flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-foam-muted block">FORMAT AU CHOIX</span>
                <div className="font-impact uppercase text-base sm:text-lg text-foam-black">
                  PACK 3 OU 6 BOUTEILLES
                </div>
                <span className="font-mono text-[11px] text-foam-orange font-bold">CLICK & COLLECT 0 €</span>
              </div>

              <Link
                to="/coffrets/decouverte"
                className="btn-brutal-orange py-3 px-5 text-xs font-mono font-black"
              >
                <span>VOIR L'OFFRE</span>
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
                  CUVÉE DU BRASSEUR
                </span>
              </div>

              <div>
                <p className="font-mono text-[11px] font-bold text-foam-orange uppercase tracking-wider">
                  {exotique.subtitle}
                </p>
                <h3 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-foam-black group-hover:text-foam-orange transition-colors mt-1">
                  {exotique.name}
                </h3>
                <p className="text-xs sm:text-sm text-foam-black mt-2 leading-relaxed">
                  {exotique.description}
                </p>
              </div>

              {/* Inclus dans le coffret exotique */}
              <div className="p-4 bg-foam-bg border-2 border-foam-black space-y-2 text-xs font-mono">
                <strong className="text-foam-black block uppercase tracking-wider text-[11px] font-black border-b border-foam-borderLight pb-1">
                  [ CUVÉES ÉPHÉMÈRES DU BRASSEUR ]
                </strong>
                <ul className="space-y-2 text-foam-black pt-1">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-foam-orange border border-foam-black shrink-0" />
                    <span><strong>BRASSIN RIVIERA TROPICALE</strong> (Mangue & passion)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-foam-neon border border-foam-black shrink-0" />
                    <span><strong>CUVÉE HOUBLON NIÇOIS SOLAIRE</strong> (Houblons solaires)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-white border border-foam-black shrink-0" />
                    <span><strong>BLANCHE EXOTIQUE ÉPHÉMÈRE</strong> (Zestes d'agrumes)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-foam-black flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-foam-muted block">FORMAT AU CHOIX</span>
                <div className="font-impact uppercase text-base sm:text-lg text-foam-black">
                  PACK 3 OU 6 BOUTEILLES
                </div>
                <span className="font-mono text-[11px] text-foam-orange font-bold">BRASSIN ÉPHÉMÈRE</span>
              </div>

              <Link
                to="/coffrets/exotique"
                className="btn-brutal-black py-3 px-5 text-xs font-mono font-black"
              >
                <span>VOIR L'OFFRE</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

        </div>

      </section>


      {/* 3. BANNIÈRES PALOMA 1948 & NOS BARS (GRILLE BRUTALISTE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Carte Groupe Paloma 1948 */}
        <div className="p-8 sm:p-10 bg-foam-black text-white border-2 border-foam-black shadow-brutal flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div className="space-y-4">
            <div className="sticker sticker-neon">
              [ MAISON FONDÉE EN 1948 ]
            </div>
            <h3 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
              76 ANS DE PASSION CULINAIRE & ARTISANAT DU PORT
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              De la trattoria historique <em>Le Virginie</em> fondée en 1948 au Port de Nice par la famille Vannini jusqu’à l'inauguration de la microbrasserie FOAM en 2022. Découvrez pourquoi nous brassons nos propres bières sur place au quai des Deux Emmanuels.
            </p>
          </div>

          <Link
            to="/groupe-paloma"
            className="btn-brutal-orange py-3 px-5 text-xs font-mono font-black self-start"
          >
            <span>DÉCOUVRIR LE GROUPE PALOMA</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

        {/* Carte Nos Bars à Nice */}
        <div className="p-8 sm:p-10 bg-white border-2 border-foam-black shadow-brutal flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="sticker sticker-orange">
              [ CLICK & COLLECT 0 € SOUS 2H ]
            </div>
            <h3 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-foam-black leading-tight">
              NOS 2 BARS FOAM AU PORT ET PLACE DU PIN
            </h3>
            <p className="text-xs sm:text-sm text-foam-black leading-relaxed font-sans">
              Venez savourer nos bières fraîches à la pression sur nos terrasses ensoleillées ou retirez vos commandes de coffrets gratuitement sous 2h. Cuves inox visibles au Port, ambiance festive sous les pins de la Place du Pin.
            </p>
          </div>

          <Link
            to="/nos-bars"
            className="btn-brutal-white py-3 px-5 text-xs font-mono font-black self-start"
          >
            <span>VOIR ADRESSES & HORAIRES</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

      </section>

    </div>
  );
}
