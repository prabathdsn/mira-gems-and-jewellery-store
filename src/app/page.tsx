import { getFeaturedProducts } from '../lib/products';
import HomePageClient from '../components/HomePageClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const featuredPieces = await getFeaturedProducts(4);
  return <HomePageClient initialFeatured={featuredPieces} />;
}
