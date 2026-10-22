import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertCircle, Mail, MapPin, Truck, ArrowRight, Check, Beer, X 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { trackGenerateLead } from '../utils/analytics';

export default function ConfirmationModal() {
  const { orderConfirmed, setOrderConfirmed } = useCart();
  const navigate = useNavigate();
  
  const [emailInput, setEmailInput] = useState(() => orderConfirmed?.customer?.email || '');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  if (!orderConfirmed) return null;

  const handleClose = () => {
    setOrderConfirmed(null);
    navigate('/');
  };

  const handleGoToBars = () => {
    setOrderConfirmed(null);
    navigate('/nos-bars');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    // GA4 KPI: generate_lead + persistent storage
    trackGenerateLead({
      email: emailInput.trim(),
      source: 'payment_unavailable_waitlist',
      value: orderConfirmed.grandTotal || 0
    });

    setEmailSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/75 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-foam-borderWarm shadow-2xl overflow-hidden p-6 sm:p-8 text-center text-xs text-foam-navy my-6">
        
        {/* Close cross */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-foam-muted hover:text-foam-navy hover:bg-foam-subtle rounded-xl transition-colors cursor-pointer"
          title="Fermer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        <img
          src="/logo-foam.png"
          alt="FOAM Nice"
          className="w-16 h-16 object-contain rounded-full mx-auto mb-3 shadow-xs border border-foam-border bg-white"
        />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-900 font-semibold text-xs border border-amber-300 mb-2">
          <AlertCircle className="w-4 h-4 text-amber-700 stroke-[2]" />
          <span>Paiements temporairement indisponibles</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy mt-1">
          Toutes nos excuses !
        </h2>

        <p className="text-xs sm:text-sm text-foam-text mt-2 leading-relaxed font-sans">
          Les paiements en ligne sont <strong>actuellement indisponibles</strong>. Laissez votre email pour être prévenu(e) en priorité dès l'ouverture des commandes.
        </p>

        <p className="text-[11px] text-foam-muted mt-1 italic">
          Rassurez-vous : aucun montant n'a été débité de votre compte.
        </p>

        {/* Email notification card (Priority Lead Capture) */}
        <div className="mt-5 p-5 bg-[#FAF6F0] rounded-2xl border border-foam-border text-left space-y-3">
          <div className="flex items-center gap-2 text-foam-navy">
            <Mail className="w-4 h-4 text-foam-terracotta stroke-[2]" />
            <strong className="text-xs font-serif font-bold">
              Laissez votre email pour être prévenu(e) en priorité :
            </strong>
          </div>
          <p className="text-[11px] text-foam-text leading-snug">
            Renseignez votre email pour être alerté(e) dès que les paiements et réservations seront opérationnels :
          </p>

          <form onSubmit={handleEmailSubmit} className="flex gap-2">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="votre.email@exemple.com"
              className="flex-1 p-2.5 bg-white rounded-xl border border-foam-border text-xs text-foam-navy placeholder:text-foam-muted focus:outline-none focus:border-foam-terracotta"
            />
            <button
              type="submit"
              className="btn-riviera-terracotta px-4 py-2.5 text-xs font-bold shrink-0 cursor-pointer"
            >
              {emailSubmitted ? '✓ Enregistré' : 'Être prévenu(e)'}
            </button>
          </form>

          {emailSubmitted && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-[11px] font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0" />
              <span>Merci ! Votre adresse email a bien été enregistrée. Vous serez prévenu(e) en avant-première dès l'ouverture des ventes.</span>
            </div>
          )}
        </div>

        {/* Order Details Card */}
        <div className="mt-4 p-4 bg-white rounded-2xl border border-foam-border text-left space-y-2 shadow-2xs">
          <div className="flex justify-between border-b border-foam-border pb-1.5 font-serif font-bold text-xs text-foam-navy">
            <span>Articles que vous souhaitiez commander :</span>
            <span className="text-foam-terracotta font-bold">{orderConfirmed.grandTotal.toFixed(2)} €</span>
          </div>

          <ul className="space-y-1 text-foam-text text-[11px]">
            {orderConfirmed.items.map((it) => (
              <li key={it.key || it.id} className="flex justify-between font-medium">
                <span>{it.quantity}x {it.name} ({it.formatLabel})</span>
                <span className="font-semibold text-foam-navy">{(it.price * it.quantity).toFixed(2)} €</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-foam-border text-[11px]">
            {orderConfirmed.deliveryMethod === 'clickAndCollect' || orderConfirmed.deliveryMethod === 'click_and_collect' ? (
              <div className="flex items-start gap-2 text-foam-pine">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 stroke-[2]" />
                <div>
                  <span className="font-bold">Mode sélectionné : Retrait Click & Collect 0 €</span>
                  <span className="text-foam-muted block">({orderConfirmed.bar?.name || 'FOAM Port de Nice'})</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-foam-navy">
                <Truck className="w-3.5 h-3.5 stroke-[2] shrink-0 mt-0.5 text-foam-terracotta" />
                <div>
                  <span className="font-bold">Mode sélectionné : Expédition sécurisée à domicile</span>
                  <span className="text-foam-muted block">({orderConfirmed.customer?.city || 'France métropolitaine'})</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2">
          <button
            type="button"
            onClick={handleGoToBars}
            className="btn-riviera-outline w-full py-3 text-xs flex items-center justify-center gap-2 cursor-pointer font-bold"
          >
            <Beer className="w-4 h-4 text-foam-terracotta stroke-[2]" />
            <span>En attendant, venez déguster nos bières dans nos 2 bars à Nice</span>
          </button>

          <button
            type="button"
            onClick={handleClose}
            className="btn-riviera-terracotta w-full py-3.5 text-xs font-bold cursor-pointer"
          >
            <span>Retourner à l'accueil du site</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
