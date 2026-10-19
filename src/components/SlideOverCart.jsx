import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MapPin, Truck, ArrowRight, ShieldCheck, Sun } from 'lucide-react';
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
        className="absolute inset-0 bg-foam-navy/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] flex flex-col justify-between border-l border-foam-border shadow-2xl">
          
          {/* Header Riviera */}
          <div className="p-5 border-b border-foam-border bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-foam-terracottaSoft text-foam-terracotta flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foam-navy">
                  Votre Panier FOAM
                </h2>
                <p className="text-xs text-foam-muted">
                  {items.length} article{items.length > 1 ? 's' : ''} sélectionné{items.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-foam-navy hover:text-foam-terracotta rounded-xl hover:bg-foam-subtle transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            
            {/* Delivery Method Picker right in Cart */}
            <div className="p-4 bg-white rounded-2xl border border-foam-border space-y-2.5 shadow-xs text-xs">
              <span className="font-serif font-bold uppercase tracking-wider text-foam-navy block text-xs">
                Mode de réception :
              </span>

              <div className="space-y-2">
                {/* Click & Collect Option */}
                <label 
                  className={`flex items-start gap-2.5 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    deliveryMethod === 'clickAndCollect'
                      ? 'border-foam-pine bg-foam-pineSoft'
                      : 'border-foam-border bg-white hover:border-foam-navy/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="cartDeliveryOption"
                    checked={deliveryMethod === 'clickAndCollect'}
                    onChange={() => setDeliveryMethod('clickAndCollect')}
                    className="mt-0.5 text-foam-pine accent-[#1D3C2F]"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center font-bold text-foam-pine">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 stroke-[2]" />
                        Retrait Click & Collect au bar
                      </span>
                      <span className="bg-white px-2 py-0.5 rounded-full text-[10px] border border-foam-pine/30 font-bold">
                        GRATUIT (0 €)
                      </span>
                    </div>
                    <p className="text-[11px] text-foam-text mt-0.5">
                      Prêt sous 2h aux bars Port de Nice ou Place du Pin
                    </p>
                  </div>
                </label>

                {/* Shipping Option */}
                <label 
                  className={`flex items-start gap-2.5 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    deliveryMethod === 'shipping'
                      ? 'border-foam-navy bg-foam-navySoft'
                      : 'border-foam-border bg-white hover:border-foam-navy/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="cartDeliveryOption"
                    checked={deliveryMethod === 'shipping'}
                    onChange={() => setDeliveryMethod('shipping')}
                    className="mt-0.5 text-foam-navy accent-[#112338]"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center font-bold text-foam-navy">
                      <span className="flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5 stroke-[2]" />
                        Expédition sécurisée anti-casse
                      </span>
                      <span className="font-semibold text-foam-muted">
                        {shippingCost.toFixed(2)} €
                      </span>
                    </div>
                    <p className="text-[11px] text-foam-text mt-0.5">
                      Colis anti-casse sous 48-72h ouvrées
                    </p>
                  </div>
                </label>
              </div>

              {/* Bar selection dropdown if Click & Collect */}
              {deliveryMethod === 'clickAndCollect' && (
                <div className="pt-2 border-t border-foam-border">
                  <label className="block text-[11px] font-bold text-foam-navy mb-1">
                    Choisir votre bar de retrait :
                  </label>
                  <select
                    value={selectedBar}
                    onChange={(e) => setSelectedBar(e.target.value)}
                    className="w-full p-2 bg-[#FAF6F0] rounded-lg border border-foam-border font-medium text-xs text-foam-navy"
                  >
                    <option value="port">FOAM Port de Nice (3 Quai des Deux Emmanuels)</option>
                    <option value="pin">FOAM Place du Pin (Place du Pin)</option>
                  </select>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            {items.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-foam-border shadow-xs space-y-3">
                <ShoppingBag className="w-12 h-12 text-foam-muted mx-auto stroke-[1.5]" />
                <p className="font-serif text-lg font-bold text-foam-navy">Votre panier est vide</p>
                <p className="text-xs text-foam-muted">Découvrez nos coffrets dégustation prêts à offrir.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-riviera-terracotta text-xs py-2 px-4"
                >
                  Découvrir les coffrets
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 bg-white rounded-2xl border border-foam-border shadow-xs flex gap-3 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl border border-foam-border shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif font-bold text-sm truncate text-foam-navy">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-foam-muted hover:text-foam-terracotta p-1 transition-colors"
                          aria-label="Supprimer"
                        >
                          <Trash2 className="w-4 h-4 stroke-[1.8]" />
                        </button>
                      </div>

                      <p className="text-[11px] text-foam-terracotta font-semibold">
                        {item.formatName || 'Format Sélectionné'}
                      </p>

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-foam-border rounded-lg bg-[#FAF6F0]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center font-bold hover:bg-white text-xs rounded-l-lg transition-colors"
                          >
                            -
                          </button>
                          <span className="w-7 text-center font-bold text-xs">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center font-bold hover:bg-white text-xs rounded-r-lg transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-serif font-bold text-sm text-foam-navy">
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
            <div className="p-4 sm:p-5 bg-white border-t border-foam-border space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-foam-navy">
                  <span>Sous-total TTC :</span>
                  <span className="font-semibold">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-foam-navy">
                  <span>Livraison :</span>
                  <span className="font-semibold">
                    {deliveryMethod === 'clickAndCollect' ? (
                      <span className="text-foam-pine font-bold bg-foam-pineSoft px-2 py-0.5 rounded-full">0,00 € (Offert)</span>
                    ) : (
                      `${shippingCost.toFixed(2)} €`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-foam-navy pt-2 border-t border-foam-border">
                  <span>Total à régler :</span>
                  <span className="text-foam-terracotta text-xl">
                    {grandTotal.toFixed(2)} €
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoToCheckout}
                className="btn-riviera-terracotta w-full py-4 text-sm font-bold shadow-md hover:shadow-terracotta-glow"
              >
                <span>Valider la commande • {grandTotal.toFixed(2)} €</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-foam-muted font-normal">
                Paiement sécurisé SSL • Retrait sous 2h au bar ou expédition anti-casse
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
