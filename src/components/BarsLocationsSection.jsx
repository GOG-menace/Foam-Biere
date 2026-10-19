import React from 'react';
import { MapPin, Clock, Beer, Sparkles, Navigation, ArrowRight } from 'lucide-react';
import { BARS_LOCATIONS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function BarsLocationsSection() {
  const { setSelectedBarId, setIsCartOpen, setDeliveryMethod } = useCart();

  const handleSelectBarForPickup = (barId) => {
    setSelectedBarId(barId);
    setDeliveryMethod('click_and_collect');
    setIsCartOpen(true);
  };

  return (
    <section id="bars" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foam-oliveLight text-foam-olive text-xs font-bold uppercase tracking-wider border border-foam-olive/30">
          <MapPin className="w-3.5 h-3.5" />
          Click & Collect Gratuit (0,00 €)
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foam-navy mt-3">
          Récupérez vos bouteilles fraîches dans nos 2 bars à Nice
        </h2>
        <p className="mt-3 text-base text-foam-navy/80">
          Évitez les 12,90 € de frais de transport du verre. Vos coffrets et packs sont préparés avec soin par nos barmans directement au comptoir.
        </p>
      </div>

      {/* 2 Bars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BARS_LOCATIONS.map((bar) => (
          <div
            key={bar.id}
            className="rounded-3xl bg-white border border-foam-border shadow-subtle hover:shadow-elevated transition-all overflow-hidden flex flex-col justify-between p-6 sm:p-8 relative group"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-foam-navy text-foam-sand">
                  {bar.badge}
                </span>
                <span className="text-xs font-bold text-foam-olive flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Retrait 0 € • Dès aujourd’hui
                </span>
              </div>

              <h3 className="font-editorial text-2xl font-bold text-foam-navy mt-4 group-hover:text-foam-amber transition-colors">
                {bar.name}
              </h3>

              <div className="mt-4 space-y-2 text-xs sm:text-sm text-foam-navy/85">
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-foam-amber shrink-0 mt-0.5" />
                  <span>{bar.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-foam-gray shrink-0 mt-0.5" />
                  <span>Horaires : {bar.hours}</span>
                </div>
              </div>

              <div className="mt-5 p-3.5 bg-foam-stone/50 rounded-2xl border border-foam-border text-xs text-foam-navy/80">
                <p className="font-semibold text-foam-navy">💡 {bar.note}</p>
                <p className="text-foam-gray mt-0.5">{bar.pickupHours}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-foam-border flex items-center justify-between">
              <span className="text-xs text-foam-olive font-bold">
                ✓ Prise en charge immédiate
              </span>

              <button
                onClick={() => handleSelectBarForPickup(bar.id)}
                className="py-2.5 px-4 rounded-xl bg-foam-navy hover:bg-foam-navyLight text-foam-sand text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Choisir ce point de retrait</span>
                <ArrowRight className="w-3.5 h-3.5 text-foam-gold" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
