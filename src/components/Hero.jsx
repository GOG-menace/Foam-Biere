import React from 'react';
import { Gift, Sliders, ShieldCheck, MapPin, Truck, Beer, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-16 md:pb-24 bg-gradient-to-b from-foam-stone/40 via-foam-bg to-foam-bg">
      {/* Subtle decorative Mediterranean background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-foam-amber/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-foam-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Sur-titre avec caution patrimoniale */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-foam-gold/50 shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-foam-amber animate-ping" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-foam-navy">
                MICRO-BRASSERIE DU PORT DE NICE • PAR LE GROUPE PALOMA (1948)
              </span>
            </div>

            {/* H1 Principal */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foam-navy leading-[1.12] tracking-tight">
              La bière artisanale du Port de Nice, <span className="text-foam-amber italic font-normal">en direct</span> de nos cuves.
            </h1>

            {/* Sous-titre orienté bénéfice & Click & Collect */}
            <p className="mt-5 text-base sm:text-lg text-foam-navy/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Commandez vos bouteilles FOAM à l'unité, en packs ou en coffrets cadeaux prêts à offrir. <strong className="text-foam-navy font-semibold underline decoration-foam-amber/60">Retrait Click & Collect GRATUIT</strong> dans nos bars FOAM (Port & Place du Pin) ou livraison sécurisée anti-casse.
            </p>

            {/* Double CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('#coffrets')}
                className="w-full sm:w-auto px-7 py-4 bg-foam-amber hover:bg-foam-amberDark text-white font-bold rounded-2xl shadow-amber-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 text-base group"
              >
                <Gift className="w-5 h-5 text-white/90 group-hover:rotate-12 transition-transform" />
                <span>Découvrir les Coffrets de Noël</span>
              </button>

              <button
                onClick={() => scrollTo('#configurateur')}
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-foam-stone text-foam-navy font-bold rounded-2xl border-2 border-foam-navy/15 hover:border-foam-navy/30 shadow-subtle transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 text-base"
              >
                <Sliders className="w-5 h-5 text-foam-amber" />
                <span>Composer mon Pack sur-mesure</span>
              </button>
            </div>

            {/* Micro mention QR code */}
            <p className="mt-3 text-[11px] text-foam-gray">
              📱 Vous êtes assis à notre bar ? Commandez maintenant et repartez avec vos bouteilles fraîches !
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Badge flottant Click & Collect 0€ */}
              <div className="absolute -top-4 -left-4 z-20 bg-foam-olive text-white px-4 py-2.5 rounded-2xl shadow-elevated border-2 border-white flex items-center gap-2 animate-bounce">
                <MapPin className="w-4 h-4 text-emerald-300" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-200">Retrait Bar</p>
                  <p className="text-xs font-bold">Click & Collect 0 €</p>
                </div>
              </div>

              {/* Badge flottant Spécial Fêtes */}
              <div className="absolute -bottom-4 -right-2 z-20 bg-foam-navy text-foam-sand px-4 py-2.5 rounded-2xl shadow-elevated border-2 border-foam-gold/40 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-foam-gold" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-amber-300">Offre Noël</p>
                  <p className="text-xs font-bold">Coffret Cadeau dès 19 €</p>
                </div>
              </div>

              {/* Main Card Image with Warm Mediterranean Aesthetic */}
              <div className="overflow-hidden rounded-3xl bg-white border border-foam-border shadow-elevated p-3 relative group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-foam-stone">
                  <img
                    src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=1000&q=80"
                    alt="Bières artisanales FOAM et coffret de Noël au Port de Nice"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foam-navy/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-foam-amber text-white">
                      Brassage Ultra-Local
                    </span>
                    <h3 className="font-editorial text-xl font-bold mt-1 text-white">
                      Les 3 Recettes Iconiques du Port
                    </h3>
                    <p className="text-xs text-slate-200">
                      West Coast IPA • Lager Méditerranéenne • Blanche Riviera
                    </p>
                  </div>
                </div>

                {/* Sub-bar below image */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-foam-navy font-medium">
                  <span className="flex items-center gap-1.5 text-foam-olive font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    En direct de nos cuves au Quai Cassini
                  </span>
                  <span className="text-[11px] text-foam-gray">33cl • Capsule éco</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Immediate Trust Bar (3 icônes de réassurance) */}
        <div className="mt-14 pt-8 border-t border-foam-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-foam-border shadow-xs hover:border-foam-gold/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-foam-amber/15 text-foam-amber flex items-center justify-center shrink-0">
                <Beer className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-navy">Brassée au Port de Nice</h4>
                <p className="text-xs text-foam-gray">Cuves artisanales actives depuis 2022</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-foam-oliveLight/70 border border-foam-olive/30 shadow-xs hover:border-foam-olive transition-colors">
              <div className="w-12 h-12 rounded-xl bg-foam-olive text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-olive">Click & Collect 0 €</h4>
                <p className="text-xs text-foam-olive/80">Retrait FOAM Port & FOAM Place du Pin</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-foam-border shadow-xs hover:border-foam-gold/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-foam-gold/20 text-foam-navy flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-foam-amberDark" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foam-navy">Colis Certifié Anti-Casse</h4>
                <p className="text-xs text-foam-gray">Expédition offerte dès 50 € d'achat</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
