import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cómo funciona el beneficio de los $48.000 en combustible YPF y el 50% OFF?',
      a: 'Al asociarte mediante esta promoción oficial, accedés a un 50% de descuento en tus primeras 3 cuotas mensuales, un 25% de descuento en las 6 cuotas siguientes y una bonificación de $48.000 aplicable en tus cargas de combustible en estaciones YPF adheridas según el cronograma de las bases y condiciones.'
    },
    {
      q: '¿Qué cubre exactamente el servicio de auxilio mecánico 24/7?',
      a: 'Cubre auxilio en ruta y ciudad en toda la República Argentina las 24 horas del día, los 365 días del año. Incluye mecánica ligera (puesta en marcha, cambio de neumáticos, cerrajería de urgencia), remolque y traslado vehicular, y venta e instalación de baterías a domicilio.'
    },
    {
      q: '¿Cómo funciona la Asistencia al Viajero en la Argentina?',
      a: 'Contás con cobertura médica de urgencia, traslados sanitarios, asesoramiento legal y asistencia en viaje sin cargo adicional para el socio titular y su acompañante en desplazamientos por el país.'
    },
    {
      q: '¿Puedo asociarme si mi vehículo tiene varios años de antigüedad?',
      a: 'Sí. El Automóvil Club Argentino asiste tanto a conductores con vehículos cero kilómetro como a unidades con años de rodaje. La membresía es personal del socio y brinda cobertura en el vehículo en el que circules.'
    },
    {
      q: '¿Cómo accedo a las tarifas de la Red Hotelera ACA y trámites de licencia?',
      a: 'Desde el momento de tu alta como socio activo, podés reservar en los hoteles, hosterías, campings y centros recreativos del ACA en todo el país con tarifa preferencial, y gestionar DNI, Pasaporte y Registro Internacional con hasta 75% de descuento.'
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white dark:bg-slate-900 transition-colors" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="faq-title" className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Todo lo que necesitás saber sobre la promoción vigente, cobertura en ruta y servicios del ACA.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <div
                key={faq.q}
                className={`border rounded-2xl transition-colors overflow-hidden ${
                  isOpen
                    ? 'border-red-600 dark:border-amber-400 bg-slate-50/70 dark:bg-slate-950 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full min-h-[56px] p-5 sm:p-6 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4 text-base sm:text-lg cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-45 bg-red-600 dark:bg-amber-400 text-white dark:text-slate-950'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-base text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200/70 dark:border-slate-800">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
