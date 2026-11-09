'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { JEWELLERY_PRODUCTS } from '../../data/products';
import { FilterState, JewelleryItem } from '../../types';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';
import QuickViewModal from '../../components/QuickViewModal';
import { useWishlist } from '../../context/WishlistContext';
import { Diamond, Heart, RotateCcw } from 'lucide-react';

function JewelleryCatalogContent() {
  const searchParams = useSearchParams();
  const { wishlist } = useWishlist();

  // Read query params from URL
  const initialCategory = searchParams.get('category') || 'all';
  const initialGem = searchParams.get('gem') || 'all';
  const initialSearch = searchParams.get('search') || '';
  const initialWishlistFilter = searchParams.get('filter') === 'wishlist';

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: initialSearch,
    category: initialCategory,
    gemstone: initialGem,
    metal: 'all',
    minPrice: 0,
    maxPrice: 100000,
    sortBy: 'featured',
  });

  const [showWishlistOnly, setShowWishlistOnly] = useState(initialWishlistFilter);
  const [selectedQuickView, setSelectedQuickView] = useState<JewelleryItem | null>(null);
  const [allProducts, setAllProducts] = useState<JewelleryItem[]>(JEWELLERY_PRODUCTS);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setAllProducts(json.data);
        }
      })
      .catch((err) => console.warn('Could not fetch products from database API:', err));
  }, []);

  // Sync if URL query changes
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    const urlGem = searchParams.get('gem');
    const urlSearch = searchParams.get('search');
    const urlWishlist = searchParams.get('filter') === 'wishlist';

    if (urlCategory) setFilters((prev) => ({ ...prev, category: urlCategory }));
    if (urlGem) setFilters((prev) => ({ ...prev, gemstone: urlGem }));
    if (urlSearch !== null) setFilters((prev) => ({ ...prev, searchQuery: urlSearch }));
    setShowWishlistOnly(urlWishlist);
  }, [searchParams]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Wishlist Only Filter
    if (showWishlistOnly) {
      result = result.filter((item) => wishlist.includes(item.id));
    }

    // Category Filter
    if (filters.category !== 'all') {
      result = result.filter((item) => item.category === filters.category);
    }

    // Gemstone Filter
    if (filters.gemstone !== 'all') {
      result = result.filter((item) => item.gemstoneType === filters.gemstone);
    }

    // Metal Filter
    if (filters.metal !== 'all') {
      result = result.filter((item) => item.metal === filters.metal);
    }

    // Price Filter
    result = result.filter(
      (item) => item.price >= filters.minPrice && item.price <= filters.maxPrice
    );

    // Search Query Filter
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.gemstoneType.toLowerCase().includes(q) ||
          item.specs.origin.toLowerCase().includes(q) ||
          item.specs.cutShape.toLowerCase().includes(q) ||
          item.specs.colorGrade.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'carat-desc':
        result.sort((a, b) => b.specs.caratWeight - a.specs.caratWeight);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [filters, showWishlistOnly, wishlist]);

  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs uppercase tracking-[0.25em] font-semibold mb-4 shadow-sm">
            <Diamond className="w-3.5 h-3.5 text-amber-600" />
            <span>Store Catalog & Fine Vault</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-stone-900 font-light tracking-wide mb-4">
            {showWishlistOnly ? 'Your Saved Creations' : 'High Jewellery & Gemstones'}
          </h1>

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            {showWishlistOnly
              ? 'Pieces you have marked for VIP consultation or acquisition.'
              : 'Discover certified Ceylon sapphires, Colombian emeralds, Burmese rubies, and handcrafted fine jewellery. Each item features full gemological documentation and direct atelier inquiry.'}
          </p>

          {/* Toggle between All and Saved Wishlist */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setShowWishlistOnly(false)}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded-lg transition-all font-medium ${
                !showWishlistOnly
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:text-stone-950 border border-stone-200'
              }`}
            >
              All Store Items ({allProducts.length})
            </button>

            <button
              onClick={() => setShowWishlistOnly(true)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider rounded-lg transition-all font-medium ${
                showWishlistOnly
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:text-stone-950 border border-stone-200'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${showWishlistOnly ? 'fill-current text-stone-950' : 'text-amber-600'}`} />
              <span>Saved Wishlist ({wishlist.length})</span>
            </button>
          </div>
        </div>

        {/* Filter Bar Component */}
        {!showWishlistOnly && (
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            totalCount={allProducts.length}
            filteredCount={filteredProducts.length}
          />
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onQuickView={(piece) => setSelectedQuickView(piece)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 px-6 text-center bg-[#faf8f5] border border-stone-200 rounded-2xl max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 mx-auto flex items-center justify-center border border-amber-200">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 font-medium">
              No matching pieces found
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              We couldn’t find any jewellery matching your specific filters. Try resetting the filters or contacting our concierge for bespoke procurement.
            </p>
            <button
              onClick={() => {
                setFilters({
                  searchQuery: '',
                  category: 'all',
                  gemstone: 'all',
                  metal: 'all',
                  minPrice: 0,
                  maxPrice: 100000,
                  sortBy: 'featured',
                });
                setShowWishlistOnly(false);
              }}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 hover:text-white text-xs uppercase tracking-wider font-semibold rounded transition-colors shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Quick View Modal */}
        <QuickViewModal
          item={selectedQuickView}
          onClose={() => setSelectedQuickView(null)}
        />

      </div>
    </div>
  );
}

export default function JewelleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-amber-700 font-serif">Loading High Jewellery Vault...</div>}>
      <JewelleryCatalogContent />
    </Suspense>
  );
}
