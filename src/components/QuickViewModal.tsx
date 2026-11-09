'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ShieldCheck, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { JewelleryItem } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import { useWishlist } from '../context/WishlistContext';

interface QuickViewModalProps {
  item: JewelleryItem | null;
  onClose: () => void;
}

export default function QuickViewModal({ item, onClose }: QuickViewModalProps) {
  const { formatPrice } = useCurrency();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!item) return null;

  const isFavorited = isInWishlist(item.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-stone-700 hover:text-stone-950 hover:bg-white border border-stone-200 shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-stone-100">
          <Image
            src={item.images[0]}
            alt={item.name}
            fill
            className="object-cover object-center"
          />
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded shadow-sm">
              {item.specs.certificate} Certified
            </span>
          </div>
        </div>

        {/* Modal Info Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-amber-700 font-semibold mb-1">
              <span>{item.gemstoneType}</span>
              <span>{item.specs.caratWeight} Carats</span>
            </div>

            <h3 className="font-serif text-2xl text-stone-900 font-medium mb-2">
              {item.name}
            </h3>

            <p className="text-xl font-serif text-amber-700 font-bold mb-4">
              {formatPrice(item.price)}
            </p>

            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Specs Summary Table */}
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 space-y-2 text-xs">
              <div className="flex justify-between text-stone-500">
                <span>Cut & Shape:</span>
                <span className="text-stone-800 font-medium">{item.specs.cutShape}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Origin:</span>
                <span className="text-stone-800 font-medium">{item.specs.origin}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Clarity & Grade:</span>
                <span className="text-stone-800 font-medium">{item.specs.clarity} ({item.specs.colorGrade})</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Metal:</span>
                <span className="text-stone-800 font-medium">{item.metal}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-stone-100">
            <Link
              href={`/jewellery/${item.id}`}
              onClick={onClose}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] rounded flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>View Full Single Item Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => toggleWishlist(item.id)}
              className={`w-full py-2.5 border rounded text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors ${
                isFavorited
                  ? 'border-red-400 text-red-600 bg-red-50'
                  : 'border-stone-300 text-stone-700 hover:bg-stone-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-red-600' : ''}`} />
              <span>{isFavorited ? 'Saved to Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
