import React from 'react';
import { CheckCircle2, ArrowRight, Shield, Star, Car, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './reactbits/SpotlightCard';
import BorderBeam from './reactbits/BorderBeam';

export default function PlansSection() {
  const plans = [
    {
      name: 'Plan Activo',
      badge: 'Membresía Individual',
      icon: Car,
      desc: 'Ideal para quienes circulan a diario en la ciudad y necesitan auxilio rápido y gestión.',
      features: [
        'Auxilio mecánico y puesta en marcha en ciudad',
        'Cambio de neumáticos y puente de batería',
        'Descuentos en trámites de Licencia y DNI',
        'Acceso a la Red Hotelera ACA con tarifa preferencial',
        'Descuentos en más de 1.000 comercios adheridos'
      ],
      ctaText: 'Elegir Plan Activo',
      recommended: false
    },
    {
      name: 'Plan Integral',
      badge: 'Más Elegido',
      icon: Shield,
      desc: 'La cobertura más completa de la Argentina. Tranquilidad absoluta en ruta y ciudad 24/7.',
      features: [
        'Auxilio mecánico 24/7 sin límite en toda la Argentina',
        'Servicio de remolque y traslado de vehículo',
        'Asistencia al viajero médica y legal (titular + acompañante)',
        'Tarifas exclusivas en Red Hotelera ACA y balnearios',
        'Descuentos continuos en combustible y lubricantes',
        'Descuentos en seguros automotores con La Caja'
      ],
      ctaText: 'Hacerme Socio Integral',
      recommended: true
    },
    {
      name: 'Plan Familiar / Total',
      badge: 'Cobertura Integral',
      icon: Users,
      desc: 'Para quienes viajan en familia y buscan protección extendida en múltiples vehículos.',
      features: [
        'Auxilio 24/7 para el titular y grupo familiar directo',
        'Cobertura en hasta 2 vehículos del hogar',
        'Asistencia al viajero nacional e internacional ampliada',
        'Prioridad en despacho de grúa y rescate en ruta',
        'Beneficios multiplicados en gastronomía y turismo'
      ],
      ctaText: 'Elegir Plan Familiar',
      recommended: false
    }
  ];

  return (
    <section id="planes" className="py-20 bg-white dark:bg-slate-900 transition-colors" aria-labelledby="plans-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Membresías Oficiales
          </span>
          <h2 id="plans-title" className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            Elegí la tranquilidad que mejor se adapta a vos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Planes diseñados para acompañarte en cada viaje cotidiano o en tus vacaciones por todo el país.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <SpotlightCard
                key={plan.name}
                spotlightColor={plan.recommended ? "rgba(229, 25, 55, 0.18)" : "rgba(100, 116, 139, 0.1)"}
                spotlightBorder={plan.recommended ? "rgba(229, 25, 55, 0.6)" : "rgba(100, 116, 139, 0.3)"}
                className={`p-7 sm:p-9 flex flex-col justify-between relative ${
                  plan.recommended
                    ? 'border-2 border-red-500 dark:border-red-600 shadow-xl'
                    : 'border border-slate-200 dark:border-slate-800'
                }`}
              >
                {plan.recommended && (
                  <BorderBeam size={280} duration={8} colorFrom="#E51937" colorTo="#FEC526" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                      plan.recommended
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      {plan.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-center justify-center text-red-600">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {plan.desc}
                  </p>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-5 mb-6">
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-3">
                      Servicios Incluidos:
                    </span>
                    <ul className="space-y-3">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white shadow-red-glow'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Comparison Box */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
            ¿Por qué asociarse al ACA es una inversión inteligente?
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Comparativa de costos reales ante imprevistos en ruta:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm" aria-label="Comparativa de costos">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-800 text-xs uppercase text-slate-400">
                  <th className="py-2.5">Servicio / Imprevisto</th>
                  <th className="py-2.5 text-center bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 font-extrabold rounded-t-lg px-4 w-48">Socio ACA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                <tr>
                  <td className="py-3 text-slate-800 dark:text-slate-200">
                    <strong>Servicio de Grúa en Ruta (100 km)</strong>
                    <div className="text-xs text-slate-400">Auxilio de emergencia</div>
                  </td>
                  <td className="py-3 text-center bg-red-50/50 dark:bg-red-950/20 text-emerald-600 font-bold">INCLUIDO ($0)</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-800 dark:text-slate-200">
                    <strong>Puesta en marcha / Batería</strong>
                    <div className="text-xs text-slate-400">Diagnóstico 24/7 en el lugar</div>
                  </td>
                  <td className="py-3 text-center bg-red-50/50 dark:bg-red-950/20 text-emerald-600 font-bold">INCLUIDO ($0)</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-800 dark:text-slate-200">
                    <strong>Asistencia Médica en Viajes</strong>
                    <div className="text-xs text-slate-400">Titular + acompañante</div>
                  </td>
                  <td className="py-3 text-center bg-red-50/50 dark:bg-red-950/20 text-emerald-600 font-bold">SIN COSTO ($0)</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-800 dark:text-slate-200">
                    <strong>Red Hotelera y Balnearios</strong>
                    <div className="text-xs text-slate-400">En los mejores destinos turísticos</div>
                  </td>
                  <td className="py-3 text-center bg-red-50/50 dark:bg-red-950/20 text-emerald-600 font-bold">Hasta 40% OFF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
