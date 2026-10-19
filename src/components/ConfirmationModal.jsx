import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MapPin, Truck, ArrowRight, Copy, Check, Gift, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ConfirmationModal() {
  const { orderConfirmed, setOrderConfirmed } = useCart();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  if (!orderConfirmed) return null;

  const handleClose = () => {
    setOrderConfirmed(null);
    navigate('/');
  };

  const handleCopyStory = () => {
    const text = `Je viens de réserver mes bières artisanales FOAM au Port de Nice ! 🍻 @foam_nice`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/85 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border-2 border-foam-border shadow-2xl overflow-hidden p-6 sm:p-8 text-center text-xs text-foam-navy my-6">
        
        <img
          src="/logo-foam.png"
          alt="FOAM Nice"
          className="w-16 h-16 object-contain rounded-full mx-auto mb-3 shadow-md border-2 border-foam-red"
        />

        <div className="flex items-center justify-center gap-1.5 text-foam-olive text-xs font-bold uppercase tracking-wider mb-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Commande Confirmée</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-black text-foam-navy mt-1">
          Merci pour votre confiance, {orderConfirmed.customer.firstName} !
        </h2>

        <p className="text-xs text-foam-muted mt-1">
          N° de commande unique : <strong className="font-mono text-foam-navy font-bold">{orderConfirmed.orderNumber}</strong>
        </p>

        {/* Viral Reward Box */}
        <div className="mt-4 p-4 rounded-2xl bg-foam-redSoft border border-foam-redBorder text-left flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white text-foam-red border border-foam-redBorder shrink-0">
            <Gift className="w-5 h-5 text-foam-red" />
          </div>
          <div>
            <strong className="text-xs font-bold text-foam-navy block">
              🎁 Cadeau Débloqué : Sous-bock Collector FOAM !
            </strong>
            <p className="text-[11px] text-foam-text mt-0.5 leading-snug">
              Un sous-bock collector en édition limitée a été glissé dans votre commande pour sublimer votre dégustation.
            </p>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="mt-4 p-4 bg-foam-bg rounded-2xl border border-foam-border text-left space-y-2.5">
          <div className="flex justify-between border-b border-foam-border pb-1.5 font-bold text-foam-navy text-sm">
            <span>Articles réservés</span>
            <span className="text-foam-red">{orderConfirmed.grandTotal.toFixed(2)} €</span>
          </div>

          <ul className="space-y-1 text-foam-text">
            {orderConfirmed.items.map((it) => (
              <li key={it.key} className="flex justify-between">
                <span>{it.quantity}x {it.name} ({it.formatLabel})</span>
                <span className="font-semibold">{(it.price * it.quantity).toFixed(2)} €</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-foam-border">
            {orderConfirmed.deliveryMethod === 'clickAndCollect' ? (
              <div className="flex items-start gap-2 text-foam-olive">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs">Retrait Click & Collect 0 € :</strong>
                  <span className="text-foam-navy font-semibold">{orderConfirmed.bar?.name}</span>
                  <span className="text-[11px] text-foam-muted block">{orderConfirmed.bar?.address}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-foam-navy">
                <Truck className="w-4 h-4 shrink-0 mt-0.5 text-foam-red" />
                <div>
                  <strong className="block text-xs">Expédition Colis Sécurisé :</strong>
                  <span className="text-foam-text">
                    {orderConfirmed.customer.address}, {orderConfirmed.customer.zip} {orderConfirmed.customer.city}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Instagram Share Loop */}
        <div className="mt-4 p-3 bg-pink-50 rounded-2xl border border-pink-200 flex items-center justify-between gap-2">
          <div className="text-left">
            <span className="font-bold text-[11px] text-pink-900 block">Identifiez @foam_nice en story</span>
            <span className="text-[10px] text-pink-700">Tentez de remporter un brassin dédicacé</span>
          </div>
          <button
            onClick={handleCopyStory}
            className="py-1.5 px-3 rounded-lg bg-white text-pink-900 font-bold text-[10px] border border-pink-300 flex items-center gap-1 shadow-2xs"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copié !' : 'Copier texte'}</span>
          </button>
        </div>

        <div className="mt-6 pt-3 border-t border-foam-border">
          <button
            onClick={handleClose}
            className="w-full py-3.5 px-6 rounded-2xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-shopify hover:shadow-red-glow"
          >
            <span>Retourner sur la boutique FOAM</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
