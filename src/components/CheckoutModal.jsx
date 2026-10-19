import React, { useState } from 'react';
import { X, ShieldCheck, MapPin, Truck, AlertCircle, Lock, ArrowRight, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

export default function CheckoutModal() {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    items, 
    subtotal, 
    shippingAmount, 
    finalTotal, 
    deliveryMethod, 
    selectedBar, 
    selectedSlot,
    completeOrder 
  } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    notes: '',
    certifyAdult: false,
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Prénom requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nom requis';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'E-mail valide requis';
    if (!formData.phone.trim()) newErrors.phone = 'Numéro de téléphone requis pour le suivi';

    if (deliveryMethod === 'shipping') {
      if (!formData.address.trim()) newErrors.address = 'Adresse de livraison requise';
      if (!formData.zip.trim()) newErrors.zip = 'Code postal requis';
      if (!formData.city.trim()) newErrors.city = 'Ville requise';
    }

    if (!formData.certifyAdult) {
      newErrors.certifyAdult = 'Vous devez certifier être majeur(e) (+18 ans) conformément à la Loi Évin.';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les CGV et la politique RGPD.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D96B27', '#D4AF37', '#2E5A44', '#0F2537']
      });
    } catch (err) {
      console.warn(err);
    }

    completeOrder(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/80 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-foam-bg rounded-3xl border border-foam-border shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-foam-border flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-foam-amber">
              Mode Test SAÉ IUT Nice • Sans Débit
            </span>
            <h2 className="font-editorial text-2xl font-bold text-foam-navy">
              Finaliser votre précommande FOAM
            </h2>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 rounded-xl text-foam-gray hover:text-foam-navy hover:bg-foam-stone transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-foam-stone/60 border border-foam-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                {deliveryMethod === 'click_and_collect' ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-foam-olive bg-foam-oliveLight px-2.5 py-1 rounded-full">
                    <MapPin className="w-3.5 h-3.5" />
                    Click & Collect Gratuit (0€)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-foam-navy bg-white px-2.5 py-1 rounded-full border border-foam-border">
                    <Truck className="w-3.5 h-3.5" />
                    Expédition Anti-Casse
                  </span>
                )}
                <span className="text-xs font-medium text-foam-navy">
                  {items.length} article{items.length > 1 ? 's' : ''}
                </span>
              </div>
              <p className="text-xs text-foam-navy/80 mt-1">
                {deliveryMethod === 'click_and_collect' 
                  ? `Retrait : ${selectedBar?.name} (${selectedSlot})` 
                  : 'Livraison à domicile anti-casse'}
              </p>
            </div>

            <div className="text-right sm:border-l sm:border-foam-border/80 sm:pl-4">
              <span className="text-xs text-foam-gray">Total à régler :</span>
              <p className="text-xl font-black text-foam-amber">{finalTotal.toFixed(2)} €</p>
              <p className="text-[10px] text-foam-olive font-bold uppercase">0 € débité aujourd'hui</p>
            </div>
          </div>

          {/* Customer Coordinates */}
          <div>
            <h3 className="font-editorial text-base font-bold text-foam-navy mb-3">
              1. Coordonnées de contact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-foam-navy mb-1">Prénom *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Léa"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-foam-border text-xs sm:text-sm text-foam-navy focus:ring-2 focus:ring-foam-amber focus:outline-none"
                />
                {errors.firstName && <p className="text-[10px] text-red-500 mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-foam-navy mb-1">Nom *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Vannini"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-foam-border text-xs sm:text-sm text-foam-navy focus:ring-2 focus:ring-foam-amber focus:outline-none"
                />
                {errors.lastName && <p className="text-[10px] text-red-500 mt-1">{errors.lastName}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-foam-navy mb-1">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="lea@exemple.fr"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-foam-border text-xs sm:text-sm text-foam-navy focus:ring-2 focus:ring-foam-amber focus:outline-none"
                />
                {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-foam-navy mb-1">Téléphone (SMS de confirmation) *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-foam-border text-xs sm:text-sm text-foam-navy focus:ring-2 focus:ring-foam-amber focus:outline-none"
                />
                {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Delivery Address (if shipping) */}
          {deliveryMethod === 'shipping' && (
            <div>
              <h3 className="font-editorial text-base font-bold text-foam-navy mb-3">
                2. Adresse de livraison Colis Anti-Casse
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-foam-navy mb-1">Adresse postale *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="12 Quai des Deux Emmanuels"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-foam-border text-xs sm:text-sm text-foam-navy focus:ring-2 focus:ring-foam-amber focus:outline-none"
                  />
                  {errors.address && <p className="text-[10px] text-red-500 mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-foam-navy mb-1">Code postal *</label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      placeholder="06300"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-foam-border text-xs sm:text-sm text-foam-navy focus:ring-2 focus:ring-foam-amber focus:outline-none"
                    />
                    {errors.zip && <p className="text-[10px] text-red-500 mt-1">{errors.zip}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foam-navy mb-1">Ville *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Nice"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-foam-border text-xs sm:text-sm text-foam-navy focus:ring-2 focus:ring-foam-amber focus:outline-none"
                    />
                    {errors.city && <p className="text-[10px] text-red-500 mt-1">{errors.city}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Optional notes */}
          <div>
            <label className="block text-xs font-medium text-foam-navy mb-1">
              Instructions particulières / Mot pour un cadeau (Optionnel)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={2}
              placeholder="Ex: Merci de glisser un mot doux de la part de Léa pour Noël !"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-foam-border text-xs sm:text-sm text-foam-navy focus:ring-2 focus:ring-foam-amber focus:outline-none"
            />
          </div>

          {/* SAÉ Test Mode Box */}
          <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-xs text-amber-950">
            <div className="flex items-start gap-2.5">
              <Lock className="w-5 h-5 text-foam-amber shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-950">
                  🔒 Mode Précommande Test (SAÉ IUT Nice Côte d'Azur)
                </h4>
                <p className="text-[11px] text-amber-900 mt-0.5 leading-relaxed">
                  Aucun débit bancaire ne sera effectué. Votre précommande enregistre votre intention d'achat réelle pour le projet étudiant et vous recevrez un récapitulatif immédiat par e-mail fictif.
                </p>
              </div>
            </div>
          </div>

          {/* Mandatory Checkboxes */}
          <div className="space-y-3 pt-2">
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="certifyAdult"
                  checked={formData.certifyAdult}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-foam-border text-foam-amber focus:ring-foam-amber shrink-0"
                />
                <span className="text-xs text-foam-navy leading-snug">
                  Je certifie sur l'honneur être majeur(e) (+18 ans) conformément à la réglementation française sur les boissons alcoolisées.
                </span>
              </label>
              {errors.certifyAdult && <p className="text-[10px] text-red-500 ml-7 mt-0.5">{errors.certifyAdult}</p>}
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-foam-border text-foam-amber focus:ring-foam-amber shrink-0"
                />
                <span className="text-xs text-foam-navy leading-snug">
                  J'accepte les Conditions Générales de Vente (CGV) et la politique de protection des données personnelles (RGPD).
                </span>
              </label>
              {errors.acceptTerms && <p className="text-[10px] text-red-500 ml-7 mt-0.5">{errors.acceptTerms}</p>}
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-4 border-t border-foam-border">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-foam-amber hover:bg-foam-amberDark text-white font-bold rounded-2xl shadow-amber-glow transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <span>Valider ma précommande (0 € débité aujourd'hui)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-[10px] text-foam-gray mt-2">
              Confirmation immédiate • Réservation garantie en cuves ou en étui cadeau
            </p>
          </div>

        </form>

      </div>
    </div>
  );
}
