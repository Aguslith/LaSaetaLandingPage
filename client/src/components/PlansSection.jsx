import React from 'react';
import { CheckCircle2, ArrowRight, Shield, Car, Users, Info } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';
import BorderBeam from './reactbits/BorderBeam';
import { useTheme } from '../context/A11yContext';

export default function PlansSection() {
  const { reducedMotion } = useTheme();

  const plans = [
    {
      name: 'Plan Activo',
      badge: 'Membresía Ciudad',
      priceTag: 'Cobertura Urbana & Gestoría',
      icon: Car,
      desc: 'Diseñado para quienes circulan a diario en ciudad y buscan auxilio ágil, trámites y descuentos.',
      features: [
        'Auxilio mecánico y puesta en marcha urbana',
        'Cambio de neumáticos y puente de batería en el acto',
        '3 cuotas al 50% OFF + 6 cuotas al 25% OFF',
        'Descuentos en trámites de Licencia y DNI (hasta 75%)',
        'Acceso a la Red Hotelera ACA con tarifa preferencial',
        'Descuentos en más de 1.000 comercios adheridos'
      ],
      ctaText: 'Solicitar Plan Activo',
      recommended: false
    },
    {
      name: 'Plan Integral Socio ACA',
      badge: 'Más Elegido · Promo Oficial',
      price: '37.550',
      priceSub: '3 cuotas al 50% OFF + $48.000 YPF de regalo',
      icon: Shield,
      desc: 'La cobertura más completa de la Argentina. Tranquilidad total en ruta y ciudad las 24 horas.',
      features: [
        'Auxilio mecánico 24/7 ilimitado en toda la Argentina',
        '$48.000 en combustible YPF acreditados de bienvenida',
        'Servicio de remolque, rescate y traslado de vehículo',
        'Asistencia al viajero médica y legal (titular + acompañante)',
        'Tarifas exclusivas en Red Hotelera ACA y campings',
        'Bonificaciones en seguro automotor con La Caja'
      ],
      ctaText: 'Asociarme con 50% OFF',
      recommended: true
    },
    {
      name: 'Plan Familiar / Total',
      badge: 'Grupo Familiar',
      priceTag: 'Cobertura Multi-Vehículo',
      icon: Users,
      desc: 'Para familias que buscan extender el respaldo mecánico y médico a múltiples conductores del hogar.',
      features: [
        'Auxilio 24/7 para titular, cónyuge e hijos directos',
        'Cobertura extensible a los vehículos del grupo familiar',
        '3 cuotas al 50% OFF + $48.000 en combustible YPF',
        'Asistencia al viajero nacional ampliada sin cargo',
        'Prioridad operativa en despacho de grúa en ruta',
        'Beneficios multiplicados en turismo, hoteles y recreación'
      ],
      ctaText: 'Solicitar Plan Familiar',
      recommended: false
    }
  ];

  const comparisonRows = [
    {
      service: 'Servicio de Grúa / Remolque en Ruta (100 km)',
      detail: 'Auxilio de urgencia las 24 horas',
      particular: '$120.000 a $180.000',
      aca: 'INCLUIDO ($0)'
    },
    {
      service: 'Auxilio de Batería / Puesta en marcha',
      detail: 'Diagnóstico y puente eléctrico a domicilio',
      particular: '$45.000 por visita',
      aca: 'INCLUIDO ($0)'
    },
    {
      service: 'Asistencia Médica al Viajero (Nacional)',
      detail: 'Cobertura para titular y acompañante',
      particular: '$65.000 por viaje',
      aca: 'SIN COSTO ($0)'
    },
    {
      service: 'Crédito de Bienvenida en Combustible YPF',
      detail: 'Bonificación directa en tus cargas',
      particular: 'Sin bonificación ($0)',
      aca: '+$48.000 A FAVOR'
    },
    {
      service: 'Red Hotelera ACA, Hosterías y Comercios',
      detail: 'Más de 1.000 establecimientos en el país',
      particular: 'Tarifa particular plena',
      aca: 'Hasta 40% OFF'
    }
  ];

  return (
    <section id="planes" className="py-20 lg:py-24 bg-white dark:bg-slate-900 transition-colors" aria-labelledby="plans-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Direct authoritative heading without kicker pill) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="plans-title" className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Con el ACA lo importante es lo que recibís
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Elegí el plan que se adapta a tu vehículo y aprovechá las 3 primeras cuotas al 50% OFF más $48.000 en combustible YPF.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <SpotlightCard
                key={plan.name}
                spotlightColor={plan.recommended ? 'rgba(229, 25, 55, 0.14)' : 'rgba(100, 116, 139, 0.08)'}
                spotlightBorder={plan.recommended ? 'rgba(229, 25, 55, 0.55)' : 'rgba(100, 116, 139, 0.25)'}
                className={`p-7 sm:p-8 flex flex-col justify-between relative ${
                  plan.recommended
                    ? 'border-2 border-red-600 dark:border-amber-400 shadow-elevated-lg'
                    : 'border border-slate-200 dark:border-slate-800'
                }`}
              >
                {plan.recommended && !reducedMotion && (
                  <BorderBeam size={260} duration={8} colorFrom="#E51937" colorTo="#FEC526" />
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider ${
                        plan.recommended
                          ? 'bg-red-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 flex items-center justify-center text-red-600 dark:text-amber-400 shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-base text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
                    {plan.desc}
                  </p>

                  {/* Pricing / Value Callout Box */}
                  {plan.price ? (
                    <div className="mb-6 p-4 rounded-2xl bg-amber-50/90 dark:bg-slate-950 border border-amber-300/80 dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-2">
                        <img src="/assets/50-off.svg" alt="50% OFF en 3 cuotas" width="48" height="40" className="h-9 w-auto" loading="lazy" />
                        <img src="/assets/promo-aca-card.svg" alt="$48.000 en combustible" width="90" height="40" className="h-9 w-auto" loading="lazy" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Asociándote hoy desde
                      </p>
                      <div className="flex items-baseline gap-1 mt-0.5 tabular-nums">
                        <span className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">$</span>
                        <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">/mes</span>
                      </div>
                      <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400 mt-1.5">
                        ✓ {plan.priceSub}
                      </p>
                    </div>
                  ) : (
                    <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                        Modalidad de Cobertura
                      </span>
                      <span className="font-heading font-bold text-lg text-slate-900 dark:text-white mt-0.5 block">
                        {plan.priceTag}
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1 block">
                        ✓ Incluye promo 50% OFF + $48.000 YPF
                      </span>
                    </div>
                  )}

                  <div className="border-t border-slate-200 dark:border-slate-800 pt-5 mb-7">
                    <span className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 tracking-wider block mb-3.5">
                      Prestaciones Incluidas:
                    </span>
                    <ul className="space-y-3">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-base text-slate-800 dark:text-slate-200 leading-snug">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <a
                    href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`m-btn w-full min-h-[48px] inline-flex items-center justify-center gap-2 font-extrabold py-3.5 px-6 rounded-xl text-sm ${
                      plan.recommended
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-btn-primary'
                        : 'bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white border border-slate-800 dark:border-slate-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 m-arrow" aria-hidden="true" />
                  </a>
                  {plan.recommended && (
                    <a
                      href="http://www.aca.org.ar/condiciones/somos-equipo-4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline underline-offset-4 mt-3 py-1"
                    >
                      Ver bases y condiciones de la promoción
                    </a>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Full 3-Column Comparison Box (Socio ACA vs Particular sin cobertura) */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">
              ¿Por qué asociarse al ACA se amortiza en el primer viaje?
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300">
              Compará lo que cuesta resolver una urgencia mecánica por tu cuenta frente a tener respaldo oficial ACA:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" aria-label="Comparativa de costos entre Conductor Particular y Socio ACA">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider">
                  <th className="py-3.5 pr-4 font-bold text-slate-700 dark:text-slate-300">Servicio / Incidente en Ruta</th>
                  <th className="py-3.5 px-4 text-center font-bold text-slate-700 dark:text-slate-300 hidden sm:table-cell">Sin Cobertura (Particular)</th>
                  <th className="py-3.5 px-4 text-center bg-amber-100 dark:bg-amber-950/60 text-slate-950 dark:text-amber-300 font-extrabold rounded-t-xl w-48 sm:w-56">
                    Socio ACA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 tabular-nums text-sm sm:text-base">
                {comparisonRows.map((row) => (
                  <tr key={row.service}>
                    <td className="py-4 pr-4 text-slate-900 dark:text-slate-100">
                      <strong className="font-bold block">{row.service}</strong>
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{row.detail}</span>
                    </td>
                    <td className="py-4 px-4 text-center text-red-700 dark:text-red-400 font-semibold hidden sm:table-cell">
                      {row.particular}
                    </td>
                    <td className="py-4 px-4 text-center bg-amber-50/70 dark:bg-amber-950/25 text-emerald-800 dark:text-emerald-400 font-extrabold">
                      {row.aca}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-amber-100/80 dark:bg-slate-900 border border-amber-300 dark:border-slate-800 flex items-center gap-3 text-sm sm:text-base text-slate-900 dark:text-slate-200">
            <Info className="w-5 h-5 text-amber-800 dark:text-amber-400 shrink-0" aria-hidden="true" />
            <span>
              Con un solo servicio de remolque en ruta o el crédito de bienvenida de <strong className="font-extrabold tabular-nums">$48.000 en YPF</strong>, tus primeros meses quedan cubiertos.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
