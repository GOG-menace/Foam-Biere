import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Sparkles, ArrowRight, CheckCircle2, ShoppingBag, MapPin, Star } from 'lucide-react';
import { SETS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function SetsOverviewPage() {
  const { addItem, setIsCartOpen } = useCart();
  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];

  const [decouverteFormat, setDecouverteFormat] = useState('pack6');
  const [exotiqueFormat, setExotiqueFormat] = useState('pack6');

  const handleQuickAdd = (set, format) => {
    addItem({
      type: 'set',
      slug: set.slug,
      name: set.name,
      format,
      formatLabel: format === 'pack6' ? 'Pack de 6 bouteilles (33cl)' : 'Pack de 3 bouteilles (33cl)',
      price: format === 'pack6' ? set.formats.pack6.price : set.formats.pack3.price,
      image: set.image
    });
    setIsCartOpen(true);
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-foam-red bg-foam-redSoft px-3.5 py-1 rounded-full border border-foam-redBorder">
          Gamme Coffrets Dégustation & Cadeaux
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-foam-navy leading-tight">
          Nos Offres de Coffrets FOAM Nice
        </h1>
        <p className="text-sm sm:text-base text-foam-text leading-relaxed">
          Pensés pour offrir ou pour partager entre amis. Chaque coffret est disponible au format <strong>3 bouteilles (15,00 €)</strong> ou <strong>6 bouteilles (26,00 € soit 10 € d'économie)</strong>, avec retrait Click & Collect gratuit dans nos 2 bars à Nice.
        </p>
      </div>

      {/* 2 Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* CARTE COFFRET DÉCOUVERTE */}
        <div className="rounded-3xl bg-white border-2 border-foam-border hover:border-foam-red p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
          <div className="space-y-5">
            
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-foam-subtle border border-foam-border relative">
              <img
                src={decouverte.image}
                alt={decouverte.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-foam-red text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                {decouverte.badge}
              </span>
              <span className="absolute bottom-3 right-3 bg-white/95 text-foam-navy font-bold text-xs px-2.5 py-1 rounded-full backdrop-blur-xs border border-foam-border">
                15 € (3 bières) / 26 € (6 bières)
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foam-red uppercase tracking-wider">
                  {decouverte.subtitle}
                </span>
                <span className="text-xs text-amber-500 font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  4.9/5
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy mt-1 group-hover:text-foam-red transition-colors">
                {decouverte.name}
              </h2>
              <p className="text-xs sm:text-sm text-foam-text mt-3 leading-relaxed">
                {decouverte.description}
              </p>
            </div>

            {/* Inclus dans le coffret */}
            <div className="p-4 rounded-2xl bg-foam-bg border border-foam-border space-y-2.5 text-xs">
              <strong className="text-foam-navy block uppercase tracking-wider text-[11px]">
                Recettes permanentes incluses :
              </strong>
              <ul className="space-y-1.5 text-foam-text">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-foam-red" />
                  <span><strong>FOAM West Coast IPA</strong> (Amertume franche, agrumes & résine)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-foam-gold" />
                  <span><strong>FOAM Lager</strong> (Blonde de soif florale & céréalière)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-foam-olive" />
                  <span><strong>FOAM Blanche</strong> (Bière de froment désaltérante aux agrumes doux)</span>
                </li>
              </ul>
              <p className="text-[11px] text-foam-muted italic pt-1 border-t border-foam-border/60">
                📦 Étui rigide prêt à offrir + sous-bocks collector offerts.
              </p>
            </div>

            {/* Format Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-foam-navy block">
                Choisir le format :
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setDecouverteFormat('pack3')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    decouverteFormat === 'pack3'
                      ? 'border-foam-red bg-foam-redSoft text-foam-red font-bold ring-1 ring-foam-red/20'
                      : 'border-foam-border bg-white text-foam-navy hover:border-foam-navy/40'
                  }`}
                >
                  <span className="block font-bold">Pack de 3</span>
                  <span className="font-serif font-black text-sm">15,00 €</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDecouverteFormat('pack6')}
                  className={`p-2.5 rounded-xl border text-center relative transition-all ${
                    decouverteFormat === 'pack6'
                      ? 'border-foam-red bg-foam-redSoft text-foam-red font-bold ring-1 ring-foam-red/20'
                      : 'border-foam-border bg-white text-foam-navy hover:border-foam-navy/40'
                  }`}
                >
                  <span className="absolute -top-2 right-2 bg-foam-red text-white text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full">
                    -10 €
                  </span>
                  <span className="block font-bold">Pack de 6</span>
                  <span className="font-serif font-black text-sm">26,00 €</span>
                </button>
              </div>
            </div>

          </div>

          {/* Action buttons */}
          <div className="pt-6 mt-6 border-t border-foam-border space-y-2.5">
            <button
              type="button"
              onClick={() => handleQuickAdd(decouverte, decouverteFormat)}
              className="w-full py-3.5 px-6 rounded-2xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-shopify hover:shadow-red-glow transition-all active:scale-98"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>
                Ajouter au panier ({decouverteFormat === 'pack6' ? '26,00 €' : '15,00 €'})
              </span>
            </button>

            <Link
              to="/coffrets/decouverte"
              className="w-full py-2.5 px-4 rounded-xl bg-foam-subtle hover:bg-foam-border text-foam-navy font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Voir la page de vente détaillée</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>


        {/* CARTE COFFRET EXOTIQUE */}
        <div className="rounded-3xl bg-white border-2 border-foam-border hover:border-foam-olive p-6 sm:p-8 shadow-shopify hover:shadow-shopify-hover transition-all flex flex-col justify-between group">
          <div className="space-y-5">
            
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-foam-subtle border border-foam-border relative">
              <img
                src={exotique.image}
                alt={exotique.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-foam-olive text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                {exotique.badge}
              </span>
              <span className="absolute bottom-3 right-3 bg-white/95 text-foam-navy font-bold text-xs px-2.5 py-1 rounded-full backdrop-blur-xs border border-foam-border">
                15 € (3 bières) / 26 € (6 bières)
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foam-olive uppercase tracking-wider">
                  {exotique.subtitle}
                </span>
                <span className="text-xs text-amber-500 font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  4.8/5
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy mt-1 group-hover:text-foam-olive transition-colors">
                {exotique.name}
              </h2>
              <p className="text-xs sm:text-sm text-foam-text mt-3 leading-relaxed">
                {exotique.description}
              </p>
            </div>

            {/* Inclus dans le coffret */}
            <div className="p-4 rounded-2xl bg-foam-bg border border-foam-border space-y-2.5 text-xs">
              <strong className="text-foam-navy block uppercase tracking-wider text-[11px]">
                Cuvées éphémères du Brasseur incluses :
              </strong>
              <ul className="space-y-1.5 text-foam-text">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span><strong>Brassin Riviera Tropicale</strong> (Mangue & fruits de la passion)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span><strong>Cuvée Houblon Niçois Solaire</strong> (Houblons cultivés à Nice)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span><strong>Blanche Exotique Éphémère</strong> (Zestes d'agrumes rares)</span>
                </li>
              </ul>
              <p className="text-[11px] text-foam-muted italic pt-1 border-t border-foam-border/60">
                🌱 Recettes rares non pasteurisées servies d'ordinaire à la pression.
              </p>
            </div>

            {/* Format Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-foam-navy block">
                Choisir le format :
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setExotiqueFormat('pack3')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    exotiqueFormat === 'pack3'
                      ? 'border-foam-olive bg-foam-oliveSoft text-foam-olive font-bold ring-1 ring-foam-olive/20'
                      : 'border-foam-border bg-white text-foam-navy hover:border-foam-navy/40'
                  }`}
                >
                  <span className="block font-bold">Pack de 3</span>
                  <span className="font-serif font-black text-sm">15,00 €</span>
                </button>

                <button
                  type="button"
                  onClick={() => setExotiqueFormat('pack6')}
                  className={`p-2.5 rounded-xl border text-center relative transition-all ${
                    exotiqueFormat === 'pack6'
                      ? 'border-foam-olive bg-foam-oliveSoft text-foam-olive font-bold ring-1 ring-foam-olive/20'
                      : 'border-foam-border bg-white text-foam-navy hover:border-foam-navy/40'
                  }`}
                >
                  <span className="absolute -top-2 right-2 bg-foam-olive text-white text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full">
                    -10 €
                  </span>
                  <span className="block font-bold">Pack de 6</span>
                  <span className="font-serif font-black text-sm">26,00 €</span>
                </button>
              </div>
            </div>

          </div>

          {/* Action buttons */}
          <div className="pt-6 mt-6 border-t border-foam-border space-y-2.5">
            <button
              type="button"
              onClick={() => handleQuickAdd(exotique, exotiqueFormat)}
              className="w-full py-3.5 px-6 rounded-2xl bg-foam-navy hover:bg-foam-navyLight text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-shopify transition-all active:scale-98"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>
                Ajouter au panier ({exotiqueFormat === 'pack6' ? '26,00 €' : '15,00 €'})
              </span>
            </button>

            <Link
              to="/coffrets/exotique"
              className="w-full py-2.5 px-4 rounded-xl bg-foam-subtle hover:bg-foam-border text-foam-navy font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Voir la page de vente détaillée</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Trust & Comparison Row */}
      <div className="rounded-3xl bg-white border border-foam-border p-6 sm:p-8 shadow-shopify">
        <h3 className="font-serif text-xl font-bold text-foam-navy text-center mb-6">
          Pourquoi choisir nos coffrets FOAM ?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-foam-text">
          <div className="p-4 rounded-2xl bg-foam-bg border border-foam-border space-y-1.5">
            <strong className="font-bold text-sm text-foam-navy block">
              💰 Économie Réelle
            </strong>
            <p className="leading-relaxed">
              Le pack de 6 à 26,00 € revient à <strong>4,33 € la bière</strong> au lieu de 6,00 € à l'unité, soit <strong>10 € d'économie</strong> immédiate.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-foam-oliveSoft border border-foam-olive/30 space-y-1.5">
            <strong className="font-bold text-sm text-foam-olive block">
              📍 Retrait Gratuit 0 € à Nice
            </strong>
            <p className="text-foam-text leading-relaxed">
              Récupérez vos bouteilles fraîches au <strong>Port de Nice</strong> ou <strong>Place du Pin</strong> sans débourser un centime de frais de port.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-foam-bg border border-foam-border space-y-1.5">
            <strong className="font-bold text-sm text-foam-navy block">
              🎁 Prêt à Offrir
            </strong>
            <p className="leading-relaxed">
              Étui carton rigide, élégant et écoresponsable, avec sous-bocks collector offerts dans chaque commande.
            </p>
          </div>
        </div>
      </div>

      {/* Banner to Unit Beers */}
      <div className="rounded-3xl bg-foam-navy text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-shopify">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-foam-redSoft">
            Bouteilles 33cl à l'Unité
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Vous préférez choisir vos bières à l'unité ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Découvrez nos 3 recettes permanentes (West Coast IPA, Lager, Blanche) au tarif unitaire de 6,00 €.
          </p>
        </div>

        <Link
          to="/bieres"
          className="py-4 px-7 rounded-2xl bg-foam-red hover:bg-foam-redDark text-white font-bold text-sm shrink-0 flex items-center gap-2 shadow-shopify hover:shadow-red-glow transition-all"
        >
          <span>Découvrir nos 3 Bières à l'Unité</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
