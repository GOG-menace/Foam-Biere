import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Rend une adresse en HTML et renvoie les balises relevées pendant le rendu (titre, description, canonique, données structurées)
export function render(url) {
  globalThis.__SSR_HEAD__ = null;
  globalThis.__SSR_JSONLD__ = [];
  const html = renderToString(<App url={url} />);
  return { html, head: globalThis.__SSR_HEAD__, jsonLd: globalThis.__SSR_JSONLD__ };
}
