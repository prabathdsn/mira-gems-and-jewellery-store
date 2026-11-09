import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollbarManager from '../components/ScrollbarManager';
import { CurrencyProvider } from '../context/CurrencyContext';
import { WishlistProvider } from '../context/WishlistContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'MIRA Gem Store | High Jewellery & Rare Untreated Gemstones',
  description: 'Curators of unheated Ceylon blue sapphires, Colombian emeralds, Burmese rubies, and handcrafted haute joaillerie. Certified by GIA and Gübelin.',
  keywords: [
    'gemstones',
    'jewellery',
    'sapphires',
    'emeralds',
    'rubies',
    'diamonds',
    'high jewellery',
    'luxury rings',
    'unheated gems',
    'Ceylon sapphire',
    'Mira Gem Store'
  ],
  authors: [{ name: 'MIRA Gem Store' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@200;300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-stone-800">
        <CurrencyProvider>
          <WishlistProvider>
            {/* Header with menus: Home, Jewellery, About Us, Contact Us */}
            <Suspense fallback={<div className="h-16 bg-white border-b border-stone-200" />}>
              <Header />
            </Suspense>

            {/* Dynamic Page Content */}
            <main className="flex-1 bg-white">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Default Scrollbar Auto-Hide Controller */}
            <ScrollbarManager />
          </WishlistProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
