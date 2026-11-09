'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Gem, 
  Award, 
  Star, 
  ChevronRight
} from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { JEWELLERY_PRODUCTS, TESTIMONIALS } from '../data/products';
import { JewelleryItem } from '../types';

export default function HomePage() {
  const [selectedQuickView, setSelectedQuickView] = useState<JewelleryItem | null>(null);
  const [featuredPieces, setFeaturedPieces] = useState<JewelleryItem[]>(JEWELLERY_PRODUCTS.slice(0, 4));

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          const featured = json.data.filter((p: JewelleryItem) => p.isFeatured).slice(0, 4);
          setFeaturedPieces(featured.length > 0 ? featured : json.data.slice(0, 4));
        }
      })
      .catch((err) => console.warn('Could not fetch products from database API:', err));
  }, []);

  return (
    <div className="space-y-0 bg-white">
      
      {/* 1. HERO SECTION: MASTERPIECE SPOTLIGHT IMAGE SLIDER */}
      <ImageSlider />

      {/* 2. CURATED COLLECTIONS OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold block mb-2">
              Curated Haute Joaillerie
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light tracking-wide">
              Rare Earth Masterpieces
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Category Card 1 */}
            <Link
              href="/jewellery?category=rings"
              className="group relative h-96 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 transition-all duration-500 hover:border-amber-400 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <Image
                src="/images/categories/category-rings.jpg"
                alt="Solitaire & Cocktail Rings"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                  Collection
                </span>
                <h3 className="font-serif text-2xl text-white font-normal group-hover:text-amber-200 transition-colors">
                  Solitaire & Cocktail Rings
                </h3>
                <p className="text-xs text-stone-200 mt-1 flex items-center gap-1 font-light opacity-90">
                  <span>Explore 18k & Platinum creations</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </Link>

            {/* Category Card 2 */}
            <Link
              href="/jewellery?category=necklaces"
              className="group relative h-96 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 transition-all duration-500 hover:border-amber-400 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <Image
                src="/images/categories/category-necklaces.jpg"
                alt="High Jewellery Necklaces"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                  Collection
                </span>
                <h3 className="font-serif text-2xl text-white font-normal group-hover:text-amber-200 transition-colors">
                  Rivière & Statement Necklaces
                </h3>
                <p className="text-xs text-stone-200 mt-1 flex items-center gap-1 font-light opacity-90">
                  <span>Emerald & Diamond pendants</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </Link>

            {/* Category Card 3 */}
            <Link
              href="/jewellery?category=earrings"
              className="group relative h-96 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 transition-all duration-500 hover:border-amber-400 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <Image
                src="/images/categories/category-earrings.jpg"
                alt="Drop & Chandelier Earrings"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                  Collection
                </span>
                <h3 className="font-serif text-2xl text-white font-normal group-hover:text-amber-200 transition-colors">
                  Drop & Chandelier Earrings
                </h3>
                <p className="text-xs text-stone-200 mt-1 flex items-center gap-1 font-light opacity-90">
                  <span>Padparadscha & Diamond drops</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </Link>

            {/* Category Card 4 */}
            <Link
              href="/jewellery?category=gemstones"
              className="group relative h-96 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 transition-all duration-500 hover:border-amber-400 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <Image
                src="/images/categories/category-gemstones.jpg"
                alt="Loose Investment Gemstones"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                  Investment
                </span>
                <h3 className="font-serif text-2xl text-white font-normal group-hover:text-amber-200 transition-colors">
                  Loose Certified Gemstones
                </h3>
                <p className="text-xs text-stone-200 mt-1 flex items-center gap-1 font-light opacity-90">
                  <span>Untreated museum corundum</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* 3. FEATURED ATELIER PIECES (WITH "MORE INFO" BUTTONS) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold block mb-2">
                Hand-Selected Highlights
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
                Recent Atelier Additions
              </h2>
            </div>
            
            <Link
              href="/jewellery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              <span>Explore All Store Creations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPieces.map((piece) => (
              <ProductCard
                key={piece.id}
                item={piece}
                onQuickView={(item) => setSelectedQuickView(item)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. BRAND PHILOSOPHY & CRAFTSMANSHIP SECTION */}
      <section className="py-24 bg-[#faf8f5] border-y border-stone-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Story text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-800 text-xs tracking-[0.3em] uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Three Decades of Ethical Sourcing</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-light leading-tight">
                From Pristine Mine Gravels to <br />
                <span className="gold-gradient-text italic font-normal">
                  Haute Joaillerie Heirlooms
                </span>
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                Unlike mass-market commercial jewelry, our gemstones are unheated, untreated, and completely natural. We travel directly to the artisanal gem mines of Ratnapura (Sri Lanka), Muzo (Colombia), and Mogok (Burma), selecting only the top 0.01% of gem-quality rough crystals.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="font-serif text-3xl text-amber-700 font-bold block mb-1">0.01%</span>
                  <span className="text-xs uppercase tracking-wider text-stone-800 font-semibold block">
                    Selective Criteria
                  </span>
                  <span className="text-xs text-stone-500 font-light mt-0.5 block">
                    Only gems free from thermal glass-filling or resin treatments.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="font-serif text-3xl text-amber-700 font-bold block mb-1">100%</span>
                  <span className="text-xs uppercase tracking-wider text-stone-800 font-semibold block">
                    Certified Origin
                  </span>
                  <span className="text-xs text-stone-500 font-light mt-0.5 block">
                    Accompanied by premier Swiss (Gübelin, SSEF, GRS) or GIA dossiers.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 hover:text-amber-800 border border-stone-300 text-xs uppercase tracking-[0.2em] font-medium rounded transition-all shadow-sm"
                >
                  <span>Learn About Our Heritage & Artisans</span>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </Link>
              </div>

            </div>

            {/* Visual Mosaic Image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-stone-200 shadow-xl">
              <Image
                src="/images/atelier-craft.jpg"
                alt="Master Gemstone Setter and Jeweller at Work"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 text-xs text-stone-800 shadow-md">
                <p className="font-serif italic text-sm text-stone-900 mb-1">
                  &ldquo;A truly exceptional gemstone is nature’s poetry written deep in the mantle of the earth over millions of years.&rdquo;
                </p>
                <span className="text-[11px] text-amber-800 font-medium uppercase tracking-widest">
                  — Senior Master Gemologist, FGA
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. VERIFIED COLLECTOR TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold block mb-2">
              Privileged Trust
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
              Collector & Client Endorsements
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#faf8f5] border border-stone-200 hover:border-amber-300 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm italic font-serif leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <h4 className="text-sm font-semibold text-stone-900 tracking-wide">{t.name}</h4>
                  <span className="text-xs text-stone-500 block">{t.location}</span>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-amber-50 text-amber-800 text-[10px] uppercase tracking-wider rounded border border-amber-200 font-medium">
                    Acquired: {t.verifiedPurchase}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PRIVATE VIP CONSULTATION BANNER */}
      <section className="py-20 bg-[#faf8f5] border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-3 w-12 h-12 rounded-full bg-amber-50 text-amber-600 mx-auto flex items-center justify-center border border-amber-200 shadow-sm">
            <Gem className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
            Looking for a Specific Rare Gem or Custom Ring?
          </h2>

          <p className="max-w-xl mx-auto text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Connect directly with our owner and senior gemologists. We source custom-carat Ceylon sapphires, Colombian emeralds, and bespoke engagement mountings with private discretion.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] rounded transition-all shadow-md"
            >
              Contact Atelier & Send Direct Inquiry
            </Link>

            <Link
              href="/jewellery"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs uppercase tracking-[0.2em] font-medium rounded transition-colors shadow-sm"
            >
              Browse Jewellery Store
            </Link>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        item={selectedQuickView}
        onClose={() => setSelectedQuickView(null)}
      />

    </div>
  );
}
