import React, { useState } from 'react';
import { 
  CheckCircle2, Gift, Copy, Check, MapPin, 
  Truck, ArrowRight, Share2, Sparkles, Download 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAnalytics } from '../context/AnalyticsContext';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function ConfirmationModal() {
  const { confirmedOrder, setConfirmedOrder } = useCart();
  const { logEvent } = useAnalytics();
  const [copied, setCopied] = useState(false);

  if (!confirmedOrder) return null;

  const handleCopyShare = () => {
    const text = `Je viens de réserver mes bières artisanales FOAM brassées au Port de Nice pour les fêtes ! 🍻 @foam_nice`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    logEvent('VIRAL_SHARE', 'Message de partage Instagram copié dans le presse-papier');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border-2 border-foam-gold/50 shadow-2xl overflow-hidden my-6">
        
        {/* Festive Header */}
        <div className="bg-gradient-to-r from-foam-amber via-foam-gold to-foam-olive p-6 text-white text-center relative">
          <div className="w-16 h-16 rounded-full bg-white text-foam-amber flex items-center justify-center mx-auto mb-3 shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs">
            Précommande Test Confirmée • SAÉ IUT Nice
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-extrabold mt-2 text-white">
            Merci pour votre confiance, {confirmedOrder.customer.firstName} !
          </h2>
          <p className="text-xs text-white/90 mt-1">
            N° de commande unique : <strong className="font-mono tracking-wider">{confirmedOrder.orderId}</strong>
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-foam-navy">
          
          {/* VIRAL SURPRISE CALLOUT */}
          <div className="p-4 rounded-2xl bg-foam-stone/80 border border-foam-gold/40 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-foam-gold/20 text-foam-amber shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-base font-bold text-foam-navy flex items-center gap-1.5">
                <span>Cadeau Exclusif Débloqué !</span>
                <Sparkles className="w-4 h-4 text-foam-gold" />
              </h4>
              <p className="text-xs text-foam-navy/85 mt-0.5 leading-relaxed">
                🎁 <strong>Un sous-bock collector FOAM en édition limitée</strong> a été glissé gracieusement dans votre paquet pour sublimer votre dégustation niçoise !
              </p>
            </div>
          </div>

          {/* INSTAGRAM VIRAL LOOP */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 border border-pink-200">
            <div className="flex items-center gap-2 mb-2">
              <InstagramIcon className="w-5 h-5 text-pink-600" />
              <h5 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                Partagez l'esprit méditerranéen sur Instagram
              </h5>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              Mentionnez <strong>@foam_nice</strong> en story lors de votre dégustation ou au comptoir pour tenter de gagner un brassin exclusif dédicacé !
            </p>

            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={handleCopyShare}
                className="py-2 px-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? 'Texte copié !' : 'Copier le texte de story'}</span>
              </button>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Ouvrir Instagram</span>
              </a>
            </div>
          </div>

          {/* ORDER RECAP DETAILS */}
          <div className="rounded-2xl bg-foam-sand/40 border border-foam-border p-4 text-xs space-y-3">
            <div className="flex items-center justify-between border-b border-foam-border pb-2">
              <span className="font-bold uppercase tracking-wider text-foam-navy">
                Récapitulatif de votre réservation
              </span>
              <span className="font-semibold text-foam-olive">0 € débité</span>
            </div>

            <div>
              <p className="font-semibold text-foam-navy">Articles commandés :</p>
              <ul className="mt-1 space-y-1 text-foam-navy/80">
                {confirmedOrder.items.map((it, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{it.quantity}x {it.name}</span>
                    <span className="font-medium">{(it.price * it.quantity).toFixed(2)} €</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-foam-border flex justify-between font-bold text-foam-navy">
              <span>Montant indicatif :</span>
              <span className="text-sm text-foam-amber">{confirmedOrder.finalTotal.toFixed(2)} €</span>
            </div>

            <div className="pt-2 border-t border-foam-border text-foam-navy/80">
              {confirmedOrder.deliveryMethod === 'click_and_collect' ? (
                <div>
                  <p className="font-bold text-foam-olive flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Point de retrait Click & Collect choisi :
                  </p>
                  <p className="mt-0.5">{confirmedOrder.bar?.name}</p>
                  <p className="text-[11px] text-foam-gray">{confirmedOrder.bar?.address}</p>
                  <p className="text-[11px] font-semibold text-foam-navy mt-1">
                    Créneau de retrait : {confirmedOrder.slot}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-bold text-foam-navy flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" />
                    Expédition Colis Anti-Casse vers :
                  </p>
                  <p className="mt-0.5">{confirmedOrder.customer.address}, {confirmedOrder.customer.zip} {confirmedOrder.customer.city}</p>
                </div>
              )}
            </div>
          </div>

          {/* Close / Return */}
          <div className="pt-2">
            <button
              onClick={() => setConfirmedOrder(null)}
              className="w-full py-3.5 px-6 bg-foam-navy hover:bg-foam-navyLight text-foam-sand font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span>Retourner sur la boutique FOAM</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
