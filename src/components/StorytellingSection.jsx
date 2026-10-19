import React from 'react';
import { History, Award, Heart, CheckCircle2, Waves, Sparkles } from 'lucide-react';

export default function StorytellingSection() {
  return (
    <section id="histoire" className="py-16 sm:py-24 bg-foam-stone/50 border-y border-foam-border relative overflow-hidden">
      
      {/* Background Mediterranean accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Visual Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Main historical image */}
              <div className="rounded-3xl overflow-hidden shadow-elevated border-2 border-white bg-foam-navy aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=800&q=80"
                  alt="Micro-brasserie artisanale FOAM au Port de Nice"
                  className="w-full h-full object-cover filter saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foam-navy/85 via-foam-navy/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-foam-gold text-foam-navy">
                    Port de Nice • Quai Cassini
                  </span>
                  <h4 className="font-editorial text-xl font-bold mt-2">
                    L'atelier de brassage en continu
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Nos cuves inox ouvertes sur la salle du bar, où naissent les recettes FOAM sous les yeux des Niçois.
                  </p>
                </div>
              </div>

              {/* Floating Paloma 1948 Badge */}
              <div className="absolute -top-5 -right-5 bg-foam-navy text-foam-sand p-4 rounded-2xl shadow-2xl border-2 border-foam-gold max-w-[200px] text-center">
                <p className="text-[10px] uppercase font-bold tracking-widest text-foam-gold">Groupe Paloma</p>
                <p className="font-editorial text-2xl font-black text-white">1948</p>
                <p className="text-[10px] text-slate-300 leading-tight mt-0.5">
                  76 ans de passion culinaire azuréenne
                </p>
              </div>

            </div>
          </div>

          {/* Right Text Storytelling */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-foam-gold/40 text-foam-navy text-xs font-bold uppercase tracking-wider mb-4">
              <History className="w-3.5 h-3.5 text-foam-amber" />
              <span>L'Héritage Vannini • Maison Paloma</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foam-navy leading-tight">
              De la trattoria du Port en 1948 à la micro-brasserie d'aujourd'hui.
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-foam-navy/85 leading-relaxed">
              <p>
                L'histoire du <strong>Groupe Paloma</strong> commence en 1948 avec la famille Vannini et l'ouverture du mythique restaurant <em>Le Virginie</em>, ancré dans le cœur battant de la vie niçoise. Depuis plus de 75 ans, cette maison familiale indépendante cultive le goût du terroir, de la convivialité et du partage azuréen.
              </p>

              <p>
                En 2022, une nouvelle page s'écrit avec la naissance de <strong>FOAM</strong>. Poussés par l'amour du goût authentique, nous avons fait le pari audacieux d'installer notre propre micro-brasserie au Quai Cassini, face aux pointus colorés du Port de Nice.
              </p>

              {/* Quote highlight */}
              <div className="p-5 rounded-2xl bg-white border-l-4 border-foam-amber shadow-subtle my-5">
                <p className="font-editorial text-lg italic text-foam-navy font-semibold">
                  « Nous sommes l'un des rares groupes de restauration indépendants de la Côte d'Azur à brasser et embouteiller notre propre bière sur place. »
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-foam-gray mt-2">
                  — La Famille Vannini & Le Maître Brasseur FOAM
                </p>
              </div>

              <p className="text-xs sm:text-sm text-foam-navy/80">
                Nos bières ne subissent ni pasteurisation ni filtration agressive. Chaque bouteille que vous dégustez chez vous provient directement de nos fermenteurs niçois, brassée avec des matières premières rigoureusement sélectionnées et l'eau pure des Préalpes d'Azur.
              </p>
            </div>

            {/* 3 Key pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-foam-border">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-foam-olive shrink-0" />
                <span className="text-xs font-bold text-foam-navy">Non pasteurisée</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-foam-olive shrink-0" />
                <span className="text-xs font-bold text-foam-navy">100% brassée à Nice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-foam-olive shrink-0" />
                <span className="text-xs font-bold text-foam-navy">Circuit ultra-court</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
