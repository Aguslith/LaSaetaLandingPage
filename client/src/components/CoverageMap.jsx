import React from 'react';
import { Shield, MapPin, CheckCircle2 } from 'lucide-react';

export default function CoverageMap() {
  const bases = [
    {
      name: 'La Rioja Capital y Chamical',
      desc: 'Bases operativas permanentes con auxilio y remolque activo en toda la provincia de La Rioja',
      status: 'Activo 24h'
    },
    {
      name: 'Catamarca Capital y Tinogasta',
      desc: 'Bases operativas permanentes con auxilio y remolque activo en toda la provincia de Catamarca',
      status: 'Activo 24h'
    },
  ];

  return (
    <section id="cobertura" className="py-20 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="coverage-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="inline-block bg-red-500/20 text-red-400 border border-red-500/30 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider w-fit">
              Cobertura Regional La Rioja & Catamarca
            </span>
            <h2 id="coverage-title" className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              Nunca estás solo: Cobertura activa en toda La Rioja y Catamarca
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Bases operativas estratégicas en La Rioja Capital, Chamical, Catamarca Capital y Tinogasta, con cobertura total de asistencia y rescate en cada ruta y localidad de ambas provincias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Central de operaciones 24/7',
                'Flota pesada y liviana de rescate',
                'Talleres móviles especializados',
                'Auxilio en ruta y zonas urbanas'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#solicitud"
                className="btn-pulse-red inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-red-glow"
              >
                <span>Asociate y viajá con respaldo</span>
                <Shield className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-heading font-bold text-lg text-white">
                Bases de Operaciones Destacadas
              </h3>
              <span className="text-xs text-red-400 font-bold bg-red-500/10 border border-red-500/30 px-2.5 py-1 rounded-full">
                La Rioja & Catamarca
              </span>
            </div>

            <div className="space-y-4">
              {bases.map((b) => (
                <div
                  key={b.name}
                  className="bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{b.name}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-full whitespace-nowrap self-start sm:self-center shrink-0">
                    ● {b.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Coverage note banner */}
            <div className="mt-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-slate-300 flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-white">Cobertura Provincial Total:</strong> Si bien nuestras bases operativas están en La Rioja Capital, Chamical, Catamarca Capital y Tinogasta, brindamos auxilio mecánico y remolque en <strong className="text-white">toda la provincia de La Rioja y Catamarca</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
