import React, { useState } from 'react';
import { 
  X, ShoppingBag, Trash2, Plus, Minus, MapPin, Truck, 
  ArrowRight, Sparkles, Check, AlertCircle, ShieldCheck, Gift 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BARS_LOCATIONS, TIME_SLOTS, UPSELL_ITEMS } from '../data/products';

export default function SlideOverCart() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeItem, 
    clearCart,
    subtotal, 
    deliveryMethod, 
    setDeliveryMethod,
    selectedBarId, 
    setSelectedBarId, 
    selectedSlot, 
    setSelectedSlot,
    shippingAmount, 
    isFreeShipping,
    remainingForFreeShipping, 
    freeShippingProgress, 
    finalTotal,
    setIsCheckoutOpen,
    addItem,
    FREE_SHIPPING_THRESHOLD,
    SHIPPING_FEE
  } = useCart();

  const [upsellAdded, setUpsellAdded] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleAddUpsell = (upsellItem) => {
    addItem(upsellItem, 1);
    setUpsellAdded(true);
    setTimeout(() => setUpsellAdded(false), 2000);
  };

  const bottleOpenerUpsell = UPSELL_ITEMS[0]; // Decapsuleur 3€
  const hasBottleOpener = items.some(i => i.id === bottleOpenerUpsell.id);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-foam-navy/70 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-foam-bg shadow-2xl flex flex-col justify-between border-l border-foam-border">
          
          {/* Header */}
          <div className="p-5 border-b border-foam-border bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-foam-amber/15 text-foam-amber rounded-xl">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-editorial text-lg font-bold text-foam-navy">
                  Votre Panier FOAM
                </h2>
                <p className="text-xs text-foam-gray">
                  {items.length} article{items.length > 1 ? 's' : ''} en précommande test
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-foam-gray hover:text-foam-navy hover:bg-foam-stone transition-colors"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            
            {/* NUDGE PSYCHOLOGIQUE ANTI-FRAIS DE PORT (SELECTEUR DE LIVRAISON) */}
            <div className="rounded-2xl bg-white border-2 border-foam-border p-3.5 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-foam-navy mb-2.5">
                Mode de réception de vos bières :
              </p>

              {/* Option 1: Click & Collect (Recommandé par défaut) */}
              <label 
                className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all mb-2 ${
                  deliveryMethod === 'click_and_collect'
                    ? 'border-foam-olive bg-foam-oliveLight/40 ring-2 ring-foam-olive/20'
                    : 'border-foam-border bg-white hover:bg-foam-stone/40'
                }`}
              >
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="click_and_collect"
                  checked={deliveryMethod === 'click_and_collect'}
                  onChange={() => setDeliveryMethod('click_and_collect')}
                  className="mt-1 h-4 w-4 text-foam-olive focus:ring-foam-olive"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foam-olive flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Retrait Click & Collect
                    </span>
                    <span className="text-xs font-extrabold text-foam-olive bg-foam-olive/10 px-2 py-0.5 rounded-full">
                      GRATUIT (0,00 €)
                    </span>
                  </div>

                  <p className="text-[11px] text-foam-navy/80 mt-1">
                    Économisez 12,90 € de frais de port et récupérez votre commande fraîche directement au bar !
                  </p>

                  {/* Sub-selectors for Click & Collect */}
                  {deliveryMethod === 'click_and_collect' && (
                    <div className="mt-3 pt-2.5 border-t border-foam-olive/20 space-y-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-foam-navy uppercase">
                          Établissement FOAM de retrait :
                        </label>
                        <select
                          value={selectedBarId}
                          onChange={(e) => setSelectedBarId(e.target.value)}
                          className="mt-1 w-full text-xs font-medium bg-white border border-foam-olive/40 rounded-lg p-2 text-foam-navy focus:outline-none focus:ring-1 focus:ring-foam-olive"
                        >
                          {BARS_LOCATIONS.map(b => (
                            <option key={b.id} value={b.id}>
                              📍 {b.name} ({b.zone})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-foam-navy uppercase">
                          Créneau souhaité :
                        </label>
                        <select
                          value={selectedSlot}
                          onChange={(e) => setSelectedSlot(e.target.value)}
                          className="mt-1 w-full text-xs font-medium bg-white border border-foam-olive/40 rounded-lg p-2 text-foam-navy focus:outline-none focus:ring-1 focus:ring-foam-olive"
                        >
                          {TIME_SLOTS.map((s, idx) => (
                            <option key={idx} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </label>

              {/* Option 2: Expédition Colis Anti-Casse */}
              <label 
                className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'shipping'
                    ? 'border-foam-navy bg-foam-stone/50 ring-2 ring-foam-navy/10'
                    : 'border-foam-border bg-white hover:bg-foam-stone/40'
                }`}
              >
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="shipping"
                  checked={deliveryMethod === 'shipping'}
                  onChange={() => setDeliveryMethod('shipping')}
                  className="mt-1 h-4 w-4 text-foam-navy focus:ring-foam-navy"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foam-navy flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" />
                      Expédition Colis Anti-Casse
                    </span>
                    <span className="text-xs font-bold text-foam-navy">
                      {isFreeShipping ? (
                        <span className="text-foam-olive font-extrabold">OFFERTE</span>
                      ) : (
                        `${SHIPPING_FEE.toFixed(2)} €`
                      )}
                    </span>
                  </div>
                  <p className="text-[11px] text-foam-gray mt-0.5">
                    Emballage certifié transport de bouteilles de verre sécurisé.
                  </p>

                  {/* Dynamic Franco de Port gauge if shipping selected */}
                  {deliveryMethod === 'shipping' && (
                    <div className="mt-2.5 pt-2 border-t border-foam-border">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="text-foam-navy font-medium">
                          {isFreeShipping 
                            ? '🎉 Félicitations ! Frais de port offerts dès 50 €' 
                            : `Plus que ${remainingForFreeShipping.toFixed(2)} € pour la livraison offerte !`}
                        </span>
                        <span className="font-bold text-foam-amber">{Math.round(freeShippingProgress)}%</span>
                      </div>
                      <div className="w-full bg-foam-border h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-foam-amber h-full rounded-full transition-all duration-500"
                          style={{ width: `${freeShippingProgress}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-foam-gray mt-1">
                        Astuce : Ajoutez un 2ᵉ coffret ou un pack de 6 pour atteindre 50 €.
                      </p>
                    </div>
                  )}
                </div>
              </label>

            </div>

            {/* Cart Items List */}
            {items.length === 0 ? (
              <div className="text-center py-10 px-4">
                <div className="w-16 h-16 rounded-full bg-foam-stone flex items-center justify-center mx-auto mb-3 text-foam-gray">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-lg font-bold text-foam-navy">
                  Votre panier est vide
                </h3>
                <p className="text-xs text-foam-gray mt-1">
                  Découvrez nos coffrets de Noël ou composez votre pack panaché.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-4 py-2 bg-foam-amber text-white font-semibold rounded-xl text-xs"
                >
                  Explorer les brassins FOAM
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-foam-gray px-1">
                  <span>Articles sélectionnés</span>
                  <button 
                    onClick={clearCart} 
                    className="text-[11px] text-red-500 hover:underline"
                  >
                    Vider le panier
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.customKey || item.id}
                    className="p-3 bg-white rounded-2xl border border-foam-border flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="w-14 h-14 rounded-xl bg-foam-stone overflow-hidden shrink-0 border border-foam-border">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-foam-navy truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-foam-gray truncate">
                        {item.description || item.subtitle || `${item.price.toFixed(2)} € / u.`}
                      </p>
                      <div className="font-extrabold text-xs text-foam-amber mt-1">
                        {(item.price * item.quantity).toFixed(2)} €
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.customKey || item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-foam-stone hover:bg-foam-border flex items-center justify-center text-foam-navy transition-colors"
                        aria-label="Diminuer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-foam-navy">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.customKey || item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-foam-stone hover:bg-foam-border flex items-center justify-center text-foam-navy transition-colors"
                        aria-label="Augmenter"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.customKey || item.id)}
                        className="w-7 h-7 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors ml-1"
                        aria-label="Supprimer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* UPSELL DANS LE PANIER */}
            {!hasBottleOpener && items.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-white overflow-hidden shrink-0 border border-amber-200">
                  <img src={bottleOpenerUpsell.image} alt={bottleOpenerUpsell.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foam-amber">
                    Idée Accessoire (+3,00 €)
                  </span>
                  <p className="text-xs font-bold text-foam-navy truncate">
                    {bottleOpenerUpsell.name}
                  </p>
                  <p className="text-[10px] text-foam-gray truncate">
                    Bois d'olivier gravé FOAM Port de Nice
                  </p>
                </div>
                <button
                  onClick={() => handleAddUpsell(bottleOpenerUpsell)}
                  className="py-1.5 px-3 rounded-lg bg-foam-amber hover:bg-foam-amberDark text-white text-xs font-semibold shrink-0 transition-colors shadow-xs"
                >
                  + Ajouter
                </button>
              </div>
            )}

          </div>

          {/* Footer & Order Trigger */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-foam-border bg-white space-y-3">
              
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-foam-gray">
                  <span>Sous-total articles :</span>
                  <span className="font-semibold text-foam-navy">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-foam-gray">
                  <span className="flex items-center gap-1">
                    {deliveryMethod === 'click_and_collect' ? (
                      <span className="text-foam-olive font-semibold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        Retrait Click & Collect :
                      </span>
                    ) : (
                      <span>Expédition sécurisée verre :</span>
                    )}
                  </span>
                  <span className={`font-semibold ${deliveryMethod === 'click_and_collect' || isFreeShipping ? 'text-foam-olive' : 'text-foam-navy'}`}>
                    {deliveryMethod === 'click_and_collect' 
                      ? '0,00 € (Offert)' 
                      : (isFreeShipping ? '0,00 € (Franco)' : `${shippingAmount.toFixed(2)} €`)}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm sm:text-base font-bold text-foam-navy pt-2 border-t border-foam-border">
                  <span>Total précommande :</span>
                  <span className="text-xl font-extrabold text-foam-amber">
                    {finalTotal.toFixed(2)} €
                  </span>
                </div>
              </div>

              {/* SAÉ Test Mode pill */}
              <div className="bg-foam-stone/80 rounded-xl p-2.5 text-center text-[11px] text-foam-navy border border-foam-border">
                <span className="font-semibold text-foam-olive">🔒 Mode Test Sans Débit Bancaire</span>
                <p className="text-[10px] text-foam-gray mt-0.5">
                  Projet pédagogique SAÉ IUT Nice – Votre réservation est enregistrée sans paiement.
                </p>
              </div>

              <button
                onClick={handleCheckoutClick}
                className="w-full py-4 px-6 bg-foam-amber hover:bg-foam-amberDark text-white font-bold rounded-2xl shadow-amber-glow transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Valider ma précommande (0 € débité)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
