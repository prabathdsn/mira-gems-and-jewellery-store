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
  let specs = row.specs;
  if (typeof specs === 'string') {
    try {
      specs = JSON.parse(specs);
    } catch {
      specs = {};
    }
  }

  let images = row.images;
  if (typeof images === 'string') {
    try {
      images = JSON.parse(images);
    } catch {
      images = [];
    }
  }
  if (!Array.isArray(images)) {
    images = images ? [images as string] : [];
  }

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
    specs: specs as JewelleryItem['specs'],
    images: images as string[],
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

    if (!rows) {
      return [];
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

    return null;
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
      ORDER BY created_at DESC
      LIMIT ${limit}
    `) as DbProductRow[];

    if (rows && rows.length > 0) {
      return rows.map(mapRowToJewelleryItem);
    }

    const latestRows = (await sql`
      SELECT 
        id, name, tagline, category, gemstone_type, metal,
        price, original_price, is_featured, is_new_arrival, is_one_of_a_kind,
        description, full_story, specs, images, in_stock, rating, reviews_count
      FROM products
      ORDER BY created_at DESC
      LIMIT ${limit}
    `) as DbProductRow[];

    if (latestRows && latestRows.length > 0) {
      return latestRows.map(mapRowToJewelleryItem);
    }

    return [];
  } catch (error) {
    console.warn('PostgreSQL query error for featured products:', error);
    return JEWELLERY_PRODUCTS.slice(0, limit);
  }
}
