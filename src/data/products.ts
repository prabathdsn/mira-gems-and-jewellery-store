import { JewelleryItem } from '../types';

export const JEWELLERY_PRODUCTS: JewelleryItem[] = [
  {
    id: 'ceylon-royal-blue-sapphire-ring',
    name: 'The Sovereign Ceylon Blue Sapphire Ring',
    tagline: '5.42 Carat Unheated Vivid Royal Blue Sapphire with Pavé Diamond Halos in Platinum 950',
    category: 'rings',
    gemstoneType: 'Blue Sapphire',
    metal: 'Platinum 950',
    price: 18500,
    originalPrice: 21000,
    isFeatured: true,
    isNewArrival: true,
    isOneOfAKind: true,
    description: 'A museum-grade Royal Blue Ceylon Sapphire sourced from the legendary mines of Ratnapura. Untreated and glowing with velvety cornflower brilliance, framed by micro-set collection diamond halos.',
    fullStory: 'Uncovered in the rich gravels of the historic Ratnapura river basin, this sapphire embodies the pinnacle of unheated corundum. Hand-finished by our master jewelers in our flagship atelier, every facet of the cushion cut was calibrated to reflect internal light without windowing. Flanked by 1.15 carats of tapered baguette and round brilliant DEF/VVS diamonds.',
    specs: {
      caratWeight: 5.42,
      cutShape: 'Cushion',
      clarity: 'VVS1',
      colorGrade: 'Royal Blue (Vivid Velvet)',
      treatment: 'Unheated / Untreated',
      origin: 'Ratnapura, Sri Lanka (Ceylon)',
      certificate: 'GRS',
      certificateNumber: 'GRS-2026-88412',
      dimensions: '10.82 x 9.15 x 6.44 mm'
    },
    images: [
      '/images/products/product-sapphire-ring.jpg',
      '/images/hero/hero-sapphire.jpg'
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 14
  },
  {
    id: 'colombian-muzo-emerald-necklace',
    name: 'Verdant Empress Colombian Emerald Necklace',
    tagline: '7.85 Carat Old-Mine Muzo Emerald Pendant Suspended from 18K Yellow Gold Diamond Riviere',
    category: 'necklaces',
    gemstoneType: 'Colombian Emerald',
    metal: '18K Yellow Gold',
    price: 32000,
    isFeatured: true,
    isNewArrival: false,
    isOneOfAKind: true,
    description: 'An alluring octagonal step-cut Colombian emerald possessing the mystical "jardin" inclusions that certify its historic Muzo origin, accentuated by 18k radiant warm yellow gold.',
    fullStory: 'From the deepest veins of Muzo, Colombia, this emerald captures the quintessential intense green hue celebrated in royal archives for centuries. Minor cedarwood oil treatment exclusively preserves its natural purity. Set upon a handcrafted articulating chain adorned with 4.5 carats of graduating round diamonds.',
    specs: {
      caratWeight: 7.85,
      cutShape: 'Emerald Cut',
      clarity: 'VS1',
      colorGrade: 'Muzo Green (Intense / Vivid)',
      treatment: 'None (Natural)',
      origin: 'Muzo, Colombia',
      certificate: 'Gübelin',
      certificateNumber: 'GUB-2026-09144',
      dimensions: '13.40 x 11.20 x 7.10 mm'
    },
    images: [
      '/images/products/product-emerald-necklace.jpg',
      '/images/hero/hero-emerald.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 9
  },
  {
    id: 'burmese-pigeons-blood-ruby-ring',
    name: 'Crimson Monarch Burmese Ruby Ring',
    tagline: '4.18 Carat Unheated Mogok Valley Pigeon’s Blood Ruby with Trillion Cut Diamond Accents',
    category: 'rings',
    gemstoneType: 'Royal Ruby',
    metal: '18K Rose Gold',
    price: 27500,
    originalPrice: 29000,
    isFeatured: true,
    isNewArrival: false,
    isOneOfAKind: true,
    description: 'A genuine unheated ruby originating from the legendary Mogok stone tracts of Burma. Displaying the world-renowned "Pigeon’s Blood" red with intense natural red fluorescence.',
    fullStory: 'Natural unheated rubies over 4 carats from Mogok constitute less than 0.001% of all corundum mined globally. This specimen exhibits the characteristic silky chromium glow that seems to illuminate in low light. Flanked by two matched D-flawless trillion cut diamonds (0.90ct total).',
    specs: {
      caratWeight: 4.18,
      cutShape: 'Cushion',
      clarity: 'VVS2',
      colorGrade: "Pigeon's Blood Red (Burma)",
      treatment: 'Unheated / Untreated',
      origin: 'Mogok Valley, Burma (Myanmar)',
      certificate: 'SSEF',
      certificateNumber: 'SSEF-2026-44102',
      dimensions: '9.85 x 8.40 x 5.90 mm'
    },
    images: [
      '/images/products/product-ruby-ring.jpg',
      '/images/hero/hero-ruby.jpg'
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 11
  },
  {
    id: 'flawless-solitaire-diamond-ring',
    name: 'Celestial Nova Solitaire Diamond Ring',
    tagline: '3.50 Carat D Color, Internally Flawless (D/IF) Triple Excellent Cut in Hand-Forged Platinum',
    category: 'rings',
    gemstoneType: 'Flawless Diamond',
    metal: 'Platinum 950',
    price: 45000,
    isFeatured: true,
    isNewArrival: true,
    isOneOfAKind: true,
    description: 'The epitome of optical perfection. A pristine 3.50-carat round brilliant diamond possessing the highest possible color and clarity grades awarded by GIA.',
    fullStory: 'Sourced through strict Kimberley Process compliance from artisanal ethical alluvial channels in Botswana. Cut with mathematical precision to maximize scintillation and fire (Hearts & Arrows). Mounted on an ultra-slim tapered platinum 950 band with a hidden pink diamond inside the inner shank.',
    specs: {
      caratWeight: 3.50,
      cutShape: 'Round Brilliant',
      clarity: 'IF',
      colorGrade: 'D (Colorless)',
      treatment: 'None (Natural)',
      origin: 'Ethically Sourced (Botswana)',
      certificate: 'GIA',
      certificateNumber: 'GIA-2026-66321',
      dimensions: '9.75 x 9.78 x 5.98 mm'
    },
    images: [
      '/images/products/product-diamond-ring.jpg',
      '/images/hero/hero-diamond.jpg'
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 22
  },
  {
    id: 'padparadscha-sapphire-earrings',
    name: 'Lotus Twilight Padparadscha Earrings',
    tagline: 'Matched Pair 6.20 Total Carats of Natural Untreated Ceylon Padparadscha Drops in 18K Rose Gold',
    category: 'earrings',
    gemstoneType: 'Padparadscha Sapphire',
    metal: '18K Rose Gold',
    price: 24000,
    originalPrice: 26500,
    isFeatured: false,
    isNewArrival: true,
    isOneOfAKind: true,
    description: 'An extraordinarily rare matched pair of unheated Padparadscha sapphires, glowing with the delicate pinkish-orange sunset hue revered as the sacred lotus blossom of Sri Lanka.',
    fullStory: 'Finding a single gem-quality Padparadscha is an ordeal; matching two crystals for identical tone, saturation, and refractive index required over four years of selective mining in Ratnapura. Articulated with French wire hooks and marquee diamond accents.',
    specs: {
      caratWeight: 6.20,
      cutShape: 'Pear',
      clarity: 'VVS1',
      colorGrade: 'Sunset Pink-Orange (Padparadscha)',
      treatment: 'Unheated / Untreated',
      origin: 'Ratnapura, Sri Lanka',
      certificate: 'Gübelin',
      certificateNumber: 'GUB-2026-77890',
      dimensions: '11.10 x 7.30 x 4.80 mm each'
    },
    images: [
      '/images/products/product-padparadscha-earrings.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 6
  },
  {
    id: 'loose-ceylon-cornflower-sapphire-gem',
    name: '12.40ct Investment Untreated Ceylon Cornflower Sapphire',
    tagline: 'Museum Specimen Loose Cushion Gemstone with Complete Gübelin Gemmological Dossier',
    category: 'gemstones',
    gemstoneType: 'Blue Sapphire',
    metal: 'Loose Stone (Unmounted)',
    price: 38000,
    isFeatured: true,
    isNewArrival: false,
    isOneOfAKind: true,
    description: 'An untreated, unheated loose sapphire crystal of colossal investment scale. Exceptional transparency with an open cornflower blue hue that stays vibrant in any lighting.',
    fullStory: 'Acquired directly at the artisanal pithead in Pelmadulla, Sri Lanka. Retains remarkable proportions and optical clarity rarely seen in stones above 10 carats. Available unmounted for private wealth portfolios or ready to be custom-set in a bespoke atelier ring.',
    specs: {
      caratWeight: 12.40,
      cutShape: 'Cushion',
      clarity: 'VVS1',
      colorGrade: 'Vivid Cornflower Blue',
      treatment: 'Unheated / Untreated',
      origin: 'Pelmadulla, Sri Lanka (Ceylon)',
      certificate: 'Gübelin',
      certificateNumber: 'GUB-2026-11004',
      dimensions: '15.20 x 13.10 x 8.45 mm'
    },
    images: [
      '/images/products/product-loose-gem.jpg'
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 5
  },
  {
    id: 'tanzanite-diamond-cuff-bracelet',
    name: 'Kilimanjaro Azure Tanzanite & Diamond Cuff',
    tagline: '18.50 Carats of Vivid Royal Blue-Violet Tanzanite Set with 6.20 Carats of Diamonds in 18K White Gold',
    category: 'bracelets',
    gemstoneType: 'Tanzanite',
    metal: '18K White Gold',
    price: 21500,
    originalPrice: 23500,
    isFeatured: false,
    isNewArrival: true,
    isOneOfAKind: true,
    description: 'A striking architectural hinged cuff bracelet showcasing vivid trichroic blue-violet tanzanites mined exclusively at the foothills of Mount Kilimanjaro.',
    fullStory: 'Tanzanite is found in only one single geographic deposit on earth, making it 1,000 times rarer than diamond. Hand-forged in mirror-finished 18k white gold with double security safety clasps.',
    specs: {
      caratWeight: 18.50,
      cutShape: 'Oval',
      clarity: 'VVS1',
      colorGrade: 'Deep Royal Violet-Blue',
      treatment: 'Standard Heat',
      origin: 'Merelani Hills, Tanzania',
      certificate: 'GIA',
      certificateNumber: 'GIA-2026-90432',
      dimensions: 'Graduating 8x6mm to 11x9mm'
    },
    images: [
      '/images/products/product-tanzanite-cuff.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 7
  },
  {
    id: 'russian-alexandrite-cocktail-ring',
    name: 'Chameleon Imperial Alexandrite Ring',
    tagline: '2.95 Carat 100% Color-Change Alexandrite with Marquise Diamond Wings in Platinum 950',
    category: 'rings',
    gemstoneType: 'Alexandrite',
    metal: 'Platinum 950',
    price: 36000,
    isFeatured: true,
    isNewArrival: false,
    isOneOfAKind: true,
    description: 'Emerald by day, ruby by night. This phenomenally rare chrysoberyl exhibits a dramatic 100% color transition from deep forest teal to fiery purplish raspberry under incandescent light.',
    fullStory: 'A legendary gemstone historically reserved for the Russian Imperial Court. Alexandrites with strong color-change above 2 carats command premier prices at international auctions.',
    specs: {
      caratWeight: 2.95,
      cutShape: 'Oval',
      clarity: 'VS1',
      colorGrade: 'Teal Green to Raspberry Red (100% Shift)',
      treatment: 'None (Natural)',
      origin: 'Ural Mountains / Minas Gerais',
      certificate: 'GRS',
      certificateNumber: 'GRS-2026-30219',
      dimensions: '8.90 x 7.10 x 4.60 mm'
    },
    images: [
      '/images/products/product-alexandrite-ring.jpg'
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 16
  },
  {
    id: 'rubellite-pink-tourmaline-pendant',
    name: 'Rose Éternelle Rubellite Tourmaline Pendant',
    tagline: '8.10 Carat Vivid Magenta Rubellite Surrounded by Brilliant Cut Diamond Micro-Pavé in 18K Yellow Gold',
    category: 'necklaces',
    gemstoneType: 'Pink Tourmaline',
    metal: '18K Yellow Gold',
    price: 14200,
    originalPrice: 16000,
    isFeatured: false,
    isNewArrival: true,
    isOneOfAKind: false,
    description: 'A glowing teardrop of electrifying raspberry magenta, suspended from an intricate diamond-encrusted bail and 18-inch gourmette chain.',
    fullStory: 'Mined from the pegmatite gem pockets of Madagascar, this rubellite possesses saturated neon clarity without dark brownish undertones.',
    specs: {
      caratWeight: 8.10,
      cutShape: 'Pear',
      clarity: 'VVS2',
      colorGrade: 'Electric Magenta Rubellite',
      treatment: 'None (Natural)',
      origin: 'Madagascar',
      certificate: 'IGI',
      certificateNumber: 'IGI-2026-55418',
      dimensions: '14.50 x 9.80 x 6.20 mm'
    },
    images: [
      '/images/products/product-rubellite-pendant.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 8
  }
];

export const SLIDER_HERO_ITEMS = [
  {
    id: 'ceylon-royal-blue-sapphire-ring',
    badge: 'Royal High Jewellery',
    title: 'The Sovereign Ceylon Sapphire',
    subtitle: '5.42ct Unheated Cornflower Blue Velvet',
    price: '$18,500',
    origin: 'Ratnapura, Sri Lanka',
    image: '/images/hero/hero-sapphire.jpg',
    link: '/jewellery/ceylon-royal-blue-sapphire-ring'
  },
  {
    id: 'colombian-muzo-emerald-necklace',
    badge: 'Museum Heritage',
    title: 'Verdant Empress Colombian Emerald',
    subtitle: '7.85ct Old-Mine Muzo Step Cut in 18K Gold',
    price: '$32,000',
    origin: 'Muzo, Colombia',
    image: '/images/hero/hero-emerald.jpg',
    link: '/jewellery/colombian-muzo-emerald-necklace'
  },
  {
    id: 'burmese-pigeons-blood-ruby-ring',
    badge: 'Rare Mineral Treasure',
    title: 'Crimson Monarch Pigeon Blood Ruby',
    subtitle: '4.18ct Untreated Mogok Valley Masterpiece',
    price: '$27,500',
    origin: 'Mogok Valley, Burma',
    image: '/images/hero/hero-ruby.jpg',
    link: '/jewellery/burmese-pigeons-blood-ruby-ring'
  },
  {
    id: 'flawless-solitaire-diamond-ring',
    badge: 'Triple Excellent Grade',
    title: 'Celestial Nova Flawless Solitaire',
    subtitle: '3.50ct D/IF Triple Excellent Diamond in Platinum',
    price: '$45,000',
    origin: 'Ethical African Mine',
    image: '/images/hero/hero-diamond.jpg',
    link: '/jewellery/flawless-solitaire-diamond-ring'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Lady Eleanor Vance',
    location: 'London & Geneva',
    text: 'Mira Gem Store delivered an extraordinary royal blue sapphire ring with full Gübelin documentation. The gemstone’s velvety luster is unparalleled. Their private concierge service made the acquisition seamless.',
    rating: 5,
    verifiedPurchase: '5.42ct Ceylon Sapphire Ring'
  },
  {
    name: 'Dr. Michael Chen',
    location: 'Singapore',
    text: 'I commissioned a bespoke Colombian emerald pendant for our 25th anniversary. From hand-selecting the rough gem to the 3D wax rendering and final hand-setting, their craftsmanship is absolute perfection.',
    rating: 5,
    verifiedPurchase: 'Custom Muzo Emerald Pendant'
  },
  {
    name: 'Sophia Al-Mansoor',
    location: 'Dubai & Milan',
    text: 'Finding genuine unheated Mogok rubies with true pigeon’s blood fire is exceedingly rare. Mira Gem Store is one of the few high jewellery ateliers I trust implicitly. The delivery was fully insured and flawless.',
    rating: 5,
    verifiedPurchase: '4.18ct Burmese Ruby Solitaire'
  }
];
