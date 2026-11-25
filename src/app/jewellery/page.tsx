import React, { Suspense } from 'react';
import { getAllProducts } from '../../lib/products';
import JewelleryCatalogClient from './JewelleryCatalogClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function JewelleryPage() {
  const products = await getAllProducts();

  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-amber-700 font-serif">Loading High Jewellery Vault...</div>}>
      <JewelleryCatalogClient initialProducts={products} />
    </Suspense>
  );
}
