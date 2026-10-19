import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MapPin, Truck, ArrowRight, Copy, Check, Gift, Sparkles, Sun } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/70 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-foam-borderWarm shadow-2xl overflow-hidden p-6 sm:p-8 text-center text-xs text-foam-navy my-6">
        
        <img
          src="/logo-foam.png"
          alt="FOAM Nice"
          className="w-16 h-16 object-contain rounded-full mx-auto mb-3 shadow-xs border border-foam-border bg-white"
        />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foam-pineSoft text-foam-pine font-semibold text-xs border border-foam-pine/20 mb-2">
          <CheckCircle2 className="w-4 h-4 text-foam-pine" />
          <span>Commande Confirmée avec succès</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy mt-1">
          Merci pour votre confiance, {orderConfirmed.customer.firstName} !
        </h2>

        <p className="text-xs text-foam-muted mt-1">
          N° de commande : <strong className="font-mono text-foam-navy font-bold">{orderConfirmed.orderNumber}</strong>
        </p>

        {/* Gift Box */}
        <div className="mt-4 p-4 rounded-2xl bg-foam-terracottaSoft border border-foam-terracotta/20 text-left flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-foam-terracotta flex items-center justify-center shrink-0 border border-foam-terracotta/20 shadow-xs">
            <Gift className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <strong className="text-xs font-serif font-bold text-foam-navy block">
              🎁 Cadeau Débloqué : Sous-bock Collector FOAM !
            </strong>
            <p className="text-[11px] text-foam-text mt-0.5 leading-snug font-sans">
              Un sous-bock collector en édition limitée a été glissé dans votre commande pour sublimer votre dégustation.
            </p>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="mt-4 p-4 bg-[#FAF6F0] rounded-2xl border border-foam-border text-left space-y-2.5">
          <div className="flex justify-between border-b border-foam-border pb-1.5 font-serif font-bold text-sm text-foam-navy">
            <span>Articles réservés</span>
            <span className="text-foam-terracotta">{orderConfirmed.grandTotal.toFixed(2)} €</span>
          </div>

          <ul className="space-y-1 text-foam-text text-xs">
            {orderConfirmed.items.map((it) => (
              <li key={it.key} className="flex justify-between font-medium">
                <span>{it.quantity}x {it.name} ({it.formatLabel})</span>
                <span className="font-semibold text-foam-navy">{(it.price * it.quantity).toFixed(2)} €</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-foam-border">
            {orderConfirmed.deliveryMethod === 'clickAndCollect' ? (
              <div className="flex items-start gap-2 text-foam-pine">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 stroke-[2]" />
                <div>
                  <strong className="block text-xs font-serif font-bold">Retrait Click & Collect 0 € :</strong>
                  <span className="font-semibold text-foam-navy">{orderConfirmed.bar?.name}</span>
                  <span className="text-[11px] text-foam-muted block">{orderConfirmed.bar?.address}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-foam-navy">
                <Truck className="w-4 h-4 shrink-0 mt-0.5 text-foam-terracotta stroke-[2]" />
                <div>
                  <strong className="block text-xs font-serif font-bold">Expédition sécurisée anti-casse :</strong>
                  <span className="text-foam-text">
                    {orderConfirmed.customer.address}, {orderConfirmed.customer.zip} {orderConfirmed.customer.city}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2">
          <button
            onClick={handleCopyStory}
            className="btn-riviera-outline w-full py-3 text-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" /> : <Copy className="w-4 h-4 stroke-[2]" />}
            <span>{copied ? 'Message copié dans le presse-papier !' : 'Partager sur Instagram / Réseaux'}</span>
          </button>

          <button
            onClick={handleClose}
            className="btn-riviera-terracotta w-full py-3.5 text-xs font-bold"
          >
            <span>Retourner à l'accueil</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
