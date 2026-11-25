import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Check, CalendarDays, Mail } from 'lucide-react';
import { SETS } from '../data/products';
import { BF_END } from '../data/promo';
import { Countdown } from '../components/BlackFridayTeaser';
import { trackContestEntry } from '../utils/analytics';
import usePageMeta from '../utils/usePageMeta';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SOURCE_KEY = 'foam_concours_source';

// Provenance du participant : ?from=… (liens du site), ?utm_source=… (réseaux), site d'origine, sinon direct
function detectSource() {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('from') || params.get('utm_source');
    if (fromUrl) {
      sessionStorage.setItem(SOURCE_KEY, fromUrl);
      return fromUrl;
    }
    const saved = sessionStorage.getItem(SOURCE_KEY);
    if (saved) return saved;
    if (document.referrer && !document.referrer.includes(window.location.host)) {
      return new URL(document.referrer).hostname.replace(/^www\./, '');
    }
  } catch {
    // stockage ou URL indisponible
  }
  return 'direct';
}

export default function ConcoursPage() {
  usePageMeta({
    title: 'Concours : 2 coffrets FAOM à gagner',
    description: 'Tentez de gagner le Coffret Classique et le Coffret Exotique FAOM (2 packs de 6 bières artisanales). Participation gratuite jusqu’au 30 novembre.',
    path: '/concours'
  });

  const [source] = useState(detectSource);
  const [email, setEmail] = useState('');
  const [adult, setAdult] = useState(false);
  const [rules, setRules] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // ok | deja_inscrit
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(timer);
  }, []);

  const isOpen = now < BF_END;
  const classique = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];

  const submit = async (e) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) return setError('Merci d’entrer une adresse email valide.');
    if (!adult) return setError('Le concours est réservé aux personnes majeures.');
    if (!rules) return setError('Merci d’accepter le règlement du concours.');
    setError('');
    setSending(true);
    try {
      setStatus(await trackContestEntry({ email, source }));
    } catch (err) {
      console.warn('Participation non enregistrée :', err);
      setError('Votre participation n’a pas pu être enregistrée. Merci de réessayer dans un instant.');
    }
    setSending(false);
  };

  return (
    <div className="py-10 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="bg-foam-navy text-white rounded-3xl px-6 py-8 sm:p-10 flex flex-col justify-center text-center md:text-left space-y-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-foam-gold font-bold">Concours Black Friday</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-white">Gagnez nos 2 coffrets</h1>
          <p className="text-sm sm:text-base text-white/90">
            Le <strong className="text-white">Coffret Classique</strong> et le <strong className="text-white">Coffret Exotique</strong>,
            12 bières artisanales brassées au Port de Nice. Participation gratuite, sans obligation d’achat.
          </p>
          {isOpen ? (
            <div className="space-y-2 pt-1">
              <p className="text-xs text-white/70">Clôture des participations dans</p>
              <div className="md:[&>div]:justify-start">
                <Countdown target={BF_END} light />
              </div>
            </div>
          ) : (
            <p className="text-sm font-semibold text-foam-gold">Les participations sont closes. Tirage au sort le 1er décembre.</p>
          )}
        </div>

        <figure className="card-riviera overflow-hidden flex flex-col self-center">
          <img
            src="/images/concours-coffrets-noel.jpg"
            alt="Le Coffret Classique et le Coffret Exotique FAOM, édition de Noël, à gagner"
            width="1400"
            height="781"
            className="w-full h-auto"
          />
          <figcaption className="p-3 text-xs sm:text-sm text-foam-navy flex flex-wrap gap-x-3 gap-y-1 justify-center">
            {[classique, exotique].map((set) => (
              <Link key={set.slug} to={set.slug.replace('coffret-', '/coffrets/')} className="font-serif font-bold hover:text-foam-terracotta underline-offset-2 hover:underline">
                {set.name} · 6 bouteilles
              </Link>
            ))}
          </figcaption>
        </figure>
      </section>

      <section className="max-w-md mx-auto">
        {status === 'ok' ? (
          <div className="p-5 bg-foam-pineSoft rounded-2xl border border-foam-pine/30 text-center space-y-1">
            <p className="font-serif text-lg font-bold text-foam-pine flex items-center justify-center gap-2">
              <Check className="w-5 h-5" /> Votre participation est enregistrée
            </p>
            <p className="text-sm text-foam-text">Tirage au sort le 1er décembre. Le gagnant est prévenu par email.</p>
          </div>
        ) : status === 'deja_inscrit' ? (
          <div className="p-5 bg-foam-goldSoft rounded-2xl border border-foam-gold/40 text-center text-sm text-foam-navy font-semibold">
            Cette adresse participe déjà au concours. Une seule participation par personne.
          </div>
        ) : isOpen ? (
          <form onSubmit={submit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              autoComplete="email"
              aria-label="Votre adresse email"
              className="w-full px-4 py-3 rounded-xl border border-foam-borderWarm bg-white text-sm text-foam-navy focus:outline-none focus:border-foam-terracotta"
            />
            <label className="flex items-start gap-2 text-xs text-foam-text cursor-pointer">
              <input type="checkbox" checked={adult} onChange={(e) => setAdult(e.target.checked)} className="mt-0.5 accent-[#C3532B]" />
              <span>J’ai 18 ans ou plus.</span>
            </label>
            <label className="flex items-start gap-2 text-xs text-foam-text cursor-pointer">
              <input type="checkbox" checked={rules} onChange={(e) => setRules(e.target.checked)} className="mt-0.5 accent-[#C3532B]" />
              <span>
                J’accepte le <Link to="/concours/reglement" className="underline font-semibold text-foam-navy">règlement du concours</Link>.
              </span>
            </label>
            {error && <p className="text-xs text-red-700 font-medium">{error}</p>}
            <button type="submit" disabled={sending} className="btn-riviera-terracotta w-full py-3.5 text-sm font-bold disabled:opacity-70">
              <Gift className="w-4 h-4" />
              <span>{sending ? 'Un instant…' : 'Je participe'}</span>
            </button>
            <p className="text-[10px] text-foam-muted leading-relaxed text-center">
              Votre email sert au tirage au sort, à prévenir le gagnant et à vous envoyer les nouveautés FAOM. Désinscription à tout moment.
            </p>
          </form>
        ) : null}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
        <div className="p-4 bg-white rounded-2xl border border-foam-border flex gap-3">
          <Mail className="w-5 h-5 text-foam-terracotta shrink-0" />
          <p>Une participation par adresse email, gratuite et sans achat.</p>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-foam-border flex gap-3">
          <CalendarDays className="w-5 h-5 text-foam-terracotta shrink-0" />
          <p>Participations jusqu’au lundi 30 novembre à minuit, tirage le 1er décembre.</p>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-foam-border flex gap-3">
          <Gift className="w-5 h-5 text-foam-terracotta shrink-0" />
          <p>Lot à retirer gratuitement dans l’un de nos bars à Nice, ou envoyé à domicile.</p>
        </div>
      </section>

      <p className="text-center text-[11px] text-foam-muted font-medium">
        Jeu réservé aux personnes majeures. <Link to="/black-friday" className="underline">Voir les offres Black Friday</Link> ·{' '}
        <Link to="/concours/reglement" className="underline">Règlement</Link>. L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
      </p>
    </div>
  );
}
