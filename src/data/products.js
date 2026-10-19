export const BEER_RECIPES = {
  ipa: {
    id: 'foam-ipa',
    name: 'FOAM West Coast IPA',
    tagline: 'Blonde dorée & amertume résineuse',
    style: 'West Coast IPA',
    volume: '33cl',
    abv: '6.2% vol.',
    ibu: 55,
    price: 6.00,
    colorHex: '#D96B27',
    badge: 'Coup de Cœur',
    badgeColor: 'amber',
    shortDesc: 'Blonde dorée et dense, notes résineuses et fruitées d’agrumes, amertume franche mais équilibrée.',
    fullDesc: 'Inspirée des authentiques India Pale Ales de la côte Ouest américaine avec une signature houblonnée méditerranéenne. Brassée au Port de Nice avec une sélection rigoureuse de houblons aromatiques (Citra, Simcoe, Cascade).',
    tastingNotes: ['Agrumes frais (pamplemousse, mandarine)', 'Résine de pin maritime', 'Malt caramélisé léger'],
    gauges: {
      amertume: 4,
      fraicheur: 3,
      fruite: 4
    },
    pairing: 'Socca niçoise poivrée, pissaladière tiède, grillades aux herbes de Provence.',
    image: 'https://images.unsplash.com/photo-1608270102574-d4dc3dfb5722?auto=format&fit=crop&w=800&q=80',
    availableForPack: true
  },
  lager: {
    id: 'foam-lager',
    name: 'FOAM Lager Méditerranéenne',
    tagline: 'Blonde de soif & grande fraîcheur',
    style: 'Lager Dorée',
    volume: '33cl',
    abv: '5.0% vol.',
    ibu: 22,
    price: 6.00,
    colorHex: '#D4AF37',
    badge: 'La Classique du Port',
    badgeColor: 'gold',
    shortDesc: 'Blonde de soif de grande fraîcheur, profil floral, céréalier et délicatement herbacé.',
    fullDesc: 'La compagne idéale des fins d’après-midi sur les quais du Port de Nice. Une fermentation basse maîtrisée qui révèle la pureté des malts d’orge et un bouquet floral délicat.',
    tastingNotes: ['Céréales fraîches & mie de pain', 'Notes florales délicates', 'Finale vive et désaltérante'],
    gauges: {
      amertume: 2,
      fraicheur: 5,
      fruite: 2
    },
    pairing: 'Petits farcis niçois, loup grillé au fenouil, panisse dorée.',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80',
    availableForPack: true
  },
  blanche: {
    id: 'foam-blanche',
    name: 'FOAM Blanche Riviera',
    tagline: 'Agrumes solaires & douceur veloutée',
    style: 'Blanche de Blé (Witbier)',
    volume: '33cl',
    abv: '4.8% vol.',
    ibu: 15,
    price: 6.00,
    colorHex: '#2E5A44',
    badge: 'Douceur Côtière',
    badgeColor: 'olive',
    shortDesc: 'Rafraîchissante et légère, arômes d’agrumes et de fruits tropicaux, amertume très douce.',
    fullDesc: 'Brassée avec du froment malté et infusée aux écorces d’agrumes de la Côte d’Azur et graines de coriandre. Trouble naturel, mousse onctueuse et sensation soyeuse en bouche.',
    tastingNotes: ['Zestes de bergamote et citron d’ici', 'Touche exotique subtile', 'Fraîcheur herbacée'],
    gauges: {
      amertume: 1,
      fraicheur: 5,
      fruite: 4
    },
    pairing: 'Salade niçoise authentique, chèvre frais du haut-pays, tourte de blettes sucrée.',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=800&q=80',
    availableForPack: true
  }
};

export const GIFT_SETS = [
  {
    id: 'coffret-trio-du-port',
    name: 'Coffret Découverte "Trio du Port"',
    subtitle: '3 x 33cl • Les incontournables de la brasserie',
    badge: 'Idée Cadeau n°1',
    badgeType: 'olive',
    category: 'coffrets',
    price: 19.00,
    originalPrice: 21.00,
    clickAndCollectAdvised: true,
    contents: [
      '1x FOAM West Coast IPA (33cl)',
      '1x FOAM Lager Méditerranéenne (33cl)',
      '1x FOAM Blanche Riviera (33cl)',
      '1x Étui rigide collector kraft & bleu marine'
    ],
    description: 'Le coffret parfait pour faire découvrir l’âme brassicole du Port de Nice. Trois recettes complémentaires présentées dans un étui carton écoresponsable sérigraphié aux couleurs du Port.',
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=800&q=80',
    targetPersona: 'Léa (Cadeau local & convivial pour les fêtes)'
  },
  {
    id: 'coffret-fetes-riviera',
    name: 'Coffret Signature "Fêtes Riviera"',
    subtitle: '6 x 33cl + Goodies Collector • L’expérience complète',
    badge: 'Édition Noël',
    badgeType: 'amber',
    category: 'coffrets',
    price: 30.00,
    originalPrice: 42.00,
    clickAndCollectAdvised: true,
    contents: [
      '2x FOAM West Coast IPA (33cl)',
      '2x FOAM Lager Méditerranéenne (33cl)',
      '2x FOAM Blanche Riviera (33cl)',
      '4x Sous-bocks collector FOAM Nice',
      '1x Décapsuleur en bois massif sérigraphié FOAM'
    ],
    description: 'Le grand coffret de fête prêt à déposer sous le sapin. 6 bières artisanales du Port accompagnées de nos accessoires de dégustation collector signés FOAM.',
    image: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&w=800&q=80',
    targetPersona: 'Léa & Thomas (Grand cadeau dégustation)'
  }
];

export const UPSELL_ITEMS = [
  {
    id: 'decapsuleur-foam',
    name: 'Décapsuleur Bois & Acier FOAM Nice',
    price: 3.00,
    description: 'Manche en bois d’olivier gravé au laser "FOAM Port de Nice". Compact et ultra-robuste.',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'sous-bocks-pack',
    name: 'Lot de 6 Sous-bocks Collector',
    price: 2.00,
    description: 'Carton absorbant gaufré 600g, 3 illustrations exclusives de la baie et du Port de Nice.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80'
  }
];

export const BARS_LOCATIONS = [
  {
    id: 'foam-port',
    name: 'FOAM Port de Nice (Micro-Brasserie & Bar)',
    address: 'Quai Cassini / 3 Rue Robilant, 06300 Nice',
    zone: 'Port de Nice',
    hours: 'Mar - Dim : 16h00 - 00h30',
    pickupHours: 'Retrait disponible dès 16h00 le jour même',
    note: 'Les cuves de brassage sont visibles sur place !',
    badge: 'Micro-Brasserie'
  },
  {
    id: 'foam-pin',
    name: 'FOAM Place du Pin (Bar Taproom)',
    address: 'Place du Pin, 06300 Nice',
    zone: 'Le Petit Marais Niçois',
    hours: 'Tous les jours : 17h00 - 01h00',
    pickupHours: 'Retrait rapide au comptoir',
    note: 'Au cœur de la vie festive niçoise.',
    badge: 'Taproom'
  }
];

export const TIME_SLOTS = [
  'Aujourd’hui entre 17h00 et 19h00',
  'Aujourd’hui entre 19h00 et 21h00',
  'Demain entre 17h00 et 19h00',
  'Demain entre 19h00 et 21h00',
  'Samedi prochain entre 16h00 et 19h00',
  'Créneau sur-mesure (préciser en note)'
];
