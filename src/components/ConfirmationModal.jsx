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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-black/80 backdrop-blur-xs overflow-y-auto animate-fade-in font-mono">
      <div className="relative w-full max-w-lg bg-white border-2 border-foam-black shadow-brutal overflow-hidden p-6 sm:p-8 text-center text-xs text-foam-black my-6">
        
        <img
          src="/logo-foam.png"
          alt="FOAM Nice"
          className="w-16 h-16 object-contain bg-white border-2 border-foam-black mx-auto mb-3 shadow-brutal-sm"
        />

        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="sticker sticker-neon text-[10px]">
            ✓ COMMANDE CONFIRMÉE
          </span>
          <span className="sticker sticker-black text-[10px]">
            PORT DE NICE
          </span>
        </div>

        <h2 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-foam-black mt-1">
          MERCI POUR VOTRE COMMANDE, {orderConfirmed.customer.firstName.toUpperCase()} !
        </h2>

        <p className="text-xs text-foam-muted font-bold mt-1">
          N° DE COMMANDE : <strong className="font-mono text-foam-black bg-foam-neon px-1.5 py-0.5 border border-foam-black">{orderConfirmed.orderNumber}</strong>
        </p>

        {/* Viral Reward Box */}
        <div className="mt-4 p-4 bg-foam-bg border-2 border-foam-black text-left flex items-start gap-3">
          <div className="w-10 h-10 bg-foam-orange border-2 border-foam-black text-black flex items-center justify-center shrink-0 font-black shadow-[2px_2px_0px_#0A0A0A]">
            <Gift className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <strong className="text-xs font-black uppercase text-foam-black block">
              🎁 CADEAU DÉBLOQUÉ : SOUS-BOCK COLLECTOR FOAM !
            </strong>
            <p className="text-[11px] text-foam-black mt-0.5 leading-snug font-sans">
              Un sous-bock collector en édition limitée a été glissé dans votre commande pour sublimer votre dégustation.
            </p>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="mt-4 p-4 bg-foam-bg border-2 border-foam-black text-left space-y-2.5 font-mono">
          <div className="flex justify-between border-b-2 border-foam-black pb-1.5 font-impact uppercase text-sm">
            <span>ARTICLES RÉSERVÉS</span>
            <span className="text-foam-orange">{orderConfirmed.grandTotal.toFixed(2)} €</span>
          </div>

          <ul className="space-y-1 text-foam-black text-xs font-bold">
            {orderConfirmed.items.map((it) => (
              <li key={it.key} className="flex justify-between">
                <span>{it.quantity}x {it.name} ({it.formatLabel})</span>
                <span className="font-black">{(it.price * it.quantity).toFixed(2)} €</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-foam-borderLight">
            {orderConfirmed.deliveryMethod === 'clickAndCollect' ? (
              <div className="flex items-start gap-2 text-foam-black">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-foam-orange stroke-[2.5]" />
                <div>
                  <strong className="block text-xs uppercase font-black">RETRAIT CLICK & COLLECT 0 € :</strong>
                  <span className="font-bold">{orderConfirmed.bar?.name}</span>
                  <span className="text-[11px] text-foam-muted block">{orderConfirmed.bar?.address}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-foam-black">
                <Truck className="w-4 h-4 shrink-0 mt-0.5 text-foam-orange stroke-[2.5]" />
                <div>
                  <strong className="block text-xs uppercase font-black">EXPÉDITION SÉCURISÉE ANTI-CASSE :</strong>
                  <span className="text-foam-black font-bold">
                    {orderConfirmed.customer.address}, {orderConfirmed.customer.zip} {orderConfirmed.customer.city}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2 font-mono">
          <button
            onClick={handleCopyStory}
            className="btn-brutal-white w-full py-3 text-xs font-black uppercase"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> : <Copy className="w-4 h-4 stroke-[2.5]" />}
            <span>{copied ? 'MESSAGE COPIÉ DANS LE PRESSE-PAPIER !' : 'PARTAGER SUR INSTAGRAM / X'}</span>
          </button>

          <button
            onClick={handleClose}
            className="btn-brutal-orange w-full py-3.5 text-xs font-black uppercase"
          >
            <span>RETOURNER À L'ACCUEIL</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
}
