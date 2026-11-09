'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Diamond, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Award, 
  Truck, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#faf8f5] border-t border-stone-200 text-stone-600 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust & Guarantee Badges Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-stone-200">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
            <div className="p-3 rounded-full bg-amber-50 text-amber-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">GIA & Gübelin Certified</h4>
              <p className="text-xs text-stone-500 mt-0.5">Every precious gem authenticated with origin analysis.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
            <div className="p-3 rounded-full bg-amber-50 text-amber-600 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">Insured Global Courier</h4>
              <p className="text-xs text-stone-500 mt-0.5">Discreet armored delivery via Malca-Amit & FedEx VIP.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
            <div className="p-3 rounded-full bg-amber-50 text-amber-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">Ethically Mined</h4>
              <p className="text-xs text-stone-500 mt-0.5">Direct mine-to-market traceability & fair artisan wages.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
            <div className="p-3 rounded-full bg-amber-50 text-amber-600 shrink-0">
              <Diamond className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">Lifetime Atelier Warranty</h4>
              <p className="text-xs text-stone-500 mt-0.5">Complimentary annual cleaning, inspection & sizing.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-200">
          
          {/* Brand Story Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Diamond className="w-6 h-6 text-amber-600" />
              <span className="font-serif text-2xl tracking-[0.2em] text-stone-900 font-medium">MIRA</span>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-800 font-semibold">
              Gem Store & Haute Joaillerie
            </p>
            <p className="text-sm text-stone-600 leading-relaxed max-w-sm">
              Curators of earth’s rarest untreated corundum and master craftsmen of bespoke haute joaillerie. Sourcing royal sapphires, rubies, and Colombian emeralds with uncompromised integrity since 1984.
            </p>
            <div className="flex items-center gap-3 pt-2 text-stone-500">
              {/* Instagram SVG */}
              <a href="#" className="p-2.5 rounded-full bg-white border border-stone-200 hover:bg-amber-500 hover:text-white transition-colors shadow-sm" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a href="#" className="p-2.5 rounded-full bg-white border border-stone-200 hover:bg-amber-500 hover:text-white transition-colors shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-900">
              The Vault
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/jewellery?category=rings" className="hover:text-amber-700 transition-colors">High Jewellery Rings</Link></li>
              <li><Link href="/jewellery?category=necklaces" className="hover:text-amber-700 transition-colors">Necklaces & Pendants</Link></li>
              <li><Link href="/jewellery?category=earrings" className="hover:text-amber-700 transition-colors">Chandelier Earrings</Link></li>
              <li><Link href="/jewellery?category=gemstones" className="hover:text-amber-700 transition-colors">Loose Untreated Gems</Link></li>
              <li><Link href="/jewellery?gem=Blue Sapphire" className="hover:text-amber-700 transition-colors">Ceylon Royal Sapphires</Link></li>
              <li><Link href="/jewellery?gem=Colombian Emerald" className="hover:text-amber-700 transition-colors">Muzo Colombian Emeralds</Link></li>
            </ul>
          </div>

          {/* Concierge & Heritage Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-900">
              Atelier & Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-amber-700 transition-colors">Our Ethical Heritage</Link></li>
              <li><Link href="/about" className="hover:text-amber-700 transition-colors">GIA & Gübelin Standards</Link></li>
              <li><Link href="/contact" className="hover:text-amber-700 transition-colors">Book Private Salon</Link></li>
              <li><Link href="/contact" className="hover:text-amber-700 transition-colors">Custom Heirlooms</Link></li>
              <li><Link href="/contact" className="hover:text-amber-700 transition-colors">Insured Shipping Policy</Link></li>
              <li><Link href="/contact" className="hover:text-amber-700 transition-colors">Complimentary Resizing</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-900">
              VIP Gazette
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Receive private invitations to confidential mine-site acquisitions and private viewing galas.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>You have been entered into the private register.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your private email..."
                    required
                    className="w-full bg-white border border-stone-300 rounded px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded transition-colors shadow-sm"
                >
                  Request Invitations
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} MIRA Gem Store. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-amber-700 transition-colors">Privacy Notice</Link>
            <Link href="/contact" className="hover:text-amber-700 transition-colors">Terms of Vault Consignment</Link>
            <Link href="/contact" className="hover:text-amber-700 transition-colors">Ethical Kimberley Accord</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
