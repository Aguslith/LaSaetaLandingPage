import React, { useState, useEffect } from 'react';
import { Fuel, Hotel, Wrench, FileCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SavingsCalculator() {
  const [km, setKm] = useState(1200);
  const [useYpf, setUseYpf] = useState(true);
  const [useHotels, setUseHotels] = useState(true);
  const [useTow, setUseTow] = useState(true);
  const [usePaperwork, setUsePaperwork] = useState(true);
  const [savings, setSavings] = useState(240000);

  useEffect(() => {
    // Calculate estimated annual savings based on driver habits
    let total = 0;
    if (useYpf) {
      const liters = (km / 100) * 9;
      total += liters * 1150 * 0.05 * 12; // 5% continuous savings
    }
    if (useHotels) total += 95000; // hotel vacation savings
    if (useTow) total += 120000; // avoiding 1 private tow
    if (usePaperwork) total += 35000; // driver's license / international permit discount
    setSavings(Math.round(total));
  }, [km, useYpf, useHotels, useTow, usePaperwork]);

  return (
    <section id="calculadora" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors" aria-labelledby="calc-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Subtle red ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="inline-block bg-red-500/20 text-red-400 border border-red-500/30 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Simulador de Ahorro
                </span>
                <h2 id="calc-title" className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                  Calculá tu ahorro anual con los beneficios ACA
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2">
                  Ajustá tu kilometraje mensual y seleccioná tus hábitos para estimar cuánto amortizás tu membresía al año:
                </p>
              </div>

              {/* Slider */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span>¿Cuántos kilómetros manejás al mes?</span>
                  <span className="bg-red-600 text-white font-extrabold px-3 py-1 rounded-full text-xs">
                    {km.toLocaleString('es-AR')} km/mes
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="4000"
                  step="100"
                  value={km}
                  onChange={(e) => setKm(Number(e.target.value))}
                  className="w-full h-2 cursor-pointer"
                  aria-label="Kilómetros al mes"
                />
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUseYpf(!useYpf)}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 text-sm font-semibold transition-all ${
                    useYpf
                      ? 'bg-red-600/20 border-red-500 text-red-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <Fuel className="w-5 h-5 shrink-0" />
                  <span>Descuentos en Combustible YPF</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUseHotels(!useHotels)}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 text-sm font-semibold transition-all ${
                    useHotels
                      ? 'bg-red-600/20 border-red-500 text-red-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <Hotel className="w-5 h-5 shrink-0" />
                  <span>Red Hotelera ACA y Turismo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUseTow(!useTow)}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 text-sm font-semibold transition-all ${
                    useTow
                      ? 'bg-red-600/20 border-red-500 text-red-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <Wrench className="w-5 h-5 shrink-0" />
                  <span>Auxilio y Grúa Sin Cargo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUsePaperwork(!usePaperwork)}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 text-sm font-semibold transition-all ${
                    usePaperwork
                      ? 'bg-red-600/20 border-red-500 text-red-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <FileCheck className="w-5 h-5 shrink-0" />
                  <span>Gestoría de Licencias y DNI</span>
                </button>
              </div>

            </div>

            {/* Results Display */}
            <div className="lg:col-span-5 bg-white/5 border border-white/15 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-center flex flex-col gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ahorro Anual Estimado</span>
              <motion.div
                key={savings}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight"
              >
                ${savings.toLocaleString('es-AR')}
              </motion.div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Calculado en base a tarifas promedio de grúa privada, descuentos hoteleros y ahorro directo en combustibles y trámites vehiculares.
              </p>
              <a
                href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pulse-red inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm shadow-red-glow transition-all mt-2"
              >
                <span>Asociarme y comenzar a ahorrar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
