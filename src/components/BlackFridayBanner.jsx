import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell } from 'lucide-react';
import { usePromoMode, useCountdown, BF_START, BF_END, BF_PROMO } from '../data/promo';
import { trackPromoView, trackPromoClick } from '../utils/analytics';

const pad = (n) => String(n).padStart(2, '0');
const ALERT_PROMO = { promotion_id: 'bf_alerte', promotion_name: 'Alerte Black Friday' };

// Bandeau en haut de chaque page : avant l'offre il mène à l'inscription « Me prévenir »,
// pendant l'offre il mène aux coffrets à -20 %. Les deux renvoient vers /black-friday.
export default function BlackFridayBanner() {
  const mode = usePromoMode();
  const isTeaser = mode === 'teaser';
  const promo = isTeaser ? ALERT_PROMO : BF_PROMO;
  const { days, hours, minutes, seconds } = useCountdown(isTeaser ? BF_START : BF_END);

  useEffect(() => {
    if (mode === 'off') return;
    const key = `foam_banner_vu_${mode}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch {
      // stockage indisponible : on compte l'affichage quand même
    }
    trackPromoView({ ...promo, creative_slot: 'bandeau' });
  }, [mode]);

  if (mode === 'off') return null;

  const timeLeft = `${days > 0 ? `${days} j ` : ''}${pad(hours)} h ${pad(minutes)} min ${pad(seconds)} s`;

  return (
    <Link
      to="/black-friday"
      onClick={() => trackPromoClick(promo, 'bandeau')}
      className="block bg-foam-navy text-white hover:bg-foam-navyLight transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs sm:text-sm text-center">
        <span className="font-serif font-bold tracking-wide text-foam-gold">BLACK FRIDAY</span>
        <span className="font-semibold">
          {isTeaser ? '-20 % sur tous les coffrets dès jeudi 18 h' : '-20 % sur tous les coffrets'}
        </span>
        <span className="text-white/75 tabular-nums">
          {isTeaser ? 'Ouverture dans' : 'Fin dans'} {timeLeft}
        </span>
        <span className="inline-flex items-center gap-1 font-bold underline underline-offset-2">
          {isTeaser ? (
            <>
              <Bell className="w-3.5 h-3.5" /> Me prévenir
            </>
          ) : (
            <>
              J’en profite <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </span>
      </div>
    </Link>
  );
}
