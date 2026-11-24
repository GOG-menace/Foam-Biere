import React, { useEffect, useState } from 'react';
import { X, Gift, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { WHEEL_PRIZES, BF_WHEEL_PRIZES, drawPrize } from '../data/wheel';
import { usePromoMode } from '../data/promo';
import { trackWheelView, trackWheelDecline, trackWheelSpin } from '../utils/analytics';

const DELAY_MS = 8000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SLICE = 360 / WHEEL_PRIZES.length;

const readStatus = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return 'indisponible';
  }
};
const writeStatus = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('LocalStorage write failed:', e);
  }
};
const isAgeVerified = () => {
  try {
    return Boolean(localStorage.getItem('foam_age_verified'));
  } catch {
    return false;
  }
};

// Point du cercle à l'angle donné (0° en haut, sens horaire)
const point = (angle, r) => {
  const rad = (angle * Math.PI) / 180;
  return [100 + r * Math.sin(rad), 100 - r * Math.cos(rad)];
};

function WheelSvg({ prizes, rotation, spinning }) {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
      {/* Pointeur */}
      <div className="absolute left-1/2 -top-1 -translate-x-1/2 z-10 drop-shadow-md">
        <svg width="34" height="40" viewBox="0 0 34 40" aria-hidden="true">
          <path d="M17 40 L2 8 A16 16 0 1 1 32 8 Z" fill="#112338" />
          <circle cx="17" cy="15" r="6" fill="#FAF6F0" />
        </svg>
      </div>

      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-xl"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning ? 'transform 5.2s cubic-bezier(0.15, 0.7, 0.1, 1)' : 'none'
        }}
        role="img"
        aria-label="Roue des lots FAOM"
      >
        <circle cx="100" cy="100" r="99" fill="#FAF6F0" />
        {prizes.map((prize, i) => {
          const start = i * SLICE;
          const [x1, y1] = point(start, 94);
          const [x2, y2] = point(start + SLICE, 94);
          const mid = start + SLICE / 2;
          return (
            <g key={prize.id}>
              <path d={`M100 100 L${x1} ${y1} A94 94 0 0 1 ${x2} ${y2} Z`} fill={prize.color} stroke="#FAF6F0" strokeWidth="2" />
              <g transform={`rotate(${mid} 100 100)`}>
                {prize.lines.map((line, j) => (
                  <text
                    key={line}
                    x="100"
                    y={prize.lines.length > 1 ? 36 + j * 12 : 42}
                    textAnchor="middle"
                    fill="#FAF6F0"
                    fontFamily="Fraunces, Georgia, serif"
                    fontWeight="700"
                    fontSize={prize.lines.length > 1 ? 10 : 15}
                  >
                    {line}
                  </text>
                ))}
              </g>
            </g>
          );
        })}
        {/* Points décoratifs du bord */}
        {prizes.map((prize, i) => {
          const [cx, cy] = point(i * SLICE, 94);
          return <circle key={`dot-${prize.id}`} cx={cx} cy={cy} r="2.6" fill="#DCA037" />;
        })}
        <circle cx="100" cy="100" r="20" fill="#FAF6F0" stroke="#DCA037" strokeWidth="3" />
        <image href="/logo-foam.png" x="84" y="84" width="32" height="32" clipPath="circle(16px at 16px 16px)" />
      </svg>
    </div>
  );
}

