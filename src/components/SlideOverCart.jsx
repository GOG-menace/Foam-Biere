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
        className="absolute inset-0 bg-foam-navy/70 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-foam-bg shadow-2xl flex flex-col justify-between border-l border-foam-border">
          
          {/* Header */}
          <div className="p-5 border-b border-foam-border bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-foam-redSoft text-foam-red flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-foam-navy">
                  Votre Panier FOAM
                </h2>
                <p className="text-xs text-foam-muted">
                  {items.length} article{items.length > 1 ? 's' : ''} sélectionné{items.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-foam-muted hover:text-foam-navy rounded-xl hover:bg-foam-subtle transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            
            {/* Delivery Method Picker right in Cart (Shopify standard) */}
            <div className="p-4 bg-white rounded-2xl border-2 border-foam-border space-y-2.5 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-foam-navy block">
                Mode de réception :
              </span>

              <div className="space-y-2">
                {/* Click & Collect Option */}
                <label 
                  className={`flex items-start gap-2.5 p-3 rounded-xl border-2 cursor-pointer text-xs transition-all ${
                    deliveryMethod === 'clickAndCollect'
                      ? 'border-foam-olive bg-foam-oliveSoft ring-1 ring-foam-olive/30'
                      : 'border-foam-border bg-white hover:border-foam-navy/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="cartDeliveryOption"
                    checked={deliveryMethod === 'clickAndCollect'}
                    onChange={() => setDeliveryMethod('clickAndCollect')}
                    className="mt-0.5 text-foam-olive focus:ring-foam-olive"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center font-bold text-foam-olive">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        Retrait Click & Collect au bar
                      </span>
                      <span className="bg-white px-2 py-0.5 rounded text-[10px] border border-foam-olive/30">
                        GRATUIT (0 €)
                      </span>
                    </div>
                    <p className="text-[11px] text-foam-text mt-0.5">
                      Économisez 6,90 € de frais de port et récupérez vos bières fraîches au bar !
                    </p>

                    {deliveryMethod === 'clickAndCollect' && (
                      <select
                        value={selectedBar}
                        onChange={(e) => setSelectedBar(e.target.value)}
                        className="mt-2.5 w-full text-xs font-semibold bg-white border border-foam-border rounded-lg p-2 text-foam-navy focus:outline-none focus:ring-1 focus:ring-foam-olive"
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

                {/* Home Delivery Option */}
                <label 
                  className={`flex items-start gap-2.5 p-3 rounded-xl border-2 cursor-pointer text-xs transition-all ${
                    deliveryMethod === 'homeDelivery'
                      ? 'border-foam-navy bg-white ring-1 ring-foam-navy/20'
                      : 'border-foam-border bg-white hover:border-foam-navy/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="cartDeliveryOption"
                    checked={deliveryMethod === 'homeDelivery'}
                    onChange={() => setDeliveryMethod('homeDelivery')}
                    className="mt-0.5 text-foam-navy focus:ring-foam-navy"
                  />
                  <div className="flex-1 flex justify-between font-bold text-foam-navy">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-foam-red" />
                      Expédition Colis Sécurisé Anti-Casse
                    </span>
                    <span>{SHIPPING_RATES.homeDelivery.toFixed(2)} €</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Empty state or item list */}
            {items.length === 0 ? (
              <div className="text-center py-14 text-foam-muted space-y-2">
                <ShoppingBag className="w-12 h-12 text-foam-border mx-auto" />
                <p className="font-serif text-lg font-bold text-foam-navy">Votre panier est vide</p>
                <p className="text-xs">Choisissez un coffret découverte ou vos bières favorites.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-foam-navy px-1">
                  <span>Articles ({items.length})</span>
                  <button onClick={clearCart} className="text-[11px] text-red-500 hover:underline font-normal">
                    Vider le panier
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.key}
                    className="p-3.5 bg-white rounded-2xl border border-foam-border flex items-center justify-between gap-3 text-xs shadow-2xs"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foam-navy truncate text-sm">{item.name}</h4>
                      <p className="text-[11px] text-foam-red font-semibold">{item.formatLabel}</p>
                      <span className="font-serif font-black text-sm text-foam-navy mt-1 block">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.key, -1)}
                        className="w-7 h-7 rounded-lg border border-foam-border text-foam-navy hover:bg-foam-subtle flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold text-foam-navy">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, 1)}
                        className="w-7 h-7 rounded-lg border border-foam-border text-foam-navy hover:bg-foam-subtle flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="p-1 text-slate-400 hover:text-red-500 ml-1"
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

          {/* Footer Subtotal & Checkout Trigger */}
          {items.length > 0 && (
            <div className="p-5 border-t border-foam-border bg-white space-y-3.5 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between text-foam-text">
                  <span>Sous-total articles :</span>
                  <span className="font-bold text-foam-navy">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-foam-text">
                  <span>Frais de réception :</span>
                  <span className={`font-bold ${deliveryMethod === 'clickAndCollect' ? 'text-foam-olive' : 'text-foam-navy'}`}>
                    {deliveryMethod === 'clickAndCollect' ? '0,00 € (Click & Collect Offert)' : `${shippingCost.toFixed(2)} €`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif font-black text-foam-navy pt-2 border-t border-foam-border">
                  <span>Total :</span>
                  <span className="text-2xl text-foam-red">{grandTotal.toFixed(2)} €</span>
                </div>
              </div>

              {/* Brewery reassurance reminder */}
              <div className="p-2.5 rounded-xl bg-foam-redSoft text-foam-navy border border-foam-redBorder text-[11px] text-center font-medium">
                🔒 Préparation artisanale au Port de Nice • Retrait gratuit au bar ou expédition soignée.
              </div>

              <button
                onClick={handleGoToCheckout}
                className="w-full py-4 px-6 rounded-2xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-shopify hover:shadow-red-glow transition-all"
              >
                <span>Commander mon panier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
