import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import { useAnalytics } from '../context/AnalyticsContext';

export default function NewsletterSection() {
  const { trackEmailSignup } = useAnalytics();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) {
      setErrorMsg('Veuillez renseigner votre prénom et votre adresse e-mail.');
      return;
    }
    if (!rgpdConsent) {
      setErrorMsg('Veuillez accepter la politique de confidentialité pour valider votre inscription.');
      return;
    }

    trackEmailSignup(email, firstName);
    setIsSubmitted(true);
    setErrorMsg('');
  };

  return (
    <section className="py-16 sm:py-24 bg-foam-navy text-foam-sand relative overflow-hidden">
      
      {/* Decorative Mediterranean glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-foam-amber/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-foam-gold/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-foam-navyLight/60 border border-foam-gold/30 p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl">
          
          <div className="max-w-2xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foam-amber/20 text-foam-sand text-xs font-bold uppercase tracking-wider border border-foam-amber/40 mb-4">
              <Flame className="w-3.5 h-3.5 text-foam-amber" />
              <span>Série Limitée & Avant-Première</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Le Secret du Brasseur : Ne manquez pas nos Brassins Éphémères de Noël
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Habituellement réservées aux becs pression de nos bars du Port et de la Place du Pin, nos recettes éphémères (Stout d'hiver aux fèves de cacao, Double IPA de fête) font l'objet d'embouteillages ultra-limités (150 bouteilles max).
            </p>
            <p className="mt-2 text-xs font-semibold text-foam-gold uppercase tracking-wider">
              Rejoignez notre liste confidentielle pour réserver avant la rupture.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-8 text-left max-w-lg mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Votre prénom *
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Ex: Léa"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-foam-amber text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Votre e-mail *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="lea@exemple.fr"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-foam-amber text-sm transition-all"
                    />
                  </div>
                </div>

                {/* RGPD Non pré-cochée obligatoire */}
                <div className="mt-4 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="rgpd-consent-newsletter"
                    checked={rgpdConsent}
                    onChange={(e) => setRgpdConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/30 text-foam-amber focus:ring-foam-amber focus:ring-offset-foam-navy bg-white/10 shrink-0 cursor-pointer"
                  />
                  <label htmlFor="rgpd-consent-newsletter" className="text-xs text-slate-300 cursor-pointer select-none leading-relaxed">
                    J'accepte de recevoir par e-mail les actualités des brassins FOAM (1 à 2 emails par mois). Désinscription possible à tout moment via un lien unique.
                  </label>
                </div>

                {errorMsg && (
                  <p className="mt-3 text-xs font-medium text-red-400 bg-red-950/60 p-2.5 rounded-lg border border-red-800">
                    ⚠️ {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 w-full py-3.5 px-6 bg-foam-amber hover:bg-foam-amberDark text-white font-bold rounded-xl shadow-amber-glow transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>M'inscrire en liste prioritaire</span>
                </button>

                <p className="mt-3 text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-foam-gold" />
                  <span>Vos données restent à Nice chez FOAM et ne seront jamais vendues.</span>
                </p>
              </form>
            ) : (
              <div className="mt-8 p-6 bg-emerald-950/60 rounded-2xl border border-emerald-500/40 text-center animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-editorial text-xl font-bold text-white">
                  Bienvenue dans le cercle FOAM, {firstName} !
                </h4>
                <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-md mx-auto">
                  Votre invitation prioritaire a bien été enregistrée. Vous serez le premier informé du prochain embouteillage de Noël.
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
