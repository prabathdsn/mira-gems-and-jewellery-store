'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'LKR';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (amountInUSD: number) => string;
}

const RATES: Record<CurrencyCode, { symbol: string; rate: number; label: string }> = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  LKR: { symbol: 'Rs. ', rate: 305.0, label: 'LKR (Rs)' },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  useEffect(() => {
    const saved = (localStorage.getItem('mira_currency') || localStorage.getItem('aura_currency')) as CurrencyCode;
    if (saved && RATES[saved]) {
      setCurrency(saved);
    }
  }, []);

  const handleSetCurrency = (code: CurrencyCode) => {
    setCurrency(code);
    localStorage.setItem('mira_currency', code);
  };

  const formatPrice = (amountInUSD: number): string => {
    const { symbol, rate } = RATES[currency];
    const converted = amountInUSD * rate;
    
    if (currency === 'LKR') {
      return `${symbol}${converted.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    }
    
    return `${symbol}${converted.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
