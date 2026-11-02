import React, { useState, useEffect } from 'react';
import { Sun, Moon, Type, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/A11yContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode, toggleFont, largeFont } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Planes', href: '#planes' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-slate-950/95 shadow-lg backdrop-blur-xl py-2 sm:py-2.5 border-b border-slate-200/80 dark:border-slate-800/80'
        : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-3 sm:py-3.5 border-b border-slate-200/40 dark:border-slate-800/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Large and responsive */}
        <a href="#" className="flex items-center shrink-0 mr-2 sm:mr-6 group py-1">
          <img
            src="/assets/logo-la-saeta.png"
            alt="La Saeta S.R.L. - Corredor Auxilio Mecánico La Rioja-Catamarca"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[160px] xs:max-w-[200px] sm:max-w-[260px] lg:max-w-[300px] transition-transform group-hover:scale-105 dark:hidden object-contain"
          />
          <img
            src="/assets/logo-la-saeta-dark.png"
            alt="La Saeta S.R.L. - Corredor Auxilio Mecánico La Rioja-Catamarca"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[160px] xs:max-w-[200px] sm:max-w-[260px] lg:max-w-[300px] transition-transform group-hover:scale-105 hidden dark:block object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Night Mode Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* Night Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-400 transition-all hover:scale-105 shrink-0"
            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo noche'}
            title={isDarkMode ? 'Modo Claro' : 'Modo Noche'}
          >
            {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />}
          </button>

          {/* Font Size Accessibility Toggle */}
          <button
            type="button"
            onClick={toggleFont}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl hidden md:flex items-center justify-center border transition-all shrink-0 ${
              largeFont
                ? 'bg-red-600 border-red-600 text-white font-bold'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
            aria-label="Ajustar tamaño de letra"
            title="Ajustar tamaño de fuente"
          >
            <Type className="w-4 h-4" />
          </button>

          {/* Direct CTA */}
          <a
            href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse-red inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm shadow-red-glow hover:translate-y-[-1px] transition-all shrink-0"
          >
            <span className="hidden sm:inline">Asociate ahora</span>
            <span className="sm:hidden">Asociate</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-slate-700 dark:text-slate-200 hover:text-red-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-5 flex flex-col gap-3.5 overflow-hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
