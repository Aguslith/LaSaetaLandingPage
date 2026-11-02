import React from 'react';
import SpotlightCard from './reactbits/SpotlightCard';

export default function Testimonials() {
  const testimonials = [
    {
      initial: 'J',
      name: 'Juan',
      role: 'Socio Vitalicio ACA',
      quote: '“Me hice socio para aprender a manejar cuando era joven y ahora, ya casi abuelo, sigo siéndolo porque me acompañan siempre a donde viajo.”'
    },
    {
      initial: 'S',
      name: 'Sandra',
      role: 'Socia ACA hace 40 años',
      quote: '“Desde 1984 que soy socia y nunca tuve un problema. Los mapas ruteros me llevan a todos lados y tanto los hoteles como el personal son de 10. ¡Gracias!”'
    },
    {
      initial: 'W',
      name: 'Walter',
      role: 'Socio Activo ACA',
      quote: '“Fui a renovar mi licencia de conducir, todo muy organizado, los empleados muy amables. Tiene un museo y buena vista sobre Av. Libertador. Recomendable su visita.”'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white dark:bg-slate-900 transition-colors" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Opiniones Reales
          </span>
          <h2 id="testimonials-title" className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            ¿Qué dicen nuestros Socios?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Historias auténticas de conductores que confían en el ACA para cada viaje cotidiano y sus vacaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <SpotlightCard
              key={t.name}
              spotlightColor="rgba(229, 25, 55, 0.1)"
              className="p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <img src="/assets/Google.png" alt="Google Review" className="h-5 w-auto" />
                  <img src="/assets/Star.svg" alt="5 estrellas" className="h-4 w-auto" />
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-extrabold flex items-center justify-center text-sm">
                  {t.initial}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
