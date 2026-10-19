import React, { useState } from 'react';
import { X, Lock, MapPin, Truck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BARS_DATA } from '../data/products';

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
    certifyAdult: false
  });

  const [error, setError] = useState('');

  if (!isCheckoutOpen) return null;

  const currentBar = BARS_DATA.find(b => b.id === selectedBar) || BARS_DATA[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError('Veuillez renseigner vos coordonnées de contact.');
      return;
    }
    if (deliveryMethod === 'homeDelivery' && (!formData.address || !formData.city || !formData.zip)) {
      setError('Veuillez renseigner votre adresse de livraison.');
      return;
    }
    if (!formData.certifyAdult) {
      setError('Vous devez certifier être majeur(e) (+18 ans) conformément à la réglementation.');
      return;
    }

    completeOrder(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kraft-ink/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-kraft-bg rounded-2xl border border-kraft-border shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-kraft-border flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-kraft-terracotta">
              Dispositif Pilote • Mode Test
            </span>
            <h2 className="font-serif text-xl font-bold text-kraft-ink">
              Finaliser votre précommande FOAM
            </h2>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 text-kraft-muted hover:text-kraft-ink"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-xs text-kraft-ink">
          
          {/* Order quick summary */}
          <div className="p-3.5 bg-white rounded-xl border border-kraft-border flex items-center justify-between">
            <div>
              <span className="font-bold text-kraft-ink">
                {items.length} article{items.length > 1 ? 's' : ''} ({deliveryMethod === 'clickAndCollect' ? 'Click & Collect 0€' : 'Livraison'})
              </span>
              <p className="text-[11px] text-kraft-muted mt-0.5">
                {deliveryMethod === 'clickAndCollect' ? `Retrait : ${currentBar.name}` : 'Envoi sécurisé anti-casse'}
              </p>
            </div>
            <div className="text-right">
              <span className="font-serif text-lg font-bold text-kraft-terracotta">
                {grandTotal.toFixed(2)} €
              </span>
              <span className="text-[10px] text-kraft-muted block">0 € débité</span>
            </div>
          </div>

          {/* Contact Fields */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-kraft-ink">
              Coordonnées de contact
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-kraft-muted mb-1">Prénom *</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-kraft-border bg-white text-kraft-ink focus:outline-none focus:ring-1 focus:ring-kraft-ink"
                  placeholder="Léa"
                />
              </div>

              <div>
                <label className="block text-kraft-muted mb-1">Nom *</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-kraft-border bg-white text-kraft-ink focus:outline-none focus:ring-1 focus:ring-kraft-ink"
                  placeholder="Vannini"
                />
              </div>

              <div>
                <label className="block text-kraft-muted mb-1">E-mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-kraft-border bg-white text-kraft-ink focus:outline-none focus:ring-1 focus:ring-kraft-ink"
                  placeholder="lea@exemple.fr"
                />
              </div>

              <div>
                <label className="block text-kraft-muted mb-1">Téléphone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-kraft-border bg-white text-kraft-ink focus:outline-none focus:ring-1 focus:ring-kraft-ink"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address (if homeDelivery) */}
          {deliveryMethod === 'homeDelivery' && (
            <div className="space-y-3 pt-2">
              <h4 className="font-bold uppercase tracking-wider text-kraft-ink">
                Adresse de livraison
              </h4>
              <div>
                <label className="block text-kraft-muted mb-1">Adresse postale *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-kraft-border bg-white text-kraft-ink focus:outline-none focus:ring-1 focus:ring-kraft-ink"
                  placeholder="12 Quai des Deux Emmanuels"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-kraft-muted mb-1">Code postal *</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-kraft-border bg-white text-kraft-ink focus:outline-none focus:ring-1 focus:ring-kraft-ink"
                    placeholder="06300"
                  />
                </div>
                <div>
                  <label className="block text-kraft-muted mb-1">Ville *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-kraft-border bg-white text-kraft-ink focus:outline-none focus:ring-1 focus:ring-kraft-ink"
                    placeholder="Nice"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Notice Test Mode */}
          <div className="p-3 bg-kraft-stone/60 rounded-xl border border-kraft-border flex items-start gap-2 text-[11px] text-kraft-muted">
            <Lock className="w-4 h-4 text-kraft-terracotta shrink-0 mt-0.5" />
            <span>
              <strong>Mode précommande test :</strong> Aucun paiement bancaire n'est requis aujourd'hui. Votre commande réserve vos bouteilles fraîches auprès de la microbrasserie.
            </span>
          </div>

          {/* Age certification */}
          <label className="flex items-start gap-2.5 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={formData.certifyAdult}
              onChange={(e) => setFormData({ ...formData, certifyAdult: e.target.checked })}
              className="mt-0.5 text-kraft-ink"
            />
            <span className="text-[11px] text-kraft-ink leading-tight">
              Je certifie sur l'honneur être âgé(e) de 18 ans ou plus conformément à la loi française sur les boissons alcoolisées.
            </span>
          </label>

          {error && (
            <p className="text-[11px] text-red-600 font-semibold bg-red-50 p-2 rounded border border-red-200">
              ⚠️ {error}
            </p>
          )}

          <div className="pt-2 border-t border-kraft-border">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-kraft-ink hover:bg-kraft-terracotta text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Confirmer ma précommande (0 € débité)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
