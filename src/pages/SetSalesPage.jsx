import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingBag, Check, Star, MapPin, Truck, ShieldCheck, 
  Package, ChevronRight, ChevronDown, Sparkles, Heart, Award, ArrowRight, Beer 
} from 'lucide-react';
import { SETS, SHIPPING_RATES, BARS_DATA } from '../data/products';
import { useCart } from '../context/CartContext';

export default function SetSalesPage({ defaultSlug }) {
  const { slug } = useParams();
  const setSlug = slug || defaultSlug || 'coffret-decouverte';
  const product = SETS[setSlug] || SETS['coffret-decouverte'];
  const otherSlug = setSlug === 'coffret-decouverte' ? 'coffret-exotique' : 'coffret-decouverte';
  const otherSet = SETS[otherSlug];

  const { addItem, deliveryMethod, setDeliveryMethod, setIsCartOpen, setIsCheckoutOpen } = useCart();

  // State: 'pack3' (15€) or 'pack6' (26€)
  const [selectedFormat, setSelectedFormat] = useState('pack6');
  const [quantity, setQuantity] = useState(1);
  const [addedAlert, setAddedAlert] = useState(false);

  const currentPack = selectedFormat === 'pack3' ? product.pack3 : product.pack6;

  const handleAddToCart = () => {
    addItem(product, selectedFormat, quantity);
    setAddedAlert(true);
    setTimeout(() => setAddedAlert(false), 2500);
  };

  const handleBuyNow = () => {
    addItem(product, selectedFormat, quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Breadcrumbs (Shopify standard) */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-foam-muted">
        <Link to="/" className="hover:text-foam-red transition-colors">Accueil</Link>
        <ChevronRight className="w-3.5 h-3.5 text-foam-border" />
        <span className="text-foam-muted">Coffrets Cadeaux</span>
        <ChevronRight className="w-3.5 h-3.5 text-foam-border" />
        <span className="text-foam-navy font-bold truncate">{product.name}</span>
      </nav>

      {/* Main Product Section (2 Columns Shopify Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Image Showcase & Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl overflow-hidden bg-white border border-foam-border shadow-shopify aspect-[4/3]">
            <img
              src={product.image}
              alt={product.fullName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Guarantees row below image */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs text-foam-navy pt-2">
            <div className="p-3 bg-white rounded-xl border border-foam-border shadow-2xs">
              <Beer className="w-5 h-5 text-foam-red mx-auto mb-1" />
              <p className="font-bold text-[11px]">100% Artisanal</p>
              <p className="text-[10px] text-foam-muted">Brassée au Port</p>
            </div>
            <div className="p-3 bg-foam-oliveSoft rounded-xl border border-foam-olive/25 shadow-2xs">
              <MapPin className="w-5 h-5 text-foam-olive mx-auto mb-1" />
              <p className="font-bold text-[11px] text-foam-olive">Click & Collect 0€</p>
              <p className="text-[10px] text-foam-olive">Prêt en 2h au bar</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-foam-border shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-foam-navy mx-auto mb-1" />
              <p className="font-bold text-[11px]">Garantie Anti-Casse</p>
              <p className="text-[10px] text-foam-muted">Étui rigide certifié</p>
            </div>
          </div>
        </div>

        {/* Right Column: Buying Options & E-Commerce Core */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-foam-navy">{product.rating} / 5</span>
              <span className="text-xs text-foam-muted font-medium">({product.reviewsCount} avis clients vérifiés)</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-black text-foam-navy leading-tight">
              {product.fullName}
            </h1>
            <p className="text-xs font-bold uppercase tracking-wider text-foam-red mt-1">
              {product.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-foam-text mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price Header (Live updated based on selected format) */}
          <div className="p-4 bg-white rounded-2xl border border-foam-border shadow-2xs flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-black text-foam-navy">
                  {currentPack.price.toFixed(2)} €
                </span>
                <span className="text-xs font-bold text-foam-muted">
                  TTC ({currentPack.unitPrice})
                </span>
              </div>
              <span className="text-xs font-bold text-foam-olive block mt-0.5">
                {currentPack.savingNote}
              </span>
            </div>

            <span className="text-xs font-bold text-foam-olive flex items-center gap-1">
              ✓ En stock à Nice
            </span>
          </div>

          {/* 1. VARIANT SELECTOR (Pack 3 vs Pack 6) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold uppercase tracking-wider text-foam-navy">
                Format de Coffret :
              </label>
              <span className="text-foam-red font-bold">
                {selectedFormat === 'pack6' ? '✓ Format Recommandé' : 'Format Découverte'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Pack de 3 button */}
              <button
                type="button"
                onClick={() => setSelectedFormat('pack3')}
                className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                  selectedFormat === 'pack3'
                    ? 'border-foam-red bg-foam-redSoft shadow-xs ring-2 ring-foam-red/20'
                    : 'border-foam-border bg-white hover:border-foam-navy/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-foam-navy">Pack de 3</span>
                  <span className="font-serif font-black text-sm text-foam-navy">15,00 €</span>
                </div>
                <p className="text-[11px] text-foam-muted mt-0.5">3 bouteilles (33cl)</p>
                <p className="text-[10px] text-foam-muted">5,00 € / unité</p>
              </button>

              {/* Pack de 6 button */}
              <button
                type="button"
                onClick={() => setSelectedFormat('pack6')}
                className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                  selectedFormat === 'pack6'
                    ? 'border-foam-red bg-foam-redSoft shadow-xs ring-2 ring-foam-red/20'
                    : 'border-foam-border bg-white hover:border-foam-navy/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-foam-navy">Pack de 6</span>
                  <span className="font-serif font-black text-sm text-foam-redDark">26,00 €</span>
                </div>
                <p className="text-[11px] text-foam-muted mt-0.5">6 bouteilles (33cl)</p>
                <p className="text-[10px] text-foam-red font-bold mt-0.5">-10 € d'économie (4,33 € / unité)</p>
              </button>
            </div>
          </div>

          {/* 2. DYNAMIC CONTENTS OF SELECTED FORMAT */}
          <div className="p-4 bg-white rounded-xl border border-foam-border space-y-2 text-xs">
            <span className="font-bold uppercase tracking-wider text-foam-navy block">
              Contenu de votre {currentPack.format} :
            </span>
            <ul className="space-y-1.5 text-foam-text">
              {currentPack.contents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foam-olive shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foam-navy">{item.name}</strong>
                    <span className="text-foam-muted text-[11px] block">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. DELIVERY SELECTOR (Click & Collect 0€ vs Colis) */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-foam-navy">
              Mode de réception :
            </label>

            <div className="space-y-2">
              <label 
                className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'clickAndCollect'
                    ? 'border-foam-olive bg-foam-oliveSoft'
                    : 'border-foam-border bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="setDelivery"
                  checked={deliveryMethod === 'clickAndCollect'}
                  onChange={() => setDeliveryMethod('clickAndCollect')}
                  className="mt-0.5 text-foam-olive focus:ring-foam-olive"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foam-olive flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Retrait Click & Collect au bar
                    </span>
                    <span className="font-extrabold text-foam-olive bg-white px-2 py-0.5 rounded text-[10px] border border-foam-olive/30">
                      GRATUIT (0,00 €)
                    </span>
                  </div>
                  <p className="text-[11px] text-foam-text mt-0.5">
                    Retrait express sous 2h à <strong>FOAM Port de Nice (Quai des Deux Emmanuels)</strong> ou <strong>Place du Pin</strong>.
                  </p>
                </div>
              </label>

              <label 
                className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'homeDelivery'
                    ? 'border-foam-navy bg-white'
                    : 'border-foam-border bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="setDelivery"
                  checked={deliveryMethod === 'homeDelivery'}
                  onChange={() => setDeliveryMethod('homeDelivery')}
                  className="mt-0.5 text-foam-navy focus:ring-foam-navy"
                />
                <div className="text-xs flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foam-navy flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-foam-red" />
                      Expédition Colis Sécurisé Anti-Casse
                    </span>
                    <span className="font-bold text-foam-navy">
                      {SHIPPING_RATES.homeDelivery.toFixed(2)} €
                    </span>
                  </div>
                  <p className="text-[11px] text-foam-muted mt-0.5">
                    Emballage renforcé pour transport de verre sécurisé à domicile.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* 4. ACTIONS CTA : Quantity + Add to Cart + Express Checkout */}
          <div className="space-y-3 pt-2">
            
            <div className="flex items-center gap-3">
              {/* Quantity Picker */}
              <div className="flex items-center border-2 border-foam-border rounded-xl bg-white p-1 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-lg text-foam-navy hover:bg-foam-subtle flex items-center justify-center font-black text-base"
                >
                  -
                </button>
                <span className="w-9 text-center font-bold text-sm text-foam-navy">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-lg text-foam-navy hover:bg-foam-subtle flex items-center justify-center font-black text-base"
                >
                  +
                </button>
              </div>

              {/* Add to Cart CTA in FOAM Red #904545 */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-4 px-6 rounded-xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-shopify hover:shadow-red-glow transition-all active:scale-98"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>
                  {addedAlert ? '✓ Ajouté au panier !' : `Ajouter au Panier • ${(currentPack.price * quantity).toFixed(2)} €`}
                </span>
              </button>
            </div>

            {/* Express Checkout Button */}
            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full py-3.5 px-6 rounded-xl bg-foam-navy hover:bg-foam-navyLight text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-2xs"
            >
              <span>Commander immédiatement</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-foam-muted font-medium">
              🔒 Paiement 100% sécurisé • Réservation garantie en direct de notre brasserie au Port de Nice.
            </p>
          </div>

          {/* Cross-sell to other set */}
          <div className="pt-3 border-t border-foam-border">
            <Link
              to={`/coffrets/${otherSlug === 'coffret-exotique' ? 'exotique' : 'decouverte'}`}
              className="p-3.5 rounded-2xl bg-white border border-foam-border hover:border-foam-navy/40 flex items-center justify-between text-xs group transition-all"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foam-red block">
                  Découvrez également :
                </span>
                <strong className="text-foam-navy group-hover:text-foam-red transition-colors text-sm">
                  {otherSet.name}
                </strong>
                <p className="text-foam-muted text-[11px]">{otherSet.subtitle}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-foam-red" />
            </Link>
          </div>

        </div>

      </div>


      {/* ACCORDIONS / DETAILS SECTION (Shopify Product Specs Standard) */}
      <div className="pt-10 border-t border-foam-border space-y-6">
        
        <h2 className="font-serif text-2xl font-bold text-foam-navy text-center sm:text-left">
          Caractéristiques & Engagements du Coffret
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-white rounded-2xl border border-foam-border shadow-shopify space-y-3">
            <div className="w-10 h-10 rounded-xl bg-foam-redSoft text-foam-red flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-foam-navy">
              Packaging Écoresponsable
            </h3>
            <p className="text-xs text-foam-text leading-relaxed">
              Étui carton rigide fabriqué à partir de fibres recyclées, équipé d'alvéoles de calage individuel pour garantir la sécurité absolue des bouteilles de verre.
            </p>
            <ul className="text-xs text-foam-muted space-y-1 pt-1">
              {product.goodiesIncluded.map((g, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-foam-olive shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-foam-border shadow-shopify space-y-3">
            <div className="w-10 h-10 rounded-xl bg-foam-oliveSoft text-foam-olive flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-foam-navy">
              Le Savoir-Faire de Stéphane
            </h3>
            <p className="text-xs text-foam-text leading-relaxed">
              Toutes les bières de ce coffret sont brassées au 3 Quai des Deux Emmanuels. Sans pasteurisation ni filtration agressive, elles conservent l'intégralité de leurs vertus aromatiques.
            </p>
            <ul className="text-xs text-foam-muted space-y-1 pt-1">
              {product.technicalHighlights.map((t, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-foam-olive shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-foam-border shadow-shopify space-y-3">
            <div className="w-10 h-10 rounded-xl bg-foam-navy text-white flex items-center justify-center">
              <MapPin className="w-5 h-5 text-foam-redSoft" />
            </div>
            <h3 className="font-serif text-lg font-bold text-foam-navy">
              Retrait 0 € aux Bars FOAM
            </h3>
            <p className="text-xs text-foam-text leading-relaxed">
              Économisez les frais de port en venant chercher votre coffret frais au bar. Profitez-en pour contempler les cuves de brassage du Port de Nice ou boire un verre Place du Pin.
            </p>
            <div className="pt-1">
              <Link to="/nos-bars" className="text-xs font-bold text-foam-red hover:underline">
                Voir les 2 adresses à Nice →
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
