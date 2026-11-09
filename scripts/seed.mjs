import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();
import { neon } from '@neondatabase/serverless';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('❌ Error: DATABASE_URL environment variable is missing.');
  console.error('Please create a .env.local file with: DATABASE_URL="postgresql://user:pass@ep-xyz.neon.tech/neondb?sslmode=require"');
  process.exit(1);
}

const sql = neon(connectionString);

const SEED_PRODUCTS = [
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
    originalPrice: null,
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
    originalPrice: null,
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
    originalPrice: null,
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
    originalPrice: null,
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

async function queryWithRetry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.log(`  ⚠️ Connection hiccup, retrying (${i + 1}/${retries})...`);
      await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
    }
  }
}

async function seedDatabase() {
  console.log('🔄 Connecting to Neon PostgreSQL...');
  
  // 1. Create table schema
  console.log('📐 Ensuring products table exists...');
  await queryWithRetry(() => sql`
    CREATE TABLE IF NOT EXISTS products (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      tagline TEXT NOT NULL,
      category VARCHAR(50) NOT NULL,
      gemstone_type VARCHAR(100) NOT NULL,
      metal VARCHAR(100) NOT NULL,
      price NUMERIC(12, 2) NOT NULL,
      original_price NUMERIC(12, 2),
      is_featured BOOLEAN DEFAULT FALSE,
      is_new_arrival BOOLEAN DEFAULT FALSE,
      is_one_of_a_kind BOOLEAN DEFAULT FALSE,
      description TEXT NOT NULL,
      full_story TEXT NOT NULL,
      specs JSONB NOT NULL,
      images JSONB NOT NULL,
      in_stock BOOLEAN DEFAULT TRUE,
      rating NUMERIC(3, 2) DEFAULT 5.0,
      reviews_count INTEGER DEFAULT 0,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // 2. Create indices
  await queryWithRetry(() => sql`CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);`);
  await queryWithRetry(() => sql`CREATE INDEX IF NOT EXISTS idx_products_gemstone ON products(gemstone_type);`);
  await queryWithRetry(() => sql`CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);`);

  console.log('💎 Updating products with new local high-res images...');

  for (const item of SEED_PRODUCTS) {
    await queryWithRetry(() => sql`
      INSERT INTO products (
        id, name, tagline, category, gemstone_type, metal,
        price, original_price, is_featured, is_new_arrival, is_one_of_a_kind,
        description, full_story, specs, images, in_stock, rating, reviews_count
      ) VALUES (
        ${item.id},
        ${item.name},
        ${item.tagline},
        ${item.category},
        ${item.gemstoneType},
        ${item.metal},
        ${item.price},
        ${item.originalPrice || null},
        ${item.isFeatured},
        ${item.isNewArrival},
        ${item.isOneOfAKind},
        ${item.description},
        ${item.fullStory},
        ${JSON.stringify(item.specs)},
        ${JSON.stringify(item.images)},
        ${item.inStock},
        ${item.rating},
        ${item.reviewsCount}
      )
      ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        tagline = EXCLUDED.tagline,
        category = EXCLUDED.category,
        gemstone_type = EXCLUDED.gemstone_type,
        metal = EXCLUDED.metal,
        price = EXCLUDED.price,
        original_price = EXCLUDED.original_price,
        is_featured = EXCLUDED.is_featured,
        is_new_arrival = EXCLUDED.is_new_arrival,
        is_one_of_a_kind = EXCLUDED.is_one_of_a_kind,
        description = EXCLUDED.description,
        full_story = EXCLUDED.full_story,
        specs = EXCLUDED.specs,
        images = EXCLUDED.images,
        in_stock = EXCLUDED.in_stock,
        rating = EXCLUDED.rating,
        reviews_count = EXCLUDED.reviews_count;
    `);
    console.log(`  ✓ Updated in Neon DB: ${item.name}`);
  }

  const countResult = await queryWithRetry(() => sql`SELECT count(*)::int as count FROM products;`);
  console.log(`\n🎉 Neon PostgreSQL seeded with local images! Total products in DB: ${countResult[0].count}`);
}

seedDatabase().catch((err) => {
  console.error('❌ Failed to seed database:', err);
  process.exit(1);
});
