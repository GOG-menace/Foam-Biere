import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Info, Utensils, Check, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, type = 'bottle' }) {
  const { addItem } = useCart();
  const [showDetails, setShowDetails] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const isGiftSet = type === 'coffret';

  return (
    <>
      <div className="group rounded-3xl bg-white border border-foam-border hover:border-foam-amber/40 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          {product.badge && (
            <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs border ${
              product.badgeType === 'amber' || product.badgeColor === 'amber'
                ? 'bg-foam-amber text-white border-foam-amberDark'
                : product.badgeType === 'olive' || product.badgeColor === 'olive'
                ? 'bg-foam-olive text-white border-emerald-900'
                : 'bg-foam-gold text-foam-navy border-amber-500'
            }`}>
              {product.badge}
            </span>
          )}

          {isGiftSet && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-foam-sand/90 text-foam-navy border border-foam-border backdrop-blur-xs">
              🎁 Prêt à offrir
            </span>
          )}

          {!isGiftSet && product.abv && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-foam-navy border border-foam-border backdrop-blur-xs">
              {product.abv}
            </span>
          )}
        </div>

        {/* Product Image Showcase */}
        <div 
          onClick={() => setShowDetails(true)}
          className="relative aspect-[4/3] bg-foam-stone overflow-hidden cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foam-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
            <span className="text-xs font-semibold text-white bg-foam-navy/80 px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              Voir les notes de dégustation
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Style / Tagline */}
            <div className="flex items-center justify-between text-xs text-foam-gray mb-1">
              <span className="uppercase font-semibold tracking-wider text-[11px] text-foam-amber">
                {product.style || product.subtitle}
              </span>
              {product.volume && (
                <span className="font-medium text-foam-gray">{product.volume}</span>
              )}
            </div>

            {/* Title */}
            <h3 
              onClick={() => setShowDetails(true)}
              className="font-editorial text-xl font-bold text-foam-navy group-hover:text-foam-amber transition-colors cursor-pointer"
            >
              {product.name}
            </h3>

            {/* Short Description */}
            <p className="mt-2 text-xs text-foam-navy/80 leading-relaxed line-clamp-2">
              {product.shortDesc || product.description}
            </p>

            {/* Sensory Gauges for Single Beers */}
            {!isGiftSet && product.gauges && (
              <div className="mt-4 pt-3 border-t border-foam-border/60 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-foam-gray">Amertume</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <span
                        key={lvl}
                        className={`w-3.5 h-1.5 rounded-xs ${
                          lvl <= product.gauges.amertume ? 'bg-foam-amber' : 'bg-foam-stone'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-foam-gray">Fraîcheur</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <span
                        key={lvl}
                        className={`w-3.5 h-1.5 rounded-xs ${
                          lvl <= product.gauges.fraicheur ? 'bg-foam-olive' : 'bg-foam-stone'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-foam-gray">Fruité</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <span
                        key={lvl}
                        className={`w-3.5 h-1.5 rounded-xs ${
                          lvl <= product.gauges.fruite ? 'bg-foam-gold' : 'bg-foam-stone'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Gift set content pill list */}
            {isGiftSet && product.contents && (
              <ul className="mt-3 space-y-1 text-[11px] text-foam-navy/80">
                {product.contents.slice(0, 3).map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-foam-amber" />
                    <span className="truncate">{c}</span>
                  </li>
                ))}
                {product.contents.length > 3 && (
                  <li className="text-[10px] text-foam-gray italic pl-3">
                    + {product.contents.length - 3} autres surprises...
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Price & Action */}
          <div className="mt-5 pt-4 border-t border-foam-border flex items-center justify-between gap-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold text-foam-navy">
                  {product.price.toFixed(2)} €
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-foam-gray line-through">
                    {product.originalPrice.toFixed(2)} €
                  </span>
                )}
              </div>
              <p className="text-[10px] text-foam-olive font-medium">
                {product.clickAndCollectAdvised ? 'Click & Collect 0€ conseillé' : 'TTC • Direct cuves'}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center gap-1.5 transition-all transform active:scale-95 shadow-sm ${
                isAdded
                  ? 'bg-foam-olive text-white'
                  : 'bg-foam-amber hover:bg-foam-amberDark text-white hover:shadow'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Ajouté !</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Ajouter</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* Product Detail Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foam-navy/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-foam-bg border border-foam-gold/40 shadow-2xl p-6 sm:p-8 text-foam-navy">
            
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-foam-stone hover:bg-foam-border flex items-center justify-center text-foam-navy transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-48 h-48 rounded-2xl overflow-hidden bg-foam-stone shrink-0 border border-foam-border">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>

              <div>
                {product.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-foam-amber/20 text-foam-amberDark">
                    {product.badge}
                  </span>
                )}
                <h3 className="font-editorial text-2xl font-bold mt-1 text-foam-navy">
                  {product.name}
                </h3>
                <p className="text-xs text-foam-gray uppercase tracking-wider mt-0.5">
                  {product.style || product.subtitle} {product.volume ? `• ${product.volume}` : ''} {product.abv ? `• ${product.abv}` : ''}
                </p>
                <div className="text-2xl font-extrabold text-foam-amber mt-2">
                  {product.price.toFixed(2)} €
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-foam-navy/85 leading-relaxed">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foam-navy mb-1">
                  Description & Terroir
                </h4>
                <p>{product.fullDesc || product.description}</p>
              </div>

              {product.tastingNotes && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-foam-navy mb-1.5">
                    Profil & Notes Aromatiques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tastingNotes.map((note, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-foam-stone border border-foam-border text-xs text-foam-navy">
                        ✨ {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.pairing && (
                <div className="p-3 bg-foam-stone/60 rounded-xl border border-foam-border flex items-start gap-2.5">
                  <Utensils className="w-4 h-4 text-foam-amber shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-foam-navy">Accord Mets-Bière du Brasseur :</h5>
                    <p className="text-xs text-foam-navy/80 mt-0.5">{product.pairing}</p>
                  </div>
                </div>
              )}

              {product.contents && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-foam-navy mb-2">
                    Contenu détaillé du coffret :
                  </h4>
                  <ul className="space-y-1.5 text-xs text-foam-navy bg-white p-3 rounded-xl border border-foam-border">
                    {product.contents.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-foam-olive shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 pt-5 border-t border-foam-border flex items-center justify-between">
              <span className="text-xs text-foam-gray">
                Brassée au Quai Cassini • Port de Nice
              </span>
              <button
                onClick={(e) => {
                  handleAddToCart(e);
                  setShowDetails(false);
                }}
                className="py-3 px-6 bg-foam-amber hover:bg-foam-amberDark text-white font-bold rounded-xl text-sm shadow-md flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ajouter au panier ({product.price.toFixed(2)} €)</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
