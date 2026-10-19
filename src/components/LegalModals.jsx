import React from 'react';
import { X, ShieldCheck, Scale, FileText, Lock } from 'lucide-react';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/80 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-foam-bg rounded-3xl border border-foam-border shadow-2xl overflow-hidden my-8 text-foam-navy">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-foam-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-foam-stone rounded-xl text-foam-amber">
              {activeModal === 'mentions' && <FileText className="w-5 h-5" />}
              {activeModal === 'cgv' && <Scale className="w-5 h-5" />}
              {activeModal === 'rgpd' && <Lock className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-foam-gray">
                Informations Réglementaires
              </span>
              <h2 className="font-editorial text-xl font-bold text-foam-navy">
                {activeModal === 'mentions' && 'Mentions Légales & Propriété'}
                {activeModal === 'cgv' && 'Conditions Générales de Vente (CGV) — Boissons Alcoolisées'}
                {activeModal === 'rgpd' && 'Politique de Confidentialité & RGPD'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-foam-gray hover:text-foam-navy hover:bg-foam-stone transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-foam-navy/85 leading-relaxed">
          
          {activeModal === 'mentions' && (
            <>
              <p>
                <strong>Éditeur du site :</strong> Micro-Brasserie FOAM (Groupe Paloma), Maison fondée en 1948 par la famille Vannini.
                <br />
                <strong>Siège d'exploitation :</strong> Quai Cassini / 3 Rue Robilant, 06300 Nice, France.
                <br />
                <strong>Établissement secondaire :</strong> FOAM Place du Pin, 06300 Nice.
                <br />
                <strong>SIRET :</strong> 842 194 800 00012 — RCS Nice.
                <br />
                <strong>N° de TVA Intracommunautaire :</strong> FR 48 842194800.
                <br />
                <strong>Directeur de la publication :</strong> Direction Groupe Paloma & Équipe Projet SAÉ IUT Nice.
              </p>
              <p>
                <strong>Cadre académique & Dispositif pilote :</strong> Le présent site est une application web e-commerce de précommande développée dans le cadre d’une Situation d'Apprentissage et d'Évaluation (SAÉ) en partenariat avec l'IUT Nice Côte d'Azur (Université Côte d'Azur).
              </p>
              <p>
                <strong>Hébergement :</strong> Serveurs sécurisés situés dans l'Union Européenne (Vercel / Cloudflare).
              </p>
            </>
          )}

          {activeModal === 'cgv' && (
            <>
              <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-red-900 font-semibold text-xs">
                ⚠️ ARTICLE 1 : PROTECTION DES MINEURS (LOI ÉVIN & CODE DE LA SANTÉ PUBLIQUE)
                <p className="font-normal text-red-800 mt-1">
                  En vertu de l'article L. 3342-1 du Code de la santé publique, la vente d’alcool à des mineurs de moins de dix-huit (18) ans est formellement interdite. En passant commande sur ce site, l'acheteur certifie sur l'honneur être âgé de 18 ans révolus à la date de la commande.
                </p>
              </div>

              <p>
                <strong>Article 2 : Nature des commandes en mode test SAÉ</strong>
                <br />
                Le site opère un dispositif de précommande sans débit bancaire immédiat. L'utilisateur enregistre une intention d'achat ferme permettant à la brasserie de planifier ses brassins et étuis de fin d'année.
              </p>

              <p>
                <strong>Article 3 : Modalités de Click & Collect (Gratuit)</strong>
                <br />
                Le client retire sa commande gratuitement dans l'un des deux établissements FOAM à Nice (Port Quai Cassini ou Place du Pin) aux horaires d'ouverture des bars. Une pièce d'identité attestant de la majorité de l'acheteur pourra être requise lors du retrait au comptoir.
              </p>

              <p>
                <strong>Article 4 : Expédition sécurisée anti-casse</strong>
                <br />
                Les expéditions sont conditionnées dans des emballages certifiés pour le verre (forfait 12,90 €), offertes dès 50,00 € d'achat.
              </p>
            </>
          )}

          {activeModal === 'rgpd' && (
            <>
              <p>
                <strong>Responsable du traitement :</strong> FOAM Nice / Groupe Paloma.
              </p>
              <p>
                <strong>Finalités des données collectées :</strong>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Gestion des précommandes et suivi du Click & Collect au bar.</li>
                  <li>Envoi de la newsletter "Secret du Brasseur : Brassins Éphémères" sous réserve d'un consentement explicite (opt-in non pré-coché).</li>
                  <li>Mesure d'audience statistique via Matomo Analytics (sans revente de données ni cookies publicitaires tiers).</li>
                </ul>
              </p>
              <p>
                <strong>Vos droits (Articles 15 à 22 du RGPD) :</strong> Vous disposez à tout moment d'un droit d'accès, de rectification, de portabilité et de suppression de vos données personnelles. Vous pouvez exercer ce droit en nous contactant à rgpd@foam-nice.fr ou via le lien de désinscription présent dans chaque e-mail.
              </p>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-foam-border text-right">
          <button
            onClick={onClose}
            className="py-2 px-5 bg-foam-navy text-white rounded-xl text-xs font-semibold hover:bg-foam-navyLight transition-colors"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}
