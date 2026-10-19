// FOAM Nice Official Beers Data based on foamnice.com/biere-foam and brewery specs

export const BEERS = {
  'west-coast': {
    slug: 'west-coast',
    name: 'FOAM West Coast',
    subtitle: 'Blonde IPA artisanale du Port',
    style: 'West Coast IPA',
    abv: '6.2% vol.',
    hops: 'Waimea & Mosaïc',
    profile: 'Fruité, résineux et sec en bouche',
    color: '#D97736',
    price: 6.00,
    shortDesc: 'Une blonde IPA au profil franc et houblonné, alliant notes de fruits tropicaux et résine de pin maritime avec une finale sèche et désaltérante.',
    fullDesc: 'Élaborée avec passion par Stéphane, notre maître brasseur, dans les cuves de notre microbrasserie au Port de Nice. La FOAM West Coast est notre interprétation méditerranéenne des classiques de la côte Ouest américaine. Les houblons Waimea et Mosaïc s’expriment pleinement pour révéler un bouquet aromatique explosif d’agrumes et de résine avec une belle longueur en bouche.',
    brewerNotes: 'Brassée en fermentation haute au 3 Quai des Deux Emmanuels. Non pasteurisée, non filtrée pour préserver l’intégrité des huiles essentielles de houblon.',
    ingredients: 'Eau des Préalpes d’Azur, malt d’orge français, houblons Waimea et Mosaïc, levure.',
    ibu: 48,
    pairing: 'Idéale avec une socca chaude et poivrée, une pissaladière niçoise ou des fromages affinés.',
    imagePlaceholder: '🍺 FOAM West Coast IPA (33cl)',
    badge: 'La Houblonnée'
  },
  'lager': {
    slug: 'lager',
    name: 'FOAM Lager',
    subtitle: 'Blonde de soif fraîche & florale',
    style: 'Lager Méditerranéenne',
    abv: '5.0% vol.',
    hops: 'Hallertau Mittelfrüh',
    profile: 'Fraîche, florale, herbacée et légère amertume',
    color: '#D4AF37',
    price: 6.00,
    shortDesc: 'Une bière blonde de fermentation basse, remarquablement fraîche, dominée par les notes céréalières et une délicate trame florale.',
    fullDesc: 'La bière de soif par excellence du Quai Cassini. Conçue par Stéphane pour offrir une buvabilité maximale sans jamais compromettre le goût. Le noble houblon allemand Hallertau Mittelfrüh apporte une signature florale et herbacée très fine qui sublime la rondeur des malts d’orge.',
    brewerNotes: 'Fermentation basse soignée et garde à froid prolongée dans nos fermenteurs du port pour une limpidité naturelle et une pétillance vive.',
    ingredients: 'Eau de Nice, malts d’orge sélectionnés, houblon Hallertau Mittelfrüh, levure de basse fermentation.',
    ibu: 20,
    pairing: 'Accompagne à merveille les petits farcis niçois, un loup grillé ou une planche de charcuterie locale.',
    imagePlaceholder: '🍺 FOAM Lager (33cl)',
    badge: 'La Classique'
  },
  'blanche': {
    slug: 'blanche',
    name: 'FOAM Blanche',
    subtitle: 'Bière de blé rafraîchissante aux agrumes',
    style: 'Blanche de Blé (Witbier moderne)',
    abv: '4.8% vol.',
    hops: 'Cascade & Mosaïc',
    profile: 'Notes d’agrumes, fruits tropicaux, fraîcheur vive',
    color: '#4A6B53',
    price: 6.00,
    shortDesc: 'Une blanche soyeuse et légère, aux arômes éclatants de zestes d’agrumes et de fruits exotiques avec une amertume très subtile.',
    fullDesc: 'Inspirée par la douceur de vivre de la Riviera. Brassée avec une part généreuse de froment malté, elle dégage un trouble soyeux naturel. Le mariage des houblons Cascade et Mosaïc lui confère une aromatique lumineuse évoquant le pamplemousse, le citron doux et les fruits de la passion.',
    brewerNotes: 'Une bière désaltérante pensée pour les journées ensoleillées sur la terrasse du Port de Nice ou de la Place du Pin.',
    ingredients: 'Eau pure, malt d’orge, froment malté, houblons Cascade et Mosaïc, levure.',
    ibu: 16,
    pairing: 'Parfaite avec une salade niçoise authentique, un ceviche de daurade ou une tourte de blettes sucrée.',
    imagePlaceholder: '🍺 FOAM Blanche (33cl)',
    badge: 'La Douce'
  }
};

