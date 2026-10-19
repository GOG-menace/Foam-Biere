import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Beer, Navigation, CheckCircle2, Phone, ShoppingBag, ArrowRight } from 'lucide-react';
import { BARS_DATA } from '../data/products';

export default function BarsPage() {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Brutaliste */}
      <div className="text-left md:text-center max-w-3xl mx-auto space-y-3.5">
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-2">
          <span className="sticker sticker-neon">
            [ TAPROOMS & RETRAIT 0 € ]
          </span>
          <span className="sticker sticker-white">
            [ 2 ADRESSES À NICE ]
          </span>
        </div>
        <h1 className="font-impact text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-foam-black">
          NOS 2 BARS FOAM À NICE
        </h1>
        <p className="text-base sm:text-lg text-foam-black font-medium leading-relaxed">
          Deux adresses emblématiques pour savourer nos bières fraîches à la pression au comptoir ou pour récupérer vos commandes de coffrets sans aucun frais de port.
        </p>
      </div>

      {/* 2 Bars Detailed Brutalist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {BARS_DATA.map((bar) => (
          <div
            key={bar.id}
            className="card-brutal p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="sticker sticker-orange text-[10px]">
                  {bar.badge}
                </span>
                <span className="sticker sticker-neon text-[10px]">
                  ✓ RETRAIT 0 € EN 2H
                </span>
              </div>

              <h2 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-foam-black">
                {bar.name}
              </h2>

              <div className="space-y-2 font-mono text-xs text-foam-black">
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-foam-orange shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="font-bold">{bar.address}</span>
                </div>
                <div className="flex items-start gap-2.5 text-foam-muted font-bold">
                  <Clock className="w-4 h-4 text-foam-black shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{bar.hours}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-foam-black font-medium leading-relaxed pt-2 border-t border-foam-borderLight">
                {bar.description}
              </p>

              {/* Specific Features List */}
              <div className="p-4 bg-foam-bg border-2 border-foam-black space-y-2 font-mono text-xs">
                <strong className="font-black uppercase tracking-wider text-foam-black block border-b border-foam-borderLight pb-1">
                  [ CE QUE VOUS TROUVEREZ SUR PLACE ]
                </strong>
                <ul className="space-y-1.5 text-xs text-foam-black font-medium">
                  {bar.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-foam-orange border border-foam-black shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-foam-muted pt-1 border-t border-foam-borderLight">
                  💡 {bar.mapHint}
                </p>
              </div>

            </div>

            <div className="pt-4 border-t-2 border-foam-black">
              <Link
                to="/coffrets/decouverte"
                className="btn-brutal-orange w-full py-3.5 text-xs font-mono font-black uppercase text-center"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                <span>COMMANDER AVEC RETRAIT DANS CE BAR (0 €)</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Explanatory Banner Click & Collect */}
      <div className="card-brutal p-8 sm:p-10 space-y-4">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-6 h-6 text-foam-orange stroke-[2.5]" />
          <h3 className="font-impact text-2xl uppercase tracking-tight text-foam-black">
            COMMENT FONCTIONNE LE RETRAIT CLICK & COLLECT GRATUIT ?
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 font-mono text-xs">
          <div className="p-4 bg-foam-bg border-2 border-foam-black">
            <span className="sticker sticker-black text-[9px] mb-2">ÉTAPE 1</span>
            <p className="font-bold text-foam-black">Choisissez votre coffret (Pack 3 ou Pack 6) et sélectionnez l'option Click & Collect.</p>
          </div>
          <div className="p-4 bg-foam-bg border-2 border-foam-black">
            <span className="sticker sticker-black text-[9px] mb-2">ÉTAPE 2</span>
            <p className="font-bold text-foam-black">Sélectionnez le bar de votre choix : FOAM Port de Nice ou FOAM Place du Pin.</p>
          </div>
          <div className="p-4 bg-foam-bg border-2 border-foam-black">
            <span className="sticker sticker-black text-[9px] mb-2">ÉTAPE 3</span>
            <p className="font-bold text-foam-black">Votre commande est prête sous 2h ouvrées. Passez la récupérer sans file d'attente !</p>
          </div>
        </div>
      </div>

    </div>
  );
}
