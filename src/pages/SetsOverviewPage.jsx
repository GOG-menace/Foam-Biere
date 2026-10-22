import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Beer } from 'lucide-react';
import { SETS } from '../data/products';
import { useCart } from '../context/CartContext';
import ScrollReveal from '../components/ScrollReveal';

export default function SetsOverviewPage() {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const decouverte = SETS['coffret-decouverte'];
  const exotique = SETS['coffret-exotique'];

  const [decouverteFormat, setDecouverteFormat] = useState('pack6');
  const [exotiqueFormat, setExotiqueFormat] = useState('pack6');

  const handleAddToCart = (e, product, format) => {
    e.stopPropagation();
    addItem(product, format, 1);
  };

  return (
    <div className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Riviera Rétro */}
      <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foam-navy leading-tight">
          Nos Deux Coffrets de la Riviera
        </h1>
        <p className="text-base text-foam-text leading-relaxed">
          Découvrez nos deux sélections de bières artisanales niçoises, disponibles en format <strong>Pack de 3 (15,00 €)</strong> ou <strong>Pack de 6 (26,00 €)</strong>. Retrait Click & Collect gratuit sous 2h dans nos deux bars à Nice.
        </p>
      </ScrollReveal>

      {/* 2 Sets Riviera Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* CARTE 1 : COFFRET DÉCOUVERTE */}
        <ScrollReveal delay={0}>
          <div 
            onClick={() => navigate('/coffrets/decouverte')}
            className="card-riviera p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 h-full"
          >
            <div className="space-y-5">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-foam-subtle border border-foam-borderWarm/60 relative">
                <img
                  src={decouverte.image}
                  alt={decouverte.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1.5">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors">
                  {decouverte.name}
                </h2>
                <p className="text-sm text-foam-text leading-relaxed pt-1">
                  L'assortiment signature pour découvrir le savoir-faire de Stéphane au Port de Nice. Réunit nos trois bières permanentes : la French IPA houblonnée, Lou FOAM d’Aqui dorée et rafraîchissante, et la Wheat Ale douce aux notes d'agrumes.
                </p>
              </div>

              {/* Fiche composition */}
              <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60 text-xs text-foam-text space-y-1.5 font-sans">
                <p className="font-serif font-bold text-foam-navy uppercase tracking-wider text-xs">
                  Composition du coffret :
                </p>
                <p>• 1 ou 2 FOAM French IPA (Houblonnée & fruitée)</p>
                <p>• 1 ou 2 Lou FOAM d’Aqui (Blonde fraîche & maltée)</p>
                <p>• 1 ou 2 FOAM Wheat Ale (Froment doux & agrumes)</p>
              </div>

              {/* Tarifs explicites & Sélecteur rapide */}
              <div className="pt-2 border-t border-foam-borderWarm/60 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="text-xl sm:text-2xl font-serif font-bold text-foam-navy">
                    À partir de 15 €
                  </p>
                  <span className="text-xs font-semibold text-foam-terracotta font-serif italic">
                    Pack 3 ou Pack 6
                  </span>
                </div>

                {/* Boutons de format */}
                <div 
                  className="grid grid-cols-2 gap-2 bg-[#FAF6F0] p-1 rounded-xl border border-foam-border"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setDecouverteFormat('pack3')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      decouverteFormat === 'pack3'
                        ? 'bg-white text-foam-navy shadow-xs border border-foam-borderWarm'
                        : 'text-foam-muted hover:text-foam-navy'
                    }`}
                  >
                    Pack 3 (15 €)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDecouverteFormat('pack6')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      decouverteFormat === 'pack6'
                        ? 'bg-white text-foam-terracotta shadow-xs border border-foam-borderWarm'
                        : 'text-foam-muted hover:text-foam-navy'
                    }`}
                  >
                    Pack 6 (26 €)
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-foam-border space-y-2.5">
              <button
                type="button"
                onClick={(e) => handleAddToCart(e, decouverte, decouverteFormat)}
                className="btn-riviera-terracotta w-full text-xs sm:text-sm py-3.5 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-terracotta-glow"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2]" />
                <span>Ajouter au Panier • {decouverteFormat === 'pack3' ? '15,00 €' : '26,00 €'}</span>
              </button>

              <div className="text-center">
                <span className="text-xs font-serif font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors inline-flex items-center gap-1">
                  Accéder à la page du Coffret Découverte <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CARTE 2 : COFFRET EXOTIQUE */}
        <ScrollReveal delay={130}>
          <div 
            onClick={() => navigate('/coffrets/exotique')}
            className="card-riviera p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:border-foam-pine/50 hover:shadow-riviera transition-all duration-300 h-full"
          >
            <div className="space-y-5">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-foam-subtle border border-foam-borderWarm/60 relative">
                <img
                  src={exotique.image}
                  alt={exotique.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1.5">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-pine transition-colors">
                  {exotique.name}
                </h2>
                <p className="text-sm text-foam-text leading-relaxed pt-1">
                  Une sélection artisanale niçoise réunissant nos cuvées phares du Port de Nice. Retrouvez la fraîcheur dorée de Lou FOAM d’Aqui, la douceur d'agrumes de la Wheat Ale et le houblonnage vif de la French IPA.
                </p>
              </div>

              {/* Fiche composition */}
              <div className="p-4 rounded-xl bg-foam-subtle/70 border border-foam-borderWarm/60 text-xs text-foam-text space-y-1.5 font-sans">
                <p className="font-serif font-bold text-foam-navy uppercase tracking-wider text-xs">
                  Composition du coffret :
                </p>
                <p>• 1 ou 2 Lou FOAM d’Aqui (Blonde fraîche & maltée)</p>
                <p>• 1 ou 2 FOAM Wheat Ale (Froment doux & agrumes)</p>
                <p>• 1 ou 2 FOAM French IPA (Houblonnée & fruitée)</p>
              </div>

              {/* Tarifs explicites & Sélecteur rapide */}
              <div className="pt-2 border-t border-foam-borderWarm/60 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="text-xl sm:text-2xl font-serif font-bold text-foam-navy">
                    À partir de 15 €
                  </p>
                  <span className="text-xs font-semibold text-foam-pine font-serif italic">
                    Pack 3 ou Pack 6
                  </span>
                </div>

                {/* Boutons de format */}
                <div 
                  className="grid grid-cols-2 gap-2 bg-[#FAF6F0] p-1 rounded-xl border border-foam-border"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setExotiqueFormat('pack3')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      exotiqueFormat === 'pack3'
                        ? 'bg-white text-foam-navy shadow-xs border border-foam-borderWarm'
                        : 'text-foam-muted hover:text-foam-navy'
                    }`}
                  >
                    Pack 3 (15 €)
                  </button>
                  <button
                    type="button"
                    onClick={() => setExotiqueFormat('pack6')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      exotiqueFormat === 'pack6'
                        ? 'bg-white text-foam-pine shadow-xs border border-foam-borderWarm'
                        : 'text-foam-muted hover:text-foam-navy'
                    }`}
                  >
                    Pack 6 (26 €)
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-foam-border space-y-2.5">
              <button
                type="button"
                onClick={(e) => handleAddToCart(e, exotique, exotiqueFormat)}
                className="btn-riviera-navy w-full text-xs sm:text-sm py-3.5 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2]" />
                <span>Ajouter au Panier • {exotiqueFormat === 'pack3' ? '15,00 €' : '26,00 €'}</span>
              </button>

              <div className="text-center">
                <span className="text-xs font-serif font-bold text-foam-navy group-hover:text-foam-pine transition-colors inline-flex items-center gap-1">
                  Accéder à la page du Coffret Exotique <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* CTA chaleureux vers "Nos bières" */}
      <ScrollReveal delay={0}>
        <div 
          onClick={() => navigate('/bieres')}
          className="card-riviera p-8 sm:p-12 text-center space-y-4 cursor-pointer hover:border-foam-terracotta/50 hover:shadow-riviera transition-all duration-300 group"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-foam-terracotta">
            Dégustation & Notes Aromatiques
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors">
            Envie d'en savoir plus sur chaque recette ?
          </h3>
          <p className="text-sm text-foam-text max-w-2xl mx-auto leading-relaxed">
            Consultez les caractéristiques techniques, les degrés d'alcool, les indices d'amertume (IBU) et les accords mets-bières imaginés par notre brasseur Stéphane.
          </p>
          <div className="pt-2">
            <div className="btn-riviera-outline inline-flex group-hover:bg-foam-navy group-hover:text-white group-hover:border-foam-navy transition-all">
              <Beer className="w-4 h-4 text-foam-terracotta group-hover:text-white stroke-[2] transition-colors" />
              <span>Découvrir la présentation détaillée de nos bières</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
