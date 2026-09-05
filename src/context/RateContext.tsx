import React, { createContext, useContext, useState, useEffect } from 'react';
import { ExchangeRates } from '../types';
import { INITIAL_RATES } from '../data/content';

interface RateContextType {
  rates: ExchangeRates;
  updateRates: (newRates: Partial<ExchangeRates>) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'yuan_pro_custom_rates_v1';

const RateContext = createContext<RateContextType | undefined>(undefined);

export const RateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rates, setRates] = useState<ExchangeRates>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return { ...INITIAL_RATES, ...parsed };
        }
      } catch {
        // Fallback
      }
    }
    return INITIAL_RATES;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const updateRates = (newRates: Partial<ExchangeRates>) => {
    setRates((prev) => {
      const updated = {
        ...prev,
        ...newRates,
        updatedAt: `Бүгүн, ${new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`,
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore localStorage error
      }
      return updated;
    });
  };

  return (
    <RateContext.Provider value={{ rates, updateRates, isAdminOpen, setIsAdminOpen }}>
      {children}
    </RateContext.Provider>
  );
};

export const useRates = () => {
  const context = useContext(RateContext);
  if (!context) {
    throw new Error('useRates must be used within a RateProvider');
  }
  return context;
};
