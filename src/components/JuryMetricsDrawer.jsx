import React from 'react';
import { 
  X, BarChart3, TrendingUp, CheckCircle, ShieldCheck, 
  MapPin, ShoppingCart, Mail, RefreshCw, Sparkles, Terminal, Award, HelpCircle
} from 'lucide-react';
import { useAnalytics } from '../context/AnalyticsContext';

export default function JuryMetricsDrawer() {
  const { 
    isJuryDrawerOpen, 
    setIsJuryDrawerOpen, 
    metrics, 
    targets, 
    rates, 
    eventLogs, 
    resetMetrics,
    trackOrderCompleted,
    trackEmailSignup,
    trackAddToCart
  } = useAnalytics();

  if (!isJuryDrawerOpen) return null;

  const totalOrders = metrics.clickAndCollectOrders + metrics.deliveryOrders;
  const ccRate = rates.clickAndCollectRate;
  const isCcTargetMet = ccRate >= targets.clickAndCollectRate.target;
  const isOrdersTargetMet = metrics.ordersCount >= targets.ordersCount.target;
  const isAgeTargetMet = rates.ageGateRate >= targets.ageGateRate.target;
  const isCartTargetMet = rates.cartRate >= targets.cartRate.target;
  const isEmailTargetMet = metrics.emailSignups >= targets.emailSignups.target;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div 
        onClick={() => setIsJuryDrawerOpen(false)}
        className="absolute inset-0 bg-foam-navy/70 backdrop-blur-xs" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-xl bg-foam-bg shadow-2xl flex flex-col justify-between border-l-2 border-foam-gold text-foam-navy">
          
          {/* Header */}
          <div className="p-5 bg-foam-navy text-white border-b border-foam-gold/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-foam-gold/20 text-foam-gold">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-foam-amber text-white">
                    Dispositif SAÉ IUT Nice
                  </span>
                  <span className="text-xs text-foam-gold font-mono">Sprint 3 • Pilote</span>
                </div>
                <h2 className="font-editorial text-xl font-bold text-white mt-0.5">
                  Cockpit de Performance AARRR (Jury)
                </h2>
              </div>
            </div>

            <button
              onClick={() => setIsJuryDrawerOpen(false)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {/* Top Strategic Statement */}
            <div className="p-4 rounded-2xl bg-white border border-foam-gold/40 shadow-xs">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-foam-amber shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-foam-navy">
                    Double Objectif Stratégique du Dispositif FOAM :
                  </h4>
                  <p className="text-xs text-foam-navy/80 mt-1 leading-relaxed">
                    1. <strong>Valider l'intention d'achat réelle</strong> en bières et coffrets sans risque bancaire via les précommandes test.
                    <br />
                    2. <strong>Contourner les frais d'expédition du verre</strong> en maximisant le Click & Collect dans les 2 bars FOAM (Cible ≥ 70%).
                  </p>
                </div>
              </div>
            </div>

            {/* AARRR Performance Grid */}
            <div className="space-y-3">
              <h3 className="font-editorial text-base font-bold text-foam-navy flex items-center justify-between">
                <span>Indicateurs Clés de Performance (KPIs)</span>
                <span className="text-xs font-sans text-foam-gray font-normal">Temps Réel</span>
              </h3>

              {/* KPI 1 : SESSIONS (ACQUISITION) */}
              <div className="p-3.5 bg-white rounded-2xl border border-foam-border shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-foam-navy">
                    1. Acquisition : Sessions uniques (QR Code Bar & IG)
                  </span>
                  <span className="text-xs font-bold text-foam-amber">
                    {metrics.sessions} / {targets.sessions.target}
                  </span>
                </div>
                <div className="w-full bg-foam-stone h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-foam-amber h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (metrics.sessions / targets.sessions.target) * 100)}%` }}
                  />
                </div>
                <p className="text-[10px] text-foam-gray mt-1">
                  Cible cible soutenance : 150 à 200 sessions qualifiées.
                </p>
              </div>

              {/* KPI 2 : POPUP +18 (ACTIVATION) */}
              <div className="p-3.5 bg-white rounded-2xl border border-foam-border shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-foam-navy flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-foam-olive" />
                    2. Activation Légale : Taux validation +18 ans (Loi Évin)
                  </span>
                  <span className={`text-xs font-bold ${isAgeTargetMet ? 'text-foam-olive' : 'text-foam-amber'}`}>
                    {rates.ageGateRate}% (Cible: ≥ 85%)
                  </span>
                </div>
                <div className="w-full bg-foam-stone h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-foam-olive h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, rates.ageGateRate)}%` }}
                  />
                </div>
                <p className="text-[10px] text-foam-gray mt-1">
                  {metrics.ageVerified} visiteurs majeurs confirmés sur {metrics.sessions} sessions.
                </p>
              </div>

              {/* KPI 3 : NEWSLETTER LEADS (RETENTION) */}
              <div className="p-3.5 bg-white rounded-2xl border border-foam-border shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-foam-navy flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-foam-navy" />
                    3. Rétention : Leads Brassins Éphémères (RGPD)
                  </span>
                  <span className={`text-xs font-bold ${isEmailTargetMet ? 'text-foam-olive' : 'text-foam-amber'}`}>
                    {metrics.emailSignups} / {targets.emailSignups.target} emails
                  </span>
                </div>
                <div className="w-full bg-foam-stone h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-foam-navy h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (metrics.emailSignups / targets.emailSignups.target) * 100)}%` }}
                  />
                </div>
                <p className="text-[10px] text-foam-gray mt-1">
                  Opt-in strict sans pré-cochage pour les embouteillages d'hiver.
                </p>
              </div>

              {/* KPI 4 : ADD TO CART RATE */}
              <div className="p-3.5 bg-white rounded-2xl border border-foam-border shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-foam-navy flex items-center gap-1.5">
                    <ShoppingCart className="w-3.5 h-3.5 text-foam-amber" />
                    4. Revenu : Taux d'ajout au panier
                  </span>
                  <span className={`text-xs font-bold ${isCartTargetMet ? 'text-foam-olive' : 'text-foam-amber'}`}>
                    {rates.cartRate}% (Cible: ≥ 25%)
                  </span>
                </div>
                <div className="w-full bg-foam-stone h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-foam-amber h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (rates.cartRate / 25) * 100)}%` }}
                  />
                </div>
                <p className="text-[10px] text-foam-gray mt-1">
                  {metrics.addToCartCount} ajouts au panier enregistrés.
                </p>
              </div>

              {/* KPI 5 : NORTH STAR METRIC (PRECOMMANDES) */}
              <div className="p-4 bg-gradient-to-br from-amber-50 to-white rounded-2xl border-2 border-foam-amber/40 shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-black uppercase text-foam-navy flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-foam-amber" />
                    ★ North Star Metric : Précommandes Test
                  </span>
                  <span className="text-sm font-black text-foam-amber">
                    {metrics.ordersCount} / {targets.ordersCount.target}
                  </span>
                </div>
                <div className="w-full bg-foam-stone h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-foam-amber h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (metrics.ordersCount / targets.ordersCount.target) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[11px] text-foam-navy/80 mt-1.5">
                  <span>Chiffre d'affaires simulé :</span>
                  <strong className="text-foam-navy font-bold">{metrics.totalRevenueSimulated.toFixed(2)} €</strong>
                </div>
              </div>

              {/* KPI 6 : CLICK & COLLECT RATIO (STRATÉGIE MARGE) */}
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-foam-olive/40 shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-black uppercase text-foam-olive flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-foam-olive" />
                    Part Click & Collect vs Expédition
                  </span>
                  <span className={`text-sm font-black ${isCcTargetMet ? 'text-foam-olive' : 'text-foam-amber'}`}>
                    {ccRate}% (Cible: ≥ 70%)
                  </span>
                </div>
                <div className="w-full bg-foam-stone h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-foam-olive h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, ccRate)}%` }}
                  />
                </div>
                
                <div className="mt-2 pt-2 border-t border-foam-olive/20 text-[11px] space-y-1 text-foam-navy/80">
                  <div className="flex justify-between">
                    <span>Retraits Bar (FOAM Port & Pin) :</span>
                    <strong className="text-foam-olive">{metrics.clickAndCollectOrders} commandes</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Expéditions Colis :</span>
                    <span>{metrics.deliveryOrders} commandes</span>
                  </div>
                  <div className="flex justify-between text-foam-olive font-bold pt-1">
                    <span>💰 Frais d'expédition économisés :</span>
                    <span>+{metrics.clickAndCollectSavingsSimulated.toFixed(2)} €</span>
                  </div>
                </div>
              </div>

            </div>

            {/* LIVE EVENT LOG CONSOLE */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-editorial text-sm font-bold text-foam-navy flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-foam-gray" />
                  <span>Journal des Événements Direct (Session)</span>
                </h4>
                <span className="text-[10px] text-foam-gray font-mono">30 derniers events</span>
              </div>

              <div className="bg-foam-navy text-slate-200 rounded-2xl p-3 font-mono text-[11px] max-h-48 overflow-y-auto space-y-1.5 border border-foam-navyLight">
                {eventLogs.map((log) => (
                  <div key={log.id} className="leading-tight flex items-start gap-2">
                    <span className="text-foam-gold shrink-0">[{log.timestamp}]</span>
                    <span className="text-slate-400 font-semibold shrink-0">[{log.type}]</span>
                    <span className="text-white break-words">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE INTERACTIVE DEMONSTRATION CONTROLS (POUR LA SOUTENANCE) */}
            <div className="p-4 bg-foam-stone/80 rounded-2xl border border-foam-border space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-foam-navy">
                Outils Démonstration Orale (Jury) :
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => {
                    trackOrderCompleted({
                      total: 26.00,
                      isClickAndCollect: true,
                      orderId: 'DEMO-' + Math.floor(1000 + Math.random() * 9000),
                      itemsCount: 1
                    });
                  }}
                  className="py-2 px-2.5 bg-foam-olive text-white rounded-xl font-semibold hover:bg-emerald-800 transition-colors text-center"
                >
                  +1 Préco Click & Collect (26€)
                </button>

                <button
                  onClick={() => {
                    trackOrderCompleted({
                      total: 30.00 + 12.90,
                      isClickAndCollect: false,
                      orderId: 'DEMO-COLIS-' + Math.floor(1000 + Math.random() * 9000),
                      itemsCount: 1
                    });
                  }}
                  className="py-2 px-2.5 bg-foam-navy text-foam-sand rounded-xl font-semibold hover:bg-foam-navyLight transition-colors text-center"
                >
                  +1 Préco Livraison Colis (42.90€)
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-foam-border">
                <button
                  onClick={resetMetrics}
                  className="text-xs text-foam-gray hover:text-red-600 flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Réinitialiser les compteurs</span>
                </button>

                <button
                  onClick={() => setIsJuryDrawerOpen(false)}
                  className="text-xs font-bold text-foam-navy hover:text-foam-amber"
                >
                  Fermer la vue
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
