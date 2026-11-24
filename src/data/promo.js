import { useEffect, useState } from 'react';

// Black Friday : du jeudi 26 novembre 2026 à 18 h au lundi 30 novembre 2026 à minuit (heure de Paris)
export const BF_START = Date.parse('2026-11-26T18:00:00+01:00');
export const BF_END = Date.parse('2026-12-01T00:00:00+01:00');
export const BF_RATE = 0.2;
export const BF_PROMO = { promotion_id: 'black_friday_2026', promotion_name: 'Black Friday -20 %' };

const FORCE_KEY = 'foam_bf_force';
const MODES = { teaser: 'teaser', on: 'black_friday', off: 'off' };

// Aperçu : ?bf=teaser, ?bf=on ou ?bf=off (gardé pour la session), ?bf=auto pour revenir au calendrier
function forcedMode() {
  try {
    const param = new URLSearchParams(window.location.search).get('bf');
    if (param === 'auto') sessionStorage.removeItem(FORCE_KEY);
    else if (MODES[param]) sessionStorage.setItem(FORCE_KEY, MODES[param]);
    return sessionStorage.getItem(FORCE_KEY);
  } catch {
    return null;
  }
}

// 'teaser' avant le lancement, 'black_friday' pendant, 'off' après
export function getPromoMode(now = Date.now()) {
  const forced = typeof window !== 'undefined' ? forcedMode() : null;
  if (forced) return forced;
  if (now < BF_START) return 'teaser';
  if (now < BF_END) return 'black_friday';
  return 'off';
}

const round2 = (n) => Math.round(n * 100) / 100;

export function promoPrice(price, mode) {
  return mode === 'black_friday' ? round2(price * (1 - BF_RATE)) : price;
}

export const euro = (n) => `${n.toFixed(2).replace('.', ',')} €`;

// Mode courant, mis à jour tout seul au lancement et à la fin de l'offre
export function usePromoMode() {
  const [mode, setMode] = useState(() => getPromoMode());
  useEffect(() => {
    const now = Date.now();
    const next = [BF_START, BF_END].find((t) => t > now);
    if (!next || next - now > 2 ** 31 - 1) return undefined;
    const timer = setTimeout(() => setMode(getPromoMode()), next - now + 500);
    return () => clearTimeout(timer);
  }, [mode]);
  return mode;
}

// Temps restant avant une date, rafraîchi chaque seconde
export function useCountdown(target) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const left = Math.max(0, target - now);
  return {
    days: Math.floor(left / 86400000),
    hours: Math.floor((left / 3600000) % 24),
    minutes: Math.floor((left / 60000) % 60),
    seconds: Math.floor((left / 1000) % 60)
  };
}
