'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Pause, Play, MapPin } from 'lucide-react';
import { SLIDER_HERO_ITEMS } from '../data/products';

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = SLIDER_HERO_ITEMS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying]);

  const currentItem = SLIDER_HERO_ITEMS[currentIndex];

  return (
    <section className="relative w-full p-0 m-0 bg-stone-950 border-b border-stone-200 overflow-hidden">
      {/* The Full-Bleed Carousel Slider Container */}
      <div 
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Main Slide Presentation */}
        <div className="relative w-full min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[720px] flex items-end">
          
          {/* Background Image of current slide with fade effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              key={currentItem.id}
              src={currentItem.image}
              alt={currentItem.title}
              fill
              priority
              className="object-cover object-center transition-transform duration-1000 ease-out scale-100 group-hover:scale-105"
            />
            {/* Multi-layered luxury gradient overlay for ultimate text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/40 to-transparent hidden md:block" />
          </div>

          {/* Slide Information Card - Centered within max-w-7xl layout grid */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-10 sm:pb-14 md:pb-16 text-white">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/90 text-stone-950 text-[11px] uppercase tracking-[0.2em] font-bold mb-4 shadow-sm backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-stone-950" />
                <span>{currentItem.badge}</span>
              </div>

              <div className="flex items-center gap-2 text-stone-200 text-xs tracking-wider mb-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Origin: {currentItem.origin}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-3 leading-tight drop-shadow-sm">
                {currentItem.title}
              </h1>

              <p className="text-stone-200 text-sm sm:text-base font-light mb-5 leading-relaxed max-w-lg">
                {currentItem.subtitle}
              </p>

              <div className="flex items-baseline gap-3 mb-7">
                <span className="text-xs uppercase tracking-widest text-stone-300 font-light">Priced at</span>
                <span className="text-2xl sm:text-3xl font-serif text-amber-400 font-bold">
                  {currentItem.price}
                </span>
                <span className="text-xs text-stone-400 font-light">| Certified & Insured</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={currentItem.link}
                  className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] rounded transition-all duration-300 shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 group/btn"
                >
                  <span>Explore Masterpiece</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>

                <Link
                  href="/jewellery"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 text-xs uppercase tracking-[0.2em] rounded backdrop-blur-md transition-all duration-300"
                >
                  View All Pieces
                </Link>
              </div>
            </div>
          </div>

          {/* Slide Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-amber-500 text-white border border-white/25 hover:border-amber-500 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-amber-500 text-white border border-white/25 hover:border-amber-500 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Full-Width Slider Bottom Control Bar */}
        <div className="w-full bg-white border-t border-stone-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            
            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2">
              {SLIDER_HERO_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-10 bg-amber-600' 
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>

            {/* Quick Slide Titles Preview */}
            <div className="hidden md:flex items-center gap-6 text-xs text-stone-600 font-medium">
              {SLIDER_HERO_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => goToSlide(idx)}
                  className={`transition-colors truncate max-w-[160px] text-left ${
                    currentIndex === idx ? 'text-amber-800 font-bold' : 'hover:text-stone-900'
                  }`}
                >
                  0{idx + 1}. {item.title.split(' ').slice(0, 2).join(' ')}
                </button>
              ))}
            </div>

            {/* Auto Play / Pause Toggle & Slide Counter */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded text-stone-500 hover:text-amber-700 hover:bg-stone-100 transition-colors"
                title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <span className="text-xs text-stone-500 font-mono font-medium">
                0{currentIndex + 1} / 0{total}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
