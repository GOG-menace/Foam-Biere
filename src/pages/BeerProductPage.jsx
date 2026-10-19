import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingBag, Check, Star, MapPin, Truck, ChevronRight, 
  Utensils, Award, Info, Beer, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { BEERS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function BeerProductPage({ defaultSlug }) {
  const { slug } = useParams();
  const beerSlug = slug || defaultSlug || 'west-coast';
  const beer = BEERS[beerSlug] || BEERS['west-coast'];
  const otherBeers = Object.values(BEERS).filter(b => b.slug !== beer.slug);

  const { addItem, setIsCartOpen, setIsCheckoutOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedAlert, setAddedAlert] = useState(false);

  const handleAddToCart = () => {
    addItem(beer, 'bottle', quantity);
    setAddedAlert(true);
    setTimeout(() => setAddedAlert(false), 2500);
  };

  const handleBuyNow = () => {
    addItem(beer, 'bottle', quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-foam-muted">
        <Link to="/" className="hover:text-foam-red transition-colors">Accueil</Link>
        <ChevronRight className="w-3.5 h-3.5 text-foam-border" />
        <Link to="/bieres" className="hover:text-foam-red transition-colors">Nos Bières</Link>
        <ChevronRight className="w-3.5 h-3.5 text-foam-border" />
        <span className="text-foam-navy font-bold truncate">{beer.name}</span>
      </nav>

      {/* Main 2-Column Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Image & Technical Gauges */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-3xl overflow-hidden bg-white border-2 border-foam-border shadow-shopify relative aspect-[4/3]">
            <img
              src={beer.image}
              alt={beer.fullName}
              className="w-full h-full object-cover"
            />

            <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-white shadow-xs ${
              beer.badgeColor === 'amber' ? 'bg-foam-red' : beer.badgeColor === 'olive' ? 'bg-foam-olive' : 'bg-foam-gold'
            }`}>
              {beer.badge}
            </span>

            <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-foam-navy shadow border border-foam-border">
              {beer.volume} • {beer.abv}
            </div>
          </div>

          {/* Sensory Gauges (Amertume, Fraîcheur, Fruité, Malt) */}
          <div className="p-6 bg-white rounded-3xl border border-foam-border shadow-shopify space-y-4">
            <h3 className="font-serif text-lg font-bold text-foam-navy">
              Profil Sensoriel du Brasseur
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-foam-navy mb-1">
                  <span>Amertume ({beer.ibu} IBU)</span>
                  <span className="text-foam-red font-black">{beer.sensoryProfile.amertume} / 5</span>
                </div>
                <div className="w-full bg-foam-subtle h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-foam-red h-full rounded-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.amertume / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-foam-navy mb-1">
                  <span>Fraîcheur en bouche</span>
                  <span className="text-foam-olive font-black">{beer.sensoryProfile.fraicheur} / 5</span>
                </div>
                <div className="w-full bg-foam-subtle h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-foam-olive h-full rounded-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.fraicheur / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-foam-navy mb-1">
                  <span>Arômes fruités</span>
                  <span className="text-amber-600 font-black">{beer.sensoryProfile.fruite} / 5</span>
                </div>
                <div className="w-full bg-foam-subtle h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full rounded-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.fruite / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-foam-navy mb-1">
                  <span>Rondeur du malt</span>
                  <span className="text-foam-navy font-black">{beer.sensoryProfile.malt} / 5</span>
                </div>
                <div className="w-full bg-foam-subtle h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-foam-navy h-full rounded-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.malt / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Buying Options & Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-foam-navy">{beer.rating} / 5</span>
              <span className="text-xs text-foam-muted font-medium">({beer.reviewsCount} avis vérifiés)</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-black text-foam-navy leading-tight">
              {beer.fullName}
            </h1>
            <p className="text-xs font-bold uppercase tracking-wider text-foam-red mt-1">
              {beer.tagline}
            </p>

            <div className="mt-4 p-4 bg-white rounded-2xl border border-foam-border shadow-2xs flex items-baseline justify-between">
              <div>
                <span className="font-serif text-3xl font-black text-foam-navy">
                  {beer.price.toFixed(2)} €
                </span>
                <span className="text-xs font-bold text-foam-muted ml-2">
                  TTC • Bouteille de 33cl
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                En stock aux cuves ({beer.stockCount} dispo)
              </span>
            </div>
          </div>

          {/* Description & Aromatics */}
          <div className="space-y-3 text-xs sm:text-sm text-foam-text leading-relaxed">
            <p className="font-semibold text-foam-red text-base">
              « {beer.shortDesc} »
            </p>
            <p>
              {beer.fullDesc}
            </p>
          </div>

          {/* Detailed Tasting Notes */}
          <div className="p-5 bg-foam-redSoft/50 rounded-2xl border border-foam-redBorder space-y-2.5 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-foam-navy flex items-center gap-1.5">
              <Beer className="w-4 h-4 text-foam-red" />
              <span>Notes de Dégustation :</span>
            </h4>
            <div className="space-y-1.5 text-foam-text">
              <p><strong className="text-foam-navy">Robe :</strong> {beer.tastingNotes.robe}</p>
              <p><strong className="text-foam-navy">Nez :</strong> {beer.tastingNotes.nez}</p>
              <p><strong className="text-foam-navy">Bouche :</strong> {beer.tastingNotes.bouche}</p>
            </div>
          </div>

          {/* Food Pairing with Nice Cuisine */}
          <div className="p-4 bg-foam-oliveSoft rounded-2xl border border-foam-olive/30 flex items-start gap-3 text-xs">
            <Utensils className="w-5 h-5 text-foam-olive shrink-0 mt-0.5" />
            <div>
              <strong className="text-foam-olive font-bold text-xs uppercase tracking-wider block">
                Accords Mets & Gastronomie Niçoise :
              </strong>
              <p className="text-foam-text mt-1 leading-relaxed">
                {beer.pairing}
              </p>
            </div>
          </div>

          {/* Service tips */}
          <div className="grid grid-cols-2 gap-3 text-xs text-foam-navy">
            <div className="p-3 bg-white rounded-xl border border-foam-border">
              <span className="text-foam-muted block text-[11px]">Température de service :</span>
              <strong className="font-bold">{beer.serviceTemperature}</strong>
            </div>
            <div className="p-3 bg-white rounded-xl border border-foam-border">
              <span className="text-foam-muted block text-[11px]">Verre conseillé :</span>
              <strong className="font-bold text-[11px] truncate block">{beer.recommendedGlass}</strong>
            </div>
          </div>

          {/* Add to Cart Actions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center border-2 border-foam-border rounded-xl bg-white p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-lg text-foam-navy hover:bg-foam-subtle flex items-center justify-center font-black"
                >
                  -
                </button>
                <span className="w-9 text-center font-bold text-sm text-foam-navy">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-lg text-foam-navy hover:bg-foam-subtle flex items-center justify-center font-black"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-4 px-6 rounded-2xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-shopify hover:shadow-red-glow transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>
                  {addedAlert ? '✓ Ajouté au panier !' : `Ajouter au Panier • ${(beer.price * quantity).toFixed(2)} €`}
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full py-3.5 px-6 rounded-2xl bg-foam-navy hover:bg-foam-navyLight text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Commander immédiatement (0 € débité)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-foam-muted">
              📍 Retrait Click & Collect 0 € disponible sous 2h aux bars FOAM Port et Place du Pin.
            </p>
          </div>

          {/* Set Upsell banner */}
          <div className="p-4 bg-gradient-to-r from-foam-redSoft to-amber-50 rounded-2xl border-2 border-foam-redBorder space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-foam-red">
                Économisez en Coffret !
              </span>
              <span className="text-xs font-black text-foam-red">Dès 15,00 €</span>
            </div>
            <p className="text-xs text-foam-text leading-snug">
              Retrouvez la {beer.name} dans notre <strong>Coffret Découverte</strong> avec nos 2 autres classiques (15 € le pack de 3 ou 26 € le pack de 6).
            </p>
            <Link
              to="/coffrets/decouverte"
              className="inline-block text-xs font-bold text-foam-navy underline hover:text-foam-red pt-1"
            >
              Voir le Coffret Découverte →
            </Link>
          </div>

        </div>

      </div>


      {/* TECHNICAL TABLE & DETAILS (Shopify Standard Specs) */}
      <div className="pt-10 border-t border-foam-border space-y-6">
        <h2 className="font-serif text-2xl font-bold text-foam-navy">
          Fiche Technique & Méthode de Brassage
        </h2>

        <div className="bg-white rounded-3xl border border-foam-border shadow-shopify overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-foam-border">
            
            <div className="p-6 space-y-3">
              <h3 className="font-bold uppercase tracking-wider text-xs text-foam-navy mb-4">
                Caractéristiques de la Bière
              </h3>
              <dl className="space-y-2.5 text-xs">
                {beer.technicalDetails.map((t, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-foam-border/60">
                    <dt className="text-foam-muted">{t.label}</dt>
                    <dd className="font-bold text-foam-navy text-right">{t.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-xs text-foam-navy mb-2">
                Ingrédients & Éthique de Brassage
              </h3>
              <p className="text-xs text-foam-text leading-relaxed">
                {beer.ingredients}
              </p>
              
              <div className="p-4 bg-foam-bg rounded-2xl border border-foam-border space-y-2 text-xs">
                <span className="font-bold text-foam-navy block">Parole de Stéphane (Maître Brasseur) :</span>
                <p className="text-foam-muted italic leading-relaxed">
                  « Nous brassons chaque semaine par petits volumes pour garantir une fraîcheur absolue. L'absence de pasteurisation et de filtration préserve la richesse naturelle des huiles de houblon et des protéines de malt. »
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* EXPLORE OTHER BEERS (Related Products Shopify Section) */}
      <div className="pt-8 border-t border-foam-border space-y-6">
        <h2 className="font-serif text-2xl font-bold text-foam-navy">
          Complétez votre Dégustation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherBeers.map((ob) => (
            <Link
              key={ob.slug}
              to={`/bieres/${ob.slug}`}
              className="p-5 bg-white rounded-3xl border border-foam-border hover:border-foam-navy shadow-shopify flex items-center justify-between gap-4 group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-foam-subtle shrink-0">
                  <img src={ob.image} alt={ob.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foam-red block">
                    {ob.style} • {ob.abv}
                  </span>
                  <strong className="text-base font-serif font-bold text-foam-navy group-hover:text-foam-red transition-colors">
                    {ob.name}
                  </strong>
                  <p className="text-xs text-foam-muted truncate max-w-xs">{ob.shortDesc}</p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="font-serif font-black text-lg text-foam-navy block">
                  {ob.price.toFixed(2)} €
                </span>
                <span className="text-xs font-bold text-foam-red group-hover:underline">
                  Voir →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
