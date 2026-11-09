'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  Heart, 
  Share2, 
  Mail, 
  PhoneCall, 
  Check, 
  Truck, 
  Sparkles, 
  ChevronRight,
  Info
} from 'lucide-react';
import { JewelleryItem } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from './ProductCard';

interface ProductDetailClientProps {
  item: JewelleryItem;
  relatedItems: JewelleryItem[];
}

export default function ProductDetailClient({ item, relatedItems }: ProductDetailClientProps) {
  const { formatPrice } = useCurrency();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'story' | 'shipping' | 'certificate'>('specs');
  const [copiedLink, setCopiedLink] = useState(false);

  const isFavorited = isInWishlist(item.id);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-amber-800 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/jewellery" className="hover:text-amber-800 transition-colors">Jewellery Vault</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href={`/jewellery?category=${item.category}`} className="hover:text-amber-800 transition-colors uppercase">
            {item.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-800 font-semibold truncate max-w-xs">{item.name}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/jewellery"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-amber-800 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Jewellery Collection</span>
          </Link>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Multi-Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-lg group">
              <Image
                src={item.images[selectedImageIndex] || item.images[0]}
                alt={item.name}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Badges on main image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {item.isOneOfAKind && (
                  <span className="px-3 py-1 bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    One of a Kind Masterpiece
                  </span>
                )}
                <span className="px-3 py-1 bg-white/95 text-stone-900 border border-stone-200 text-xs uppercase tracking-wider rounded shadow-sm font-medium">
                  {item.specs.origin}
                </span>
              </div>

              {/* Wishlist and Share Floating Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button
                  onClick={() => toggleWishlist(item.id)}
                  aria-label="Save to wishlist"
                  className={`p-3 rounded-full transition-all shadow-md ${
                    isFavorited
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white/90 text-stone-700 hover:text-red-500 hover:bg-white border border-stone-200'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  aria-label="Share jewel"
                  className="p-3 rounded-full bg-white/90 text-stone-700 hover:text-amber-800 hover:bg-white border border-stone-200 shadow-md transition-all relative"
                  title="Copy link"
                >
                  {copiedLink ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
                </button>
              </div>

            </div>

            {/* Thumbnail Selector */}
            {item.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {item.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-amber-500 shadow-md scale-105'
                        : 'border-stone-200 opacity-70 hover:opacity-100 hover:border-stone-400'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${item.name} angle ${idx + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Guarantees Ribbon */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-stone-200 text-center text-xs">
              <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-stone-200 shadow-sm">
                <Award className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <span className="text-stone-900 font-semibold block">Original Report</span>
                <span className="text-stone-500 text-[10px]">{item.specs.certificate} Dossier Included</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-stone-200 shadow-sm">
                <Truck className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <span className="text-stone-900 font-semibold block">Free Insured Courier</span>
                <span className="text-stone-500 text-[10px]">Worldwide Armored Delivery</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-stone-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <span className="text-stone-900 font-semibold block">Lifetime Guarantee</span>
                <span className="text-stone-500 text-[10px]">Annual Maintenance & Sizing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Item Info & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-800 font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{item.gemstoneType} • {item.specs.caratWeight} Carats</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light leading-tight mb-3">
                {item.name}
              </h1>

              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                {item.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-amber-200 flex items-baseline justify-between shadow-sm">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-1 font-semibold">
                  Private Acquisition Price
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl sm:text-4xl text-amber-800 font-bold">
                    {formatPrice(item.price)}
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Available in Atelier
                </span>
              </div>
            </div>

            {/* Key Specifications High-Visibility Snapshot */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3 shadow-sm">
              <h4 className="text-xs uppercase tracking-[0.2em] text-amber-800 font-semibold flex items-center gap-1.5 mb-2">
                <Info className="w-3.5 h-3.5 text-amber-600" />
                <span>Gemological Identity Snapshot</span>
              </h4>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                <div>
                  <span className="text-stone-500 block">Origin:</span>
                  <span className="text-stone-900 font-medium">{item.specs.origin}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Carat Weight:</span>
                  <span className="text-stone-900 font-medium">{item.specs.caratWeight} ct</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Cut Shape:</span>
                  <span className="text-stone-900 font-medium">{item.specs.cutShape}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Color & Hue:</span>
                  <span className="text-stone-900 font-medium">{item.specs.colorGrade}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Clarity Grade:</span>
                  <span className="text-stone-900 font-medium">{item.specs.clarity}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Enhancement:</span>
                  <span className="text-stone-900 font-medium">{item.specs.treatment}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Metal Alloy:</span>
                  <span className="text-stone-900 font-medium">{item.metal}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Official Certificate:</span>
                  <span className="text-amber-800 font-semibold">{item.specs.certificate} ({item.specs.certificateNumber})</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Direct Inquiry to owner with prefilled piece */}
            <div className="space-y-3 pt-2">
              <Link
                href={`/contact?piece=${encodeURIComponent(item.name)}&id=${item.id}&price=${item.price}`}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 hover:text-white font-bold text-xs uppercase tracking-[0.25em] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                <span>Inquire with Owner & Atelier</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  className="py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call Concierge</span>
                </Link>

                <button
                  onClick={() => toggleWishlist(item.id)}
                  className={`py-3 px-4 rounded-xl border text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    isFavorited
                      ? 'border-red-400 text-red-600 bg-red-50'
                      : 'border-stone-200 text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
                  <span>{isFavorited ? 'In Wishlist' : 'Save to Wishlist'}</span>
                </button>
              </div>
            </div>

            {/* Interactive Tabbed Information Sections */}
            <div className="pt-6 border-t border-stone-200">
              <div className="flex border-b border-stone-200 text-xs">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-3 px-3 uppercase tracking-wider font-semibold transition-colors border-b-2 ${
                    activeTab === 'specs'
                      ? 'border-amber-600 text-amber-800'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Dimensions & Care
                </button>
                <button
                  onClick={() => setActiveTab('story')}
                  className={`pb-3 px-3 uppercase tracking-wider font-semibold transition-colors border-b-2 ${
                    activeTab === 'story'
                      ? 'border-amber-600 text-amber-800'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Provenance & Story
                </button>
                <button
                  onClick={() => setActiveTab('certificate')}
                  className={`pb-3 px-3 uppercase tracking-wider font-semibold transition-colors border-b-2 ${
                    activeTab === 'certificate'
                      ? 'border-amber-600 text-amber-800'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Certification
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-3 px-3 uppercase tracking-wider font-semibold transition-colors border-b-2 ${
                    activeTab === 'shipping'
                      ? 'border-amber-600 text-amber-800'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Shipping
                </button>
              </div>

              <div className="py-4 text-xs text-stone-700 leading-relaxed min-h-[120px]">
                {activeTab === 'specs' && (
                  <div className="space-y-2">
                    <p><strong>Physical Dimensions:</strong> {item.specs.dimensions}</p>
                    <p><strong>Mounting Setting:</strong> Handcrafted pavé diamond halo & bespoke prongs calibrated specifically for this stone&apos;s culet depth.</p>
                    <p><strong>Ring Sizing:</strong> Complimentary precision resizing available from US 4 to US 10 prior to dispatch.</p>
                  </div>
                )}

                {activeTab === 'story' && (
                  <div>
                    <p className="mb-2">{item.fullStory}</p>
                    <p className="text-stone-500 italic">Every gem purchased directly supports local artisanal mining cooperatives and sustainable reclamation programs.</p>
                  </div>
                )}

                {activeTab === 'certificate' && (
                  <div className="space-y-2">
                    <p><strong>Issuing Laboratory:</strong> {item.specs.certificate} Laboratory Report</p>
                    <p><strong>Report Reference Number:</strong> {item.specs.certificateNumber}</p>
                    <p>Original physical dossier booklet with micro-laser hologram and spectral analysis charts ships in a velvet presentation folder alongside the jewel.</p>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-2">
                    <p><strong>Discreet Armored Shipping:</strong> Complimentary door-to-door courier via Malca-Amit or Ferrari Express with 100% full transit insurance.</p>
                    <p><strong>Signature Delivery:</strong> Requires adult photo ID verification at the time of delivery.</p>
                    <p><strong>Atelier Pickup:</strong> Private salon handover available in Colombo, Geneva, or New York by appointment.</p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Matching / Related Creations */}
        {relatedItems.length > 0 && (
          <section className="pt-24 mt-24 border-t border-stone-200">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold block mb-1">
                  Harmonizing Pieces
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-light">
                  You May Also Admire
                </h3>
              </div>
              <Link
                href="/jewellery"
                className="text-xs uppercase tracking-wider text-amber-800 hover:text-amber-900 font-semibold transition-colors"
              >
                View Full Collection →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedItems.map((rel) => (
                <ProductCard key={rel.id} item={rel} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
