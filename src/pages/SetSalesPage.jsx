import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingBag, Check, Star, MapPin, Truck, ShieldCheck, 
  Package, ChevronRight, ChevronDown, Sparkles, Heart, Award, ArrowRight, Beer, Camera, Flame 
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
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Breadcrumbs Monospace Brutaliste */}
      <nav className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-foam-muted">
        <Link to="/" className="hover:text-foam-orange transition-colors">ACCUEIL</Link>
        <span>/</span>
        <Link to="/coffrets" className="hover:text-foam-orange transition-colors">NOS COFFRETS</Link>
        <span>/</span>
        <span className="text-foam-black bg-foam-neon px-1.5 py-0.5 border border-foam-black">{product.name}</span>
      </nav>

      {/* Main Product Section (2 Columns Brutalist Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Image Showcase & Gallery au Flash Direct */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Photo Display */}
          <div className="overflow-hidden bg-white border-2 border-foam-black shadow-brutal aspect-[4/3] relative group">
            <img
              src={activeImage || product.image}
              alt={product.fullName}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-102"
            />
            <div className="absolute top-3 left-3 sticker sticker-black text-[10px]">
              <Camera className="w-3.5 h-3.5 text-foam-neon" />
              <span>PHOTO OFFICIELLE FOAM</span>
            </div>
            <div className="absolute bottom-3 right-3 sticker sticker-neon text-[10px]">
              ★ BRASSÉE AU PORT DE NICE
            </div>
          </div>

          {/* Interactive Thumbnails Gallery */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="space-y-2">
              <span className="font-mono text-xs font-black uppercase tracking-wider block text-foam-black">
                [ GALERIE DU COFFRET // {product.gallery.length} VUES ]
              </span>
              <div className="grid grid-cols-4 gap-2.5">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`aspect-[4/3] overflow-hidden border-2 transition-all p-0.5 bg-white ${
                      activeImage === img
                        ? 'border-foam-black ring-2 ring-foam-orange shadow-brutal-sm scale-102'
                        : 'border-foam-borderLight hover:border-foam-black opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Aperçu ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Guarantees row below image */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono pt-1">
            <div className="p-3 bg-white border-2 border-foam-black shadow-brutal-sm">
              <Beer className="w-5 h-5 text-foam-orange mx-auto mb-1 stroke-[2.5]" />
              <p className="font-black text-[11px] uppercase">100% ARTISANAL</p>
              <p className="text-[10px] text-foam-muted">Brassée au Port</p>
            </div>
            <div className="p-3 bg-foam-neon border-2 border-foam-black shadow-brutal-sm">
              <MapPin className="w-5 h-5 text-black mx-auto mb-1 stroke-[2.5]" />
              <p className="font-black text-[11px] uppercase text-black">CLICK & COLLECT 0 €</p>
              <p className="text-[10px] text-black">Prêt en 2h au bar</p>
            </div>
            <div className="p-3 bg-white border-2 border-foam-black shadow-brutal-sm">
              <ShieldCheck className="w-5 h-5 text-foam-black mx-auto mb-1 stroke-[2.5]" />
              <p className="font-black text-[11px] uppercase">KRAFT RENFORCÉ</p>
              <p className="text-[10px] text-foam-muted">Sécurité anti-casse</p>
            </div>
          </div>
        </div>

        {/* Right Column: Buying Options & Brutalist E-Commerce Core */}
        <div className="lg:col-span-5 space-y-5">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-foam-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foam-orange text-foam-orange" />
                ))}
              </div>
              <span className="font-mono text-xs font-bold text-foam-black">{product.rating} / 5</span>
              <span className="font-mono text-xs text-foam-muted">({product.reviewsCount} AVIS VÉRIFIÉS)</span>
            </div>

            <h1 className="font-impact text-3xl sm:text-5xl uppercase tracking-tight text-foam-black leading-none">
              {product.fullName}
            </h1>
            <p className="font-mono text-xs font-black uppercase tracking-wider text-foam-orange">
              // {product.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-foam-black font-medium leading-relaxed pt-1">
              {product.description}
            </p>
          </div>

          {/* Price Header (Live updated based on selected format) */}
          <div className="p-4 bg-white border-2 border-foam-black shadow-brutal flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-impact text-4xl sm:text-5xl text-foam-black">
                  {currentPack.price.toFixed(2)} €
                </span>
                <span className="font-mono text-xs font-bold text-foam-muted">
                  TTC ({currentPack.unitPrice})
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-foam-orange block mt-1">
                {currentPack.savingNote}
              </span>
            </div>

            <span className="sticker sticker-neon text-[10px]">
              ✓ EN STOCK
            </span>
          </div>

          {/* 1. VARIANT SELECTOR (Pack 3 vs Pack 6) */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center font-mono text-xs">
              <label className="font-black uppercase tracking-wider text-foam-black">
                CHOISIR LE FORMAT :
              </label>
              <span className="text-foam-orange font-black">
                {selectedFormat === 'pack6' ? '★ FORMAT RECOMMANDÉ' : 'FORMAT DÉCOUVERTE'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono">
              {/* Pack de 3 button */}
              <button
                type="button"
                onClick={() => setSelectedFormat('pack3')}
                className={`p-3.5 border-2 text-left transition-all ${
                  selectedFormat === 'pack3'
                    ? 'border-foam-black bg-foam-neon shadow-brutal text-black'
                    : 'border-foam-black bg-white hover:bg-foam-subtle shadow-brutal-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-xs uppercase">PACK DE 3</span>
                  <span className="font-impact text-sm">15,00 €</span>
                </div>
                <p className="text-[11px] text-foam-black mt-0.5 font-bold">3 bouteilles (33cl)</p>
                <p className="text-[10px] text-foam-muted">5,00 € / unité</p>
              </button>

              {/* Pack de 6 button */}
              <button
                type="button"
                onClick={() => setSelectedFormat('pack6')}
                className={`p-3.5 border-2 text-left transition-all ${
                  selectedFormat === 'pack6'
                    ? 'border-foam-black bg-foam-neon shadow-brutal text-black'
                    : 'border-foam-black bg-white hover:bg-foam-subtle shadow-brutal-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-xs uppercase">PACK DE 6</span>
                  <span className="font-impact text-sm text-foam-orange">26,00 €</span>
                </div>
                <p className="text-[11px] text-foam-black mt-0.5 font-bold">6 bouteilles (33cl)</p>
                <p className="text-[10px] text-foam-orange font-black mt-0.5">-10 € D'ÉCONOMIE</p>
              </button>
            </div>
          </div>

          {/* 2. DYNAMIC CONTENTS OF SELECTED FORMAT */}
          <div className="p-4 bg-foam-bg border-2 border-foam-black space-y-2 font-mono text-xs">
            <span className="font-black uppercase tracking-wider text-foam-black block border-b border-foam-borderLight pb-1">
              [ CONTENU DU {currentPack.format} ]
            </span>
            <ul className="space-y-1.5 text-foam-black">
              {currentPack.contents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foam-orange shrink-0 mt-0.5 stroke-[3]" />
                  <div>
                    <strong className="text-foam-black font-black uppercase">{item.name}</strong>
                    <span className="text-foam-muted text-[11px] block">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. DELIVERY SELECTOR (Click & Collect 0€ vs Colis) */}
          <div className="space-y-2 font-mono">
            <label className="block text-xs font-black uppercase tracking-wider text-foam-black">
              MODE DE RÉCEPTION :
            </label>

            <div className="space-y-2">
              <label 
                className={`flex items-start gap-3 p-3 border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'clickAndCollect'
                    ? 'border-foam-black bg-foam-neon shadow-brutal'
                    : 'border-foam-black bg-white shadow-brutal-sm'
                }`}
              >
                <input
                  type="radio"
                  name="setDelivery"
                  checked={deliveryMethod === 'clickAndCollect'}
                  onChange={() => setDeliveryMethod('clickAndCollect')}
                  className="mt-0.5 accent-black"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2 font-black text-foam-black uppercase">
                    <MapPin className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>RETRAIT CLICK & COLLECT AU BAR</span>
                    <span className="sticker sticker-black text-[9px] py-0">0 € GRATUIT</span>
                  </div>
                  <p className="text-[11px] text-foam-black font-medium mt-0.5">
                    Prêt sous 2h dans nos 2 bars à Nice (Port ou Place du Pin).
                  </p>
                </div>
              </label>

              <label 
                className={`flex items-start gap-3 p-3 border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'shipping'
                    ? 'border-foam-black bg-foam-neon shadow-brutal'
                    : 'border-foam-black bg-white shadow-brutal-sm'
                }`}
              >
                <input
                  type="radio"
                  name="setDelivery"
                  checked={deliveryMethod === 'shipping'}
                  onChange={() => setDeliveryMethod('shipping')}
                  className="mt-0.5 accent-black"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2 font-black text-foam-black uppercase">
                    <Truck className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>EXPÉDITION À DOMICILE ANTI-CASSE</span>
                    <span className="font-bold text-foam-black">
                      ({SHIPPING_RATES[selectedFormat].price.toFixed(2)} €)
                    </span>
                  </div>
                  <p className="text-[11px] text-foam-black font-medium mt-0.5">
                    Livraison en étuis renforcés sous 48 à 72h ouvrées en France.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* 4. QUANTITY & DUAL CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center border-2 border-foam-black bg-white shadow-brutal-sm">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-11 flex items-center justify-center font-mono font-black text-base hover:bg-foam-subtle transition-colors"
                  aria-label="Diminuer"
                >
                  -
                </button>
                <span className="w-10 text-center font-mono font-black text-sm">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-11 flex items-center justify-center font-mono font-black text-base hover:bg-foam-subtle transition-colors"
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-brutal-orange flex-1 py-3.5 text-xs sm:text-sm font-mono font-black uppercase"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                <span>AJOUTER AU PANIER • {(currentPack.price * quantity).toFixed(2)} €</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleBuyNow}
              className="btn-brutal-black w-full py-4 text-xs sm:text-sm font-mono font-black uppercase tracking-wider"
            >
              <span>COMMANDER IMMÉDIATEMENT (EXPRESS)</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Added toast alert */}
            {addedAlert && (
              <div className="p-3 bg-foam-neon border-2 border-foam-black shadow-brutal text-foam-black font-mono text-xs font-black uppercase flex items-center justify-between animate-fade-in">
                <span>✓ COFFRET AJOUTÉ AVEC SUCCÈS AU PANIER</span>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="underline hover:text-foam-orange ml-2"
                >
                  VOIR LE PANIER →
                </button>
              </div>
            )}
          </div>

          {/* Other set link */}
          <div className="pt-2 text-center">
            <Link 
              to={`/coffrets/${otherSlug === 'coffret-exotique' ? 'exotique' : 'decouverte'}`}
              className="font-mono text-xs font-bold text-foam-black hover:text-foam-orange uppercase underline decoration-2 inline-flex items-center gap-1.5"
            >
              <span>DÉCOUVRIR AUSSI : {otherSet.name} ({otherSet.subtitle})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

      {/* Accordions Brutalistes (Informations techniques & Dégustation) */}
      <div className="border-t-2 border-foam-black pt-10 space-y-3 font-mono">
        <h3 className="font-impact text-2xl uppercase tracking-tight text-foam-black mb-4">
          FICHE TECHNIQUE & INFORMATIONS
        </h3>

        <details className="card-brutal p-4 group" open>
          <summary className="flex items-center justify-between font-black uppercase text-xs sm:text-sm cursor-pointer select-none">
            <span className="flex items-center gap-2">
              <Beer className="w-4 h-4 text-foam-orange" />
              NOTES DU MAÎTRE BRASSEUR STÉPHANE
            </span>
            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pt-3 text-xs font-sans text-foam-black leading-relaxed border-t border-foam-borderLight mt-3">
            Toutes les bouteilles de ce coffret ont été brassées et embouteillées au 3 Quai des Deux Emmanuels au Port de Nice. Bières vivantes, non filtrées et non pasteurisées pour conserver l'intégralité des huiles aromatiques du houblon. À conserver debout au frais (entre 6°C et 10°C).
          </div>
        </details>

        <details className="card-brutal p-4 group">
          <summary className="flex items-center justify-between font-black uppercase text-xs sm:text-sm cursor-pointer select-none">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-foam-orange" />
              CONDITIONS DU CLICK & COLLECT AU BAR
            </span>
            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pt-3 text-xs font-sans text-foam-black leading-relaxed border-t border-foam-borderLight mt-3 space-y-2">
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

        <details className="card-brutal p-4 group">
          <summary className="flex items-center justify-between font-black uppercase text-xs sm:text-sm cursor-pointer select-none">
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4 text-foam-orange" />
              ÉTUI KRAFT ÉCO-RESPONSABLE & SÉCURITÉ
            </span>
            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pt-3 text-xs font-sans text-foam-black leading-relaxed border-t border-foam-borderLight mt-3">
            Nos coffrets sont confectionnés en carton kraft rigide certifié FSC, 100% recyclable et conçu sur-mesure pour caler individuellement chaque bouteille de 33cl contre les chocs du transport.
          </div>
        </details>
      </div>

    </div>
  );
}
