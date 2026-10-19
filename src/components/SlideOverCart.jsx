import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MapPin, Truck, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BARS_DATA, SHIPPING_RATES } from '../data/products';

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
    selectedBar, 
    setSelectedBar,
    shippingCost, 
    grandTotal,
    setIsCheckoutOpen
  } = useCart();

  if (!isCartOpen) return null;

  const handleGoToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-foam-black/80 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-foam-bg flex flex-col justify-between border-l-4 border-foam-black shadow-2xl">
          
          {/* Header Brutaliste */}
          <div className="p-5 border-b-2 border-foam-black bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-foam-orange border-2 border-foam-black text-black flex items-center justify-center font-black shadow-[2px_2px_0px_#0A0A0A]">
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="font-impact text-xl uppercase tracking-tight text-foam-black">
                  VOTRE PANIER FOAM
                </h2>
                <p className="font-mono text-xs font-bold text-foam-muted">
                  [ {items.length} ARTICLE{items.length > 1 ? 'S' : ''} ]
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-foam-black border-2 border-foam-black bg-white hover:bg-foam-neon transition-colors shadow-[2px_2px_0px_#0A0A0A]"
              aria-label="Fermer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            
            {/* Delivery Method Picker right in Cart */}
            <div className="p-4 bg-white border-2 border-foam-black shadow-brutal-sm space-y-2.5 font-mono text-xs">
              <span className="font-black uppercase tracking-wider text-foam-black block border-b border-foam-borderLight pb-1">
                [ MODE DE RÉCEPTION ]
              </span>

              <div className="space-y-2">
                {/* Click & Collect Option */}
                <label 
                  className={`flex items-start gap-2.5 p-3 border-2 cursor-pointer transition-all ${
                    deliveryMethod === 'clickAndCollect'
                      ? 'border-foam-black bg-foam-neon shadow-brutal-sm'
                      : 'border-foam-black bg-white hover:bg-foam-subtle'
                  }`}
                >
                  <input
                    type="radio"
                    name="cartDeliveryOption"
                    checked={deliveryMethod === 'clickAndCollect'}
                    onChange={() => setDeliveryMethod('clickAndCollect')}
                    className="mt-0.5 accent-black"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center font-black text-foam-black uppercase">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 stroke-[2.5]" />
                        CLICK & COLLECT AU BAR
                      </span>
                      <span className="sticker sticker-black text-[9px] py-0">
                        GRATUIT (0 €)
                      </span>
                    </div>
                    <p className="text-[11px] text-foam-black font-medium mt-0.5">
                      Prêt sous 2h aux bars Port de Nice ou Place du Pin
                    </p>
                  </div>
                </label>

                {/* Shipping Option */}
                <label 
                  className={`flex items-start gap-2.5 p-3 border-2 cursor-pointer transition-all ${
                    deliveryMethod === 'shipping'
                      ? 'border-foam-black bg-foam-neon shadow-brutal-sm'
                      : 'border-foam-black bg-white hover:bg-foam-subtle'
                  }`}
                >
                  <input
                    type="radio"
                    name="cartDeliveryOption"
                    checked={deliveryMethod === 'shipping'}
                    onChange={() => setDeliveryMethod('shipping')}
                    className="mt-0.5 accent-black"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center font-black text-foam-black uppercase">
                      <span className="flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5 stroke-[2.5]" />
                        EXPÉDITION SÉCURISÉE
                      </span>
                      <span className="font-bold text-foam-black">
                        {shippingCost.toFixed(2)} €
                      </span>
                    </div>
                    <p className="text-[11px] text-foam-black font-medium mt-0.5">
                      Colis anti-casse sous 48-72h ouvrées
                    </p>
                  </div>
                </label>
              </div>

              {/* Bar selection dropdown if Click & Collect */}
              {deliveryMethod === 'clickAndCollect' && (
                <div className="pt-2 border-t border-foam-borderLight">
                  <label className="block text-[11px] font-black uppercase text-foam-black mb-1">
                    BAR DE RETRAIT :
                  </label>
                  <select
                    value={selectedBar}
                    onChange={(e) => setSelectedBar(e.target.value)}
                    className="w-full p-2 bg-foam-bg border-2 border-foam-black font-mono font-bold text-xs"
                  >
                    <option value="port">FOAM Port de Nice (3 Quai des Deux Emmanuels)</option>
                    <option value="pin">FOAM Place du Pin (Place du Pin)</option>
                  </select>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            {items.length === 0 ? (
              <div className="p-8 text-center bg-white border-2 border-foam-black shadow-brutal space-y-3 font-mono">
                <ShoppingBag className="w-12 h-12 text-foam-muted mx-auto stroke-[1.5]" />
                <p className="font-impact text-lg uppercase text-foam-black">VOTRE PANIER EST VIDE</p>
                <p className="text-xs text-foam-muted">Découvrez nos coffrets dégustation prêts à offrir.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-brutal-orange py-2 px-4 text-xs font-mono font-black"
                >
                  VOIR LES COFFRETS
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 bg-white border-2 border-foam-black shadow-brutal-sm flex gap-3 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover border-2 border-foam-black shrink-0"
                    />

                    <div className="flex-1 min-w-0 font-mono">
                      <div className="flex justify-between items-start">
                        <h4 className="font-impact uppercase text-sm truncate text-foam-black">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-foam-muted hover:text-foam-orange p-1"
                          aria-label="Supprimer"
                        >
                          <Trash2 className="w-4 h-4 stroke-[2]" />
                        </button>
                      </div>

                      <p className="text-[11px] text-foam-orange font-bold uppercase">
                        {item.formatName || 'Format Sélectionné'}
                      </p>

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border-2 border-foam-black bg-foam-bg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center font-black hover:bg-white text-xs"
                          >
                            -
                          </button>
                          <span className="w-7 text-center font-black text-xs">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center font-black hover:bg-white text-xs"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-impact text-sm text-foam-black">
                          {(item.price * item.quantity).toFixed(2)} €
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Footer Checkout Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t-2 border-foam-black space-y-3 font-mono">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-foam-black">
                  <span>SOUS-TOTAL TTC :</span>
                  <span className="font-bold">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-foam-black">
                  <span>LIVRAISON :</span>
                  <span className="font-bold">
                    {deliveryMethod === 'clickAndCollect' ? (
                      <span className="text-foam-black font-black bg-foam-neon px-1 border border-foam-black">0,00 € (OFFERT)</span>
                    ) : (
                      `${shippingCost.toFixed(2)} €`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-impact uppercase text-foam-black pt-2 border-t-2 border-foam-black">
                  <span>TOTAL À RÉGLER :</span>
                  <span className="text-foam-orange text-lg sm:text-xl">
                    {grandTotal.toFixed(2)} €
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoToCheckout}
                className="btn-brutal-orange w-full py-4 text-xs sm:text-sm font-mono font-black uppercase tracking-wider"
              >
                <span>VALIDER LA COMMANDE • {grandTotal.toFixed(2)} €</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <p className="text-[10px] text-center text-foam-muted font-bold uppercase">
                PAIEMENT SÉCURISÉ SSL • RETRAIT SOUS 2H AU BAR OU EXPÉDITION ANTI-CASSE
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
