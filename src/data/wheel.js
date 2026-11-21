import { SHIPPING_RATES } from './products';

// Lots de la roue : tous gagnants, tirés selon leur poids (le -20 % reste rare)
export const WHEEL_PRIZES = [
  { id: 'pct5', lines: ['-5 %'], title: '-5 % sur votre commande', code: 'ROUE5', type: 'percent', value: 5, weight: 30, color: '#C3532B' },
  { id: 'ship', lines: ['Livraison', 'offerte'], title: 'La livraison offerte', code: 'LIVRAISON', type: 'shipping', value: 0, weight: 20, color: '#1D3C2F' },
  { id: 'pct10', lines: ['-10 %'], title: '-10 % sur votre commande', code: 'ROUE10', type: 'percent', value: 10, weight: 25, color: '#DCA037' },
  { id: 'gift', lines: ['1 bière', 'offerte'], title: '1 bière offerte avec votre coffret', code: 'BIEREOFFERTE', type: 'gift', value: 0, weight: 12, color: '#112338' },
  { id: 'pct15', lines: ['-15 %'], title: '-15 % sur votre commande', code: 'ROUE15', type: 'percent', value: 15, weight: 10, color: '#B35422' },
  { id: 'pct20', lines: ['-20 %'], title: '-20 % sur votre commande', code: 'ROUE20', type: 'percent', value: 20, weight: 3, color: '#2D5E4A' }
];

export function drawPrize() {
  const total = WHEEL_PRIZES.reduce((sum, p) => sum + p.weight, 0);
  let ticket = Math.random() * total;
  for (const prize of WHEEL_PRIZES) {
    ticket -= prize.weight;
    if (ticket < 0) return prize;
  }
  return WHEEL_PRIZES[0];
}

const round2 = (n) => Math.round(n * 100) / 100;

// Totaux de commande avec le lot de la roue (panier et commande Express)
export function computeTotals({ subtotal, isClickAndCollect, coupon, hasItems = true }) {
  const baseShipping = isClickAndCollect ? 0 : (SHIPPING_RATES.homeDelivery || SHIPPING_RATES.shipping || 6.90);
  const shippingCost = coupon?.type === 'shipping' ? 0 : baseShipping;
  const discount = coupon?.type === 'percent' ? round2(subtotal * coupon.value / 100) : 0;
  const grandTotal = round2(subtotal - discount + (hasItems ? shippingCost : 0));
  return { shippingCost, discount, grandTotal };
}

// Ligne affichée dans le panier pour le lot appliqué
export function couponLine(coupon, discount) {
  if (!coupon) return null;
  if (coupon.type === 'percent') return { label: `Code ${coupon.code} (-${coupon.value} %)`, amount: `-${discount.toFixed(2)} €` };
  if (coupon.type === 'shipping') return { label: `Code ${coupon.code}`, amount: 'Livraison offerte' };
  return { label: `Code ${coupon.code}`, amount: '1 bière offerte' };
}
