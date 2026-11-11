import React, { useEffect, useState } from 'react';

export default function StatsBanner() {
  const [stats, setStats] = useState({
    annualAssistance: 1000000,
    operationalYears: 120,
    nationalCoveragePct: 100,
    partnerBusinesses: 1000
  });

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.annualAssistance) {
          setStats(data);
        }
      })
      .catch(() => {});
  }, []);

  const items = [
    {
      value: `+${stats.annualAssistance.toLocaleString('es-AR')}`,
      label: 'Auxilios mecánicos brindados por año'
    },
    {
      value: '24 / 7',
      label: 'Asistencia activa los 365 días del año'
    },
    {
      value: `${stats.nationalCoveragePct}%`,
      label: 'Cobertura federal en todas las rutas argentinas'
    },
    {
      value: `+${stats.partnerBusinesses.toLocaleString('es-AR')}`,
      label: 'Comercios y hoteles adheridos en el país'
    },
  ];

  return (
    <section
      className="bg-slate-950 text-white py-12 relative border-y border-slate-800"
      aria-label="Métricas de respaldo y trayectoria del Automóvil Club Argentino"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x divide-slate-800/80">
          {items.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5 px-2">
              <span className="tabular-nums font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-amber-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-medium max-w-[230px] mx-auto leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
