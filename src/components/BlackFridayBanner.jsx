import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePromoMode, useCountdown, BF_END, BF_PROMO } from '../data/promo';
import { trackPromoView, trackPromoClick } from '../utils/analytics';

const pad = (n) => String(n).padStart(2, '0');

// Bandeau en haut de chaque page pendant le Black Friday, avec le temps restant
export default function BlackFridayBanner() {
  const mode = usePromoMode();
  const { days, hours, minutes, seconds } = useCountdown(BF_END);

  useEffect(() => {
    if (mode !== 'black_friday') return;
    try {
      if (sessionStorage.getItem('foam_bf_banner_vu')) return;
      sessionStorage.setItem('foam_bf_banner_vu', '1');
    } catch {
      // stockage indisponible : on compte l'affichage quand même
    }
    trackPromoView({ ...BF_PROMO, creative_slot: 'bandeau' });
  }, [mode]);

  if (mode !== 'black_friday') return null;

  return (
    <Link
      to="/black-friday"
      onClick={() => trackPromoClick(BF_PROMO, 'bandeau')}
      className="block bg-foam-navy text-white hover:bg-foam-navyLight transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs sm:text-sm text-center">
        <span className="font-serif font-bold tracking-wide text-foam-gold">BLACK FRIDAY</span>
        <span className="font-semibold">-20 % sur tous les coffrets</span>
        <span className="text-white/75 tabular-nums">
          Fin dans {days > 0 ? `${days} j ` : ''}{pad(hours)} h {pad(minutes)} min {pad(seconds)} s
        </span>
        <span className="inline-flex items-center gap-1 font-bold underline underline-offset-2">
          J’en profite <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
