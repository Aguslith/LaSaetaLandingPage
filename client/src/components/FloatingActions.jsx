import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" aria-label="Acciones rápidas">
      
      {/* WhatsApp Action (56x56px target) */}
      <div className="relative group">
        <a
          href="https://wa.me/5491145678900?text=Hola!%20Quiero%20asociarme%20al%20ACA%20con%20la%20promo%20del%2050%25%20y%20combustible"
          target="_blank"
          rel="noopener noreferrer"
          className="m-btn w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-elevated"
          aria-label="Chatear por WhatsApp con asesor oficial del ACA"
        >
          <MessageCircle className="w-7 h-7" aria-hidden="true" />
        </a>

        {/* Tooltip */}
        <span className=" -translate-y-1/2 absolute right-16 top-1/2 bg-slate-900 border border-slate-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none transition-opacity shadow-elevated">
          ¿Dudas sobre la promo? Chateá acá
        </span>
      </div>

      {/* Back to top (44x44px minimum target per ui-ux-pro-max) */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="m-btn w-11 h-11 rounded-full bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-400 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:text-slate-950 dark:hover:text-slate-950 flex items-center justify-center shadow-elevated"
          aria-label="Volver al inicio de la página"
        >
          <ChevronUp className="w-5 h-5" aria-hidden="true" />
        </button>
      )}

    </div>
  );
}
