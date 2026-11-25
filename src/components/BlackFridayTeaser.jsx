import React, { useEffect, useState } from 'react';
import { X, Bell, Check, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { usePromoMode, useCountdown, BF_START } from '../data/promo';
import { trackBfAlert, trackBfAlertDecline, trackPromoView, trackPromoClick } from '../utils/analytics';

const STORAGE_KEY = 'foam_bf_alerte';
const DELAY_MS = 8000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ALERT_PROMO = { promotion_id: 'bf_alerte', promotion_name: 'Alerte Black Friday' };

const pad = (n) => String(n).padStart(2, '0');

export function Countdown({ target, light = false }) {
  const { days, hours, minutes, seconds } = useCountdown(target);
  const cells = [[days, 'j'], [hours, 'h'], [minutes, 'min'], [seconds, 's']];
  return (
    <div className="flex justify-center gap-2" aria-label="Compte à rebours">
      {cells.map(([value, unit]) => (
        <div
          key={unit}
          className={`min-w-[3.25rem] px-2 py-1.5 rounded-xl text-center ${light ? 'bg-white/10 text-white' : 'bg-white border border-foam-border text-foam-navy'}`}
        >
          <span className={`block font-serif text-xl font-bold leading-none tabular-nums ${light ? 'text-white' : 'text-foam-navy'}`}>{pad(value)}</span>
          <span className={`text-[10px] font-semibold ${light ? 'text-white/70' : 'text-foam-muted'}`}>{unit}</span>
        </div>
      ))}
    </div>
  );
}

// Formulaire « Me prévenir » : utilisé dans la fenêtre et sur la page /black-friday
export function BfAlertForm({ placement, onDone }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Merci d’entrer une adresse email valide.');
      return;
    }
    setError('');
    setSending(true);
    try {
      await trackBfAlert({ email, placement });
    } catch (err) {
      console.warn('Inscription non enregistrée :', err);
      setError('Votre inscription n’a pas pu être enregistrée. Merci de réessayer dans un instant.');
      setSending(false);
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, 'inscrit');
    } catch (err) {
      console.warn('LocalStorage write failed:', err);
    }
    setDone(true);
    onDone?.();
  };

  if (done) {
    return (
      <div className="p-4 bg-foam-pineSoft rounded-2xl border border-foam-pine/30 text-sm text-foam-pine font-semibold flex items-center justify-center gap-2">
        <Check className="w-4 h-4" />
        <span>C’est noté ! Vous serez prévenu(e) jeudi à 18 h.</span>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3 text-left">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.fr"
        autoComplete="email"
        aria-label="Votre adresse email"
        className="w-full px-4 py-3 rounded-xl border border-foam-borderWarm bg-white text-sm text-foam-navy focus:outline-none focus:border-foam-terracotta"
      />
      {error && <p className="text-xs text-red-700 font-medium">{error}</p>}
      <button type="submit" disabled={sending} className="btn-riviera-terracotta w-full py-3.5 text-sm font-bold disabled:opacity-70">
        <Bell className="w-4 h-4" />
        <span>{sending ? 'Un instant…' : 'Me prévenir du lancement'}</span>
      </button>
      <p className="text-[10px] text-foam-muted leading-relaxed text-center">
        Votre email sert uniquement à vous prévenir du lancement et des offres FAOM. Désinscription à tout moment.
      </p>
    </form>
  );
}

