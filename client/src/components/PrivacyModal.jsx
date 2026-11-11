import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
          />

          {/* Modal Dialog (exit faster than enter per ui-ux-pro-max) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.14 } }}
            className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-elevated-lg max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <h2 id="modal-title" className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                Política de Privacidad - Automóvil Club Argentino
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="m-btn w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0"
                aria-label="Cerrar ventana de política de privacidad"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed space-y-4">
              <p>
                El acceso al sitio de Internet del Automóvil Club Argentino (ACA), es público e irrestricto a todas las personas que así lo hicieran. La utilización del sitio web propiedad del ACA, implica la aceptación previa sin reservas a todo lo dispuesto en la presente Política de Privacidad.
              </p>
              <p>
                Al momento de acceder al sitio de Internet del Automóvil Club Argentino (www.aca.org.ar) y proporcionar en forma voluntaria la información de tipo personal, el solo hecho presume el consentimiento del usuario para su archivo, almacenamiento, tratamiento y utilización de la información suministrada.
              </p>
              <p>
                Todos los datos personales aportados e ingresados por los Usuarios a través del Sitio del ACA, se consideran ciertos y verosímiles.
              </p>
              <h3 className="font-bold text-slate-900 dark:text-white pt-2">Primero:</h3>
              <p>
                El destinatario de dichos datos personales es el Automóvil Club Argentino, quien se obliga a dar el debido cumplimiento al procesamiento, tratamiento, utilización, transferencia y almacenamiento de los mismos, resguardando la privacidad, confidencialidad y la estricta reserva del contenido de los mismos.
              </p>
              <h3 className="font-bold text-slate-900 dark:text-white pt-2">Segundo:</h3>
              <p>
                Los datos personales ingresados serán incorporados a un banco de datos, siendo el titular y su responsable el Automóvil Club Argentino, con domicilio en Av. del Libertador 1850 de la Ciudad Autónoma de Buenos Aires – Argentina.
              </p>
              <h3 className="font-bold text-slate-900 dark:text-white pt-2">Tercero:</h3>
              <p>
                El aporte realizado de los datos personales es facultativo para el usuario; quién podrá en cualquier momento requerir fehacientemente que se le informe el contenido de los mismos, solicitar rectificaciones y/o las supresiones que considere necesarias, de conformidad con la ley de protección de datos personales.
              </p>
              <h3 className="font-bold text-slate-900 dark:text-white pt-2">Cuarto:</h3>
              <p>
                El Automóvil Club Argentino, como propietario del banco de datos, a su juicio podrá revelar la información personal a quien considere necesario, siempre que el receptor consienta tratarla de conformidad con los términos de su Política de Seguridad y su Política de Privacidad.
              </p>
              <h3 className="font-bold text-slate-900 dark:text-white pt-2">Quinto:</h3>
              <p>
                El usuario, al momento de acceder al sitio de Internet del ACA www.aca.org.ar y proveer en forma voluntaria la información de tipo personal, el solo hecho presume el consentimiento y autenticidad de los datos para su archivo, almacenamiento, tratamiento y utilización de la información.
              </p>
              <h3 className="font-bold text-slate-900 dark:text-white pt-2">Sexto:</h3>
              <p>
                La información personal suministrada voluntariamente por el usuario en el sitio de Internet del Automóvil Club Argentino se resguarda y se protege con el fin de preservar la confidencialidad, privacidad, integridad, disponibilidad y autenticidad de los mismos.
              </p>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="m-btn min-h-[44px] px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
