# MIRA Gem Store (`mira_gem_store`) — High Jewellery & Rare Gemstones E-Commerce Platform

A Next.js e-commerce and showcase platform engineered for luxury gemstones (Ceylon Sapphires, Colombian Emeralds, Burmese Rubies, Flawless Solitaires) and bespoke haute joaillerie.

---

## ✨ Features & Architecture

### 1. Header & Navigation
- **Menus**: Home, Jewellery, About Us, Contact Us.
- **Brand Identity**: Elegant serif typography (*Cormorant Garamond* & *Montserrat*) with gold diamond emblem.
- **Interactive Currency Switcher**: Real-time conversion between **USD ($)**, **EUR (€)**, **GBP (£)**, and **LKR (Rs)**.
- **Saved Pieces / Wishlist**: LocalStorage-synced wishlist with header counter badge.
- **Instant Search Bar**: Dropdown search with keyword autocomplete for gemstones and cuts.
- **Mobile Responsive Drawer**: Touch-friendly slide-out navigation for tablets and mobile devices.

### 2. Main Page (`/`)
- **Hero Section**: High-resolution luxury photography, headline, and direct CTAs.
- **Curated Collections**: Solitaires & Cocktail Rings, Rivière Necklaces, Chandelier Earrings, and Loose Certified Gems.
- **Masterpiece Image Slider (Middle Section)**: Interactive showcase featuring unheated Ceylon sapphires, Colombian emeralds, and Mogok rubies with Prev/Next controls, slide indicators, autoplay toggle, price tag, origin, and direct "More Info" links.
- **Recent Atelier Additions**: Product cards with prominent **"More Info"** buttons.
- **Artisan Philosophy & Mine-to-Market Story**: Direct sourcing from Ratnapura, Muzo, and Mogok.
- **Collector Testimonials**: Verified client reviews from Geneva, London, Singapore, and Dubai.
- **Private VIP Appointment Banner**: Direct consultation booking.

### 3. Jewellery Vault & Store Catalog (`/jewellery`)
- **Catalog View**: Displays all fine jewellery and rare loose gemstones in the store.
- **Comprehensive Filtering System**:
  - Filter by Category (Rings, Necklaces, Earrings, Bracelets, Loose Gemstones).
  - Filter by Gemstone Variety (Blue Sapphire, Royal Ruby, Colombian Emerald, Flawless Diamond, Padparadscha Sapphire, Tanzanite, Alexandrite, Pink Tourmaline).
  - Filter by Precious Metal (Platinum 950, 18K Yellow Gold, 18K White Gold, 18K Rose Gold, Two-Tone).
  - Filter by Price Bracket (Under \$15k, \$15k–\$25k, \$25k–\$35k, \$35k+).
  - Live Search by keyword, cut, or origin.
  - Sorting (Featured, Price: Low to High, Price: High to Low, Carat Weight).
- **Product Card Actions**:
  - Prominent **"More Info"** button linking to the single item view.
  - Quick View modal preview.
  - Wishlist heart toggle.

### 4. Single Item More Info View (`/jewellery/[id]`)
- **Prerendered via `generateStaticParams()`** for instant sub-second loading.
- **Multi-Angle Gallery**: High-resolution gallery with thumbnail switcher.
- **Gemological Identity Snapshot**: Carat weight, cut shape, clarity grade, hue & color saturation, treatment (Unheated / Natural), origin, dimensions, certificate & report reference.
- **Direct Owner Inquiry**: Pre-fills the contact form with the specific piece name, price, and ID.
- **Interactive Tabs**: Dimensions & Care, Provenance & Mine Story, Issuing Laboratory Dossier, and Insured Shipping details.
- **Harmonizing Pieces**: Recommends matching creations from the vault.

### 5. Contact Us Page (`/contact`)
- **Direct Email Form to Atelier Owner**:
  - Name, Email, Phone/WhatsApp, Subject, Category, and Detailed Message.
  - Pre-fills item details when inquiring from any product page.
  - Submits to `/api/contact` with instant verification and generates a unique tracking reference (e.g. `#AURA-251121`).
- **Atelier Directory**:
  - Flagship salon addresses in **Colombo** (Galle Face Court) and **Geneva** (Rue du Rhône).
  - Direct concierge phone: `+1 (800) 492-AURA`.
  - Direct owner email: `owner@auragems.com`.
  - Private viewing hours and confidentiality guarantee.

### 6. About Us Page (`/about`)
- **Three Generations of Heritage**: Story of our 1984 origins in Ratnapura (&ldquo;City of Gems&rdquo;).
- **The 4 Pillars of Aura Gemology**: Artisanal Mine-Site Selection, Precision Faceting, Handcrafted Haute Joaillerie, Independent Swiss Certification.
- **Accredited Laboratory Credentials**: Gübelin Gem Lab, GIA, GRS Swisslab, SSEF.
- **Visual Atelier Life Gallery**: High-resolution photos of master lapidaries and goldsmiths.

### 7. Footer
- Trust badges (GIA & Gübelin Certified, Insured Armored Courier, Ethically Mined, Lifetime Warranty).
- VIP Acquisition Gazette newsletter signup.
- Salon addresses, social media links, and copyright notice.

---

## 🚀 Getting Started

### 1. Set Active Workspace
Set your workspace to:
```
C:\Users\prabathdis\.gemini\antigravity\scratch\gem-jewellery-store
```

### 2. Run the Development Server
```powershell
cd "C:\Users\prabathdis\.gemini\antigravity\scratch\gem-jewellery-store"
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```powershell
npm run build
npm run start
```
