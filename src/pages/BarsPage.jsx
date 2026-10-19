import React from 'react';
import { ArrowLeft, MapPin, Clock, Beer, Navigation, CheckCircle2, ShoppingBag } from 'lucide-react';
import { BARS_DATA } from '../data/products';

export default function BarsPage({ navigateTo }) {
  return (
    <div className="py-10 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      
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
        <span className="text-xs font-bold uppercase tracking-wider text-kraft-olive bg-kraft-stone px-3 py-1 rounded-full border border-kraft-border">
          Dégustation & Click & Collect 0€
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-kraft-ink">
          Nos 2 Bars FOAM à Nice
        </h1>
        <p className="text-sm text-kraft-muted leading-relaxed">
          Deux adresses emblématiques pour déguster nos bières à la pression ou retirer vos commandes de coffrets sans frais de port.
        </p>
      </div>

      {/* 2 Bars Cards Detailed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BARS_DATA.map((bar) => (
          <div 
            key={bar.id}
            className="kraft-card p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-kraft-terracotta">
                  {bar.type}
                </span>
                <span className="text-xs font-bold text-kraft-olive bg-kraft-stone px-2.5 py-0.5 rounded-full border border-kraft-border">
                  Click & Collect 0 €
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-kraft-ink">
                {bar.name}
              </h2>

              <div className="space-y-2 text-xs text-kraft-muted">
                <div className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-kraft-ink shrink-0 mt-0.5" />
                  <span className="text-kraft-ink font-medium">{bar.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-kraft-muted shrink-0 mt-0.5" />
                  <span>{bar.hours}</span>
                </div>
              </div>

              <p className="text-xs text-kraft-ink/85 leading-relaxed pt-2 border-t border-kraft-border">
                {bar.description}
              </p>

              {/* Specific features */}
              <div className="pt-2 space-y-1.5">
                <strong className="text-xs font-bold uppercase tracking-wider text-kraft-ink block">
                  Spécificités du lieu :
                </strong>
                <ul className="space-y-1 text-xs text-kraft-muted">
                  {bar.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-kraft-olive shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-kraft-border">
              <button
                onClick={() => navigateTo('coffret-decouverte')}
                className="w-full py-3 px-4 rounded-xl bg-kraft-ink hover:bg-kraft-terracotta text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Commander avec retrait dans ce bar (0 €)</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Click & Collect Explanatory Banner */}
      <div className="p-6 sm:p-8 bg-kraft-stone/60 rounded-2xl border border-kraft-border space-y-3">
        <h3 className="font-serif text-xl font-bold text-kraft-ink flex items-center gap-2">
          <MapPin className="w-5 h-5 text-kraft-olive" />
          <span>Comment fonctionne le retrait Click & Collect ?</span>
        </h3>
        <p className="text-xs sm:text-sm text-kraft-muted leading-relaxed">
          1. Vous commandez votre coffret (3 ou 6 bières) ou vos bouteilles sur le site.
          <br />
          2. Vous choisissez votre bar de retrait : <strong>Port de Nice (Quai des Deux Emmanuels)</strong> ou <strong>Place du Pin</strong>.
          <br />
          3. Votre commande est préparée immédiatement avec des bouteilles fraîches. Vous repartez avec votre étui carton rigide sans débourser un centime de frais de port.
        </p>
      </div>

    </div>
  );
}
