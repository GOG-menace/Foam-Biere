import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MapPin, Truck, ArrowRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-kraft-ink/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-kraft-bg shadow-2xl flex flex-col justify-between border-l border-kraft-border">
          
          {/* Header */}
          <div className="p-5 border-b border-kraft-border bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-kraft-terracotta" />
              <h2 className="font-serif text-lg font-bold text-kraft-ink">
                Votre Panier FOAM
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-kraft-muted hover:text-kraft-ink rounded-lg hover:bg-kraft-stone transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            
            {/* Delivery method toggle */}
            <div className="p-3.5 bg-white rounded-xl border border-kraft-border space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-kraft-ink block">
                Mode de réception :
              </span>

              <div className="space-y-1.5">
                <label 
                  className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer text-xs transition-all ${
                    deliveryMethod === 'clickAndCollect'
                      ? 'border-kraft-olive bg-kraft-stone/50'
                      : 'border-kraft-border bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cartDelivery"
                    checked={deliveryMethod === 'clickAndCollect'}
                    onChange={() => setDeliveryMethod('clickAndCollect')}
                    className="mt-0.5 text-kraft-olive"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between font-bold text-kraft-olive">
                      <span>Retrait Click & Collect</span>
                      <span>0,00 € (Gratuit)</span>
                    </div>
                    <p className="text-[11px] text-kraft-muted mt-0.5">
                      Disponible sous 2h dans nos bars à Nice
                    </p>

                    {deliveryMethod === 'clickAndCollect' && (
                      <select
                        value={selectedBar}
                        onChange={(e) => setSelectedBar(e.target.value)}
                        className="mt-2 w-full text-xs bg-white border border-kraft-border rounded-md p-1.5 text-kraft-ink"
                      >
                        {BARS_DATA.map(b => (
                          <option key={b.id} value={b.id}>
                            📍 {b.name} ({b.zone})
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </label>

                <label 
                  className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer text-xs transition-all ${
                    deliveryMethod === 'homeDelivery'
                      ? 'border-kraft-ink bg-kraft-stone/50'
                      : 'border-kraft-border bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cartDelivery"
                    checked={deliveryMethod === 'homeDelivery'}
                    onChange={() => setDeliveryMethod('homeDelivery')}
                    className="mt-0.5 text-kraft-ink"
                  />
                  <div className="flex-1 flex justify-between font-bold text-kraft-ink">
                    <span>Expédition Colis Sécurisé</span>
                    <span>{SHIPPING_RATES.homeDelivery.toFixed(2)} €</span>
                  </div>
                </label>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-12 text-kraft-muted">
                <p className="font-serif text-lg text-kraft-ink">Votre panier est vide</p>
                <p className="text-xs mt-1">Découvrez nos coffrets 3 ou 6 bières.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div 
                    key={item.key}
                    className="p-3 bg-white rounded-xl border border-kraft-border flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-kraft-ink truncate">{item.name}</h4>
                      <p className="text-[11px] text-kraft-muted">{item.formatLabel}</p>
                      <span className="font-serif font-bold text-kraft-ink mt-1 block">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateQuantity(item.key, -1)}
                        className="w-7 h-7 rounded border border-kraft-border text-kraft-ink hover:bg-kraft-stone flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-bold text-kraft-ink">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, 1)}
                        className="w-7 h-7 rounded border border-kraft-border text-kraft-ink hover:bg-kraft-stone flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="p-1 text-slate-400 hover:text-red-600 ml-1"
                        aria-label="Supprimer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Footer Total & Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-kraft-border bg-white space-y-3 text-xs">
              <div className="flex justify-between text-kraft-muted">
                <span>Sous-total articles :</span>
                <span className="font-semibold text-kraft-ink">{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-kraft-muted">
                <span>Frais de réception :</span>
                <span className={`font-semibold ${deliveryMethod === 'clickAndCollect' ? 'text-kraft-olive' : 'text-kraft-ink'}`}>
                  {deliveryMethod === 'clickAndCollect' ? '0,00 € (Gratuit)' : `${shippingCost.toFixed(2)} €`}
                </span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold text-kraft-ink pt-2 border-t border-kraft-border">
                <span>Total :</span>
                <span className="text-xl text-kraft-terracotta">{grandTotal.toFixed(2)} €</span>
              </div>

              <button
                onClick={handleGoToCheckout}
                className="w-full py-3.5 px-6 rounded-xl bg-kraft-ink hover:bg-kraft-terracotta text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Passer ma précommande test</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
