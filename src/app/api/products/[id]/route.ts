import { NextRequest, NextResponse } from 'next/server';
import { getProductById } from '../../../../lib/products';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: product,
      },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve product' },
      { status: 500 }
    );
  }
}
