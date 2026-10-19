import React from 'react';
import { Info, Sparkles, Award } from 'lucide-react';
import { useAnalytics } from '../context/AnalyticsContext';

export default function TopNotificationBar() {
  const { setIsJuryDrawerOpen } = useAnalytics();

  return (
    <div className="bg-foam-navy text-foam-sand text-[11px] sm:text-xs py-2 px-3 border-b border-foam-gold/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-foam-redSoft text-foam-red font-semibold border border-foam-redBorder text-[10px] tracking-wide uppercase shrink-0">
            <Award className="w-3 h-3 text-foam-red" />
            Microbrasserie
          </span>
          <span className="text-slate-200">
            Bières artisanales brassées au <strong className="text-white font-medium">Port de Nice</strong> – Retrait Click & Collect gratuit sous 2h dans nos bars.
          </span>
        </div>

        <button
          onClick={() => setIsJuryDrawerOpen(true)}
          className="shrink-0 text-[10px] sm:text-[11px] font-semibold text-foam-gold hover:text-white underline decoration-foam-gold/50 hover:decoration-white inline-flex items-center gap-1 transition-colors"
        >
          <Sparkles className="w-3 h-3" />
          <span>Accès Vue Jury & Métriques AARRR</span>
        </button>
      </div>
    </div>
  );
}
