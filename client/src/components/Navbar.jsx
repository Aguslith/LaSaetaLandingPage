import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: 'Simulador', href: '#calculadora' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Opiniones', href: '#testimonios' },
    { label: 'Preguntas', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 shadow-elevated backdrop-blur-xl py-2 border-b border-slate-200/90'
          : 'bg-white/90 backdrop-blur-md py-3 border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center shrink-0 group py-1"
          aria-label="La Saeta S.R.L. - Agente Oficial Automóvil Club Argentino - Inicio"
        >
          <img
            src="/assets/logo-la-saeta.png"
            alt="La Saeta S.R.L. - Corredor Auxilio Mecánico La Rioja-Catamarca"
            width="240"
            height="56"
            className="h-10 sm:h-12 md:h-14 w-auto max-w-[170px] sm:max-w-[240px] lg:max-w-[270px] transition-transform duration-150 group-hover:scale-[1.02] object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="m-nav-link text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors py-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (44x44px minimum touch targets per ui-ux-pro-max) */}
        <div className="flex items-center gap-2">
          
          {/* Direct CTA */}
          <a
            href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
            target="_blank"
            rel="noopener noreferrer"
            className="m-btn inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 min-h-[44px] sm:px-5 rounded-xl text-xs sm:text-sm shadow-btn-primary shrink-0"
          >
            <span className="hidden sm:inline">Asociate ahora</span>
            <span className="sm:hidden">Asociate</span>
            <ArrowRight className="w-4 h-4 m-arrow" aria-hidden="true" />
          </a>

          {/* Mobile Menu Button (44x44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="m-btn lg:hidden w-11 h-11 flex items-center justify-center text-slate-800 hover:text-red-600 rounded-xl bg-slate-100 border border-slate-200"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-nav-drawer"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-2 shadow-elevated-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center text-base font-semibold text-slate-900 hover:text-red-600 px-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
