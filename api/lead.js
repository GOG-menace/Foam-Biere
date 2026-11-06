import { randomUUID } from 'node:crypto';
import { put } from '@vercel/blob';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const text = (value, max) => String(value ?? '').slice(0, max);

// Reçoit depuis le site les emails et les achats fictifs, et les stocke dans un Blob privé
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const type = body.type === 'email' ? 'email' : body.type === 'achat_fictif' ? 'achat_fictif' : null;
  if (!type) return res.status(400).json({ error: 'Type inconnu' });

  const email = text(body.email, 254).trim().toLowerCase();
  if (type === 'email' && !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  const record = {
    date: new Date().toISOString(),
    type,
    email: type === 'email' ? email : '',
    montant: Number(body.value) || 0,
    livraison: text(body.shippingTier, 40),
    articles: text(body.items, 500),
    commande: text(body.orderNumber, 40)
  };

  await put(`leads/${type}/${Date.now()}-${randomUUID()}.json`, JSON.stringify(record), {
    access: 'private',
    contentType: 'application/json'
  });

  return res.status(201).json({ ok: true });
}
