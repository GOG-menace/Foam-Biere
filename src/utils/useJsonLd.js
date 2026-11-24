import { useEffect } from 'react';

// Données structurées propres à une page (ex. fiche produit), retirées en quittant la page
export default function useJsonLd(id, data) {
  const json = JSON.stringify(data);
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `ld-${id}`;
    script.textContent = json;
    document.head.appendChild(script);
    return () => script.remove();
  }, [id, json]);
}
