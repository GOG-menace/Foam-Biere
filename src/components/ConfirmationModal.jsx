import React from 'react';
import { CheckCircle2, MapPin, Truck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ConfirmationModal({ navigateTo }) {
  const { orderConfirmed, setOrderConfirmed } = useCart();

  if (!orderConfirmed) return null;

  const handleClose = () => {
    setOrderConfirmed(null);
    navigateTo('home');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kraft-ink/75 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-kraft-bg rounded-2xl border border-kraft-border shadow-2xl overflow-hidden p-6 sm:p-8 text-center text-xs text-kraft-ink">
        
        <div className="w-14 h-14 rounded-full bg-kraft-olive/10 text-kraft-olive flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-kraft-stone text-kraft-ink border border-kraft-border">
          Précommande Test Enregistrée
        </span>

        <h2 className="font-serif text-2xl font-bold text-kraft-ink mt-2">
          Merci, {orderConfirmed.customer.firstName} !
        </h2>

        <p className="text-kraft-muted mt-1">
          N° de commande : <strong className="font-mono text-kraft-ink">{orderConfirmed.orderNumber}</strong>
        </p>

        {/* Recap */}
        <div className="mt-5 p-4 bg-white rounded-xl border border-kraft-border text-left space-y-2">
          <div className="flex justify-between border-b border-kraft-border pb-1.5 font-bold">
            <span>Articles réservés</span>
            <span className="text-kraft-terracotta">{orderConfirmed.grandTotal.toFixed(2)} €</span>
          </div>

          <ul className="space-y-1 text-kraft-muted">
            {orderConfirmed.items.map((it) => (
              <li key={it.key} className="flex justify-between">
                <span>{it.quantity}x {it.name} ({it.formatLabel})</span>
                <span>{(it.price * it.quantity).toFixed(2)} €</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-kraft-border">
            {orderConfirmed.deliveryMethod === 'clickAndCollect' ? (
              <div className="flex items-start gap-2 text-kraft-olive">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Retrait Click & Collect 0 € :</strong>
                  <span className="text-kraft-muted">{orderConfirmed.bar?.name}</span>
                  <span className="text-[10px] text-kraft-muted block">{orderConfirmed.bar?.address}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-kraft-ink">
                <Truck className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="block">Expédition Colis Sécurisé :</strong>
                  <span className="text-kraft-muted">
                    {orderConfirmed.customer.address}, {orderConfirmed.customer.zip} {orderConfirmed.customer.city}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-kraft-border">
          <button
            onClick={handleClose}
            className="w-full py-3 px-6 rounded-xl bg-kraft-ink hover:bg-kraft-terracotta text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Retourner à l'accueil de la boutique</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
