import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts } from '../../../lib/products';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const gem = searchParams.get('gem');
    const search = searchParams.get('search');

    let products = await getAllProducts();

    if (category && category !== 'all') {
      products = products.filter((p) => p.category === category);
    }

    if (gem && gem !== 'all') {
      products = products.filter((p) => p.gemstoneType === gem);
    }

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.gemstoneType.toLowerCase().includes(q) ||
          p.specs.origin.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return NextResponse.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve products' },
      { status: 500 }
    );
  }
}
