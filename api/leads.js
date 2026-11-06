import { get, list } from '@vercel/blob';

const COLUMNS = ['date', 'type', 'email', 'montant', 'livraison', 'articles', 'commande'];

// Les guillemets protègent le CSV, l'apostrophe neutralise les formules dans Excel
const csvCell = (value) => {
  const cell = String(value ?? '');
  const safe = /^[=+\-@]/.test(cell) ? `'${cell}` : cell;
  return `"${safe.replace(/"/g, '""')}"`;
};

async function readRecord(pathname) {
  const result = await get(pathname, { access: 'private', useCache: false });
  return result ? new Response(result.stream).json() : null;
}

// Export CSV protégé par LEADS_ADMIN_KEY : /api/leads?key=...
export default async function handler(req, res) {
  const adminKey = process.env.LEADS_ADMIN_KEY;
  if (!adminKey || req.query.key !== adminKey) {
    return res.status(401).json({ error: 'Accès refusé' });
  }

  const blobs = [];
  let cursor;
  do {
    const page = await list({ prefix: 'leads/', cursor });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  const records = (await Promise.all(blobs.map((blob) => readRecord(blob.pathname)))).filter(Boolean);
  records.sort((a, b) => a.date.localeCompare(b.date));

  const lines = [COLUMNS.join(';'), ...records.map((r) => COLUMNS.map((c) => csvCell(r[c])).join(';'))];
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="faom-leads.csv"');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(`\uFEFF${lines.join('\n')}`);
}
