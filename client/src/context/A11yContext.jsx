import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('aca_theme_dark');
    if (saved !== null) return saved === 'true';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [largeFont, setLargeFont] = useState(() => {
    return localStorage.getItem('aca_large_font') === 'true';
  });

  const [reducedMotion, setReducedMotion] = useState(() => {
    return localStorage.getItem('aca_reduced_motion') === 'true';
  });

  // Apply dark mode class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('aca_theme_dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (largeFont) {
      document.body.classList.add('font-large');
    } else {
      document.body.classList.remove('font-large');
    }
    localStorage.setItem('aca_large_font', largeFont);
  }, [largeFont]);

  useEffect(() => {
    localStorage.setItem('aca_reduced_motion', reducedMotion);
  }, [reducedMotion]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleFont = () => setLargeFont(prev => !prev);
  const toggleMotion = () => setReducedMotion(prev => !prev);

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleDarkMode,
      largeFont,
      toggleFont,
      reducedMotion,
      toggleMotion
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// Backward compatibility alias
export const useA11y = useTheme;
export const A11yProvider = ThemeProvider;
