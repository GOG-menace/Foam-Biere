import React from 'react';
import { Beer, MapPin, Heart, ShieldAlert, BarChart3, Lock, Scale, FileText } from 'lucide-react';
import { useAnalytics } from '../context/AnalyticsContext';

export default function Footer({ onOpenLegalModal }) {
  const { setIsJuryDrawerOpen } = useAnalytics();

  return (
    <footer className="bg-foam-navy text-foam-sand pt-12 pb-24 sm:pb-12 border-t-2 border-foam-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-foam-navyLight">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-foam-amber text-white flex items-center justify-center font-editorial font-bold text-xl">
                F
              </div>
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                FOAM NICE
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Micro-brasserie artisanale du Port de Nice. Créée avec passion par le <strong>Groupe Paloma</strong>, maison familiale azuréenne fondée en 1948 par la famille Vannini.
            </p>
            <div className="text-[11px] text-foam-gold">
              ⚓ Quai Cassini & Place du Pin • Nice (06)
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-editorial text-sm font-bold uppercase tracking-wider text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#coffrets" className="hover:text-foam-gold transition-colors">Coffrets Cadeaux de Noël</a></li>
              <li><a href="#configurateur" className="hover:text-foam-gold transition-colors">Pack de 6 sur-mesure (-28%)</a></li>
              <li><a href="#bieres" className="hover:text-foam-gold transition-colors">Nos 3 Bières Permanentes</a></li>
              <li><a href="#histoire" className="hover:text-foam-gold transition-colors">L'Héritage Paloma 1948</a></li>
              <li><a href="#bars" className="hover:text-foam-gold transition-colors">Retrait Click & Collect 0€</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-editorial text-sm font-bold uppercase tracking-wider text-white mb-3">
              Conformité & Juridique
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => onOpenLegalModal('mentions')}
                  className="hover:text-foam-gold transition-colors text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-foam-amber" />
                  <span>Mentions Légales & SAÉ</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegalModal('cgv')}
                  className="hover:text-foam-gold transition-colors text-left flex items-center gap-1.5"
                >
                  <Scale className="w-3.5 h-3.5 text-foam-amber" />
                  <span>CGV Boissons Alcoolisées</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegalModal('rgpd')}
                  className="hover:text-foam-gold transition-colors text-left flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-foam-amber" />
                  <span>Protection des Données (RGPD)</span>
                </button>
              </li>
              <li>
                <span className="text-[11px] text-emerald-400 font-medium">
                  ✓ Matomo Analytics Respectueux
                </span>
              </li>
            </ul>
          </div>

          {/* SAÉ Jury Pill */}
          <div className="bg-foam-navyLight/60 p-4 rounded-2xl border border-foam-gold/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-foam-gold">
                  Grand Oral SAÉ 2024
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h5 className="font-editorial text-sm font-bold text-white">
                Démonstration Jury & KPIs
              </h5>
              <p className="text-[11px] text-slate-300 mt-1">
                Visualisez l'arbre AARRR en direct et les objectifs atteints (Sessions, +18 ans, 70% Click & Collect).
              </p>
            </div>

            <button
              onClick={() => setIsJuryDrawerOpen(true)}
              className="mt-3 w-full py-2 px-3 rounded-xl bg-foam-amber hover:bg-foam-amberDark text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>📊 Vue Jury / KPI (Mode Démo)</span>
            </button>
          </div>

        </div>

        {/* BANDEAU SANITAIRE LOI ÉVIN OBLIGATOIRE (TRÈS VISIBLE ET CLAIR) */}
        <div className="mt-8 p-4 rounded-2xl bg-foam-stone text-foam-navy border-2 border-foam-gold text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <ShieldAlert className="w-4 h-4 text-foam-amber" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Bandeau Sanitaire Réglementaire (Loi Évin)
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-foam-navy uppercase tracking-wide">
            L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION. VENTE STRICTEMENT INTERDITE AUX MINEURS DE MOINS DE 18 ANS.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} FOAM Nice • Micro-Brasserie du Port. Groupe Paloma (Maison familiale fondée en 1948).
          </p>
          <p>
            Projet pédagogique SAÉ – IUT Nice Côte d'Azur (Université Côte d'Azur).
          </p>
        </div>

      </div>
    </footer>
  );
}
