import { NextResponse } from 'next/server';
import { getDb, isDbConfigured } from '../../../../lib/db';
import { JEWELLERY_PRODUCTS } from '../../../../data/products';

export async function GET() {
  if (!isDbConfigured()) {
    return NextResponse.json(
      {
        success: false,
        error: 'DATABASE_URL environment variable is not configured.',
        instruction: 'Add DATABASE_URL="postgresql://user:pass@ep-xyz.neon.tech/neondb?sslmode=require" to your .env.local file.',
      },
      { status: 400 }
    );
  }

  const sql = getDb();
  if (!sql) {
    return NextResponse.json(
      { success: false, error: 'Could not connect to database' },
      { status: 500 }
    );
  }

  try {
    // 1. Create table schema
    await sql`
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
    `;

    // 2. Create indices
    await sql`CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);`;
    await sql`CREATE INDEX IF NOT EXISTS idx_products_gemstone ON products(gemstone_type);`;
    await sql`CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);`;

    // 3. Seed data
    let insertedCount = 0;
    for (const item of JEWELLERY_PRODUCTS) {
      await sql`
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
          ${Boolean(item.isFeatured)},
          ${Boolean(item.isNewArrival)},
          ${Boolean(item.isOneOfAKind)},
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
      `;
      insertedCount++;
    }

    const countResult = (await sql`SELECT count(*)::int as count FROM products;`) as { count: number }[];

    return NextResponse.json({
      success: true,
      message: 'Neon PostgreSQL database tables created and seeded successfully!',
      seededItemsCount: insertedCount,
      totalItemsInDb: countResult[0]?.count || insertedCount,
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Database initialization failed',
      },
      { status: 500 }
    );
  }
}
