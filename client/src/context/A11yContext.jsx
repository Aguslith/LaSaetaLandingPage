import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const isDarkMode = false;
  const largeFont = false;

  const [reducedMotion, setReducedMotion] = useState(() => {
    try {
      const saved = localStorage.getItem('aca_reduced_motion');
      if (saved !== null) return saved === 'true';
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
    } catch (e) {}
    return false;
  });

  // Enforce light mode permanently
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark', 'font-large', 'high-contrast');
    try {
      localStorage.removeItem('aca_theme_dark');
      localStorage.removeItem('lasaeta_theme');
      localStorage.removeItem('aca_large_font');
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
    try {
      localStorage.setItem('aca_reduced_motion', String(reducedMotion));
    } catch (e) {}
  }, [reducedMotion]);

  const toggleMotion = () => setReducedMotion((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        largeFont,
        reducedMotion,
        toggleMotion,
      }}
    >
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
