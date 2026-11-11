import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function BenefitsGrid() {
  const [filter, setFilter] = useState('all');

  const benefits = [
    {
      id: 1,
      category: 'ruta',
      pill: 'Auxilio 24/7',
      title: 'Auxilio mecánico 24/7 sin cargo',
      desc: 'Asistencia permanente en ruta y ciudad. Puesta en marcha, remolque, mecánica ligera y venta e instalación de baterías en el acto.',
      cta: 'Solicitar cobertura de auxilio',
      image: '/assets/auxilio-aca.png',
      icon: '/assets/auxilio-icon.svg'
    },
    {
      id: 2,
      category: 'turismo',
      pill: 'Turismo ACA',
      title: 'Red Hotelera y Centros Recreativos',
      desc: 'Tarifas preferenciales en hoteles propios, hosterías, balnearios y campings del ACA en los destinos turísticos más importantes de la Argentina.',
      cta: 'Explorar red hotelera',
      image: '/assets/hotel-calafate.webp',
      icon: '/assets/descuentos-icon.svg'
    },
    {
      id: 3,
      category: 'seguros',
      pill: 'Seguros',
      title: 'Seguro Automotor con La Caja',
      desc: 'Coberturas contra todo riesgo y terceros completos con bonificaciones exclusivas contratando tu póliza a través del ACA como Agente Institorio.',
      cta: 'Cotizar póliza preferencial',
      image: '/assets/beneficios-aca.webp',
      icon: '/assets/beneficios-icon.svg'
    },
    {
      id: 4,
      category: 'turismo',
      pill: 'Asistencia en Viaje',
      title: 'Asistencia al viajero nacional',
      desc: 'Cobertura médica, traslados y asistencia legal sin costo adicional para el titular y su acompañante en todo el territorio nacional.',
      cta: 'Ver alcance de asistencia',
      image: '/assets/asistencia-aca.png',
      icon: '/assets/asistencia-icon.svg'
    },
    {
      id: 5,
      category: 'descuentos',
      pill: 'Gestoría Express',
      title: 'Renovación de Licencia y Trámites',
      desc: 'Tramitá DNI, Pasaporte, renovación de Licencia de Conducir y Permiso Internacional con turnos preferenciales y hasta 75% de descuento.',
      cta: 'Consultar trámites incluidos',
      image: '/assets/ruta-viaje.webp',
      icon: '/assets/gestion-icon.svg'
    },
    {
      id: 6,
      category: 'descuentos',
      pill: 'Ahorro Cotidiano',
      title: 'Combustible YPF y +1.000 Comercios',
      desc: '$48.000 de regalo en combustible YPF al asociarte, más descuentos continuos en lubricantes, neumáticos, gastronomía y servicios.',
      cta: 'Activar descuentos de socio',
      image: '/assets/descuentos-aca.png',
      icon: '/assets/comercios-icon.svg'
    }
  ];

  const filtered = filter === 'all' ? benefits : benefits.filter((b) => b.category === filter);

  const filterButtons = [
    { label: 'Todos los Beneficios (6)', value: 'all' },
    { label: 'Auxilio & Ruta', value: 'ruta' },
    { label: 'Turismo & Hoteles', value: 'turismo' },
    { label: 'Seguros & Respaldo', value: 'seguros' },
    { label: 'Combustible & Gestoría', value: 'descuentos' },
  ];

  return (
    <section id="beneficios" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-950 transition-colors" aria-labelledby="benefits-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Direct authoritative heading without banned kicker pill per craft-floor.md) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 id="benefits-title" className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Lo que ganás siendo Socio del ACA
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Respaldo mecánico propio, cobertura médica en ruta y ahorro directo desde el primer mes en toda la República Argentina.
          </p>
        </div>

        {/* Accessible Filter Bar (min-h-[44px] touch targets, role="tablist") */}
        <div
          role="tablist"
          aria-label="Filtrar beneficios por categoría"
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {filterButtons.map((btn) => {
            const isSelected = filter === btn.value;
            return (
              <button
                key={btn.value}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setFilter(btn.value)}
                className={`m-btn min-h-[44px] px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Benefits Grid (16px card ink text, 2px card lift, 1.03 photo zoom per cards.md & motion.md) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((card) => (
              <motion.article
                layout
                key={card.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(229, 25, 55, 0.1)"
                  spotlightBorder="rgba(229, 25, 55, 0.4)"
                  className="h-full"
                >
                  {/* Photo Frame */}
                  <div className="relative h-52 overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={card.image}
                      alt={card.title}
                      width="420"
                      height="210"
                      className="m-zoom-img w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3.5 left-3.5 bg-slate-950/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                      {card.pill}
                    </span>
                  </div>

                  {/* Card Body (16px ink prose per cards.md) */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200/80 dark:border-slate-700 flex items-center justify-center shrink-0">
                          <img src={card.icon} alt="" width="22" height="22" className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white leading-snug">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <a
                      href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-btn inline-flex items-center gap-1.5 text-sm font-bold text-red-600 dark:text-amber-400 hover:text-red-700 dark:hover:text-amber-300 w-fit py-1"
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-4 h-4 m-arrow" aria-hidden="true" />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
