// Génère une vraie page HTML par adresse (texte, titre, description, canonique, aperçu, données structurées),
// pour que Google et les réseaux sociaux lisent le contenu sans exécuter le JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/www\.peronnetgauvain\.fr([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
routes.push('/concours/reglement');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escapeText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function page(url, { notFound = false } = {}) {
  const { html, head, jsonLd } = render(url);
  if (!head) throw new Error(`Aucun titre relevé pour ${url}`);
  let out = template;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(head.title)}</title>`);
  out = out.replace(/(<meta name="description" content=")[^"]*(")/, `$1${escapeAttr(head.description)}$2`);
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(head.title)}$2`);
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(head.description)}$2`);
  const extra = [];
  if (head.canonical) {
    out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${escapeAttr(head.canonical)}$2`);
    extra.push(`<link rel="canonical" href="${escapeAttr(head.canonical)}" />`);
  }
  if (notFound) extra.push('<meta name="robots" content="noindex" />');
  for (const { id, json } of jsonLd) {
    extra.push(`<script type="application/ld+json" id="ld-${id}">${json.replace(/</g, '\\u003c')}</script>`);
  }
  out = out.replace('</head>', `    ${extra.join('\n    ')}\n  </head>`);
  out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  return out;
}

// /coffrets -> dist/coffrets.html (servi à /coffrets grâce à cleanUrls), / -> dist/index.html
const pages = routes.map((url) => [url, page(url)]);
for (const [url, html] of pages) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
fs.writeFileSync(path.join(dist, '404.html'), page('/page-introuvable', { notFound: true }));
console.log(`Pages HTML générées : ${pages.length} + 404`);
