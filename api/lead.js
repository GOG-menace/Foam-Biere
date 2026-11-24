import { createHash, randomUUID } from 'node:crypto';
import { put, head, BlobNotFoundError } from '@vercel/blob';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const text = (value, max) => String(value ?? '').slice(0, max);

// Reçoit depuis le site les emails et les achats fictifs, et les stocke dans un Blob privé
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const type = ['email', 'achat_fictif', 'concours'].includes(body.type) ? body.type : null;
  if (!type) return res.status(400).json({ error: 'Type inconnu' });

  const email = text(body.email, 254).trim().toLowerCase();
  if (type !== 'achat_fictif' && !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  const record = {
    date: new Date().toISOString(),
    type,
    email: type === 'achat_fictif' ? '' : email,
    montant: Number(body.value) || 0,
    livraison: text(body.shippingTier, 40),
    articles: text(body.items, 500),
    commande: text(body.orderNumber, 40),
    origine: text(body.origine, 20),
    lot: text(body.lot, 30),
    source: text(body.source, 40)
  };

  // Concours : une seule participation par email (un fichier par adresse)
  if (type === 'concours') {
    const pathname = `leads/concours/${createHash('sha256').update(email).digest('hex')}.json`;
    try {
      await head(pathname);
      return res.status(409).json({ error: 'Déjà inscrit' });
    } catch (err) {
      if (!(err instanceof BlobNotFoundError)) throw err;
    }
    await put(pathname, JSON.stringify(record), { access: 'private', contentType: 'application/json', allowOverwrite: false });
    return res.status(201).json({ ok: true });
  }


  await put(`leads/${type}/${Date.now()}-${randomUUID()}.json`, JSON.stringify(record), {
    access: 'private',
    contentType: 'application/json'
  });

  return res.status(201).json({ ok: true });
}
