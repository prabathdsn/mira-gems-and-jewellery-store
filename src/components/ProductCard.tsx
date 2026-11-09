'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Info, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import { JewelleryItem } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  item: JewelleryItem;
  onQuickView?: (item: JewelleryItem) => void;
}

export default function ProductCard({ item, onQuickView }: ProductCardProps) {
  const { formatPrice } = useCurrency();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isFavorited = isInWishlist(item.id);

  return (
    <div className="group bg-white border border-stone-200 hover:border-amber-400/80 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      
      {/* Image Container with Badges & Actions */}
      <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-100">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Subtle Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {item.isOneOfAKind && (
            <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-wider rounded shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              One of a Kind
            </span>
          )}
          {item.isNewArrival && (
            <span className="px-2.5 py-1 bg-stone-900 text-stone-100 text-[10px] uppercase tracking-wider rounded shadow-sm">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist and Quick View Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={() => toggleWishlist(item.id)}
            aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`p-2 rounded-full transition-all shadow-sm ${
              isFavorited
                ? 'bg-red-500 text-white shadow-md'
                : 'bg-white/90 text-stone-700 hover:text-red-500 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>

          {onQuickView && (
            <button
              onClick={() => onQuickView(item)}
              aria-label="Quick preview"
              className="p-2 rounded-full bg-white/90 hover:bg-amber-500 hover:text-stone-950 text-stone-700 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center shadow-sm"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Certificate Pill */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/95 text-amber-900 text-[10px] font-semibold border border-amber-200 shadow-sm backdrop-blur-sm">
            <ShieldCheck className="w-3 h-3 text-amber-600" />
            {item.specs.certificate} Verified
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Gem Type Subheading */}
          <div className="flex items-center justify-between text-[11px] text-amber-700 uppercase tracking-widest font-semibold mb-1.5">
            <span>{item.gemstoneType}</span>
            <span>{item.specs.caratWeight} ct</span>
          </div>

          {/* Title */}
          <Link href={`/jewellery/${item.id}`} className="block group-hover:text-amber-700 transition-colors">
            <h3 className="font-serif text-lg sm:text-xl text-stone-900 font-medium leading-snug line-clamp-1">
              {item.name}
            </h3>
          </Link>

          {/* Quick Specifications snippet */}
          <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>Shape: <strong className="text-stone-800 font-medium">{item.specs.cutShape}</strong></span>
            <span>Metal: <strong className="text-stone-800 font-medium">{item.metal.split(' ')[0]}</strong></span>
          </div>
        </div>

        {/* Pricing and Required "More Info" Action */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">Acquisition Price</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-serif text-amber-700 font-bold">
                {formatPrice(item.price)}
              </span>
              {item.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  {formatPrice(item.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* More Info Button required by User */}
          <Link
            href={`/jewellery/${item.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 hover:text-white font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-sm hover:shadow-[0_4px_12px_rgba(184,142,40,0.3)]"
          >
            <Info className="w-3.5 h-3.5" />
            <span>More Info</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
