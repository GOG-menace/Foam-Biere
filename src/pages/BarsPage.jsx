import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Beer, Navigation, CheckCircle2, Phone, ShoppingBag, ArrowRight } from 'lucide-react';
import { BARS_DATA } from '../data/products';

export default function BarsPage() {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foam-oliveSoft border border-foam-olive/30 text-foam-olive text-[11px] font-bold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-foam-olive" />
          <span>Dégustation Pression & Retrait Click & Collect 0 €</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-foam-navy leading-tight">
          Nos 2 Bars FOAM à Nice
        </h1>
        <p className="text-base text-foam-text leading-relaxed">
          Deux adresses emblématiques pour savourer nos bières fraîches à la pression au comptoir ou pour récupérer vos commandes de coffrets sans aucun frais de port.
        </p>
      </div>

      {/* 2 Bars Detailed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {BARS_DATA.map((bar) => (
          <div
            key={bar.id}
            className="rounded-2xl bg-white border border-foam-border p-6 sm:p-10 shadow-shopify flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-foam-red">
                  {bar.badge}
                </span>
                <span className="text-xs font-bold text-foam-olive">
                  ✓ Click & Collect 0 €
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy">
                {bar.name}
              </h2>

              <div className="space-y-2.5 text-xs sm:text-sm text-foam-text">
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-foam-red shrink-0 mt-0.5" />
                  <span className="font-semibold text-foam-navy">{bar.address}</span>
                </div>
                <div className="flex items-start gap-2.5 text-foam-muted">
                  <Clock className="w-4 h-4 text-foam-muted shrink-0 mt-0.5" />
                  <span>{bar.hours}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-foam-text leading-relaxed pt-2 border-t border-foam-border">
                {bar.description}
              </p>

              {/* Specific Features List */}
              <div className="p-4 rounded-xl bg-foam-bg border border-foam-border space-y-2">
                <strong className="text-xs font-bold uppercase tracking-wider text-foam-navy block">
                  Ce que vous trouverez sur place :
                </strong>
                <ul className="space-y-1.5 text-xs text-foam-text">
                  {bar.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-foam-olive shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-foam-muted italic pt-1 border-t border-foam-border/60">
                  💡 {bar.mapHint}
                </p>
              </div>

            </div>

            <div className="pt-4 border-t border-foam-border">
              <Link
                to="/coffrets/decouverte"
                className="w-full py-3.5 px-5 rounded-xl bg-foam-navy hover:bg-foam-red text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Commander avec retrait dans ce bar (0 €)</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Explanatory Banner Click & Collect */}
      <div className="rounded-2xl bg-foam-oliveSoft border border-foam-olive/30 p-8 sm:p-10 space-y-4 text-foam-navy shadow-shopify">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-6 h-6 text-foam-olive" />
          <h3 className="font-serif text-2xl font-bold text-foam-navy">
            Comment fonctionne le retrait Click & Collect gratuit ?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs sm:text-sm text-foam-text">
          <div className="p-4 bg-white/90 rounded-xl border border-foam-olive/20 space-y-1">
            <strong className="font-bold text-foam-navy block text-sm">1. Choisissez vos bières</strong>
            <p className="text-foam-muted text-xs leading-relaxed">
              Sélectionnez vos coffrets de 3 ou 6 bières ou vos bouteilles favorites sur notre boutique.
            </p>
          </div>

          <div className="p-4 bg-white/90 rounded-xl border border-foam-olive/20 space-y-1">
            <strong className="font-bold text-foam-navy block text-sm">2. Sélectionnez votre bar</strong>
            <p className="text-foam-muted text-xs leading-relaxed">
              Cochez <strong>FOAM Port de Nice</strong> ou <strong>FOAM Place du Pin</strong> lors de la validation.
            </p>
          </div>

          <div className="p-4 bg-white/90 rounded-xl border border-foam-olive/20 space-y-1">
            <strong className="font-bold text-foam-navy block text-sm">3. Retirez vos bières fraîches</strong>
            <p className="text-foam-muted text-xs leading-relaxed">
              Vos bouteilles sont prêtes sous 2h en étui rigide prêt à offrir, sans payer de frais de livraison.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