export default function PrizeWheel() {
  const { isCartOpen, orderConfirmed, applyCoupon, setIsCartOpen } = useCart();
  const mode = usePromoMode();
  const isBf = mode === 'black_friday';
  const prizes = isBf ? BF_WHEEL_PRIZES : WHEEL_PRIZES;
  const storageKey = isBf ? 'foam_wheel_bf' : 'foam_wheel';
  const promoId = isBf ? 'roue_black_friday' : 'roue_faom';
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('intro'); // intro | spinning | won
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [prize, setPrize] = useState(null);

  // Une seule fois par visiteur et par version (la roue Black Friday réapparaît), 8 s après la vérification d'âge.
  // Avant le Black Friday, la fenêtre « Me prévenir » prend sa place. ?roue=1 force l'ouverture.
  useEffect(() => {
    setReady(false);
    const forced = new URLSearchParams(window.location.search).has('roue');
    if (mode === 'teaser' && !forced) return undefined;
    if (!forced && readStatus(storageKey)) return undefined;

    let timer;
    const start = () => {
      timer = setTimeout(() => setReady(true), forced ? 600 : DELAY_MS);
    };
    if (isAgeVerified()) {
      start();
      return () => clearTimeout(timer);
    }
    window.addEventListener('foam:age-verified', start, { once: true });
    return () => {
      window.removeEventListener('foam:age-verified', start);
      clearTimeout(timer);
    };
  }, [mode, storageKey]);

  // N'interrompt ni le panier ni la fenêtre de commande
  useEffect(() => {
    if (ready && !isOpen && step === 'intro' && !isCartOpen && !orderConfirmed) {
      setIsOpen(true);
      trackWheelView(promoId);
    }
  }, [ready, isOpen, step, isCartOpen, orderConfirmed, promoId]);

  if (!isOpen) return null;

  const close = () => {
    if (step === 'intro') {
      writeStatus(storageKey, 'refus');
      trackWheelDecline(promoId);
    }
    setIsOpen(false);
    setReady(false);
  };

  const handleSpin = async (e) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Merci d’entrer une adresse email valide.');
      return;
    }
    setError('');
    setSubmitting(true);
    const won = drawPrize(prizes);

    try {
      await trackWheelSpin({ email, prize: won, promoId });
    } catch (err) {
      console.warn('Participation non enregistrée :', err);
      setError('Votre participation n’a pas pu être enregistrée. Merci de réessayer dans un instant.');
      setSubmitting(false);
      return;
    }

    // Arrêt au centre du lot tiré, avec un léger décalage pour un rendu naturel
    const index = prizes.findIndex((p) => p.id === won.id);
    const jitter = (Math.random() - 0.5) * SLICE * 0.6;
    const target = 360 * 6 + (360 - (index * SLICE + SLICE / 2)) + jitter;
    writeStatus(storageKey, 'gagne');
    setPrize(won);
    setStep('spinning');
    setSubmitting(false);
    requestAnimationFrame(() => setRotation(target));
  };

  const handleSpinEnd = () => {
    if (step !== 'spinning') return;
    applyCoupon(prize);
    setStep('won');
    confetti({ particleCount: 110, spread: 75, origin: { y: 0.55 }, colors: ['#C3532B', '#DCA037', '#1D3C2F', '#FAF6F0'], zIndex: 60 });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/70 backdrop-blur-xs animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="roue-titre"
    >
      <div className="relative w-full max-w-md bg-[#FAF6F0] rounded-3xl border border-foam-borderWarm shadow-2xl px-5 py-7 sm:px-8 text-center text-foam-navy my-auto">
        {step !== 'spinning' && (
          <button
            type="button"
            onClick={close}
            className="absolute top-3 right-3 p-2 text-foam-muted hover:text-foam-terracotta rounded-xl hover:bg-foam-subtle transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        )}

        <p className="text-[11px] uppercase tracking-widest text-foam-terracotta font-bold font-serif">
          {step === 'won' ? 'Félicitations' : isBf ? 'Black Friday · 100 % gagnant' : '100 % gagnant'}
        </p>
        <h2 id="roue-titre" className="font-serif text-2xl sm:text-3xl font-bold mt-1 leading-tight">
          {step === 'won' ? prize.title : isBf ? 'Un lot en plus des -20 %' : 'Tentez votre chance !'}
        </h2>

        <div className="mt-5" onTransitionEnd={handleSpinEnd}>
          <WheelSvg prizes={prizes} rotation={rotation} spinning={step !== 'intro'} />
        </div>

        {step === 'intro' && (
          <form onSubmit={handleSpin} className="mt-5 space-y-3 text-left">
            <p className="text-sm text-center text-foam-text">
              Entrez votre email et tournez la roue : chaque case est un lot à utiliser sur nos coffrets.
            </p>
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
            <button type="submit" disabled={submitting} className="btn-riviera-terracotta w-full py-3.5 text-sm font-bold disabled:opacity-70">
              <Gift className="w-4 h-4" />
              <span>{submitting ? 'Un instant…' : 'Tourner la roue'}</span>
            </button>
            <button
              type="button"
              onClick={close}
              className="w-full text-xs text-foam-muted hover:text-foam-navy underline underline-offset-2 py-1"
            >
              Non merci, ça ne m’intéresse pas
            </button>
            <p className="text-[10px] text-foam-muted leading-relaxed text-center">
              Votre email sert uniquement à vous envoyer votre lot et les nouveautés FAOM. Désinscription à tout moment.
            </p>
          </form>
        )}

        {step === 'spinning' && (
          <p className="mt-5 text-sm font-semibold text-foam-text animate-pulse">La roue tourne…</p>
        )}

        {step === 'won' && (
          <div className="mt-5 space-y-3">
            <div className="p-3 bg-white rounded-2xl border border-dashed border-foam-terracotta">
              <p className="text-[11px] text-foam-muted">Votre code, déjà appliqué à votre panier</p>
              <p className="font-serif text-2xl font-bold tracking-wider text-foam-terracotta">{prize.code}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                close();
                setIsCartOpen(true);
              }}
              className="btn-riviera-terracotta w-full py-3.5 text-sm font-bold"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Voir mon panier</span>
            </button>
            <button type="button" onClick={close} className="w-full text-xs text-foam-muted hover:text-foam-navy underline underline-offset-2 py-1">
              Continuer ma visite
            </button>
          </div>
        )}

        <p className="mt-5 pt-3 border-t border-foam-border text-[10px] text-foam-muted font-medium">
          L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
        </p>
      </div>
    </div>
  );
}
