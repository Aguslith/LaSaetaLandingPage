import React, { useState, useMemo } from 'react';
import { Fuel, Hotel, Wrench, FileCheck, ArrowRight, Check } from 'lucide-react';

export default function SavingsCalculator() {
  const [km, setKm] = useState(1200);
  const [useYpf, setUseYpf] = useState(true);
  const [useHotels, setUseHotels] = useState(true);
  const [useTow, setUseTow] = useState(true);
  const [usePaperwork, setUsePaperwork] = useState(true);

  const breakdown = useMemo(() => {
    const welcomeGift = 48000;
    const fuelAnnual = useYpf ? Math.round(((km / 100) * 9) * 1150 * 0.05 * 12) : 0;
    const towAnnual = useTow ? 120000 : 0;
    const hotelAnnual = useHotels ? 95000 : 0;
    const paperworkAnnual = usePaperwork ? 35000 : 0;
    const total = welcomeGift + fuelAnnual + towAnnual + hotelAnnual + paperworkAnnual;

    return {
      welcomeGift,
      fuelAnnual,
      towAnnual,
      hotelAnnual,
      paperworkAnnual,
      total
    };
  }, [km, useYpf, useHotels, useTow, usePaperwork]);

  const toggleItems = [
    {
      id: 'ypf',
      label: 'Descuento continuo Combustible YPF',
      amount: breakdown.fuelAnnual,
      active: useYpf,
      onToggle: () => setUseYpf(!useYpf),
      icon: Fuel
    },
    {
      id: 'tow',
      label: 'Auxilio Mecánico y Grúa sin cargo',
      amount: 120000,
      active: useTow,
      onToggle: () => setUseTow(!useTow),
      icon: Wrench
    },
    {
      id: 'hotels',
      label: 'Red Hotelera ACA y Turismo',
      amount: 95000,
      active: useHotels,
      onToggle: () => setUseHotels(!useHotels),
      icon: Hotel
    },
    {
      id: 'paperwork',
      label: 'Gestoría de Licencias y DNI',
      amount: 35000,
      active: usePaperwork,
      onToggle: () => setUsePaperwork(!usePaperwork),
      icon: FileCheck
    }
  ];

  return (
    <section id="calculadora" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-950 transition-colors" aria-labelledby="calc-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-elevated-lg border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <h2 id="calc-title" className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                  Calculá cuánto ahorrás al año siendo Socio ACA
                </h2>
                <p className="text-base text-slate-300 mt-2 leading-relaxed">
                  Ajustá tu kilometraje mensual y marcá los servicios que usás para estimar el retorno anual de tu membresía:
                </p>
              </div>

              {/* Range Slider Control */}
              <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl flex flex-col gap-3.5">
                <div className="flex justify-between items-center gap-2">
                  <label htmlFor="km-range-slider" className="text-sm sm:text-base font-bold text-white">
                    ¿Cuántos kilómetros manejás por mes?
                  </label>
                  <span className="tabular-nums bg-amber-400 text-slate-950 font-extrabold px-3.5 py-1 rounded-full text-xs sm:text-sm">
                    {km.toLocaleString('es-AR')} km/mes
                  </span>
                </div>
                <input
                  id="km-range-slider"
                  type="range"
                  min="300"
                  max="4000"
                  step="100"
                  value={km}
                  onChange={(e) => setKm(Number(e.target.value))}
                  className="w-full h-2.5 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 tabular-nums font-medium">
                  <span>300 km (Uso urbano)</span>
                  <span>2.000 km (Mixto)</span>
                  <span>4.000 km (Ruta intensivo)</span>
                </div>
              </div>

              {/* Interactive Habit Toggles (min-h-[48px] touch targets + aria-pressed) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {toggleItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={item.active}
                      onClick={item.onToggle}
                      className={`m-btn min-h-[56px] p-4 rounded-xl border flex items-center justify-between gap-3 text-left transition-colors ${
                        item.active
                          ? 'bg-slate-900 border-amber-400 text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            item.active ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-bold block leading-snug">
                            {item.label}
                          </span>
                          <span className="text-xs text-amber-300 tabular-nums font-semibold">
                            +${item.amount.toLocaleString('es-AR')}/año
                          </span>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                          item.active
                            ? 'bg-amber-400 border-amber-400 text-slate-950'
                            : 'border-slate-600 bg-transparent'
                        }`}
                      >
                        {item.active && <Check className="w-3.5 h-3.5 stroke-[3]" aria-hidden="true" />}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Live Itemized Breakdown Receipt */}
            <div
              className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-5"
              aria-live="polite"
            >
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Beneficio Anual Estimado
                </span>
                <div className="tabular-nums font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                  ${breakdown.total.toLocaleString('es-AR')}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Suma de crédito de bienvenida + ahorro proyectado en 12 meses:
                </p>

                {/* Itemized Breakdown List */}
                <dl className="mt-5 pt-4 border-t border-slate-800 space-y-2.5 text-xs sm:text-sm tabular-nums">
                  <div className="flex justify-between text-slate-200">
                    <dt>Regalo bienvenida Combustible YPF:</dt>
                    <dd className="font-bold text-amber-400">+${breakdown.welcomeGift.toLocaleString('es-AR')}</dd>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <dt>Descuento YPF ({km.toLocaleString('es-AR')} km/mes):</dt>
                    <dd className="font-bold text-white">+${breakdown.fuelAnnual.toLocaleString('es-AR')}</dd>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <dt>Auxilio y remolque cubierto:</dt>
                    <dd className="font-bold text-white">+${breakdown.towAnnual.toLocaleString('es-AR')}</dd>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <dt>Red Hotelera y Gestoría ACA:</dt>
                    <dd className="font-bold text-white">+${(breakdown.hotelAnnual + breakdown.paperworkAnnual).toLocaleString('es-AR')}</dd>
                  </div>
                </dl>
              </div>

              <a
                href="#solicitud"
                className="m-btn w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm shadow-btn-primary"
              >
                <span>Solicitar alta con este ahorro</span>
                <ArrowRight className="w-4 h-4 m-arrow" aria-hidden="true" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
