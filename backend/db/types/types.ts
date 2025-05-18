const CATEGORIES = {
  TOP: 'top',
  BOTTOM: 'bottom',
  DRESS: 'dress',
  FOOTWEAR: 'footwear',
  ACCESSORY: 'accessory',
  OUTERWEAR: 'outerwear'
};

// Detailed subcategories organized by main category
const SUBCATEGORIES = {
  // Tops
  [CATEGORIES.TOP]: [
    'tshirt',
    'tank_top',
    'blouse',
    'polo',
    'dress_shirt',
    'sweater',
    'hoodie',
    'sweatshirt',
    'cardigan',
    'tunic',
    'vest',
    'crop_top'
  ],
  
  // Bottoms
  [CATEGORIES.BOTTOM]: [
    'jeans',
    'shorts',
    'skirt',
    'pants',
    'leggings',
    'joggers',
    'trousers',
    'chinos',
    'culottes',
    'bermudas'
  ],

  [CATEGORIES.DRESS]: [
    'casual_dress',
    'evening_dress',
    'cocktail_dress',
    'maxi_dress',
    'midi_dress',
    'mini_dress',
    'sundress'
  ],
  
  // Footwear
  [CATEGORIES.FOOTWEAR]: [
    'sneakers',
    'boots',
    'sandals',
    'heels',
    'loafers',
    'flats',
    'slippers',
    'oxfords',
    'espadrilles',
    'mules'
  ],
  
  // Accessories
  [CATEGORIES.ACCESSORY]: [
    'hat',
    'bag',
    'belt',
    'scarf',
    'jewelry',
    'glasses',
    'gloves',
    'socks',
    'watch',
    'wallet'
  ],
  
  // Outerwear
  [CATEGORIES.OUTERWEAR]: [
    'jacket',
    'coat',
    'blazer',
    'parka',
    'windbreaker',
    'raincoat',
    'trench_coat',
    'poncho',
    'bomber',
    'denim_jacket'
  ]
};

// Color palette
const COLORS = [
  'black',
  'white',
  'gray',
  'beige',
  'brown',
  'navy',
  'blue',
  'red',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'olive',
  'burgundy',
  'teal',
  'khaki',
  'charcoal',
  'turquoise',
  'gold'
];

// Pattern types
const PATTERNS = [
  'solid',
  'striped',
  'plaid',
  'checkered',
  'floral',
  'polka_dot',
  'camouflage',
  'geometric',
  'animal_print',
  'abstract',
  'graphic',
  'tie_dye'
];

// Material types
const MATERIALS = [
  'cotton',
  'polyester',
  'denim',
  'wool',
  'leather',
  'silk',
  'linen',
  'suede',
  'jersey',
  'knit',
  'canvas',
  'nylon',
  'velvet',
  'satin',
  'corduroy'
];

// Styles
const STYLES = [
  'casual',
  'formal',
  'business',
  'sporty',
  'bohemian',
  'vintage',
  'streetwear',
  'minimalist',
  'preppy',
  'punk',
  'athleisure',
  'retro',
  'classic'
];

// Seasons
const SEASONS = [
  'spring',
  'summer',
  'fall',
  'winter',
  'all_season'
];

// Occasions
const OCCASIONS = [
  'everyday',
  'work',
  'party',
  'beach',
  'workout',
  'formal_event',
  'travel',
  'lounge',
  'outdoor',
  'special_occasion'
];

// Features (example features that can be identified)
const FEATURES = [
  'oversized',
  'slim_fit',
  'cropped',
  'high_waisted',
  'v_neck',
  'crew_neck',
  'sleeveless',
  'short_sleeve',
  'long_sleeve',
  'hooded',
  'collared',
  'zippered',
  'buttoned',
  'pocketed',
  'distressed',
  'pleated',
  'embroidered',
  'printed',
  'ruffled',
  'belted',
  'tapered',
  'wide_leg',
  'stretch',
  'quilted',
  'ribbed'
];

// Size ranges
const SIZES = [
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'one_size'
];

// Price ranges (for categorization purposes)
const PRICE_RANGES = {
  BUDGET: 'budget', // < $50
  MID_RANGE: 'mid_range', // $50-$150
  PREMIUM: 'premium', // $150-$500
  LUXURY: 'luxury' // > $500
};

const ITEM_SCHEMA = {
  id: 'string', // Unique identifier
  color: 'string[]', // Array of colors from COLORS (primary colors)
  accentColors: 'string[]', // Array of colors from COLORS (accent colors)
  category: 'string', // One of CATEGORIES
  subcategory: 'string', // One of SUBCATEGORIES based on category
  features: 'string[]', // Array of features from FEATURES
  pattern: 'string', // One of PATTERNS
  material: 'string', // One of MATERIALS
  style: 'string[]', // Array of applicable styles from STYLES
  season: 'string[]', // Array of applicable seasons from SEASONS
  occasion: 'string[]', // Array of applicable occasions from OCCASIONS
  size: 'string', // One of SIZES
  pictureUrl: 'string', // URL to the image
  description: 'string', // Generated description
  price: 'number', // Price in currency units
  priceRange: 'string', // One of PRICE_RANGES
  created: 'Date', // Creation timestamp
  updated: 'Date', // Last update timestamp
  author: 'string' // Creator/annotator
};

// Outfit compatibility rules
const COMPATIBILITY_RULES = [
  // Style compatibility
  {
    type: 'style_match',
    rule: 'Items in an outfit should share at least one style'
  },
  // Season compatibility
  {
    type: 'season_match',
    rule: 'Items should be appropriate for the same season'
  },
  // Color harmony
  {
    type: 'color_harmony',
    rule: 'Colors should be complementary or from the same palette'
  }
];