import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Qué cubre exactamente el servicio de auxilio mecánico 24/7?',
      a: 'Cubre auxilio en ruta y ciudad en todo el territorio nacional las 24 horas del día. Incluye mecánica ligera (problemas de arranque, cambio de rueda pinchada, apertura por olvido de llaves), remolque hasta el destino que indiques según el plan, y venta e instalación de baterías a domicilio.'
    },
    {
      q: '¿Cómo funciona la Asistencia al Viajero en la Argentina?',
      a: 'Contás con cobertura médica de urgencia, traslados sanitarios, asesoramiento legal y asistencia en viaje sin cargo para vos y tu acompañante en cualquier desplazamiento por el país a más de 100 km de tu domicilio habitual.'
    },
    {
      q: '¿Puedo asociarme si mi vehículo tiene varios años de antigüedad?',
      a: '¡Por supuesto! El ACA asiste tanto a conductores con vehículos cero kilómetro como a unidades con años de rodaje. La membresía acompaña al socio y te brinda cobertura en el auto declarado y asistencia personal.'
    },
    {
      q: '¿Cómo accedo a los descuentos de la Red Hotelera ACA?',
      a: 'Siendo socio activo, podés reservar directamente en la Red de Hoteles, hosterías y campings del ACA a lo largo de todo el país con tarifas preferenciales exclusivas presentando tu carnet o app oficial.'
    },
    {
      q: '¿Dónde puedo tramitar o renovar mi Licencia de Conducir y Permiso Internacional?',
      a: 'En las sedes del ACA contás con pistas de examen, consultorios médicos para aptitud psicofísica y gestores especializados para renovar tu registro o emitir el Permiso Internacional con turnos ágiles y aranceles reducidos.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Resolvé tus Dudas
          </span>
          <h2 id="faq-title" className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Todo lo que necesitás saber sobre los servicios y la membresía del Automóvil Club Argentino.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? 'border-red-500 dark:border-red-600 bg-white dark:bg-slate-900 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4 text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-45 bg-red-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
