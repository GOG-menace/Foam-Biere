import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin, Gift } from 'lucide-react';
import { SETS } from '../data/products';
import { useCart } from '../context/CartContext';
import { usePromoMode, promoPrice, euro, BF_START, BF_END, BF_PROMO } from '../data/promo';
import { trackPromoClick } from '../utils/analytics';
import { Countdown, BfAlertForm } from '../components/BlackFridayTeaser';
import usePageMeta from '../utils/usePageMeta';

const COFFRETS = ['coffret-decouverte', 'coffret-exotique'];

function CoffretOffer({ product, mode }) {
  const { addItem } = useCart();
  const add = (format) => {
    trackPromoClick(BF_PROMO, `page_${product.slug}_${format}`);
    addItem(product, format, 1);
  };

  return (
    <div className="card-riviera overflow-hidden flex flex-col">
      <Link to={product.slug.replace('coffret-', '/coffrets/')} className="block aspect-[4/3] bg-foam-subtle overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </Link>
      <div className="p-5 sm:p-6 flex-1 flex flex-col gap-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-foam-navy">{product.name}</h2>
          <p className="text-xs font-bold uppercase tracking-wider text-foam-terracotta mt-1">{product.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {['pack3', 'pack6'].map((format) => {
            const pack = product[format];
            return (
              <button
                key={format}
                type="button"
                onClick={() => add(format)}
                className="p-3 rounded-2xl border-2 border-foam-border bg-white hover:border-foam-terracotta transition-colors text-left cursor-pointer"
              >
                <span className="block text-[11px] font-semibold text-foam-muted">{pack.shortFormat}</span>
                <span className="block text-xs text-foam-muted line-through">{euro(pack.price)}</span>
                <span className="block font-serif text-2xl font-bold text-foam-terracotta">{euro(promoPrice(pack.price, mode))}</span>
                <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-foam-navy">
                  <ShoppingBag className="w-3.5 h-3.5" /> Ajouter
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function BlackFridayPage() {
  const mode = usePromoMode();
  usePageMeta({
    title: 'Black Friday : -20 % sur les coffrets | FAOM',
    description: 'Black Friday FAOM : -20 % sur tous les coffrets de bières artisanales du Port de Nice, du jeudi 26 au lundi 30 novembre.',
    path: '/black-friday'
  });

  return (
    <div className="py-10 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <section className="bg-foam-navy text-white rounded-3xl px-6 py-10 sm:py-12 text-center space-y-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-foam-gold font-bold">
          {mode === 'off' ? 'Offre terminée' : 'Du jeudi 26 au lundi 30 novembre'}
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-none text-white">Black Friday</h1>
        <p className="text-base sm:text-lg text-white/90">
          <strong className="text-white">-20 % sur tous nos coffrets</strong>, en 3 ou 6 bouteilles.
        </p>
        {mode !== 'off' && (
          <div className="pt-2 space-y-2">
            <p className="text-xs text-white/70">{mode === 'black_friday' ? 'Fin de l’offre dans' : 'Ouverture dans'}</p>
            <Countdown target={mode === 'black_friday' ? BF_END : BF_START} light />
          </div>
        )}
      </section>

      {mode === 'black_friday' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COFFRETS.map((slug) => (
              <CoffretOffer key={slug} product={SETS[slug]} mode={mode} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-white rounded-2xl border border-foam-border flex gap-3">
              <MapPin className="w-5 h-5 text-foam-pine shrink-0" />
              <p>Retrait <strong>gratuit</strong> en click & collect sous 2 h, dans nos bars du Port et de la place du Pin.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-foam-border flex gap-3">
              <Gift className="w-5 h-5 text-foam-terracotta shrink-0" />
              <p>La roue Black Friday vous offre un lot en plus, cumulable avec les -20 %.</p>
            </div>
          </div>
        </>
      )}

      {mode === 'teaser' && (
        <div className="max-w-md mx-auto text-center space-y-3">
          <p className="text-sm text-foam-text">Laissez votre email, on vous prévient dès l’ouverture de l’offre.</p>
          <BfAlertForm placement="page" />
        </div>
      )}

      {mode === 'off' && (
        <div className="text-center space-y-3">
          <p className="text-sm text-foam-text">Le Black Friday est terminé. Nos coffrets restent disponibles toute l’année.</p>
          <Link to="/coffrets" className="btn-riviera-terracotta inline-flex text-sm py-3 px-6">Voir les coffrets</Link>
        </div>
      )}

      <p className="text-center text-[11px] text-foam-muted font-medium">
        Prix barrés : prix le plus bas pratiqué sur les 30 derniers jours. L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
      </p>
    </div>
  );
}
