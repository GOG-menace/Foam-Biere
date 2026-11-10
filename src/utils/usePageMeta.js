import { useEffect } from 'react';

const SITE_URL = 'https://www.peronnetgauvain.fr';

function setHeadTag(selector, create, attribute, value) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, value);
}

/**
 * Titre, description et URL canonique propres à chaque page (référencement Google).
 * `path` est l'adresse officielle de la page : les alias (/coffret, /nos-bieres...) pointent vers elle.
 */
export default function usePageMeta({ title, description, path }) {
  useEffect(() => {
    document.title = title;

    setHeadTag('meta[name="description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      return meta;
    }, 'content', description);

    setHeadTag('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      return link;
    }, 'href', `${SITE_URL}${path}`);
  }, [title, description, path]);
}
