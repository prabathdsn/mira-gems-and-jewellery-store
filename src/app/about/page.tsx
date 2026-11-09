'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Award, 
  Diamond, 
  ArrowRight,
  Compass,
  Hammer,
  Eye,
  FileCheck
} from 'lucide-react';

export default function AboutPage() {
  const laboratoryPartners = [
    { name: 'Gübelin Gem Lab', origin: 'Lucerne, Switzerland', badge: 'Swiss Gold Standard' },
    { name: 'GIA', origin: 'Carlsbad, California', badge: 'Global Diamond Authority' },
    { name: 'GRS Swisslab', origin: 'Berne & Hong Kong', badge: 'Colored Gemstone Specialist' },
    { name: 'SSEF', origin: 'Basel, Switzerland', badge: 'High Jewellery Analysis' },
  ];

  const craftSteps = [
    {
      step: '01',
      title: 'Artisanal Mine-Site Selection',
      desc: 'Our senior gemologists travel directly to the alluvial gravel pits of Ratnapura, the emerald veins of Muzo, and the marble valleys of Mogok to select natural rough crystals before commercial brokers intervene.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Precision Master Faceting',
      desc: 'Cut for maximum light dispersion rather than merely retaining dead weight. Every facet angle is computed to showcase true internal body color with zero windowing or dark extinction zones.',
      icon: Eye,
    },
    {
      step: '03',
      title: 'Handcrafted Haute Joaillerie',
      desc: 'Forged in solid 18k gold and platinum 950. Our master goldsmiths hand-carve each bezel and microscope-set DEF/VVS accent diamonds, ensuring heirloom durability for generations.',
      icon: Hammer,
    },
    {
      step: '04',
      title: 'Independent Swiss Certification',
      desc: 'Every single piece is dispatched to premier neutral gemological laboratories (Gübelin, GIA, GRS) for origin verification and unheated authenticity testing before entering our vault.',
      icon: FileCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-stone-800">
      
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden border-b border-stone-200 bg-[#faf8f5]">
        <Image
          src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=2000&q=90"
          alt="Master Artisan Handcrafting Fine Jewellery"
          fill
          priority
          className="object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs uppercase tracking-[0.25em] font-semibold mb-6 shadow-sm">
            <Diamond className="w-3.5 h-3.5 text-amber-600" />
            <span>Legacy & Provenance Since 1984</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-stone-900 font-light tracking-wide leading-tight mb-6">
            Custodians of Earth’s <br />
            <span className="italic gold-gradient-text font-normal">
              Most Rare Natural Splendor
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Founded with a singular commitment: to honor nature’s finest untreated gemstones through unmatched artisanal craftsmanship and flawless transparency.
          </p>
        </div>
      </section>

      {/* 2. OUR HERITAGE & ORIGIN STORY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold block">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light leading-snug">
              Three Generations in Ceylon’s Sacred Gem Valleys
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              Our story began forty years ago in Ratnapura—the historic &ldquo;City of Gems&rdquo; nestled in the lush tropical rainforests of Sri Lanka. Here, alluvial gravels have yielded royal sapphires worn by emperors, kings, and icons for over two millennia.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              Unlike the industrial gemstone market that depends heavily on heat treatment, diffusion, and artificial clarity enhancements, MIRA was built exclusively on the pursuit of the unheated and untouched: stones that emerged from deep underground with immaculate natural fire.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-stone-200">
              <div>
                <span className="font-serif text-3xl text-amber-700 font-bold block mb-1">1984</span>
                <span className="text-xs uppercase tracking-wider text-stone-800 font-semibold block">
                  Atelier Founded
                </span>
                <span className="text-xs text-stone-500 font-light mt-0.5 block">
                  Family-run mine concession in Ratnapura.
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-amber-700 font-bold block mb-1">42+</span>
                <span className="text-xs uppercase tracking-wider text-stone-800 font-semibold block">
                  Global Destinations
                </span>
                <span className="text-xs text-stone-500 font-light mt-0.5 block">
                  Discreet armored delivery to royal and private collectors.
                </span>
              </div>
            </div>
          </div>

          {/* Eye-catching Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 shadow-xl">
              <Image
                src="/images/products/product-loose-gem.jpg"
                alt="Natural Raw Sapphire and Faceted Gemstones"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded bg-white/90 border border-stone-200 text-amber-900 text-xs font-semibold backdrop-blur-sm shadow-sm">
                  Natural Cornflower & Royal Blue Corundum
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ETHICAL SOURCING & ARTISAN PROTOCOL */}
      <section className="py-24 bg-[#faf8f5] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold block mb-2">
              Uncompromising Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
              The 4 Pillars of Mira Gemology
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl text-amber-700/50 group-hover:text-amber-700 transition-colors font-bold">
                        {step.step}
                      </span>
                      <div className="p-3 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl text-stone-900 font-medium mb-3 group-hover:text-amber-800 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CERTIFICATION & LABORATORY CREDENTIALS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold block mb-2">
            Independent Verification
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
            Premier Gemological Dossiers
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light">
            We hold ourselves to the world’s strictest independent testing standards. Every major creation is certified by at least one of these esteemed international authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {laboratoryPartners.map((lab, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200 text-center space-y-3 hover:border-amber-400 transition-all shadow-sm"
            >
              <Award className="w-8 h-8 text-amber-600 mx-auto mb-1" />
              <h3 className="font-serif text-xl text-stone-900 font-medium">{lab.name}</h3>
              <p className="text-xs text-stone-500">{lab.origin}</p>
              <span className="inline-block px-2.5 py-1 rounded bg-amber-50 text-amber-800 text-[10px] uppercase tracking-wider font-semibold border border-amber-200">
                {lab.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VISUAL GALLERY OF ATELIER LIFE */}
      <section className="py-20 bg-[#faf8f5] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold block mb-2">
              Inside the Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
              Where Earth’s Poetry Takes Form
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 shadow-md group">
              <Image
                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
                alt="Jeweller cutting gemstone"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-serif text-white">Precision Lapidary Polishing</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 shadow-md group">
              <Image
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Presentation and Packaging"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-serif text-white">Velvet Armored Packaging</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 shadow-md group">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80"
                alt="Finished Blue Sapphire High Jewellery"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-serif text-white">Completed Heirloom Solitaire</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. VIP APPOINTMENT INVITATION */}
      <section className="py-24 bg-white text-center border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Private Salons in Colombo & Geneva</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-light">
            Experience Our Collections in Person
          </h2>

          <p className="max-w-xl mx-auto text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            We welcome serious collectors, investors, and bespoke clients to view our vaults under optical gemological microscopes with our senior fellows.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] rounded transition-all shadow-md"
            >
              Contact Owner & Reserve Salon Visit
            </Link>

            <Link
              href="/jewellery"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs uppercase tracking-[0.2em] font-medium rounded transition-colors shadow-sm"
            >
              Explore Current Pieces
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
