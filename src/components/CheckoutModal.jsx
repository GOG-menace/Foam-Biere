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
    if (deliveryMethod === 'homeDelivery' && (!formData.address.trim() || !formData.city.trim() || !formData.zip.trim())) {
      setError('Veuillez renseigner votre adresse de livraison complète.');
      return;
    }
    if (!formData.certifyAdult) {
      setError('Vous devez certifier être majeur(e) (+18 ans) conformément à la réglementation française sur l\'alcool.');
      return;
    }
    if (!formData.acceptTerms) {
      setError('Veuillez accepter les CGV et conditions du dispositif test.');
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#904545', '#C9971E', '#28533E', '#0F2438']
      });
    } catch (e) {
      console.warn(e);
    }

    completeOrder(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/80 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-foam-border shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-foam-navy text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-foam.png" alt="FOAM Logo" className="w-10 h-10 object-contain rounded-full border border-white/30" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                Paiement Sécurisé & Réservation
              </span>
              <h2 className="font-serif text-xl font-bold text-white">
                Finaliser votre commande FOAM
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto text-xs text-foam-navy">
          
          {/* Order quick summary box */}
          <div className="p-4 bg-foam-bg rounded-2xl border border-foam-border flex items-center justify-between">
            <div>
              <span className="font-bold text-foam-navy text-sm">
                {items.length} article{items.length > 1 ? 's' : ''} ({deliveryMethod === 'clickAndCollect' ? 'Click & Collect 0 €' : 'Livraison à domicile'})
              </span>
              <p className="text-xs text-foam-text mt-0.5">
                {deliveryMethod === 'clickAndCollect' ? `Point de retrait : ${currentBar.name}` : 'Envoi sécurisé anti-casse'}
              </p>
            </div>
            <div className="text-right">
              <span className="font-serif text-2xl font-black text-foam-red">
                {grandTotal.toFixed(2)} €
              </span>
              <span className="text-[11px] text-foam-olive font-bold block">0 € débité aujourd'hui</span>
            </div>
          </div>

          {/* Contact Fields */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-foam-navy text-xs">
              1. Vos coordonnées de contact
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-foam-text font-semibold mb-1">Prénom *</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-foam-border bg-white text-foam-navy focus:outline-none focus:ring-2 focus:ring-foam-red"
                  placeholder="Léa"
                />
              </div>

              <div>
                <label className="block text-foam-text font-semibold mb-1">Nom *</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-foam-border bg-white text-foam-navy focus:outline-none focus:ring-2 focus:ring-foam-red"
                  placeholder="Vannini"
                />
              </div>

              <div>
                <label className="block text-foam-text font-semibold mb-1">E-mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-foam-border bg-white text-foam-navy focus:outline-none focus:ring-2 focus:ring-foam-red"
                  placeholder="lea@exemple.fr"
                />
              </div>

              <div>
                <label className="block text-foam-text font-semibold mb-1">Téléphone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-foam-border bg-white text-foam-navy focus:outline-none focus:ring-2 focus:ring-foam-red"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address (if homeDelivery) */}
          {deliveryMethod === 'homeDelivery' && (
            <div className="space-y-3 pt-2">
              <h4 className="font-bold uppercase tracking-wider text-foam-navy text-xs">
                2. Adresse de livraison Colis Anti-Casse
              </h4>
              <div>
                <label className="block text-foam-text font-semibold mb-1">Adresse postale *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-foam-border bg-white text-foam-navy focus:outline-none focus:ring-2 focus:ring-foam-red"
                  placeholder="12 Quai des Deux Emmanuels"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-foam-text font-semibold mb-1">Code postal *</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-foam-border bg-white text-foam-navy focus:outline-none focus:ring-2 focus:ring-foam-red"
                    placeholder="06300"
                  />
                </div>
                <div>
                  <label className="block text-foam-text font-semibold mb-1">Ville *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-foam-border bg-white text-foam-navy focus:outline-none focus:ring-2 focus:ring-foam-red"
                    placeholder="Nice"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Craft guarantee callout */}
          <div className="p-3.5 bg-foam-redSoft rounded-2xl border border-foam-redBorder flex items-start gap-2.5 text-xs text-foam-navy">
            <Lock className="w-4 h-4 text-foam-red shrink-0 mt-0.5" />
            <div>
              <strong className="block text-foam-red">🔒 Engagement Brasserie FOAM Nice :</strong>
              <p className="text-[11px] text-foam-text mt-0.5 leading-relaxed">
                Votre commande enregistre directement votre réservation auprès de la brasserie au Port de Nice. Préparation soignée sous 2h pour le Click & Collect ou expédition sécurisée anti-casse.
              </p>
            </div>
          </div>

          {/* Legal Checkboxes */}
          <div className="space-y-2 pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.certifyAdult}
                onChange={(e) => setFormData({ ...formData, certifyAdult: e.target.checked })}
                className="mt-0.5 text-foam-red rounded"
              />
              <span className="text-[11px] text-foam-navy leading-tight font-medium">
                Je certifie sur l'honneur être majeur(e) (+18 ans) conformément à la réglementation française (Loi Évin).
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                className="mt-0.5 text-foam-red rounded"
              />
              <span className="text-[11px] text-foam-navy leading-tight font-medium">
                J'accepte les conditions générales de vente et la politique de confidentialité RGPD.
              </span>
            </label>
          </div>

          {error && (
            <p className="text-xs text-red-600 font-bold bg-red-50 p-3 rounded-xl border border-red-200">
              ⚠️ {error}
            </p>
          )}

          <div className="pt-3 border-t border-foam-border">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-foam-red hover:bg-foam-redDark text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-shopify hover:shadow-red-glow transition-all"
            >
              <span>Valider ma commande</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
