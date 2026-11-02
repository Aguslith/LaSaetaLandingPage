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
      title: 'Auxilio mecánico 24/7',
      desc: 'Siempre listos para asistirte en cualquier momento y lugar. Puesta en marcha, remolque, mecánica ligera y venta e instalación de baterías en el acto.',
      image: '/assets/auxilio-aca.png',
      icon: '/assets/auxilio-icon.svg'
    },
    {
      id: 2,
      category: 'turismo',
      pill: 'Turismo',
      title: 'Red Hotelera Nacional',
      desc: 'Accedé a tarifas preferenciales en la Red Hotelera ACA, hosterías, balnearios de primer nivel y centros recreativos en los paisajes más imponentes de la Argentina.',
      image: '/assets/hotel-calafate.webp',
      icon: '/assets/descuentos-icon.svg'
    },
    {
      id: 3,
      category: 'seguros',
      pill: 'Seguros',
      title: 'Seguro Automotor con La Caja',
      desc: 'Las mejores coberturas contra todo riesgo y terceros con descuentos exclusivos contratando tu póliza a través del ACA como Agente Institorio.',
      image: '/assets/beneficios-aca.webp',
      icon: '/assets/beneficios-icon.svg'
    },
    {
      id: 4,
      category: 'turismo',
      pill: 'Asistencia en Viaje',
      title: 'Asistencia al viajero nacional',
      desc: 'Sin costo adicional para vos y tu acompañante en cualquier rincón de la República Argentina. Viajá con total respaldo médico y logístico.',
      image: '/assets/asistencia-aca.png',
      icon: '/assets/asistencia-icon.svg'
    },
    {
      id: 5,
      category: 'descuentos',
      pill: 'Gestoría Express',
      title: 'Gestión ágil y documentación',
      desc: 'Tramitá DNI, Pasaporte, renovación de Licencia y Permiso Internacional de Conducir con turnos preferenciales y descuentos de hasta el 75%.',
      image: '/assets/ruta-viaje.webp',
      icon: '/assets/gestion-icon.svg'
    },
    {
      id: 6,
      category: 'descuentos',
      pill: 'Descuentos Diarios',
      title: '+1.000 Comercios Adheridos',
      desc: 'Gastronomía, neumáticos, mantenimiento vehicular, indumentaria, entretenimiento y compras cotidianas con descuentos directos en todo el país.',
      image: '/assets/descuentos-aca.png',
      icon: '/assets/comercios-icon.svg'
    }
  ];

  const filtered = filter === 'all' ? benefits : benefits.filter(b => b.category === filter);

  const filterButtons = [
    { label: 'Todos los Beneficios', value: 'all' },
    { label: 'Auxilio & Ruta', value: 'ruta' },
    { label: 'Turismo & Hoteles', value: 'turismo' },
    { label: 'Seguros & Respaldo', value: 'seguros' },
    { label: 'Comercios & Gestoría', value: 'descuentos' },
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors" aria-labelledby="benefits-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Ventajas Exclusivas
          </span>
          <h2 id="benefits-title" className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            Lo que ganás siendo Socio del ACA
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Cuando te asociás, no sólo sumás auxilio mecánico sino un respaldo integral con personal propio altamente capacitado y equipamiento moderno.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterButtons.map(btn => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === btn.value
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid with React Bits SpotlightCards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map(card => (
              <motion.div
                layout
                key={card.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(229, 25, 55, 0.14)"
                  spotlightBorder="rgba(229, 25, 55, 0.5)"
                  className="h-full"
                >
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      {card.pill}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 flex items-center justify-center shrink-0">
                          <img src={card.icon} alt="" className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <a
                      href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-transform hover:translate-x-1"
                    >
                      <span>Conocer más</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
