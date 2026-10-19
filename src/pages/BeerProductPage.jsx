import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Package, Check, Star, MapPin, Truck, ChevronRight, 
  Utensils, Award, Info, Beer, ShieldCheck, ArrowRight, Flame 
} from 'lucide-react';
import { BEERS } from '../data/products';

export default function BeerProductPage({ defaultSlug }) {
  const { slug } = useParams();
  const beerSlug = slug || defaultSlug || 'french-ipa';
  const beer = BEERS[beerSlug] || BEERS['french-ipa'];
  const otherBeers = Object.values(BEERS).filter(b => b.slug !== beer.slug);

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-mono">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold uppercase text-foam-muted">
        <Link to="/" className="hover:text-foam-orange transition-colors">ACCUEIL</Link>
        <span>/</span>
        <Link to="/bieres" className="hover:text-foam-orange transition-colors">NOS BIÈRES</Link>
        <span>/</span>
        <span className="text-foam-black bg-foam-neon px-1.5 py-0.5 border border-foam-black">{beer.name}</span>
      </nav>

      {/* Main 2-Column Product Layout Brutaliste */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Image au Flash Direct & Technical Specs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="overflow-hidden bg-white border-2 border-foam-black shadow-brutal aspect-[4/3] relative group">
            <img
              src={beer.image}
              alt={beer.fullName}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform"
            />
            <div className="absolute top-3 left-3 sticker sticker-black text-[10px]">
              {beer.style}
            </div>
            <div className="absolute bottom-3 right-3 sticker sticker-neon text-[10px]">
              {beer.abv} • IBU {beer.ibu}
            </div>
          </div>

          {/* Sensory Gauges Brutalistes */}
          <div className="p-6 bg-white border-2 border-foam-black shadow-brutal space-y-4">
            <span className="sticker sticker-orange text-[10px]">
              [ PROFIL SENSORIEL DU BRASSEUR ]
            </span>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-black uppercase text-foam-black mb-1">
                  <span>AMERTUME ({beer.ibu} IBU)</span>
                  <span className="text-foam-orange">{beer.sensoryProfile.amertume} / 5</span>
                </div>
                <div className="w-full bg-foam-bg h-3 border-2 border-foam-black overflow-hidden">
                  <div
                    className="bg-foam-orange h-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.amertume / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-black uppercase text-foam-black mb-1">
                  <span>FRAÎCHEUR EN BOUCHE</span>
                  <span className="text-black">{beer.sensoryProfile.fraicheur} / 5</span>
                </div>
                <div className="w-full bg-foam-bg h-3 border-2 border-foam-black overflow-hidden">
                  <div
                    className="bg-foam-neon h-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.fraicheur / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-black uppercase text-foam-black mb-1">
                  <span>ARÔMES FRUITÉS</span>
                  <span className="text-foam-orange">{beer.sensoryProfile.fruite} / 5</span>
                </div>
                <div className="w-full bg-foam-bg h-3 border-2 border-foam-black overflow-hidden">
                  <div
                    className="bg-foam-orange h-full transition-all"
                    style={{ width: `${(beer.sensoryProfile.fruite / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recipe Deep-dive & Drive to Coffret Découverte */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="sticker sticker-neon text-[10px]">
              ★ RECETTE PERMANENTE // PORT DE NICE
            </div>
            <h1 className="font-impact text-3xl sm:text-5xl uppercase tracking-tight text-foam-black leading-none">
              {beer.fullName}
            </h1>
            <p className="font-mono text-xs font-black uppercase tracking-wider text-foam-orange">
              // {beer.style} • {beer.abv} • IBU {beer.ibu}
            </p>
            <p className="text-xs sm:text-sm text-foam-black font-medium leading-relaxed font-sans pt-1">
              {beer.description}
            </p>
          </div>

          {/* Technical Specs Table */}
          <div className="card-brutal p-4 space-y-2 text-xs">
            <div className="flex justify-between border-b border-foam-borderLight pb-1.5">
              <span className="text-foam-muted font-bold">STYLE :</span>
              <span className="font-black text-foam-black uppercase">{beer.style}</span>
            </div>
            <div className="flex justify-between border-b border-foam-borderLight pb-1.5">
              <span className="text-foam-muted font-bold">DEGRÉ D'ALCOOL :</span>
              <span className="font-black text-foam-black">{beer.abv}</span>
            </div>
            <div className="flex justify-between border-b border-foam-borderLight pb-1.5">
              <span className="text-foam-muted font-bold">INDICE AMERTUME (IBU) :</span>
              <span className="font-black text-foam-black">{beer.ibu} / 100</span>
            </div>
            <div className="flex justify-between border-b border-foam-borderLight pb-1.5">
              <span className="text-foam-muted font-bold">HOUBLONS :</span>
              <span className="font-black text-foam-black">{beer.hops}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foam-muted font-bold">ACCORDS RECOMMANDÉS :</span>
              <span className="font-black text-foam-black text-right">{beer.pairing}</span>
            </div>
          </div>

          {/* Callout: Exclusively sold in Coffret Découverte */}
          <div className="card-brutal p-6 bg-foam-neon space-y-4">
            <div className="space-y-1">
              <span className="sticker sticker-black text-[10px]">
                DISPONIBILITÉ BOUTIQUE
              </span>
              <h3 className="font-impact text-xl sm:text-2xl uppercase tracking-tight text-foam-black">
                CETTE BIÈRE EST DISPONIBLE DANS NOTRE COFFRET DÉCOUVERTE
              </h3>
              <p className="text-xs text-foam-black font-sans leading-relaxed">
                Nos bières ne sont pas vendues à l'unité sur la boutique en ligne. Retrouvez cette recette dans le <strong>Coffret Découverte</strong> (format Pack de 3 ou Pack de 6 bouteilles) avec retrait gratuit au bar ou expédition anti-casse.
              </p>
            </div>

            <Link
              to="/coffrets/decouverte"
              className="btn-brutal-orange w-full py-4 text-xs sm:text-sm font-mono font-black uppercase text-center"
            >
              <Package className="w-4 h-4 stroke-[2.5]" />
              <span>COMMANDER DANS LE COFFRET DÉCOUVERTE</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Other beers navigation */}
          <div className="pt-2">
            <span className="font-mono text-[11px] font-black uppercase text-foam-muted block mb-2">
              DÉCOUVRIR LES AUTRES BIÈRES DE LA GAMME :
            </span>
            <div className="flex flex-wrap gap-2">
              {otherBeers.map((ob) => (
                <Link
                  key={ob.slug}
                  to={`/bieres/${ob.slug}`}
                  className="btn-brutal-white py-2 px-3 text-xs font-mono font-black"
                >
                  {ob.name} ({ob.style})
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
