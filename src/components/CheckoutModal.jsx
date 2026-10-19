import React, { useState } from 'react';
import { X, Lock, MapPin, Truck, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BARS_DATA } from '../data/products';
import confetti from 'canvas-confetti';

export default function CheckoutModal() {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    items, 
    grandTotal, 
    deliveryMethod, 
    selectedBar, 
    completeOrder 
  } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    certifyAdult: false,
    acceptTerms: false
  });

  const [error, setError] = useState('');

  if (!isCheckoutOpen) return null;

  const currentBar = BARS_DATA.find(b => b.id === selectedBar) || BARS_DATA[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Veuillez renseigner vos coordonnées de contact complètes.');
      return;
    }
    if (deliveryMethod === 'shipping' && (!formData.address.trim() || !formData.city.trim() || !formData.zip.trim())) {
      setError('Veuillez renseigner votre adresse de livraison complète.');
      return;
    }
    if (!formData.certifyAdult) {
      setError('Vous devez certifier être majeur(e) (+18 ans) conformément à la réglementation française sur l\'alcool.');
      return;
    }
    if (!formData.acceptTerms) {
      setError('Veuillez accepter les conditions générales de vente.');
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF4800', '#E2FF00', '#0A0A0A', '#FFFFFF']
      });
    } catch (e) {
      console.warn(e);
    }

    completeOrder(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-black/80 backdrop-blur-xs overflow-y-auto animate-fade-in font-mono">
      <div className="relative w-full max-w-xl bg-white border-2 border-foam-black shadow-brutal overflow-hidden my-8">
        
        {/* Header Brutaliste */}
        <div className="p-6 bg-foam-black text-white flex items-center justify-between border-b-2 border-foam-black">
          <div className="flex items-center gap-3">
            <img src="/logo-foam.png" alt="FOAM Logo" className="w-10 h-10 object-contain bg-white border-2 border-white shadow-[2px_2px_0px_#FF4800]" />
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-foam-neon block">
                [ PAIEMENT SÉCURISÉ & RÉSERVATION ]
              </span>
              <h2 className="font-impact text-xl uppercase tracking-tight text-white">
                FINALISER VOTRE COMMANDE FOAM
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 text-white border-2 border-white hover:bg-foam-neon hover:text-black transition-colors"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto text-xs text-foam-black">
          
          {/* Order quick summary box */}
          <div className="p-4 bg-foam-bg border-2 border-foam-black flex items-center justify-between font-mono">
            <div>
              <span className="font-black text-foam-black uppercase text-xs block">
                {items.length} ARTICLE{items.length > 1 ? 'S' : ''} ({deliveryMethod === 'clickAndCollect' ? 'CLICK & COLLECT 0 €' : 'LIVRAISON À DOMICILE'})
              </span>
              <span className="text-[11px] text-foam-muted font-bold">
                {deliveryMethod === 'clickAndCollect' ? `Retrait au bar : ${currentBar.name}` : 'Expédition soignée à domicile'}
              </span>
            </div>
            <span className="font-impact text-2xl text-foam-orange">
              {grandTotal.toFixed(2)} €
            </span>
          </div>

          {/* Contact details */}
          <div className="space-y-3 font-mono">
            <span className="font-black uppercase tracking-wider text-foam-black block border-b border-foam-borderLight pb-1">
              [ 1. COORDONNÉES DE CONTACT ]
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Prénom *</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full p-2.5 bg-foam-bg border-2 border-foam-black font-mono font-bold text-xs focus:outline-none focus:bg-white"
                  placeholder="Jean"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Nom *</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full p-2.5 bg-foam-bg border-2 border-foam-black font-mono font-bold text-xs focus:outline-none focus:bg-white"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-foam-bg border-2 border-foam-black font-mono font-bold text-xs focus:outline-none focus:bg-white"
                  placeholder="jean.dupont@email.com"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Téléphone (SMS retrait) *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 bg-foam-bg border-2 border-foam-black font-mono font-bold text-xs focus:outline-none focus:bg-white"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address (if shipping delivery selected) */}
          {deliveryMethod === 'shipping' && (
            <div className="space-y-3 font-mono pt-2 border-t border-foam-borderLight">
              <span className="font-black uppercase tracking-wider text-foam-black block border-b border-foam-borderLight pb-1">
                [ 2. ADRESSE DE LIVRAISON SÉCURISÉE ]
              </span>
              <div>
                <label className="block text-[11px] font-bold uppercase mb-1">Adresse postale *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2.5 bg-foam-bg border-2 border-foam-black font-mono font-bold text-xs focus:outline-none focus:bg-white"
                  placeholder="12 Quai des Deux Emmanuels"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase mb-1">Code Postal *</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full p-2.5 bg-foam-bg border-2 border-foam-black font-mono font-bold text-xs focus:outline-none focus:bg-white"
                    placeholder="06300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase mb-1">Ville *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 bg-foam-bg border-2 border-foam-black font-mono font-bold text-xs focus:outline-none focus:bg-white"
                    placeholder="Nice"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Craft guarantee callout */}
          <div className="p-3.5 bg-foam-bg border-2 border-foam-black flex items-start gap-2.5 text-xs text-foam-black font-mono">
            <Lock className="w-4 h-4 text-foam-orange shrink-0 mt-0.5 stroke-[2.5]" />
            <div>
              <strong className="block text-foam-black uppercase font-black">ENGAGEMENT BRASSERIE FOAM NICE :</strong>
              <p className="text-[11px] text-foam-black mt-0.5 leading-relaxed font-sans">
                Votre commande enregistre directement votre réservation auprès de la brasserie au Port de Nice. Préparation soignée sous 2h pour le Click & Collect ou expédition sécurisée anti-casse.
              </p>
            </div>
          </div>

          {/* Legal Checkboxes */}
          <div className="space-y-2 pt-1 font-mono">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.certifyAdult}
                onChange={(e) => setFormData({ ...formData, certifyAdult: e.target.checked })}
                className="mt-0.5 accent-black"
              />
              <span className="text-[11px] text-foam-black leading-tight font-bold">
                Je certifie sur l'honneur être majeur(e) (+18 ans) conformément à la réglementation française (Loi Évin).
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                className="mt-0.5 accent-black"
              />
              <span className="text-[11px] text-foam-black leading-tight font-bold">
                J'accepte les conditions générales de vente et la politique de confidentialité RGPD.
              </span>
            </label>
          </div>

          {error && (
            <p className="text-xs text-black font-mono font-black bg-foam-neon p-3 border-2 border-foam-black shadow-brutal-sm">
              ⚠️ {error}
            </p>
          )}

          <div className="pt-3 border-t-2 border-foam-black">
            <button
              type="submit"
              className="btn-brutal-orange w-full py-4 text-xs sm:text-sm font-mono font-black uppercase tracking-wider"
            >
              <span>CONFIRMER MA COMMANDE • {grandTotal.toFixed(2)} €</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
