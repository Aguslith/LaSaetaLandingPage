import React, { useState } from 'react';
import { Shield, MapPin, CheckCircle2, Truck, PhoneCall } from 'lucide-react';

const OPERATIONAL_BASES = [
  {
    id: 'larioja',
    city: 'La Rioja Capital',
    province: 'Provincia de La Rioja',
    routes: 'RN 38 · RN 75 · Accesos Urbanos y Cuesta de Huaco',
    fleet: 'Grúas de plancha, unidades de mecánica ligera y baterías',
    response: 'Despacho inmediato 24/7',
    coords: { x: 155, y: 125 }
  },
  {
    id: 'chamical',
    city: 'Chamical',
    province: 'Provincia de La Rioja (Llanos Riojanos)',
    routes: 'RN 38 · RN 79 · Corredor Sur y conexión Córdoba',
    fleet: 'Unidades de rescate en ruta y traslado de larga distancia',
    response: 'Guardia permanente 24h',
    coords: { x: 245, y: 185 }
  },
  {
    id: 'catamarca',
    city: 'Catamarca Capital',
    province: 'Provincia de Catamarca',
    routes: 'RN 38 · RP 1 ·RP 4 · Cuesta del Portezuelo y Valle Central',
    fleet: 'Flota pesada y liviana de rescate y taller móvil',
    response: 'Despacho inmediato 24/7',
    coords: { x: 285, y: 95 }
  },
  {
    id: 'tinogasta',
    city: 'Tinogasta',
    province: 'Provincia de Catamarca (Oeste y Ruta del Adobe)',
    routes: 'RN 60 · RN 40 · Paso de San Francisco y Fiambalá',
    fleet: 'Unidades de alta montaña y auxilio mecánico integral',
    response: 'Guardia permanente 24h',
    coords: { x: 95, y: 65 }
  }
];

export default function CoverageMap() {
  const [selectedBaseId, setSelectedBaseId] = useState('larioja');
  const activeBase = OPERATIONAL_BASES.find((b) => b.id === selectedBaseId) || OPERATIONAL_BASES[0];

  return (
    <section id="cobertura" className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden" aria-labelledby="coverage-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Highlights */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 id="coverage-title" className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-white tracking-tight leading-tight">
              Cobertura activa en toda La Rioja, Catamarca y rutas nacionales
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Como corredor oficial de auxilio mecánico <strong>La Saeta S.R.L.</strong>, operamos bases permanentes en puntos estratégicos del NOA integradas a la red federal del Automóvil Club Argentino.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {[
                'Central de operaciones 24/7',
                'Flota pesada y liviana de rescate',
                'Talleres móviles especializados',
                'Cobertura en ruta y zonas urbanas'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-base font-semibold text-white">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#solicitud"
                className="m-btn inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 min-h-[48px] rounded-xl text-sm shadow-btn-primary"
              >
                <span>Asociate y viajá con respaldo</span>
                <Shield className="w-4 h-4" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                <PhoneCall className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Emergencias 24h: <strong className="text-white tabular-nums">0800-888-4222</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Corridor Diagram & Base Selector */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-elevated-lg">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                Red de Bases Operativas NOA
              </h3>
              <span className="text-xs text-slate-950 font-extrabold bg-amber-400 px-3 py-1 rounded-full">
                Seleccioná una base
              </span>
            </div>

            {/* Interactive SVG Corridor Schematic Diagram (design-taste-frontend rule 7) */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5">
              <svg
                viewBox="0 0 380 230"
                className="w-full h-44 sm:h-48"
                role="img"
                aria-label="Diagrama de rutas conectando Tinogasta, Catamarca Capital, La Rioja Capital y Chamical"
              >
                {/* Subtle Grid Lines */}
                <line x1="0" y1="60" x2="380" y2="60" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="120" x2="380" y2="120" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="180" x2="380" y2="180" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />

                {/* Route Connections (RN 60 & RN 38) */}
                <path
                  d="M 95 65 L 155 125 L 245 185"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="2.5"
                />
                <path
                  d="M 155 125 L 285 95"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="2.5"
                />
                <path
                  d="M 95 65 L 285 95"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />

                {/* Route Labels */}
                <text x="100" y="112" fill="#94A3B8" fontSize="10" fontWeight="700">RN 60</text>
                <text x="215" y="102" fill="#94A3B8" fontSize="10" fontWeight="700">RN 38</text>
                <text x="182" y="170" fill="#94A3B8" fontSize="10" fontWeight="700">RN 38 Sur</text>

                {/* Base Nodes */}
                {OPERATIONAL_BASES.map((base) => {
                  const isSelected = base.id === selectedBaseId;
                  return (
                    <g
                      key={base.id}
                      onClick={() => setSelectedBaseId(base.id)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={base.coords.x}
                          cy={base.coords.y}
                          r="18"
                          fill="rgba(254, 197, 38, 0.2)"
                          stroke="#FEC526"
                          strokeWidth="1.5"
                        />
                      )}
                      <circle
                        cx={base.coords.x}
                        cy={base.coords.y}
                        r={isSelected ? '8' : '6'}
                        fill={isSelected ? '#FEC526' : '#E51937'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />
                      <text
                        x={base.coords.x}
                        y={base.coords.y - 14}
                        textAnchor="middle"
                        fill={isSelected ? '#FEC526' : '#F8FAFC'}
                        fontSize="11"
                        fontWeight="800"
                      >
                        {base.city}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Base Selection Pills (min-h-[44px] touch targets) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5" role="tablist" aria-label="Seleccionar base operativa">
              {OPERATIONAL_BASES.map((base) => {
                const isSelected = base.id === selectedBaseId;
                return (
                  <button
                    key={base.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedBaseId(base.id)}
                    className={`m-btn min-h-[44px] px-3 py-2 rounded-xl text-xs font-bold border text-center transition-colors ${
                      isSelected
                        ? 'bg-amber-400 border-amber-400 text-slate-950'
                        : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-600'
                    }`}
                  >
                    {base.city}
                  </button>
                );
              })}
            </div>

            {/* Selected Base Details Panel (Single level container, no nested cards) */}
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl" aria-live="polite">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                  <h4 className="text-base font-extrabold text-white">{activeBase.city}</h4>
                </div>
                <span className="text-xs font-extrabold text-emerald-300 bg-emerald-950 border border-emerald-700 px-3 py-1 rounded-full">
                  ● {activeBase.response}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mb-2">
                <strong className="text-white">Rutas de cobertura:</strong> {activeBase.routes}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span>{activeBase.fleet}</span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
