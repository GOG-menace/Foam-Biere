// FOAM Nice Official Beers Data & E-commerce Product Specifications
// Based on https://www.foamnice.com/biere-foam and master brewer Stéphane's specs

export const BEERS = {
  'west-coast': {
    slug: 'west-coast',
    name: 'FOAM West Coast',
    fullName: 'FOAM West Coast India Pale Ale',
    tagline: 'Blonde IPA artisanale du Port de Nice',
    badge: 'Coup de Cœur Houblonné',
    badgeColor: 'amber',
    style: 'West Coast IPA',
    abv: '6.2% vol.',
    ibu: 48,
    ebc: 14,
    price: 6.00,
    volume: '33 cl',
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    stockCount: 84,
    color: '#D9631E',
    bannerAccent: 'from-amber-600 to-orange-700',
    shortDesc: 'Une blonde IPA au profil franc et houblonné, alliant notes éclatantes de fruits tropicaux et résine de pin maritime avec une finale sèche et ultra-désaltérante.',
    fullDesc: 'Élaborée avec passion par Stéphane, maître brasseur de FOAM, dans les cuves de notre microbrasserie au Port de Nice (3 Quai des Deux Emmanuels). La FOAM West Coast est notre interprétation méditerranéenne des classiques de la côte Ouest américaine. Les houblons Waimea et Mosaïc s’expriment pleinement pour révéler un bouquet aromatique explosif d’agrumes mûrs et d’aiguilles de pin maritime, sublimé par une belle longueur en bouche.',
    sensoryProfile: {
      amertume: 4,
      fraicheur: 4,
      fruite: 5,
      malt: 3
    },
    tastingNotes: {
      robe: 'Blonde dorée brillante aux reflets cuivrés chauds, coiffée d’une mousse blanche dense et crémeuse.',
      nez: 'Bouquet explosif de pamplemousse rose, de zeste de mandarine de la Riviera et d’effluves résineux de pin maritime.',
      bouche: 'Attaque franche et fruitée sur le malt caramélisé léger, relayée par une amertume résineuse tranchante et structurée. Finale nette et sèche.'
    },
    ingredients: 'Eau pure des Préalpes d’Azur, malt d’orge français (Pale Ale, Munich, Cara-Pils), houblons aromatiques (Waimea & Mosaïc), levure de fermentation haute.',
    technicalDetails: [
      { label: 'Style de bière', value: 'West Coast India Pale Ale' },
      { label: 'Degré d’alcool (ABV)', value: '6.2% vol.' },
      { label: 'Amertume', value: '48 IBU (Franche & résineuse)' },
      { label: 'Couleur', value: '14 EBC (Dorée cuivrée)' },
      { label: 'Houblons maîtres', value: 'Waimea (Nouvelle-Zélande) & Mosaïc (USA)' },
      { label: 'Fermentation', value: 'Haute (19°C), non pasteurisée, non filtrée' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Socca niçoise croustillante et poivrée, pissaladière aux oignons fondants, daube provençale mijotée, burger au gorgonzola ou fromages affinés.',
    serviceTemperature: '7°C – 9°C',
    recommendedGlass: 'Verre Tulipe ou Teku pour concentrer les huiles essentielles de houblon.',
    imagePlaceholder: '🍺 Bouteille FOAM West Coast IPA (33cl)',
    image: 'https://images.unsplash.com/photo-1608270102574-d4dc3dfb5722?auto=format&fit=crop&w=900&q=80'
  },
  'lager': {
    slug: 'lager',
    name: 'FOAM Lager',
    fullName: 'FOAM Lager Méditerranéenne',
    tagline: 'Blonde de soif fraîche, florale & délicate',
    badge: 'La Classique du Port',
    badgeColor: 'gold',
    style: 'Lager Dorée Méditerranéenne',
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
    shortDesc: 'Une bière blonde de fermentation basse d’une fraîcheur remarquable, dominée par la pureté des céréales d’orge et une délicate trame florale herbacée.',
    fullDesc: 'La compagne idéale des fins d’après-midi sur les quais du Port de Nice. Imaginée par Stéphane pour offrir une buvabilité absolue sans aucun compromis sur la finesse aromatique. Le noble houblon allemand Hallertau Mittelfrüh apporte une signature florale et herbacée très aérienne qui sublime la rondeur des malts d’orge.',
    sensoryProfile: {
      amertume: 2,
      fraicheur: 5,
      fruite: 2,
      malt: 4
    },
    tastingNotes: {
      robe: 'Blonde paille étincelante et d’une pure limpidité naturelle, mousse fine et persistante.',
      nez: 'Notes parfumées de fleurs sauvages, mie de pain frais, foin coupé et céréales printanières.',
      bouche: 'Texture soyeuse et vive, grande sensation de pureté désaltérante. Équilibre parfait entre douceur maltée et vivacité houblonnée.'
    },
    ingredients: 'Eau de Nice, malts d’orge de printemps soigneusement sélectionnés, houblon noble Hallertau Mittelfrüh, levure de fermentation basse.',
    technicalDetails: [
      { label: 'Style de bière', value: 'Lager Dorée (Fermentation basse)' },
      { label: 'Degré d’alcool (ABV)', value: '5.0% vol.' },
      { label: 'Amertume', value: '20 IBU (Légère & désaltérante)' },
      { label: 'Couleur', value: '6 EBC (Blonde paille lumineuse)' },
      { label: 'Houblon maître', value: 'Hallertau Mittelfrüh (Allemagne)' },
      { label: 'Fermentation & Garde', value: 'Basse (10°C) + lagering à froid de 4 semaines' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Petits farcis niçois, daurade royale ou loup grillé au fenouil, panisses chaudes dorées, foccacia maison à l’huile d’olive et romarin.',
    serviceTemperature: '4°C – 6°C',
    recommendedGlass: 'Chope haute ou verre droit pour préserver la vivacité des bulles.',
    imagePlaceholder: '🍺 Bouteille FOAM Lager (33cl)',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=900&q=80'
  },
  'blanche': {
    slug: 'blanche',
    name: 'FOAM Blanche',
    fullName: 'FOAM Blanche Riviera aux Agrumes',
    tagline: 'Bière de blé veloutée aux agrumes solaires',
    badge: 'Fraîcheur Côtière',
    badgeColor: 'olive',
    style: 'Blanche de Blé (Witbier Moderne)',
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
    shortDesc: 'Une blanche soyeuse et légère, aux arômes éclatants de zestes d’agrumes de la Côte d’Azur et de fruits exotiques avec une amertume très subtile.',
    fullDesc: 'Inspirée par la douceur de vivre de la Riviera et la brise marine de la baie de Nice. Brassée avec une part généreuse de froment malté, elle offre un trouble naturel soyeux. L’association des houblons Cascade et Mosaïc lui confère une aromatique lumineuse évoquant le pamplemousse, le citron doux et les fruits de la passion.',
    sensoryProfile: {
      amertume: 1,
      fraicheur: 5,
      fruite: 5,
      malt: 3
    },
    tastingNotes: {
      robe: 'Blonde pâle trouble (hazy) aux reflets opalescents, mousse blanche onctueuse et aérienne.',
      nez: 'Parfum d’agrumes frais (bergamote, citron de pays, écorce d’orange) relevé d’une touche exotique de fruit de la passion.',
      bouche: 'Sensation veloutée et caressante apportée par le froment, équilibrée par une pétillance tonique. Finale très douce et rafraîchissante.'
    },
    ingredients: 'Eau pure, malt d’orge Pilsen, froment malté (blé), flocons d’avoine, houblons Cascade & Mosaïc, levure blanche.',
    technicalDetails: [
      { label: 'Style de bière', value: 'Blanche de Blé (Witbier moderne)' },
      { label: 'Degré d’alcool (ABV)', value: '4.8% vol.' },
      { label: 'Amertume', value: '16 IBU (Très douce)' },
      { label: 'Couleur', value: '4 EBC (Paille opalescente voilée)' },
      { label: 'Houblons maîtres', value: 'Cascade & Mosaïc' },
      { label: 'Fermentation', value: 'Haute, non filtrée (trouble naturel)' },
      { label: 'Lieu de brassage', value: '3 Quai des Deux Emmanuels, Port de Nice' }
    ],
    pairing: 'Salade niçoise traditionnelle, chèvre frais du pays, carpaccio de poulpe à l’huile d’olive citronnée, tourte de blettes sucrée.',
    serviceTemperature: '5°C – 7°C',
    recommendedGlass: 'Grand verre calice ou verre évasé pour libérer l’onctuosité de la mousse.',
    imagePlaceholder: '🍺 Bouteille FOAM Blanche (33cl)',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=900&q=80'
  }
};

export const SETS = {
  'coffret-decouverte': {
    slug: 'coffret-decouverte',
    name: 'Coffret Découverte FOAM',
    fullName: 'Coffret Découverte "Les Classiques du Port"',
    subtitle: '1 bière classique de chaque recette du Port de Nice',
    badge: 'Idée Cadeau n°1',
    badgeColor: 'amber',
    rating: 5.0,
    reviewsCount: 62,
    inStock: true,
    bannerAccent: 'from-amber-600 to-orange-700',
    description: 'Le coffret incontournable pour faire découvrir le savoir-faire de la microbrasserie FOAM au Port de Nice. Réunit nos trois bières permanentes élaborées par Stéphane, dans un élégant étui carton rigide protecteur prêt à offrir.',
    pack3: {
      id: 'pack3',
      format: 'Coffret 3 Bouteilles (3 x 33cl)',
      shortFormat: '3 x 33cl',
      price: 15.00,
      unitPrice: '5,00 € / bouteille',
      savingNote: 'Idéal dégustation solo ou duo',
      contents: [
        { name: 'FOAM West Coast IPA (33cl)', desc: 'Blonde houblonnée résineuse et fruitée' },
        { name: 'FOAM Lager Méditerranéenne (33cl)', desc: 'Blonde fraîche, florale et désaltérante' },
        { name: 'FOAM Blanche Riviera (33cl)', desc: 'Bière de blé veloutée aux agrumes doux' }
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
        { name: '2x FOAM West Coast IPA (33cl)', desc: 'Blonde houblonnée résineuse et fruitée' },
        { name: '2x FOAM Lager Méditerranéenne (33cl)', desc: 'Blonde fraîche, florale et désaltérante' },
        { name: '2x FOAM Blanche Riviera (33cl)', desc: 'Bière de blé veloutée aux agrumes doux' }
      ]
    },
    goodiesIncluded: [
      'Étui rigide carton kraft épais recyclable avec calage anti-casse',
      'Sous-bocks collector FOAM Nice offerts',
      'Fiche mémo de dégustation et accords mets-bières du brasseur'
    ],
    technicalHighlights: [
      'Bouteilles 33cl en verre ambré protecteur anti-UV',
      'Bières non pasteurisées, conservant toute leur fraîcheur aromatique',
      'Direct cuves du Port de Nice (circuit le plus court de la Côte d’Azur)'
    ],
    imagePlaceholder: '📦 Coffret Découverte FOAM (3 ou 6 bières)',
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=900&q=80'
  },
  'coffret-exotique': {
    slug: 'coffret-exotique',
    name: 'Coffret Exotique FOAM',
    fullName: 'Coffret Exotique "Les Éphémères du Brasseur"',
    subtitle: 'Les créations exclusives & houblons solaires de Nice',
    badge: 'Édition Éphémère Limitée',
    badgeColor: 'olive',
    rating: 4.9,
    reviewsCount: 39,
    inStock: true,
    bannerAccent: 'from-emerald-700 to-teal-800',
    description: 'Une sélection rare de cuvées éphémères et de recettes créatives imaginées par Stéphane dans nos fermenteurs du port : houblons cultivés sous le soleil niçois, brassins aux agrumes rares et éditions habituellement servies uniquement aux tireuses du bar.',
    pack3: {
      id: 'pack3',
      format: 'Coffret 3 Bouteilles Éphémères (3 x 33cl)',
      shortFormat: '3 x 33cl',
      price: 15.00,
      unitPrice: '5,00 € / bouteille',
      savingNote: 'Cuvées rares en tirage limité',
      contents: [
        { name: '1x Brassin Riviera Tropicale (33cl)', desc: 'NEIPA soyeuse mangue et passion' },
        { name: '1x Cuvée Houblon Niçois Solaire (33cl)', desc: 'Brassée avec le houblon cultivé à Nice' },
        { name: '1x Blanche Exotique aux Fruits Rares (33cl)', desc: 'Infusion zestes de yuzu et coriandre' }
      ]
    },
    pack6: {
      id: 'pack6',
      format: 'Coffret 6 Bouteilles Éphémères (6 x 33cl)',
      shortFormat: '6 x 33cl',
      price: 26.00,
      unitPrice: '4,33 € / bouteille',
      savingNote: 'Économisez 10,00 € — Édition spéciale collectionneur',
      isPopular: true,
      contents: [
        { name: '2x Brassin Riviera Tropicale (33cl)', desc: 'NEIPA soyeuse mangue et passion' },
        { name: '2x Cuvée Houblon Niçois Solaire (33cl)', desc: 'Brassée avec le houblon cultivé à Nice' },
        { name: '2x Blanche Exotique aux Fruits Rares (33cl)', desc: 'Infusion zestes de yuzu et coriandre' }
      ]
    },
    goodiesIncluded: [
      'Étui collector sérigraphié FOAM Nice',
      'Sous-bocks collector de l’édition éphémère',
      'Note personnelle numérotée du maître brasseur Stéphane'
    ],
    technicalHighlights: [
      'Série limitée à seulement 200 coffrets par embouteillage',
      'Houblons locaux niçois récoltés sous le soleil de la Côte d’Azur',
      'Non pasteurisé, direct des fûts de garde'
    ],
    imagePlaceholder: '📦 Coffret Exotique Éphémère FOAM (3 ou 6 bières)',
    image: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&w=900&q=80'
  }
};

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
  homeDelivery: 6.90
};
