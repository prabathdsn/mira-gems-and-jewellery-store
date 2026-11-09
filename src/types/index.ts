export type ProductCategory = 
  | 'rings'
  | 'necklaces'
  | 'earrings'
  | 'bracelets'
  | 'gemstones';

export type GemstoneType = 
  | 'Blue Sapphire'
  | 'Royal Ruby'
  | 'Colombian Emerald'
  | 'Flawless Diamond'
  | 'Padparadscha Sapphire'
  | 'Tanzanite'
  | 'Alexandrite'
  | 'Pink Tourmaline';

export type MetalType = 
  | '18K Yellow Gold'
  | '18K White Gold'
  | 'Platinum 950'
  | '18K Rose Gold'
  | 'Two-Tone Gold'
  | 'Loose Stone (Unmounted)';

export interface GemstoneSpecs {
  caratWeight: number;
  cutShape: 'Oval' | 'Cushion' | 'Emerald Cut' | 'Round Brilliant' | 'Pear' | 'Princess' | 'Radiant';
  clarity: 'VVS1' | 'VVS2' | 'VS1' | 'VS2' | 'FL' | 'IF';
  colorGrade: string;
  treatment: 'Unheated / Untreated' | 'Standard Heat' | 'None (Natural)';
  origin: string;
  certificate: 'GIA' | 'GRS' | 'Gübelin' | 'SSEF' | 'IGI';
  certificateNumber: string;
  dimensions: string;
}

export interface JewelleryItem {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  gemstoneType: GemstoneType;
  metal: MetalType;
  price: number;
  originalPrice?: number;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isOneOfAKind?: boolean;
  description: string;
  fullStory: string;
  specs: GemstoneSpecs;
  images: string[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface FilterState {
  searchQuery: string;
  category: string;
  gemstone: string;
  metal: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'carat-desc';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  interestCategory: string;
  message: string;
  preferredContactMethod: 'email' | 'phone' | 'whatsapp';
}
