import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById, getAllProducts } from '../../../lib/products';
import ProductDetailClient from '../../../components/ProductDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = await getProductById(id);

  if (!item) {
    return {
      title: 'Jewellery Piece Not Found | MIRA Gem Store',
    };
  }

  return {
    title: `${item.name} | MIRA Gem Store`,
    description: item.tagline,
    openGraph: {
      title: item.name,
      description: item.tagline,
      images: [{ url: item.images[0] }],
    },
  };
}

export default async function SingleProductPage({ params }: PageProps) {
  const { id } = await params;
  const item = await getProductById(id);

  if (!item) {
    notFound();
  }

  // Related products
  const allProducts = await getAllProducts();
  const relatedItems = allProducts
    .filter((p) => p.id !== item.id && (p.category === item.category || p.gemstoneType === item.gemstoneType))
    .slice(0, 3);

  return <ProductDetailClient item={item} relatedItems={relatedItems} />;
}
