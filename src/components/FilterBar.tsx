'use client';

import React from 'react';
import { FilterState } from '../types';
import { Search, RotateCcw, ChevronDown, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalCount: number;
  filteredCount: number;
}

export default function FilterBar({
  filters,
  setFilters,
  totalCount,
  filteredCount,
}: FilterBarProps) {
  const categories = [
    { label: 'All Creations', value: 'all' },
    { label: 'Rings', value: 'rings' },
    { label: 'Necklaces & Pendants', value: 'necklaces' },
    { label: 'Earrings', value: 'earrings' },
    { label: 'Bracelets', value: 'bracelets' },
    { label: 'Loose Gemstones', value: 'gemstones' },
  ];

  const gemstones = [
    'All Gemstones',
    'Blue Sapphire',
    'Royal Ruby',
    'Colombian Emerald',
    'Flawless Diamond',
    'Padparadscha Sapphire',
    'Tanzanite',
    'Alexandrite',
    'Pink Tourmaline',
  ];

  const metals = [
    'All Metals',
    'Platinum 950',
    '18K Yellow Gold',
    '18K White Gold',
    '18K Rose Gold',
    'Two-Tone Gold',
    'Loose Stone (Unmounted)',
  ];

  const handleReset = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      gemstone: 'all',
      metal: 'all',
      minPrice: 0,
      maxPrice: 100000,
      sortBy: 'featured',
    });
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.gemstone !== 'all' ||
    filters.metal !== 'all' ||
    filters.searchQuery !== '' ||
    filters.minPrice > 0 ||
    filters.maxPrice < 100000;

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm mb-10 space-y-6">
      
      {/* Top Row: Search and Sort */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-700/80" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
            placeholder="Search by gemstone name, origin, carat or cut..."
            className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-lg pl-10 pr-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        {/* Results Counter & Sort Dropdown */}
        <div className="flex items-center justify-between md:justify-end gap-4">
          <span className="text-xs text-stone-600 font-medium">
            Showing <strong className="text-amber-800 font-bold">{filteredCount}</strong> of {totalCount} jewels
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 hidden sm:inline">Sort:</span>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as FilterState['sortBy'],
                }))
              }
              className="bg-stone-50 border border-stone-300 text-stone-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 cursor-pointer font-medium"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="carat-desc">Carat Weight: Largest</option>
            </select>
          </div>
        </div>

      </div>

      {/* Category Pills */}
      <div>
        <label className="block text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold mb-3">
          Jewellery Category
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = filters.category === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setFilters((prev) => ({ ...prev, category: cat.value }))}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-lg transition-all font-medium ${
                  active
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:text-stone-950 hover:bg-stone-200 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Filters: Gemstone, Metal, Price Range */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
        
        {/* Gemstone Dropdown */}
        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold mb-1.5">
            Gemstone Variety
          </label>
          <select
            value={filters.gemstone}
            onChange={(e) => setFilters((prev) => ({ ...prev, gemstone: e.target.value }))}
            className="w-full bg-stone-50 border border-stone-300 text-stone-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 cursor-pointer font-medium"
          >
            {gemstones.map((gem) => (
              <option key={gem} value={gem === 'All Gemstones' ? 'all' : gem}>
                {gem}
              </option>
            ))}
          </select>
        </div>

        {/* Metal Dropdown */}
        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold mb-1.5">
            Precious Metal
          </label>
          <select
            value={filters.metal}
            onChange={(e) => setFilters((prev) => ({ ...prev, metal: e.target.value }))}
            className="w-full bg-stone-50 border border-stone-300 text-stone-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 cursor-pointer font-medium"
          >
            {metals.map((metal) => (
              <option key={metal} value={metal === 'All Metals' ? 'all' : metal}>
                {metal}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter Bracket */}
        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold mb-1.5">
            Price Bracket
          </label>
          <select
            onChange={(e) => {
              const [min, max] = e.target.value.split('-').map(Number);
              setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
            }}
            value={`${filters.minPrice}-${filters.maxPrice}`}
            className="w-full bg-stone-50 border border-stone-300 text-stone-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 cursor-pointer font-medium"
          >
            <option value="0-100000">All Price Brackets</option>
            <option value="0-15000">Under $15,000</option>
            <option value="15000-25000">$15,000 - $25,000</option>
            <option value="25000-35000">$25,000 - $35,000</option>
            <option value="35000-100000">$35,000 and Above (Masterpieces)</option>
          </select>
        </div>

      </div>

      {/* Active Filter Indicators & Reset Action */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-100 text-xs">
          <div className="flex items-center gap-2 text-stone-600 font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
            <span>Active filters applied</span>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-amber-800 hover:text-amber-900 font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear All Filters</span>
          </button>
        </div>
      )}

    </div>
  );
}