// Fenêtre affichée avant le Black Friday, une fois par visiteur, 8 s après la vérification d'âge
export default function BlackFridayTeaser() {
  const mode = usePromoMode();
  const { isCartOpen, orderConfirmed } = useCart();
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (mode !== 'teaser') {
      setReady(false);
      setIsOpen(false);
      return undefined;
    }
    try {
      if (localStorage.getItem(STORAGE_KEY)) return undefined;
    } catch {
      return undefined;
    }
    let timer;
    const start = () => {
      timer = setTimeout(() => setReady(true), DELAY_MS);
    };
    let verified = false;
    try {
      verified = Boolean(localStorage.getItem('foam_age_verified'));
    } catch {
      verified = false;
    }
    if (verified) start();
    else window.addEventListener('foam:age-verified', start, { once: true });
    return () => {
      window.removeEventListener('foam:age-verified', start);
      clearTimeout(timer);
    };
  }, [mode]);

  useEffect(() => {
    if (ready && !isOpen && !subscribed && !isCartOpen && !orderConfirmed) {
      setIsOpen(true);
      trackPromoView(ALERT_PROMO);
    }
  }, [ready, isOpen, subscribed, isCartOpen, orderConfirmed]);

  if (!isOpen) return null;

  const close = () => {
    if (!subscribed) {
      try {
        localStorage.setItem(STORAGE_KEY, 'refus');
      } catch (e) {
        console.warn('LocalStorage write failed:', e);
      }
      trackBfAlertDecline();
    }
    setIsOpen(false);
    setReady(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/70 backdrop-blur-xs animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bf-alerte-titre"
    >
      <div className="relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden my-auto">
        <div className="bg-foam-navy text-white px-6 pt-8 pb-6 text-center">
          <button
            type="button"
            onClick={close}
            className="absolute top-3 right-3 p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
          <p className="text-[11px] uppercase tracking-[0.25em] text-foam-gold font-bold">Bientôt chez FAOM</p>
          <h2 id="bf-alerte-titre" className="font-serif text-4xl font-bold mt-2 leading-none text-white">Black Friday</h2>
          <p className="mt-3 text-sm text-white/85">
            <strong className="text-white">-20 % sur tous nos coffrets</strong> et une roue spéciale avec des lots plus gros.
          </p>
          <p className="mt-1 text-xs text-white/70">Jeudi 26 novembre à 18 h, jusqu’au lundi soir.</p>
          <div className="mt-4">
            <Countdown target={BF_START} light />
          </div>
        </div>

        <div className="bg-[#FAF6F0] px-6 py-6 text-center text-foam-navy space-y-3">
          <p className="text-sm text-foam-text">Laissez votre email, on vous prévient dès que l’offre est ouverte.</p>
          <BfAlertForm placement="fenetre" onDone={() => setSubscribed(true)} />

          {/* Concours : 2 coffrets à gagner */}
          <Link
            to="/concours?from=fenetre_black_friday"
            onClick={() => {
              trackPromoClick({ promotion_id: 'concours_bf', promotion_name: 'Concours 2 coffrets' }, 'fenetre_black_friday');
              try {
                localStorage.setItem(STORAGE_KEY, subscribed ? 'inscrit' : 'concours');
              } catch (e) {
                console.warn('LocalStorage write failed:', e);
              }
              setReady(false);
              setIsOpen(false);
            }}
            className="flex items-center gap-3 p-2.5 rounded-2xl border-2 border-foam-gold bg-foam-goldSoft text-left hover:shadow-riviera transition-shadow"
          >
            <img
              src="/images/concours-coffrets-noel.jpg"
              alt="Les 2 coffrets FAOM à gagner"
              className="w-24 h-16 sm:w-28 sm:h-[4.5rem] rounded-xl object-cover shrink-0"
            />
            <span className="flex-1 min-w-0">
              <span className="flex items-center gap-1.5 font-serif font-bold text-sm text-foam-navy">
                <Gift className="w-4 h-4 text-foam-terracotta shrink-0" /> Concours : gagnez nos 2 coffrets
              </span>
              <span className="block text-[11px] text-foam-text mt-0.5">Classique + Exotique, gratuit, jusqu’au 30 novembre.</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-foam-terracotta mt-1">
                Je participe <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={close}
            className="w-full text-xs text-foam-muted hover:text-foam-navy underline underline-offset-2 py-1"
          >
            {subscribed ? 'Continuer ma visite' : 'Non merci, ça ne m’intéresse pas'}
          </button>
          <p className="pt-3 border-t border-foam-border text-[10px] text-foam-muted font-medium">
            L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
          </p>
        </div>
      </div>
    </div>
  );
}
