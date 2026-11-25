'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  Heart, 
  PhoneCall, 
  Globe, 
  ChevronDown
} from 'lucide-react';
import { useCurrency, CurrencyCode } from '../context/CurrencyContext';
import { useWishlist } from '../context/WishlistContext';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { currency, setCurrency } = useCurrency();
  const { wishlistCount } = useWishlist();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track scroll depth for shadow / backdrop
      setIsScrolled(currentScrollY > 15);

      // Do not auto-hide header if mobile menu or search bar is open
      if (mobileMenuOpen || searchOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // If at the very top, always show header
      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 6) {
        // Scrolling DOWN -> Auto hide header
        setIsVisible(false);
        setCurrencyDropdownOpen(false);
      } else if (currentScrollY < lastScrollY.current - 6) {
        // Scrolling UP -> Reveal header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, searchOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/jewellery?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Jewellery', href: '/jewellery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const currencies: CurrencyCode[] = ['USD', 'EUR', 'GBP', 'LKR'];

  return (
    <div
      className={`sticky top-0 z-40 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
    

      {/* Main Luxury Navigation Bar - Compact Sleek Height */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-1.5 sm:py-2' 
            : 'bg-white border-b border-stone-100 py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-stone-700 hover:text-amber-700 focus:outline-none transition-colors rounded hover:bg-stone-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-1 lg:flex-initial text-center lg:text-left flex items-center justify-center lg:justify-start">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="MIRA Gems"
                  width={150}
                  height={40}
                  priority
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links - Compact spacing */}
            <nav className="hidden lg:flex items-center space-x-7 sm:space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[11px] uppercase tracking-[0.22em] font-medium py-1 transition-all duration-200 hover:text-amber-700 ${
                      isActive ? 'text-amber-800 font-semibold' : 'text-stone-700'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-amber-600/30 via-amber-600 to-amber-600/30 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons: Search, Wishlist, Appointment Button */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 text-stone-700 hover:text-amber-700 transition-colors rounded-full hover:bg-stone-100"
                title="Search jewels and gemstones"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                href="/jewellery?filter=wishlist"
                className="relative p-1.5 text-stone-700 hover:text-amber-700 transition-colors rounded-full hover:bg-stone-100"
                title="View Saved Jewels"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-amber-500 text-stone-950 text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* VIP Consultation CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-amber-600/40 text-amber-800 hover:bg-amber-600 hover:text-white text-[10px] uppercase tracking-[0.18em] font-medium transition-all duration-300 rounded shadow-sm"
              >
                Book VIP
              </Link>
            </div>

          </div>
        </div>

        {/* Search Bar Slide Down Panel */}
        {searchOpen && (
          <div className="bg-[#faf8f5] border-t border-b border-stone-200 px-4 py-4 transition-all animate-fadeIn">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-amber-700/80" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by gem (e.g. Sapphire, Ruby, Emerald, Diamond) or cut..."
                  className="w-full bg-white border border-stone-300 rounded-lg pl-12 pr-28 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 shadow-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 hover:text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  Search
                </button>
              </form>
              <div className="flex flex-wrap gap-2 mt-3 text-xs text-stone-600">
                <span className="text-amber-800 font-medium">Suggested:</span>
                <button onClick={() => { setSearchQuery('Ceylon Sapphire'); router.push('/jewellery?gem=Blue Sapphire'); setSearchOpen(false); }} className="hover:text-amber-800 underline decoration-stone-300">Ceylon Sapphire</button>
                <span>•</span>
                <button onClick={() => { setSearchQuery('Emerald'); router.push('/jewellery?gem=Colombian Emerald'); setSearchOpen(false); }} className="hover:text-amber-800 underline decoration-stone-300">Colombian Emerald</button>
                <span>•</span>
                <button onClick={() => { setSearchQuery('Burmese Ruby'); router.push('/jewellery?gem=Royal Ruby'); setSearchOpen(false); }} className="hover:text-amber-800 underline decoration-stone-300">Burmese Ruby</button>
                <span>•</span>
                <button onClick={() => { setSearchQuery('Diamond Solitaire'); router.push('/jewellery?category=rings'); setSearchOpen(false); }} className="hover:text-amber-800 underline decoration-stone-300">Solitaire Rings</button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-6 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base tracking-[0.2em] uppercase font-medium transition-colors ${
                      isActive ? 'text-amber-800 font-semibold' : 'text-stone-700 hover:text-amber-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-4">
              <Link
                href="/jewellery?filter=wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-stone-700 hover:text-amber-800 text-sm tracking-wider uppercase font-medium"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-600" />
                  Saved Pieces
                </span>
                <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs font-bold">
                  {wishlistCount}
                </span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 hover:text-white font-semibold uppercase tracking-[0.2em] text-xs rounded transition-colors shadow-sm"
              >
                Book VIP Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
