"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type HeroTheme = 'primary' | 'accent' | 'warm';

interface HeroThemeContextType {
  activeTheme: HeroTheme;
  setActiveTheme: (theme: HeroTheme) => void;
}

const HeroThemeContext = createContext<HeroThemeContextType | undefined>(undefined);

export function HeroThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<HeroTheme>('primary');

  return (
    <HeroThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </HeroThemeContext.Provider>
  );
}

export function useHeroTheme() {
  const context = useContext(HeroThemeContext);
  if (context === undefined) {
    throw new Error('useHeroTheme must be used within a HeroThemeProvider');
  }
  return context;
}
