import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Navigation, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { BARS_DATA } from '../data/products';
import ScrollReveal from '../components/ScrollReveal';

export default function BarsPage() {
  const navigate = useNavigate();

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      
      {/* Header Riviera Rétro */}
      <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foam-navy leading-tight">
          Nos 2 Bars FOAM à Nice
        </h1>
        <p className="text-base text-foam-text leading-relaxed">
          Deux adresses emblématiques pour savourer nos bières fraîches à la pression au comptoir ou pour récupérer vos commandes de coffrets sans aucun frais de port.
        </p>
      </ScrollReveal>

      {/* 2 Bars Detailed Riviera Cards (100% Clickable) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {BARS_DATA.map((bar, idx) => (
          <ScrollReveal key={bar.id} delay={idx * 130}>
            <div
              onClick={() => navigate('/coffrets')}
              className="card-riviera p-6 sm:p-8 flex flex-col justify-between space-y-6 cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 group h-full"
            >
              <div className="space-y-5">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-foam-terracotta">
                    {bar.badge}
                  </span>
                  <span className="text-xs font-semibold text-foam-pine bg-foam-pineSoft px-2.5 py-1 rounded-md border border-foam-pine/20">
                    ✓ Click & Collect 0 €
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors">
                  {bar.name}
                </h2>

                <div className="space-y-2 text-xs sm:text-sm text-foam-text">
                  <div className="flex items-start gap-2.5">
                    <Navigation className="w-4 h-4 text-foam-terracotta shrink-0 mt-0.5 stroke-[2]" />
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(bar.name + ', ' + bar.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-semibold text-foam-navy hover:text-foam-terracotta underline cursor-pointer"
                    >
                      {bar.address}
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5 text-foam-muted">
                    <Clock className="w-4 h-4 text-foam-muted shrink-0 mt-0.5 stroke-[2]" />
                    <span>{bar.hours}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-foam-text leading-relaxed pt-2 border-t border-foam-border">
                  {bar.description}
                </p>

                {/* Specific Features List */}
                <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60 space-y-2">
                  <strong className="text-xs font-serif font-bold uppercase tracking-wider text-foam-navy block">
                    Ce que vous trouverez sur place :
                  </strong>
                  <ul className="space-y-1.5 text-xs text-foam-text">
                    {bar.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-foam-pine shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-foam-muted italic pt-1 border-t border-foam-borderWarm/60">
                    💡 {bar.mapHint}
                  </p>
                </div>

              </div>

              <div className="pt-4 border-t border-foam-border">
                <div className="btn-riviera-navy w-full text-xs sm:text-sm flex items-center justify-center gap-2 group-hover:bg-foam-terracotta transition-all shadow-xs">
                  <ShoppingBag className="w-4 h-4 stroke-[2]" />
                  <span>Commander avec retrait dans ce bar (0 €)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Explanatory Banner Click & Collect (100% Clickable) */}
      <ScrollReveal delay={0}>
        <div 
          onClick={() => navigate('/coffrets')}
          className="card-riviera p-8 sm:p-10 space-y-4 cursor-pointer hover:border-foam-pine/50 hover:shadow-riviera transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-6 h-6 text-foam-terracotta stroke-[2] group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl font-bold text-foam-navy group-hover:text-foam-pine transition-colors">
                Comment fonctionne le retrait Click & Collect gratuit ?
              </h3>
            </div>
            <ArrowRight className="w-5 h-5 text-foam-muted group-hover:text-foam-pine group-hover:translate-x-1 transition-all hidden sm:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60">
              <span className="font-bold text-foam-terracotta block mb-1">Étape 1</span>
              <p className="text-foam-text leading-relaxed">Choisissez votre coffret (Pack 3 ou Pack 6) et sélectionnez l'option Click & Collect.</p>
            </div>
            <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60">
              <span className="font-bold text-foam-terracotta block mb-1">Étape 2</span>
              <p className="text-foam-text leading-relaxed">Sélectionnez le bar de votre choix : FOAM Port de Nice ou FOAM Place du Pin.</p>
            </div>
            <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60">
              <span className="font-bold text-foam-terracotta block mb-1">Étape 3</span>
              <p className="text-foam-text leading-relaxed">Votre commande est préparée sous 2h ouvrées. Passez la récupérer en toute simplicité !</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
