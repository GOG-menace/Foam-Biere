import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../utils/usePageMeta';

// Adresse inconnue : vraie page « introuvable », exclue de l'index Google
export default function NotFoundPage() {
  usePageMeta({
    title: 'Page introuvable | FAOM',
    description: 'Cette page n’existe pas ou plus sur le site FAOM.',
    path: null
  });

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="py-20 max-w-xl mx-auto px-4 text-center space-y-5">
      <p className="text-xs font-bold uppercase tracking-widest text-foam-terracotta">Erreur 404</p>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foam-navy">Cette page est introuvable</h1>
      <p className="text-sm text-foam-text">L’adresse a peut-être changé. Nos coffrets et nos bières vous attendent par ici :</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/coffrets" className="btn-riviera-terracotta text-sm py-3 px-6">Voir les coffrets</Link>
        <Link to="/" className="btn-riviera-outline text-sm py-3 px-6">Retour à l’accueil</Link>
      </div>
    </div>
  );
}
