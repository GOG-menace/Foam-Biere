import React, { useState } from 'react';
import { ArrowLeft, Check, ShoppingBag, MapPin, Package, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { SETS, SHIPPING_RATES, BARS_DATA } from '../data/products';
import { useCart } from '../context/CartContext';

export default function SetSalesPage({ setSlug, navigateTo }) {
  const product = SETS[setSlug] || SETS['coffret-decouverte'];
  const { addItem, setDeliveryMethod, deliveryMethod, selectedBar, setSelectedBar } = useCart();
  
  // Format state: 'pack3' (15€) or 'pack6' (26€)
  const [selectedFormat, setSelectedFormat] = useState('pack6');
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const currentPack = selectedFormat === 'pack3' ? product.pack3 : product.pack6;
  const isOtherSet = setSlug === 'coffret-decouverte' ? 'coffret-exotique' : 'coffret-decouverte';
  const otherSetData = SETS[isOtherSet];

  const handleAddToCart = () => {
    addItem(product, selectedFormat, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="py-8 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={() => navigateTo('home')}
          className="text-xs font-semibold text-kraft-muted hover:text-kraft-ink flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column : Kraft Box Visual Showcase */}
        <div className="lg:col-span-6 space-y-4">
          <div className="w-full aspect-square rounded-2xl bg-kraft-stone border-2 border-kraft-border flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-xs">
            <div className="w-20 h-20 rounded-full bg-white text-kraft-terracotta flex items-center justify-center font-serif text-3xl mb-4 shadow-xs">
              {setSlug === 'coffret-decouverte' ? '📦' : '🌴'}
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-kraft-ink">
              {product.imagePlaceholder}
            </span>
            <p className="text-xs text-kraft-muted mt-2 max-w-xs">
              Étui rigide carton kraft recyclable, poignée intégrée et calage anti-casse écoresponsable.
            </p>
            <div className="mt-4 px-3 py-1 bg-white/80 rounded-full text-[11px] font-semibold text-kraft-muted border border-kraft-border">
              (Espace réservé pour vos photos de packagings FOAM)
            </div>
          </div>

          {/* Trust points below image */}
          <div className="p-4 bg-kraft-stone/50 rounded-xl border border-kraft-border text-xs space-y-2 text-kraft-ink">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-kraft-olive shrink-0" />
              <span><strong>100% brassé au Port de Nice</strong> par Stéphane (Microbrasserie FOAM)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-kraft-olive shrink-0" />
              <span><strong>Retrait Click & Collect 0 €</strong> dans nos 2 bars niçois</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-kraft-olive shrink-0" />
              <span>Bouteilles 33cl fraîches non pasteurisées</span>
            </div>
          </div>
        </div>

        {/* Right Column : Conversion Sales Content */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-kraft-olive bg-kraft-stone border border-kraft-border mb-2">
              {product.badge}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-kraft-ink">
              {product.name}
            </h1>
            <p className="text-sm text-kraft-muted mt-1 font-medium">
              {product.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-kraft-ink/80 mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* 1. SELECTEUR DE FORMAT (3 ou 6 bouteilles) */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-kraft-ink">
              1. Choisissez votre format de coffret :
            </label>
            
            <div className="grid grid-cols-2 gap-3">
              {/* Option 3 bouteilles */}
              <button
                type="button"
                onClick={() => setSelectedFormat('pack3')}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selectedFormat === 'pack3'
                    ? 'border-kraft-terracotta bg-kraft-cream shadow-xs ring-1 ring-kraft-terracotta'
                    : 'border-kraft-border bg-white hover:border-kraft-ink/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-kraft-ink">Pack de 3</span>
                  <span className="text-sm font-bold text-kraft-ink">15,00 €</span>
                </div>
                <p className="text-[11px] text-kraft-muted mt-1">3 x 33cl (5,00 €/bouteille)</p>
              </button>

              {/* Option 6 bouteilles (Best value) */}
              <button
                type="button"
                onClick={() => setSelectedFormat('pack6')}
                className={`p-4 rounded-xl border-2 text-left transition-all relative ${
                  selectedFormat === 'pack6'
                    ? 'border-kraft-terracotta bg-kraft-cream shadow-xs ring-1 ring-kraft-terracotta'
                    : 'border-kraft-border bg-white hover:border-kraft-ink/30'
                }`}
              >
                <div className="absolute -top-2.5 right-3 bg-kraft-terracotta text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                  Plus Avantageux
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-kraft-ink">Pack de 6</span>
                  <span className="text-sm font-bold text-kraft-ink">26,00 €</span>
                </div>
                <p className="text-[11px] text-kraft-terracotta font-medium mt-1">
                  Économie de 10 € (4,33 €/bouteille)
                </p>
              </button>
            </div>
          </div>

          {/* 2. CONTENU DU PACK SÉLECTIONNÉ */}
          <div className="p-4 bg-kraft-cream rounded-xl border border-kraft-border space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-kraft-ink">
              Contenu de votre {currentPack.format} :
            </h4>
            <ul className="space-y-1.5 text-xs text-kraft-ink">
              {currentPack.contents.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kraft-terracotta shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. MODE DE RÉCEPTION (CLICK & COLLECT 0€ ou EXPÉDITION) */}
          <div className="space-y-2.5 pt-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-kraft-ink">
              2. Mode de retrait ou livraison :
            </label>

            <div className="space-y-2">
              <label 
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  deliveryMethod === 'clickAndCollect'
                    ? 'border-kraft-olive bg-kraft-stone/60'
                    : 'border-kraft-border bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="salesDelivery"
                  checked={deliveryMethod === 'clickAndCollect'}
                  onChange={() => setDeliveryMethod('clickAndCollect')}
                  className="mt-0.5 text-kraft-olive focus:ring-kraft-olive"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-kraft-olive">Retrait Click & Collect</span>
                    <span className="font-extrabold text-kraft-olive bg-white px-2 py-0.5 rounded text-[10px] border border-kraft-border">
                      GRATUIT (0,00 €)
                    </span>
                  </div>
                  <p className="text-[11px] text-kraft-muted mt-0.5">
                    Disponible sous 2h dans nos bars (FOAM Port de Nice Quai des Deux Emmanuels ou FOAM Place du Pin).
                  </p>
                </div>
              </label>

              <label 
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  deliveryMethod === 'homeDelivery'
                    ? 'border-kraft-ink bg-kraft-stone/60'
                    : 'border-kraft-border bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="salesDelivery"
                  checked={deliveryMethod === 'homeDelivery'}
                  onChange={() => setDeliveryMethod('homeDelivery')}
                  className="mt-0.5 text-kraft-ink focus:ring-kraft-ink"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-kraft-ink">Expédition Colis Sécurisé</span>
                    <span className="text-[11px] font-semibold text-kraft-muted">
                      {SHIPPING_RATES.homeDelivery.toFixed(2)} €
                    </span>
                  </div>
                  <p className="text-[11px] text-kraft-muted mt-0.5">
                    Carton certifié transport de verre à domicile partout en France.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* CTA AJOUT AU PANIER */}
          <div className="pt-4 border-t border-kraft-border space-y-3">
            <div className="flex items-center gap-3">
              {/* Quantity selector */}
              <div className="flex items-center border border-kraft-border rounded-lg bg-white p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded text-kraft-ink hover:bg-kraft-stone flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-bold text-kraft-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded text-kraft-ink hover:bg-kraft-stone flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>

              {/* Add button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 rounded-xl bg-kraft-ink hover:bg-kraft-terracotta text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {addedNotice
                    ? '✓ Ajouté au panier !'
                    : `Ajouter au panier • ${(currentPack.price * quantity).toFixed(2)} €`}
                </span>
              </button>
            </div>

            <p className="text-[11px] text-center text-kraft-muted">
              🔒 Réservation en mode test sans débit bancaire immédiat.
            </p>
          </div>

          {/* Cross-sell link to the other set */}
          <div className="pt-4 border-t border-kraft-border/80">
            <button
              onClick={() => navigateTo(isOtherSet)}
              className="w-full p-3 rounded-lg bg-kraft-stone/40 border border-kraft-border text-left hover:bg-kraft-stone transition-colors flex items-center justify-between text-xs"
            >
              <div>
                <span className="font-semibold text-kraft-ink">Découvrir aussi : {otherSetData.name}</span>
                <p className="text-[11px] text-kraft-muted">{otherSetData.subtitle} (Dès 15 €)</p>
              </div>
              <span className="text-kraft-terracotta font-bold text-xs">Voir →</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
