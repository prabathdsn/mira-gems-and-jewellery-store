import { getDb } from './db';
import { JewelleryItem } from '../types';
import { JEWELLERY_PRODUCTS } from '../data/products';

export interface DbProductRow {
  id: string;
  name: string;
  tagline: string;
  category: string;
  gemstone_type: string;
  metal: string;
  price: number | string;
  original_price: number | string | null;
  is_featured: boolean | null;
  is_new_arrival: boolean | null;
  is_one_of_a_kind: boolean | null;
  description: string;
  full_story: string;
  specs: unknown;
  images: unknown;
  in_stock: boolean | null;
  rating: number | string | null;
  reviews_count: number | null;
}

export function mapRowToJewelleryItem(row: DbProductRow): JewelleryItem {
  const specs = typeof row.specs === 'string' ? JSON.parse(row.specs) : row.specs;
  const images = typeof row.images === 'string' ? JSON.parse(row.images) : (row.images as string[]) || [];

  return {
    id: row.id,
    name: row.name,
    tagline: row.tagline,
    category: row.category as JewelleryItem['category'],
    gemstoneType: row.gemstone_type as JewelleryItem['gemstoneType'],
    metal: row.metal as JewelleryItem['metal'],
    price: Number(row.price),
    originalPrice: row.original_price ? Number(row.original_price) : undefined,
    isFeatured: Boolean(row.is_featured),
    isNewArrival: Boolean(row.is_new_arrival),
    isOneOfAKind: Boolean(row.is_one_of_a_kind),
    description: row.description,
    fullStory: row.full_story,
    specs,
    images,
    inStock: row.in_stock !== false,
    rating: row.rating ? Number(row.rating) : 5.0,
    reviewsCount: row.reviews_count ? Number(row.reviews_count) : 0,
  };
}

export async function getAllProducts(): Promise<JewelleryItem[]> {
  const sql = getDb();

  if (!sql) {
    // Database URL not configured yet, fallback to static dataset
    return JEWELLERY_PRODUCTS;
  }

  try {
    const rows = (await sql`
      SELECT 
        id, name, tagline, category, gemstone_type, metal,
        price, original_price, is_featured, is_new_arrival, is_one_of_a_kind,
        description, full_story, specs, images, in_stock, rating, reviews_count
      FROM products
      ORDER BY is_featured DESC, created_at DESC
    `) as DbProductRow[];

    if (!rows || rows.length === 0) {
      return JEWELLERY_PRODUCTS;
    }

    return rows.map(mapRowToJewelleryItem);
  } catch (error) {
    console.warn('PostgreSQL query error, using fallback data:', error);
    return JEWELLERY_PRODUCTS;
  }
}

export async function getProductById(id: string): Promise<JewelleryItem | null> {
  const sql = getDb();

  if (!sql) {
    return JEWELLERY_PRODUCTS.find((p) => p.id === id) || null;
  }

  try {
    const rows = (await sql`
      SELECT 
        id, name, tagline, category, gemstone_type, metal,
        price, original_price, is_featured, is_new_arrival, is_one_of_a_kind,
        description, full_story, specs, images, in_stock, rating, reviews_count
      FROM products
      WHERE id = ${id}
      LIMIT 1
    `) as DbProductRow[];

    if (rows && rows.length > 0) {
      return mapRowToJewelleryItem(rows[0]);
    }

    return JEWELLERY_PRODUCTS.find((p) => p.id === id) || null;
  } catch (error) {
    console.warn(`PostgreSQL query error for product ${id}:`, error);
    return JEWELLERY_PRODUCTS.find((p) => p.id === id) || null;
  }
}

export async function getFeaturedProducts(limit = 4): Promise<JewelleryItem[]> {
  const sql = getDb();

  if (!sql) {
    return JEWELLERY_PRODUCTS.slice(0, limit);
  }

  try {
    const rows = (await sql`
      SELECT 
        id, name, tagline, category, gemstone_type, metal,
        price, original_price, is_featured, is_new_arrival, is_one_of_a_kind,
        description, full_story, specs, images, in_stock, rating, reviews_count
      FROM products
      WHERE is_featured = TRUE
      LIMIT ${limit}
    `) as DbProductRow[];

    if (rows && rows.length > 0) {
      return rows.map(mapRowToJewelleryItem);
    }

    return JEWELLERY_PRODUCTS.slice(0, limit);
  } catch (error) {
    console.warn('PostgreSQL query error for featured products:', error);
    return JEWELLERY_PRODUCTS.slice(0, limit);
  }
}
