import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Package, Check, MapPin, Truck, ChevronRight, 
  Utensils, Award, Info, Beer, ShieldCheck, ArrowRight, Sun, Waves 
} from 'lucide-react';
import { BEERS } from '../data/products';
import ScrollReveal from '../components/ScrollReveal';

export default function BeerProductPage({ defaultSlug }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const beerSlug = slug || defaultSlug || 'french-ipa';
  const beer = BEERS[beerSlug] || BEERS['french-ipa'];
  const otherBeers = Array.from(new Map(Object.values(BEERS).filter(b => b.slug !== beer.slug).map(b => [b.slug, b])).values());

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-foam-muted">
        <Link to="/" className="hover:text-foam-terracotta transition-colors">Accueil</Link>
        <ChevronRight className="w-3.5 h-3.5 text-foam-borderWarm" />
        <Link to="/bieres" className="hover:text-foam-terracotta transition-colors">Nos Bières</Link>
        <ChevronRight className="w-3.5 h-3.5 text-foam-borderWarm" />
        <span className="text-foam-navy font-bold truncate">{beer.name}</span>
      </nav>

      {/* Main 2-Column Product Layout Riviera */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Image en lumière naturelle & Sensory Gauges */}
        <ScrollReveal className="lg:col-span-6 space-y-6" delay={0}>
          <div className="rounded-2xl overflow-hidden bg-white border border-foam-borderWarm/80 shadow-riviera aspect-[4/3] relative">
            <img
              src={beer.image}
              alt={beer.fullName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Sensory Gauges Riviera */}
          <div className="p-6 bg-white rounded-2xl border border-foam-border shadow-xs space-y-4">
            <h3 className="font-serif text-lg font-bold text-foam-navy">
              Profil Sensoriel du Brasseur
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-foam-navy mb-1">
                  <span>Amertume ({beer.ibu} IBU)</span>
                  <span className="text-foam-terracotta font-bold">{beer.sensoryProfile.amertume} / 5</span>
                </div>
                <div className="w-full bg-[#FAF6F0] h-2.5 rounded-full overflow-hidden border border-foam-border">
                  <div
                    className="bg-foam-terracotta h-full rounded-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.amertume / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-foam-navy mb-1">
                  <span>Fraîcheur en bouche</span>
                  <span className="text-foam-pine font-bold">{beer.sensoryProfile.fraicheur} / 5</span>
                </div>
                <div className="w-full bg-[#FAF6F0] h-2.5 rounded-full overflow-hidden border border-foam-border">
                  <div
                    className="bg-foam-pine h-full rounded-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.fraicheur / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-foam-navy mb-1">
                  <span>Arômes fruités</span>
                  <span className="text-foam-gold font-bold">{beer.sensoryProfile.fruite} / 5</span>
                </div>
                <div className="w-full bg-[#FAF6F0] h-2.5 rounded-full overflow-hidden border border-foam-border">
                  <div
                    className="bg-foam-gold h-full rounded-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.fruite / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Recipe Deep-dive & Drive to Coffret Découverte */}
        <ScrollReveal className="lg:col-span-6 space-y-6" delay={80}>
          <div className="space-y-2">

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foam-navy leading-tight">
              {beer.fullName}
            </h1>
            <p className="text-xs font-bold uppercase tracking-wider text-foam-terracotta">
              {beer.style} • {beer.abv} • IBU {beer.ibu}
            </p>
            <p className="text-xs sm:text-sm text-foam-text leading-relaxed font-sans pt-1">
              {beer.description}
            </p>
          </div>

          {/* Technical Specs Table */}
          <div className="card-riviera p-5 space-y-2.5 text-xs">
            <div className="flex justify-between border-b border-foam-border pb-2">
              <span className="text-foam-muted font-medium">Style :</span>
              <span className="font-bold text-foam-navy">{beer.style}</span>
            </div>
            <div className="flex justify-between border-b border-foam-border pb-2">
              <span className="text-foam-muted font-medium">Degré d'alcool :</span>
              <span className="font-bold text-foam-navy">{beer.abv}</span>
            </div>
            <div className="flex justify-between border-b border-foam-border pb-2">
              <span className="text-foam-muted font-medium">Indice d'amertume (IBU) :</span>
              <span className="font-bold text-foam-navy">{beer.ibu} / 100</span>
            </div>
            <div className="flex justify-between border-b border-foam-border pb-2">
              <span className="text-foam-muted font-medium">Houblons utilisés :</span>
              <span className="font-bold text-foam-navy">{beer.hops}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foam-muted font-medium">Accords mets & bière :</span>
              <span className="font-bold text-foam-navy text-right">{beer.pairing}</span>
            </div>
          </div>

          {/* Callout: Exclusively sold in Coffret (100% clickable) */}
          <div 
            onClick={() => navigate('/coffrets')}
            className="card-riviera p-6 bg-foam-terracottaSoft/80 border-foam-terracotta/30 space-y-4 cursor-pointer hover:border-foam-terracotta/70 hover:shadow-riviera transition-all duration-300 group"
          >
            <div className="space-y-1">
              <span className="text-[11px] font-serif font-bold uppercase tracking-wider text-foam-terracotta block">
                Disponibilité Boutique
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foam-navy group-hover:text-foam-terracotta transition-colors">
                Cette bière est disponible dans nos Coffrets Cadeaux
              </h3>
              <p className="text-xs text-foam-text font-sans leading-relaxed">
                Nos bières sont brassées artisanalement et proposées dans nos <strong>Coffrets Cadeaux FOAM</strong> (format Pack de 3 ou Pack de 6 bouteilles de 33cl) avec retrait Click & Collect gratuit sous 2h au bar ou expédition anti-casse à domicile.
              </p>
            </div>

            <div className="btn-riviera-terracotta w-full text-xs sm:text-sm text-center flex items-center justify-center gap-2 group-hover:shadow-terracotta-glow transition-all">
              <Package className="w-4 h-4 stroke-[2]" />
              <span>Commander en Coffret Cadeau</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Other beers navigation */}
          <div className="pt-2">
            <span className="text-xs font-serif font-bold text-foam-navy block mb-2">
              Découvrir les autres bières de notre brasserie :
            </span>
            <div className="flex flex-wrap gap-2">
              {otherBeers.map((ob) => (
                <Link
                  key={ob.slug}
                  to={`/bieres/${ob.slug}`}
                  className="btn-riviera-outline py-2 px-3.5 text-xs"
                >
                  {ob.name} ({ob.style})
                </Link>
              ))}
            </div>
          </div>

        </ScrollReveal>

      </div>

    </div>
  );
}
