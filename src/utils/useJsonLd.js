import { useEffect } from 'react';

// Données structurées propres à une page (ex. fiche produit), retirées en quittant la page
export default function useJsonLd(id, data) {
  const json = JSON.stringify(data);
  if (typeof document === 'undefined') {
    globalThis.__SSR_JSONLD__ = [...(globalThis.__SSR_JSONLD__ || []), { id, json }];
  }
  useEffect(() => {
    document.getElementById(`ld-${id}`)?.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `ld-${id}`;
    script.textContent = json;
    document.head.appendChild(script);
    return () => script.remove();
  }, [id, json]);
}
