// FOAM Nice Official Beers Data & E-commerce Product Specifications
// Based on real beers and official photography provided by FOAM

export const BEERS = {
  'foam-west-coast': {
    slug: 'foam-west-coast',
    name: 'FOAM West Coast',
    fullName: 'FOAM West Coast • IPA Blonde',
    tagline: 'IPA blonde dorée, dense & résineuse aux houblons Waimea et Mosaïc',
    badge: 'IPA Signature',
    badgeColor: 'red',
    style: 'IPA Blonde',
    abv: '6.0% vol.',
    ibu: 45,
    ebc: 14,
    price: 6.00,
    volume: '33 cl',
    rating: 4.9,
    reviewsCount: 42,
    inStock: true,
    stockCount: 90,
    color: '#B35422',
    bannerAccent: 'from-amber-600 to-orange-700',
    shortDesc: "Une IPA blonde à la robe dorée et dense, coiffée d'une mousse crémeuse. Au nez, des arômes fruités et résineux éclatants. En bouche, une texture sèche et nette sublimée par une amertume subtile et rafraîchissante.",
    description: "Une IPA blonde à la robe dorée et dense, coiffée d'une mousse crémeuse. Au nez, des arômes fruités et résineux éclatants. En bouche, une texture sèche et nette sublimée par une amertume subtile et rafraîchissante.",
    hops: 'Waimea & Mosaïc',
    fullDesc: "Brassée dans les cuves de notre microbrasserie au Port de Nice. La FOAM West Coast est une véritable interprétation niçoise des IPA de la côte Ouest. Les houblons Waimea et Mosaïc apportent un bouquet puissant d'agrumes tropicaux et d'effluves résineux de pin, avec un corps sec et une finale franche.",
    sensoryProfile: {
      amertume: 4,
      fraicheur: 4,
      fruite: 5,
      malt: 3
    },
    tastingNotes: {
      robe: "Blonde dorée et dense, coiffée d'une mousse épaisse, blanche et crémeuse.",
      nez: "Arômes éclatants de fruits tropicaux et notes résineuses franches.",
      bouche: "Texture sèche et nette sur le malt pâle, amertume subtile et rafraîchissante."
    },
    ingredients: "Eau pure des Préalpes d’Azur, malts d’orge français (Pale Ale, Caramalt), houblons Waimea et Mosaïc, levure de fermentation haute.",
    technicalDetails: [
      { label: 'Style de bière', value: 'West Coast IPA (Blonde)' },
      { label: 'Degré d’alcool (ABV)', value: '6.0% vol.' },
      { label: 'Amertume', value: '45 IBU (Subtile & rafraîchissante)' },
      { label: 'Couleur', value: '14 EBC (Dorée dense)' },
      { label: 'Houblons maîtres', value: 'Waimea & Mosaïc' },
      { label: 'Mousse', value: 'Crémeuse et épaisse' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Socca niçoise croustillante, burger au gorgonzola, pissaladière, ceviche épicé ou tapas du port.',
    serviceTemperature: '7°C – 9°C',
    recommendedGlass: 'Verre Teku ou Tulipe pour concentrer les huiles essentielles des houblons.',
    imagePlaceholder: '🍺 Bouteille FOAM West Coast (33cl)',
    image: '/images/beer-foam-west-coast.jpg'
  },
  'foam-lager': {
    slug: 'foam-lager',
    name: 'FOAM Lager',
    fullName: 'FOAM Lager • Bière Blonde de Soif',
    tagline: 'Blonde fraîche, florale, céréalière et herbacée au houblon Hallertau Mittelfrüh',
    badge: 'La Fraîcheur du Port',
    badgeColor: 'gold',
    style: 'Pale Lager',
    abv: '5.0% vol.',
    ibu: 20,
    ebc: 6,
    price: 6.00,
    volume: '33 cl',
    rating: 4.8,
    reviewsCount: 48,
    inStock: true,
    stockCount: 120,
    color: '#D4A328',
    bannerAccent: 'from-yellow-500 to-amber-600',
    shortDesc: "Une bière blonde offrant une grande fraîcheur, aux notes florales, céréalières et herbacées au nez. Sèche en bouche, avec une faible amertume et des saveurs florales délicates.",
    description: "Une bière blonde offrant une grande fraîcheur, aux notes florales, céréalières et herbacées au nez. Sèche en bouche, avec une faible amertume et des saveurs florales délicates.",
    hops: 'Hallertau Mittelfrüh',
    fullDesc: "La bière de soif par excellence du Port de Nice. Brassée avec le noble houblon allemand Hallertau Mittelfrüh, la FOAM Lager allie la légèreté des céréales de printemps à une fraîcheur florale désaltérante. Mousse fine, finale nette et pureté totale.",
    sensoryProfile: {
      amertume: 2,
      fraicheur: 5,
      fruite: 2,
      malt: 4
    },
    tastingNotes: {
      robe: "Blonde limpide et étincelante, mousse fine et aérienne.",
      nez: "Notes de céréales fraîches, foin coupé et délicates effluves florales et herbacées.",
      bouche: "Attaque vive et désaltérante, grande sensation de pureté avec une très faible amertume."
    },
    ingredients: "Eau de Nice, malts d'orge de printemps soigneusement sélectionnés, houblon noble Hallertau Mittelfrüh, levure artisanale.",
    technicalDetails: [
      { label: 'Style de bière', value: 'Pale Lager (Bière blonde)' },
      { label: 'Degré d’alcool (ABV)', value: '5.0% vol.' },
      { label: 'Amertume', value: '20 IBU (Faible & désaltérante)' },
      { label: 'Couleur', value: '6 EBC (Blonde limpide)' },
      { label: 'Houblon maître', value: 'Hallertau Mittelfrüh' },
      { label: 'Mousse', value: 'Fine et persistante' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Panisses chaudes, fritto misto de la mer, carpaccio de daurade au citron de Nice, planche de charcuterie.',
    serviceTemperature: '4°C – 6°C',
    recommendedGlass: 'Chope haute ou verre droit pour préserver la vivacité des bulles.',
    imagePlaceholder: '🍺 Bouteille FOAM Lager (33cl)',
    image: '/images/beer-foam-lager.jpg'
  },
  'foam-blanche': {
    slug: 'foam-blanche',
    name: 'FOAM Blanche',
    fullName: 'FOAM Blanche • Bière Blanche Rafraîchissante',
    tagline: "Bière blanche aux arômes d'agrumes et de fruits tropicaux (Cascade & Mosaïc)",
    badge: 'Agrumes & Douceur',
    badgeColor: 'olive',
    style: 'Bière Blanche',
    abv: '4.8% vol.',
    ibu: 15,
    ebc: 4,
    price: 6.00,
    volume: '33 cl',
    rating: 4.9,
    reviewsCount: 56,
    inStock: true,
    stockCount: 75,
    color: '#2D5E4A',
    bannerAccent: 'from-emerald-600 to-teal-700',
    shortDesc: "Une création rafraîchissante aux arômes délicats d'agrumes et de fruits tropicaux, complétée par une amertume légère et équilibrée avec une mousse fine.",
    description: "Une création rafraîchissante aux arômes délicats d'agrumes et de fruits tropicaux, complétée par une amertume légère et équilibrée avec une mousse fine.",
    hops: 'Cascade & Mosaïc',
    fullDesc: "Inspirée par la brise méditerranéenne et le soleil niçois, la FOAM Blanche met à l'honneur le duo de houblons Cascade et Mosaïc. Sa texture soyeuse et son bouquet d'agrumes frais et de fruits exotiques en font la référence absolue des journées ensoleillées.",
    sensoryProfile: {
      amertume: 1,
      fraicheur: 5,
      fruite: 5,
      malt: 3
    },
    tastingNotes: {
      robe: "Blonde très pâle voilée d'un léger trouble naturel, mousse fine et soyeuse.",
      nez: "Parfums gourmands de zeste de mandarine, pamplemousse doux et fruits tropicaux.",
      bouche: "Attaque soyeuse et désaltérante, rondeur du blé et amertume subtile."
    },
    ingredients: "Eau pure, malts d'orge et froment (blé), flocons d'avoine, houblons Cascade et Mosaïc, levure de bière blanche.",
    technicalDetails: [
      { label: 'Style de bière', value: 'Bière Blanche rafraîchissante' },
      { label: 'Degré d’alcool (ABV)', value: '4.8% vol.' },
      { label: 'Amertume', value: '15 IBU (Légère & équilibrée)' },
      { label: 'Couleur', value: '4 EBC (Paille opalescente)' },
      { label: 'Houblons maîtres', value: 'Cascade & Mosaïc' },
      { label: 'Mousse', value: 'Fine et aérienne' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Salade niçoise, chèvre frais du pays, ceviche de loup, beignets de fleurs de courgettes.',
    serviceTemperature: '5°C – 7°C',
    recommendedGlass: 'Grand verre calice ou verre évasé pour libérer l’onctuosité des bulles.',
    imagePlaceholder: '🍺 Bouteille FOAM Blanche (33cl)',
    image: '/images/beer-foam-blanche.jpg'
  },
  'lou-foam-daqui': {
    slug: 'lou-foam-daqui',
    name: 'Lou FOAM d’Aqui',
    fullName: 'Lou FOAM d’Aqui • Blonde du Port de Nice',
    tagline: 'Blonde artisanale de soif fraîche, florale & délicate',
    badge: 'La Classique du Port',
    badgeColor: 'gold',
    style: 'Blonde Méditerranéenne',
    abv: '5.0% vol.',
    ibu: 20,
    ebc: 6,
    price: 6.00,
    volume: '33 cl',
    rating: 4.8,
    reviewsCount: 44,
    inStock: true,
    stockCount: 112,
    color: '#C9971E',
    bannerAccent: 'from-amber-500 to-yellow-600',
    shortDesc: 'La bière blonde emblématique du Port de Nice, d’une fraîcheur remarquable, dominée par la pureté des céréales d’orge et une délicate trame florale.',
    description: 'La bière blonde emblématique du Port de Nice, d’une fraîcheur remarquable, dominée par la pureté des céréales d’orge et une délicate trame florale.',
    hops: 'Sélection florale et noble de printemps',
    fullDesc: 'La compagne idéale des fins d’après-midi sur les quais du Port de Nice. "Lou FOAM d\'Aqui" célèbre l\'identité et l’artisanat niçois. Imaginée par Stéphane pour offrir une buvabilité absolue sans compromis sur la finesse aromatique.',
    sensoryProfile: {
      amertume: 2,
      fraicheur: 5,
      fruite: 2,
      malt: 4
    },
    tastingNotes: {
      robe: 'Blonde dorée étincelante et d’une pure limpidité naturelle, mousse fine et persistante.',
      nez: 'Notes parfumées de fleurs sauvages, mie de pain frais, foin coupé et céréales printanières.',
      bouche: 'Texture soyeuse et vive, grande sensation de pureté désaltérante. Équilibre parfait entre douceur maltée et vivacité florale.'
    },
    ingredients: 'Eau de Nice, malts d’orge de printemps soigneusement sélectionnés, houblons nobles, levure artisanale.',
    technicalDetails: [
      { label: 'Style de bière', value: 'Blonde Méditerranéenne' },
      { label: 'Degré d’alcool (ABV)', value: '5.0% vol.' },
      { label: 'Amertume', value: '20 IBU (Légère & désaltérante)' },
      { label: 'Couleur', value: '6 EBC (Blonde dorée lumineuse)' },
      { label: 'Houblons maîtres', value: 'Sélection florale & aromatique' },
      { label: 'Fermentation & Garde', value: 'Non pasteurisée, non filtrée' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Petits farcis niçois, daurade royale ou loup grillé au fenouil, panisses chaudes dorées, foccacia maison à l’huile d’olive et romarin.',
    serviceTemperature: '4°C – 6°C',
    recommendedGlass: 'Chope haute ou verre droit pour préserver la vivacité des bulles.',
    imagePlaceholder: '🍺 Bouteille Lou FOAM d’Aqui (33cl)',
    image: '/images/beer-lou-foam-daqui.jpg'
  },
  'wheat-ale': {
    slug: 'wheat-ale',
    name: 'FOAM Wheat Ale',
    fullName: 'FOAM Wheat Ale • Blanche de Blé (Hoppy Wheat)',
    tagline: 'Bière de blé soyeuse et veloutée aux agrumes solaires (Cascade, Chinook, Mosaïc)',
    badge: 'Fraîcheur Côtière',
    badgeColor: 'olive',
    style: 'Wheat Ale (Bière de Blé)',
    abv: '4.8% vol.',
    ibu: 16,
    ebc: 4,
    price: 6.00,
    volume: '33 cl',
    rating: 4.9,
    reviewsCount: 51,
    inStock: true,
    stockCount: 65,
    color: '#28533E',
    bannerAccent: 'from-emerald-700 to-teal-800',
    shortDesc: 'Une bière de blé rafraîchissante et aromatique, alliant la douceur du froment à des notes fruitées et épicées de houblons Cascade, Chinook et Mosaïc.',
    description: 'Une bière de blé rafraîchissante et aromatique, alliant la douceur du froment à des notes fruitées et épicées de houblons Cascade, Chinook et Mosaïc.',
    hops: 'Cascade, Chinook & Mosaïc',
    fullDesc: 'Inspirée par la brise marine de la baie de Nice. Brassée avec une part généreuse de froment malté (blé), elle offre un trouble naturel soyeux. Son aromatique lumineuse évoque le citron doux, la bergamote et les fruits frais de la Riviera, avec une complexité fruitée et épicée apportée par ses houblons.',
    sensoryProfile: {
      amertume: 1,
      fraicheur: 5,
      fruite: 5,
      malt: 3
    },
    tastingNotes: {
      robe: 'Blonde pâle trouble aux reflets opalescents, mousse blanche onctueuse et aérienne.',
      nez: 'Parfum d’agrumes frais (bergamote, citron de pays, écorce d’orange) relevé d’une touche douce de froment et d\'épices.',
      bouche: 'Sensation veloutée et caressante apportée par le froment, équilibrée par une pétillance tonique. Finale très douce et désaltérante.'
    },
    ingredients: 'Eau pure, malt d’orge Pilsen, froment malté (blé), flocons d’avoine, houblons aromatiques Cascade, Chinook et Mosaïc, levure de bière de blé.',
    technicalDetails: [
      { label: 'Style de bière', value: 'Wheat Ale (Blanche de Blé moderne)' },
      { label: 'Degré d’alcool (ABV)', value: '4.8% vol.' },
      { label: 'Amertume', value: '16 IBU (Très douce)' },
      { label: 'Couleur', value: '4 EBC (Paille opalescente voilée)' },
      { label: 'Houblons maîtres', value: 'Cascade, Chinook & Mosaïc' },
      { label: 'Fermentation', value: 'Haute, non filtrée (trouble naturel)' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Salade niçoise traditionnelle, chèvre frais du pays, carpaccio de poulpe à l’huile d’olive citronnée, tourte de blettes sucrée.',
    serviceTemperature: '5°C – 7°C',
    recommendedGlass: 'Grand verre calice ou verre évasé pour libérer l’onctuosité de la mousse.',
    imagePlaceholder: '🍺 Bouteille FOAM Wheat Ale (33cl)',
    image: '/images/beer-foam-wheat-ale.jpg'
  },
  'french-ipa': {
    slug: 'french-ipa',
    name: 'FOAM French IPA',
    fullName: 'FOAM French India Pale Ale',
    tagline: 'IPA artisanale aux houblons français du Port de Nice',
    badge: 'Coup de Cœur Houblonné',
    badgeColor: 'red',
    style: 'French IPA',
    abv: '6.2% vol.',
    ibu: 48,
    ebc: 14,
    price: 6.00,
    volume: '33 cl',
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    stockCount: 84,
    color: '#904545',
    bannerAccent: 'from-red-600 to-rose-700',
    shortDesc: 'Une French IPA au profil franc et houblonné, alliant notes éclatantes d’agrumes mûrs, de fruits du verger et de résine de pin maritime.',
    description: 'Une French IPA au profil franc et houblonné, alliant notes éclatantes d’agrumes mûrs, de fruits du verger et de résine de pin maritime.',
    hops: 'Houblons aromatiques français sélectionnés (résineux & agrumes)',
    fullDesc: 'Élaborée avec passion par Stéphane, maître brasseur de FOAM, dans les cuves de notre microbrasserie au Port de Nice (3 Quai des Deux Emmanuels). La FOAM French IPA met à l’honneur les houblons français. Son bouquet aromatique vif d’agrumes et d’aiguilles de pin maritime est sublimé par une amertume franche et désaltérante.',
    sensoryProfile: {
      amertume: 4,
      fraicheur: 4,
      fruite: 5,
      malt: 3
    },
    tastingNotes: {
      robe: 'Blonde dorée brillante aux reflets cuivrés chauds, coiffée d’une mousse blanche dense et crémeuse.',
      nez: 'Bouquet explosif de pamplemousse rose, de zeste de mandarine de la Riviera et d’effluves résineux de pin.',
      bouche: 'Attaque franche et fruitée sur le malt caramélisé léger, relayée par une amertume résineuse tranchante et structurée. Finale nette et sèche.'
    },
    ingredients: 'Eau pure des Préalpes d’Azur, malt d’orge français (Pale Ale, Munich, Cara-Pils), houblons aromatiques français, levure de fermentation haute.',
    technicalDetails: [
      { label: 'Style de bière', value: 'French India Pale Ale' },
      { label: 'Degré d’alcool (ABV)', value: '6.2% vol.' },
      { label: 'Amertume', value: '48 IBU (Franche & résineuse)' },
      { label: 'Couleur', value: '14 EBC (Dorée cuivrée)' },
      { label: 'Houblons maîtres', value: 'Houblons aromatiques français sélectionnés' },
      { label: 'Fermentation', value: 'Haute (19°C), non pasteurisée, non filtrée' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Socca niçoise croustillante et poivrée, pissaladière aux oignons fondants, daube provençale mijotée, burger au gorgonzola ou fromages affinés.',
    serviceTemperature: '7°C – 9°C',
    recommendedGlass: 'Verre Tulipe ou Teku pour concentrer les huiles essentielles de houblon.',
    imagePlaceholder: '🍺 Bouteille FOAM French IPA (33cl)',
    image: '/images/beer-foam-french-ipa.jpg'
  }
};

// Retro-compatibility & intuitive URL aliases:
BEERS['west-coast'] = BEERS['foam-west-coast'];
BEERS['foam-west-coast-ipa'] = BEERS['foam-west-coast'];
BEERS['lager'] = BEERS['foam-lager'];
BEERS['blanche'] = BEERS['foam-blanche'];
BEERS['daqui'] = BEERS['lou-foam-daqui'];
BEERS['wheat'] = BEERS['wheat-ale'];
BEERS['ipa'] = BEERS['french-ipa'];
BEERS['wheat'] = BEERS['wheat-ale'];

export const SETS = {
  'coffret-decouverte': {
    id: 'coffret-decouverte',
    slug: 'coffret-decouverte',
    name: 'Coffret Classique FOAM',
    fullName: 'Coffret Classique "Les Incontournables du Port"',
    subtitle: '1 bière classique de chaque recette du Port de Nice',
    badge: 'Idée Cadeau n°1',
    badgeColor: 'red',
    rating: 5.0,
    reviewsCount: 62,
    inStock: true,
    bannerAccent: 'from-amber-600 to-orange-700',
    description: 'Le coffret incontournable pour faire découvrir le savoir-faire de la microbrasserie FOAM au Port de Nice. Réunit nos trois bières signatures (FOAM French IPA, Lou FOAM d’Aqui et FOAM Wheat Ale) élaborées par Stéphane, dans un élégant étui carton kraft rigide protecteur prêt à offrir.',
    image: '/images/classique-team.jpg',
    gallery: [
      '/images/classique-team.jpg',
      '/images/classique-action.jpg',
      '/images/classique-noel.jpg',
      '/images/classique-etagere.jpg'
    ],
    rawUrls: [
      'https://raw.githubusercontent.com/gutierreznathan93-bot/FOAMMM/main/Foam/Classique/Team/1.jpg',
      'https://raw.githubusercontent.com/gutierreznathan93-bot/FOAMMM/main/Foam/Classique/action/8.jpg',
      'https://raw.githubusercontent.com/gutierreznathan93-bot/FOAMMM/main/Foam/Classique/noel/9.jpg',
      'https://raw.githubusercontent.com/gutierreznathan93-bot/FOAMMM/main/Foam/Classique/etagere/6.jpg'
    ],
    pack3: {
      id: 'pack3',
      format: 'Coffret 3 Bouteilles (3 x 33cl)',
      shortFormat: '3 x 33cl',
      price: 15.00,
      unitPrice: '5,00 € / bouteille',
      savingNote: 'Idéal dégustation solo ou duo',
      contents: [
        { name: 'FOAM French IPA (33cl)', desc: 'IPA houblonnée résineuse et fruitée' },
        { name: 'Lou FOAM d’Aqui (33cl)', desc: 'Blonde emblématique fraîche et désaltérante' },
        { name: 'FOAM Wheat Ale (33cl)', desc: 'Bière de blé veloutée aux agrumes solaires' }
      ]
    },
    pack6: {
      id: 'pack6',
      format: 'Coffret 6 Bouteilles (6 x 33cl)',
      shortFormat: '6 x 33cl',
      price: 26.00,
      unitPrice: '4,33 € / bouteille',
      savingNote: 'Économisez 10,00 € par rapport au prix unitaire',
      isPopular: true,
      contents: [
        { name: '2x FOAM French IPA (33cl)', desc: 'IPA houblonnée résineuse et fruitée' },
        { name: '2x Lou FOAM d’Aqui (33cl)', desc: 'Blonde emblématique fraîche et désaltérante' },
        { name: '2x FOAM Wheat Ale (33cl)', desc: 'Bière de blé veloutée aux agrumes solaires' }
      ]
    },
    goodiesIncluded: [
      'Étui rigide carton kraft épais recyclable avec calage individuel anti-casse',
      'Sous-bocks collector FOAM Nice offerts',
      'Fiche mémo de dégustation et accords mets-bières du brasseur Stéphane'
    ],
    technicalHighlights: [
      'Bouteilles 33cl en verre ambré protecteur anti-UV',
      'Bières non pasteurisées, conservant toute leur fraîcheur aromatique',
      'Direct cuves du Port de Nice (circuit le plus court de la Côte d’Azur)'
    ],
    imagePlaceholder: '📦 Coffret Classique FOAM (3 ou 6 bières)'
  },
  'coffret-exotique': {
    id: 'coffret-exotique',
    slug: 'coffret-exotique',
    name: 'Coffret Exotique FOAM',
    fullName: 'Coffret Exotique "Les Éphémères du Brasseur"',
    subtitle: 'Les créations exclusives & brassins éphémères du Port',
    badge: 'Édition Éphémère Limitée',
    badgeColor: 'olive',
    rating: 4.9,
    reviewsCount: 39,
    inStock: true,
    bannerAccent: 'from-emerald-700 to-teal-800',
    description: 'Une sélection rare de cuvées éphémères et de recettes créatives imaginées par Stéphane dans nos fermenteurs du port : houblons solaires, éditions spéciales et créations habituellement servies uniquement aux tireuses du bar.',
    image: '/images/coffret-exotique-packshot.jpg',
    gallery: [
      '/images/coffret-exotique-packshot.jpg',
      '/images/exotique-14.jpg',
      '/images/exotique-15.jpg'
    ],
    rawUrls: [
      'https://raw.githubusercontent.com/gutierreznathan93-bot/FOAMMM/main/Foam/exotique/action/14.jpg',
      'https://raw.githubusercontent.com/gutierreznathan93-bot/FOAMMM/main/Foam/exotique/action/15.jpg'
    ],
    pack3: {
      id: 'pack3',
      format: 'Coffret 3 Bouteilles (3 x 33cl)',
      shortFormat: '3 x 33cl',
      price: 15.00,
      unitPrice: '5,00 € / bouteille',
      savingNote: 'Idéal dégustation solo ou duo',
      contents: [
        { name: '1x Lou FOAM d’Aqui (33cl)', desc: 'Blonde emblématique fraîche et désaltérante' },
        { name: '1x FOAM Wheat Ale (33cl)', desc: 'Bière de blé soyeuse aux agrumes solaires' },
        { name: '1x FOAM French IPA (33cl)', desc: 'IPA houblonnée résineuse et fruitée' }
      ]
    },
    pack6: {
      id: 'pack6',
      format: 'Coffret 6 Bouteilles (6 x 33cl)',
      shortFormat: '6 x 33cl',
      price: 26.00,
      unitPrice: '4,33 € / bouteille',
      savingNote: 'Économisez 10,00 € par rapport au prix unitaire',
      isPopular: true,
      contents: [
        { name: '2x Lou FOAM d’Aqui (33cl)', desc: 'Blonde emblématique fraîche et désaltérante' },
        { name: '2x FOAM Wheat Ale (33cl)', desc: 'Bière de blé soyeuse aux agrumes solaires' },
        { name: '2x FOAM French IPA (33cl)', desc: 'IPA houblonnée résineuse et fruitée' }
      ]
    },
    goodiesIncluded: [
      'Étui carton kraft collector sérigraphié FOAM Nice',
      'Sous-bocks collector de l’édition éphémère',
      'Note personnelle numérotée du maître brasseur Stéphane'
    ],
    technicalHighlights: [
      'Série limitée à seulement 200 coffrets par embouteillage',
      'Houblons locaux niçois récoltés sous le soleil de la Côte d’Azur',
      'Non pasteurisé, direct des fûts de garde'
    ],
    imagePlaceholder: '📦 Coffret Exotique Éphémère FOAM (3 ou 6 bières)'
  }
};

// Aliases for Set routes and slugs
SETS['decouverte'] = SETS['coffret-decouverte'];
SETS['exotique'] = SETS['coffret-exotique'];

export const BARS_DATA = [
  {
    id: 'foam-port',
    name: 'FOAM Port de Nice',
    badge: 'Microbrasserie & Bar',
    address: '3 Quai des Deux Emmanuels, 06300 Nice',
    zone: 'Port de Nice',
    hours: 'Mardi au Dimanche : 16h00 – 00h30 (Fermé le lundi)',
    phone: '04 93 00 00 00',
    description: 'Le berceau historique de FOAM. C’est ici, face aux pointus traditionnels et aux yachts du port, que Stéphane brasse l’ensemble de nos bières dans nos cuves inox visibles depuis la salle. Vous y trouverez un grand mur de tireuses en libre-service avec carte magnétique et une terrasse baignée par la lumière du port.',
    features: [
      'Cuves de brassage et fermenteurs inox ouverts sur la salle',
      'Mur de tireuses de bières artisanales en libre-service (carte sans contact)',
      'Terrasse ensoleillée sur les quais du Port de Nice',
      'Comptoir de retrait Click & Collect immédiat 0 €'
    ],
    mapHint: 'Accès facile en Tramway Ligne 2 (Arrêt Port Lympia à 3 minutes à pied).'
  },
  {
    id: 'foam-pin',
    name: 'FOAM Place du Pin',
    badge: 'Taproom & Convivialité',
    address: 'Place du Pin, 06300 Nice',
    zone: 'Le Petit Marais Niçois',
    hours: 'Tous les jours : 17h00 – 01h00',
    phone: '04 93 11 11 11',
    description: 'Implanté au cœur de la Place du Pin, épicentre de la vie nocturne et piétonne niçoise. Le bar propose toutes les bières FOAM à la pression ainsi que des brassins invités, accompagnés de planches et street food méditerranéenne sous les grands pins de la place.',
    features: [
      'Toutes les créations FOAM en pression extra-fraîche',
      'Terrasse piétonne animée sous les pins méditerranéens',
      'Tireuses connectées en libre-service',
      'Comptoir de retrait Click & Collect 0 €'
    ],
    mapHint: 'Au cœur de la place piétonne, à 5 minutes de la Place Garibaldi.'
  }
];

export const SHIPPING_RATES = {
  clickAndCollect: 0.00,
  homeDelivery: 6.90,
  shipping: 6.90,
  pack3: { price: 6.90 },
  pack6: { price: 6.90 }
};
