import React from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../utils/usePageMeta';

const ARTICLES = [
  ['1. Organisateur', 'Le concours est organisé par FAOM, microbrasserie de la Maison Rosamar, 3 Quai des Deux Emmanuels, 06300 Nice.'],
  ['2. Durée', 'Le concours est ouvert du 24 novembre 2026 au 30 novembre 2026 à 23 h 59 (heure de Paris).'],
  ['3. Participation', 'Le concours est gratuit et sans obligation d’achat. Il est réservé aux personnes majeures résidant en France. Une seule participation par adresse email ; les participations en double ne sont pas prises en compte.'],
  ['4. Lot', 'Un gagnant remporte le Coffret Classique (6 bouteilles de 33 cl) et le Coffret Exotique (6 bouteilles de 33 cl). Le lot ne peut être ni échangé ni converti en argent.'],
  ['5. Tirage au sort', 'Le gagnant est tiré au sort le 1er décembre 2026 parmi les participations valides. Il est prévenu par email et dispose de 15 jours pour répondre ; sans réponse, un nouveau gagnant est tiré au sort.'],
  ['6. Remise du lot', 'Le lot est retiré gratuitement dans l’un de nos bars à Nice, sur présentation d’une pièce d’identité prouvant la majorité, ou envoyé à domicile en France métropolitaine.'],
  ['7. Données personnelles', 'L’adresse email sert au tirage au sort, à prévenir le gagnant et, sauf désinscription, à envoyer les nouveautés FAOM. Elle n’est jamais cédée à des tiers. Vous pouvez demander l’accès, la rectification ou la suppression de vos données en répondant à nos emails.'],
  ['8. Règlement', 'Participer au concours vaut acceptation du présent règlement, consultable gratuitement sur cette page.']
];

export default function ConcoursReglementPage() {
  usePageMeta({
    title: 'Règlement du concours | FAOM',
    description: 'Règlement du concours FAOM : 2 coffrets de bières artisanales à gagner, participation gratuite jusqu’au 30 novembre 2026.',
    path: '/concours/reglement'
  });

  return (
    <div className="py-10 sm:py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-2">
        <Link to="/concours" className="text-xs font-semibold text-foam-terracotta hover:underline">← Retour au concours</Link>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foam-navy">Règlement du concours</h1>
        <p className="text-sm text-foam-muted">Concours « Gagnez nos 2 coffrets », Black Friday 2026.</p>
      </div>
      <div className="card-riviera p-6 sm:p-8 space-y-5 text-sm text-foam-text leading-relaxed">
        {ARTICLES.map(([title, body]) => (
          <section key={title} className="space-y-1">
            <h2 className="font-serif text-lg font-bold text-foam-navy">{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </div>
      <p className="text-center text-[11px] text-foam-muted font-medium">
        L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
      </p>
    </div>
  );
}
