import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingBag, Check, Star, MapPin, Truck, ShieldCheck, 
  Package, ChevronRight, ChevronDown, Sparkles, Heart, Award, ArrowRight, Beer, Camera, Sun 
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
  const [activeImage, setActiveImage] = useState(product.image);

  // Sync activeImage when product changes
  useEffect(() => {
    setActiveImage(product.image);
  }, [product.image]);

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
      
      {/* Breadcrumbs Riviera */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-foam-muted">
        <Link to="/" className="hover:text-foam-terracotta transition-colors">Accueil</Link>
        <ChevronRight className="w-3.5 h-3.5 text-foam-borderWarm" />
        <Link to="/coffrets" className="hover:text-foam-terracotta transition-colors">Coffrets Cadeaux</Link>
        <ChevronRight className="w-3.5 h-3.5 text-foam-borderWarm" />
        <span className="text-foam-navy font-bold truncate">{product.name}</span>
      </nav>

      {/* Main Product Section (2 Columns Riviera Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Image Showcase & Gallery en lumière naturelle */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Photo Display */}
          <div className="rounded-2xl overflow-hidden bg-white border border-foam-borderWarm/80 shadow-riviera aspect-[4/3] relative group">
            <img
              src={activeImage || product.image}
              alt={product.fullName}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-102"
            />
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-foam-navy/90 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wide">
              <Camera className="w-3.5 h-3.5 text-foam-gold" />
              <span>Photo officielle FOAM</span>
            </div>
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 text-foam-navy text-[11px] font-semibold tracking-wide shadow-xs border border-foam-border">
              Quai des Deux Emmanuels
            </div>
          </div>

          {/* Interactive Thumbnails Gallery */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="space-y-2">
              <span className="text-xs font-serif font-bold text-foam-navy block">
                Galerie photos du coffret ({product.gallery.length} vues) :
              </span>
              <div className="grid grid-cols-4 gap-2.5">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all p-0.5 bg-white ${
                      activeImage === img
                        ? 'border-foam-terracotta ring-2 ring-foam-terracotta/25 shadow-xs scale-102'
                        : 'border-foam-border hover:border-foam-navy/40 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Aperçu ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Guarantees row below image */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs text-foam-navy pt-2">
            <div className="p-3.5 bg-white rounded-xl border border-foam-border shadow-xs">
              <Beer className="w-5 h-5 text-foam-terracotta mx-auto mb-1 stroke-[2]" />
              <p className="font-bold text-[11px]">100% Artisanal</p>
              <p className="text-[10px] text-foam-muted">Brassée au Port de Nice</p>
            </div>
            <div className="p-3.5 bg-foam-pineSoft rounded-xl border border-foam-pine/20 shadow-xs">
              <MapPin className="w-5 h-5 text-foam-pine mx-auto mb-1 stroke-[2]" />
              <p className="font-bold text-[11px] text-foam-pine">Click & Collect 0 €</p>
              <p className="text-[10px] text-foam-pine">Prêt en 2h au bar</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-foam-border shadow-xs">
              <ShieldCheck className="w-5 h-5 text-foam-navy mx-auto mb-1 stroke-[2]" />
              <p className="font-bold text-[11px]">Garantie Anti-Casse</p>
              <p className="text-[10px] text-foam-muted">Étui kraft renforcé</p>
            </div>
          </div>
        </div>

        {/* Right Column: Buying Options & E-Commerce Core */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-foam-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foam-gold text-foam-gold" />
                ))}
              </div>
              <span className="text-xs font-bold text-foam-navy">{product.rating} / 5</span>
              <span className="text-xs text-foam-muted font-medium">({product.reviewsCount} avis clients vérifiés)</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foam-navy leading-tight">
              {product.fullName}
            </h1>
            <p className="text-xs font-bold uppercase tracking-wider text-foam-terracotta mt-1">
              {product.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-foam-text mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price Header (Live updated based on selected format) */}
          <div className="p-4 bg-white rounded-2xl border border-foam-border shadow-xs flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-foam-navy">
                  {currentPack.price.toFixed(2)} €
                </span>
                <span className="text-xs font-semibold text-foam-muted">
                  TTC ({currentPack.unitPrice})
                </span>
              </div>
              <span className="text-xs font-semibold text-foam-pine block mt-0.5">
                {currentPack.savingNote}
              </span>
            </div>

            <span className="text-xs font-semibold text-foam-pine bg-foam-pineSoft px-2.5 py-1 rounded-full border border-foam-pine/20">
              ✓ En stock à Nice
            </span>
          </div>

          {/* 1. VARIANT SELECTOR (Pack 3 vs Pack 6) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold uppercase tracking-wider text-foam-navy font-serif">
                Format de Coffret :
              </label>
              <span className="text-foam-terracotta font-semibold">
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
                    ? 'border-foam-terracotta bg-foam-terracottaSoft shadow-xs'
                    : 'border-foam-border bg-white hover:border-foam-navy/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-foam-navy">Pack de 3</span>
                  <span className="font-serif font-bold text-sm text-foam-navy">15,00 €</span>
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
                    ? 'border-foam-terracotta bg-foam-terracottaSoft shadow-xs'
                    : 'border-foam-border bg-white hover:border-foam-navy/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-foam-navy">Pack de 6</span>
                  <span className="font-serif font-bold text-sm text-foam-terracotta">26,00 €</span>
                </div>
                <p className="text-[11px] text-foam-muted mt-0.5">6 bouteilles (33cl)</p>
                <p className="text-[10px] text-foam-terracotta font-bold mt-0.5">-10 € d'économie (4,33 € / unité)</p>
              </button>
            </div>
          </div>

          {/* 2. DYNAMIC CONTENTS OF SELECTED FORMAT */}
          <div className="p-4 bg-white rounded-2xl border border-foam-border space-y-2 text-xs">
            <span className="font-serif font-bold uppercase tracking-wider text-foam-navy block">
              Contenu de votre {currentPack.format} :
            </span>
            <ul className="space-y-1.5 text-foam-text">
              {currentPack.contents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foam-pine shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <strong className="text-foam-navy font-semibold">{item.name}</strong>
                    <span className="text-foam-muted text-[11px] block">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. DELIVERY SELECTOR (Click & Collect 0€ vs Colis) */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-foam-navy font-serif">
              Mode de réception :
            </label>

            <div className="space-y-2">
              <label 
                className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'clickAndCollect'
                    ? 'border-foam-pine bg-foam-pineSoft'
                    : 'border-foam-border bg-white hover:border-foam-navy/30'
                }`}
              >
                <input
                  type="radio"
                  name="setDelivery"
                  checked={deliveryMethod === 'clickAndCollect'}
                  onChange={() => setDeliveryMethod('clickAndCollect')}
                  className="mt-0.5 text-foam-pine accent-[#1D3C2F]"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2 font-bold text-foam-pine">
                    <MapPin className="w-3.5 h-3.5 stroke-[2]" />
                    <span>Retrait Click & Collect au bar</span>
                    <span className="bg-white px-2 py-0.5 rounded-full text-[10px] border border-foam-pine/30 font-bold">
                      GRATUIT (0 €)
                    </span>
                  </div>
                  <p className="text-[11px] text-foam-text mt-0.5 leading-snug">
                    Disponible sous 2h dans nos 2 bars à Nice (Port ou Place du Pin).
                  </p>
                </div>
              </label>

              <label 
                className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'shipping'
                    ? 'border-foam-navy bg-foam-navySoft'
                    : 'border-foam-border bg-white hover:border-foam-navy/30'
                }`}
              >
                <input
                  type="radio"
                  name="setDelivery"
                  checked={deliveryMethod === 'shipping'}
                  onChange={() => setDeliveryMethod('shipping')}
                  className="mt-0.5 text-foam-navy accent-[#112338]"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2 font-bold text-foam-navy">
                    <Truck className="w-3.5 h-3.5 stroke-[2]" />
                    <span>Expédition à domicile anti-casse</span>
                    <span className="font-semibold text-foam-muted">
                      ({SHIPPING_RATES[selectedFormat].price.toFixed(2)} €)
                    </span>
                  </div>
                  <p className="text-[11px] text-foam-text mt-0.5 leading-snug">
                    Livraison soignée en carton kraft renforcé sous 48 à 72h ouvrées.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* 4. QUANTITY & DUAL CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-foam-border rounded-xl bg-white shadow-xs overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-11 flex items-center justify-center font-bold text-base hover:bg-foam-subtle transition-colors"
                  aria-label="Diminuer"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-11 flex items-center justify-center font-bold text-base hover:bg-foam-subtle transition-colors"
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-riviera-terracotta flex-1 text-sm py-3.5"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2]" />
                <span>Ajouter au Panier • {(currentPack.price * quantity).toFixed(2)} €</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleBuyNow}
              className="btn-riviera-navy w-full text-sm py-4"
            >
              <span>Commander immédiatement (Express)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Added toast alert */}
            {addedAlert && (
              <div className="p-3 bg-foam-terracottaSoft border border-foam-terracotta text-foam-terracotta rounded-xl text-xs font-semibold flex items-center justify-between animate-fade-in">
                <span>✓ Coffret ajouté avec succès au panier</span>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="underline hover:text-foam-navy ml-2 font-bold"
                >
                  Voir le panier →
                </button>
              </div>
            )}
          </div>

          {/* Other set link */}
          <div className="pt-2 text-center">
            <Link 
              to={`/coffrets/${otherSlug === 'coffret-exotique' ? 'exotique' : 'decouverte'}`}
              className="text-xs font-serif font-bold text-foam-navy hover:text-foam-terracotta underline inline-flex items-center gap-1.5"
            >
              <span>Découvrir aussi : {otherSet.name} ({otherSet.subtitle}) →</span>
            </Link>
          </div>

        </div>

      </div>

      {/* Accordions Riviera (Dégustation, Retrait & Sécurité) */}
      <div className="border-t border-foam-borderWarm/60 pt-10 space-y-3">
        <h3 className="font-serif text-2xl font-bold text-foam-navy mb-4">
          Notes de Dégustation & Informations Pratiques
        </h3>

        <details className="card-riviera p-4 group" open>
          <summary className="flex items-center justify-between font-serif font-bold text-sm cursor-pointer select-none text-foam-navy">
            <span className="flex items-center gap-2">
              <Beer className="w-4 h-4 text-foam-terracotta stroke-[2]" />
              Le mot du Maître Brasseur Stéphane
            </span>
            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-foam-muted" />
          </summary>
          <div className="pt-3 text-xs text-foam-text leading-relaxed border-t border-foam-border mt-3 font-sans">
            Toutes les bouteilles de ce coffret ont été brassées et embouteillées au 3 Quai des Deux Emmanuels au Port de Nice. Bières vivantes, non filtrées et non pasteurisées pour conserver l'intégralité des huiles aromatiques du houblon. À conserver debout au frais (entre 6°C et 10°C).
          </div>
        </details>

        <details className="card-riviera p-4 group">
          <summary className="flex items-center justify-between font-serif font-bold text-sm cursor-pointer select-none text-foam-navy">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-foam-pine stroke-[2]" />
              Conditions du Click & Collect au bar (0 €)
            </span>
            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-foam-muted" />
          </summary>
          <div className="pt-3 text-xs text-foam-text leading-relaxed border-t border-foam-border mt-3 space-y-2 font-sans">
            <p>
              Le retrait gratuit est disponible dans nos deux adresses niçoises :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>FOAM Port de Nice</strong> : 3 Quai des Deux Emmanuels, 06300 Nice (Tous les jours 12h-00h).</li>
              <li><strong>FOAM Place du Pin</strong> : Place du Pin, 06300 Nice (Mardi au Dimanche 17h-00h).</li>
            </ul>
            <p>Votre commande est préparée sous 2h et mise de côté à votre nom.</p>
          </div>
        </details>

        <details className="card-riviera p-4 group">
          <summary className="flex items-center justify-between font-serif font-bold text-sm cursor-pointer select-none text-foam-navy">
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4 text-foam-terracotta stroke-[2]" />
              Étui kraft rigide & protection anti-casse
            </span>
            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-foam-muted" />
          </summary>
          <div className="pt-3 text-xs text-foam-text leading-relaxed border-t border-foam-border mt-3 font-sans">
            Nos coffrets sont confectionnés en carton kraft rigide certifié FSC, 100% recyclable et conçu sur-mesure pour caler individuellement chaque bouteille de 33cl contre les chocs du transport.
          </div>
        </details>
      </div>

    </div>
  );
}