export const SETS = {
  'coffret-decouverte': {
    slug: 'coffret-decouverte',
    name: 'Coffret Découverte FOAM',
    subtitle: 'Les bières classiques de notre microbrasserie',
    badge: 'Les Incontournables',
    highlight: '1 classique de chaque recette du Port',
    description: 'Le coffret idéal pour s’initier à l’univers brassicole artisanal de FOAM au Port de Nice. Réunit nos trois recettes permanentes emblématiques élaborées par notre maître brasseur Stéphane.',
    pack3: {
      format: 'Pack de 3 bouteilles (33cl)',
      price: 15.00,
      contents: [
        '1x FOAM West Coast IPA (33cl)',
        '1x FOAM Lager Méditerranéenne (33cl)',
        '1x FOAM Blanche Riviera (33cl)'
      ]
    },
    pack6: {
      format: 'Pack de 6 bouteilles (33cl)',
      price: 26.00,
      contents: [
        '2x FOAM West Coast IPA (33cl)',
        '2x FOAM Lager Méditerranéenne (33cl)',
        '2x FOAM Blanche Riviera (33cl)'
      ]
    },
    packaging: 'Étui rigide carton kraft recyclable, calage anti-casse écoresponsable.',
    imagePlaceholder: '📦 Coffret Découverte Kraft FOAM (3 ou 6 bières)'
  },
  'coffret-exotique': {
    slug: 'coffret-exotique',
    name: 'Coffret Exotique FOAM',
    subtitle: 'Les créations & brassins éphémères du Brasseur',
    badge: 'Édition Éphémère',
    highlight: 'Recettes créatives & houblons aromatiques',
    description: 'Une sélection de cuvées éphémères et de recettes audacieuses imaginées par Stéphane dans nos cuves du port : houblons solaires cultivés sous le soleil niçois, notes de fruits exotiques et éditions limitées habituellement servies uniquement aux tireuses du bar.',
    pack3: {
      format: 'Pack de 3 bouteilles (33cl)',
      price: 15.00,
      contents: [
        '1x Brassin Éphémère Riviera Tropicale (33cl)',
        '1x Cuvée Spéciale Houblon Niçois (33cl)',
        '1x FOAM Blanche Exotique Fruits de la Passion (33cl)'
      ]
    },
    pack6: {
      format: 'Pack de 6 bouteilles (33cl)',
      price: 26.00,
      contents: [
        '2x Brassin Éphémère Riviera Tropicale (33cl)',
        '2x Cuvée Spéciale Houblon Niçois (33cl)',
        '2x FOAM Blanche Exotique Fruits de la Passion (33cl)'
      ]
    },
    packaging: 'Étui sérigraphié kraft collector, scellé par le brasseur.',
    imagePlaceholder: '📦 Coffret Exotique Kraft FOAM (Édition Limitée 3 ou 6 bières)'
  }
};

export const BARS_DATA = [
  {
    id: 'foam-port',
    name: 'FOAM Port de Nice',
    type: 'La Microbrasserie & Bar',
    address: '3 Quai des Deux Emmanuels, 06300 Nice',
    zone: 'Port de Nice',
    hours: 'Mardi au Dimanche : 16h00 – 00h30',
    description: 'Le lieu de naissance des bières FOAM. C’est ici, face aux bateaux pointus traditionnels et aux yachts du port, que Stéphane brasse l’ensemble de nos bières dans nos cuves inox visibles depuis la salle. Vous y trouverez un grand mur de tireuses en libre-service avec carte rechargeable et une terrasse baignée par la lumière du port.',
    features: [
      'Cuves de brassage et fermenteurs sur place',
      'Mur de tireuses de bières artisanales en libre-service',
      'Terrasse face aux quais du Port de Nice',
      'Retrait Click & Collect gratuit immédiat'
    ]
  },
  {
    id: 'foam-pin',
    name: 'FOAM Place du Pin',
    type: 'Bar Taproom & Convivialité',
    address: 'Place du Pin, 06300 Nice',
    zone: 'Le Petit Marais Niçois',
    hours: 'Tous les jours : 17h00 – 01h00',
    description: 'Implanté au cœur de la Place du Pin, épicentre de la vie nocturne et piétonne niçoise. Le bar propose toutes les bières FOAM à la pression ainsi que des brassins invités, accompagnés de planches et street food méditerranéenne sous les grands pins.',
    features: [
      'Toutes les créations FOAM en pression fraîche',
      'Atmosphère festive et terrasse piétonne animée',
      'Tireuses connectées en libre-service',
      'Retrait Click & Collect gratuit au comptoir'
    ]
  }
];

export const PALOMA_HISTORY = {
  foundationYear: 1948,
  founder: 'Famille Vannini',
  firstEstablishment: 'Le Virginie (Trattoria historique)',
  breweryLaunch: 2022,
  headBrewer: 'Stéphane',
  philosophy: 'Créée par le Groupe Paloma, maison familiale indépendante fondée en 1948 par la famille Vannini, la microbrasserie FOAM perpétue 76 ans de passion culinaire azuréenne. Nous avons fait le choix rare de brasser nous-mêmes nos bières au Quai des Deux Emmanuels, en circuit ultra-court, avec de l’eau locale et du houblon cultivé sous le soleil niçois.'
};

export const SHIPPING_RATES = {
  clickAndCollect: 0.00,
  homeDelivery: 6.90
};
