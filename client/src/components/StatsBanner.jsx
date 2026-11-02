import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StatsBanner() {
  const [stats, setStats] = useState({
    annualAssistance: 1000000,
    operationalYears: 120,
    nationalCoveragePct: 100,
    partnerBusinesses: 1000
  });

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && data.annualAssistance) {
          setStats(data);
        }
      })
      .catch(() => {});
  }, []);

  const items = [
    { value: `+${(stats.annualAssistance).toLocaleString('es-AR')}`, label: 'Auxilios mecánicos brindados por año' },
    { value: '24 / 7', label: 'Asistencia activa los 365 días del año' },
    { value: `${stats.nationalCoveragePct}%`, label: 'Cobertura federal en todas las rutas argentinas' },
    { value: `+${(stats.partnerBusinesses).toLocaleString('es-AR')}`, label: 'Comercios y hoteles adheridos en el país' },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 relative overflow-hidden border-y border-slate-800" aria-label="Métricas de respaldo">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-400" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {items.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col gap-1.5"
            >
              <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium max-w-[220px] mx-auto">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
