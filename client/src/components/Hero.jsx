import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Layers, Star, Compass, Pause, Play, Radio, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/A11yContext';
import Particles from './reactbits/Particles';
import BorderBeam from './reactbits/BorderBeam';

const DISPATCH_EVENTS = [
  {
    id: 'lr-38',
    unit: 'Unidad #14 · Grúa Pesada',
    route: 'RN 38 · Tramo La Rioja – Chamical',
    status: 'En ruta · ETA 12 min',
    badge: 'Despacho Activo'
  },
  {
    id: 'cat-08',
    unit: 'Unidad #08 · Taller Móvil',
    route: 'San Fernando del Valle de Catamarca',
    status: 'Puesta en marcha completada ($0)',
    badge: 'Asistencia Resuelta'
  },
  {
    id: 'tin-21',
    unit: 'Unidad #21 · Rescate Rutero',
    route: 'RN 60 · Corredor Tinogasta',
    status: 'Guardia operativa 24/7 disponible',
    badge: 'Base Operativa'
  }
];

export default function Hero() {
  const { reducedMotion, isDarkMode } = useTheme();
  const [activeEventIdx, setActiveEventIdx] = useState(0);
  const [loopPaused, setLoopPaused] = useState(false);

  // 3.2s card loop cycle per design-taste-frontend motion.md
  useEffect(() => {
    if (reducedMotion || loopPaused) return;
    const interval = setInterval(() => {
      setActiveEventIdx((prev) => (prev + 1) % DISPATCH_EVENTS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [reducedMotion, loopPaused]);

  const handleCardHover = () => {
    if (!reducedMotion && !loopPaused) {
      setActiveEventIdx(0);
    }
  };

  const currentDispatch = DISPATCH_EVENTS[activeEventIdx];

  return (
    <section
      data-enter
      className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
      aria-labelledby="hero-title"
    >
      {/* Subtle ambient background particles */}
      <Particles
        particleCount={42}
        particleColors={isDarkMode ? ['#E51937', '#FEC526', '#94A3B8'] : ['#E51937', '#F59E0B', '#CBD5E1']}
        speed={0.3}
        connectionDistance={120}
        paused={loopPaused}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: High-Conversion Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Institutional Trust Pill */}
            <div
              className="hero-enter-fade inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-1.5 rounded-full w-fit shadow-sm"
              style={{ animationDelay: '0ms' }}
            >
              <ShieldCheck className="w-4 h-4 text-red-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold">
                120 Años Protegiendo a los Conductores Argentinos · Agente Oficial La Saeta
              </span>
            </div>

            {/* Main Headline with Word-Mask Entrance & Solid Brand Emphasis (no gradient-text slop) */}
            <h1
              id="hero-title"
              className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.5rem] text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.08]"
            >
              <span className="hero-word-mask mr-2.5">
                <span className="hero-word-inner" style={{ animationDelay: '0ms' }}>
                  Hacete Socio ACA y manejá con
                </span>
              </span>{' '}
              <span className="hero-word-mask">
                <span
                  className="hero-word-inner text-red-600 dark:text-amber-400 underline decoration-amber-400/80 dark:decoration-red-500/80 decoration-4 underline-offset-8"
                  style={{ animationDelay: '80ms' }}
                >
                  auxilio mecánico 24/7
                </span>
              </span>{' '}
              <span className="hero-word-mask">
                <span className="hero-word-inner" style={{ animationDelay: '160ms' }}>
                  en todo el país
                </span>
              </span>
            </h1>

            {/* Subtitle (65-75ch measure per craft-floor.md) */}
            <p
              className="hero-enter-fade text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-[62ch] font-normal"
              style={{ animationDelay: '220ms' }}
            >
              No es solo descuentos: es la tranquilidad de contar con rescate y puesta en marcha sin cargo en La Rioja, Catamarca y cada ruta argentina, más red hotelera propia y combustible de bienvenida.
            </p>

            {/* Concrete Promo Highlights Strip */}
            <div
              className="hero-enter-fade grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1"
              style={{ animationDelay: '280ms' }}
            >
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-3.5 rounded-xl shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                  <strong className="font-extrabold">50% OFF</strong> en 3 primeras cuotas
                </span>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-3.5 rounded-xl shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                  <strong className="font-extrabold tabular-nums">$48.000</strong> en combustible YPF
                </span>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-3.5 rounded-xl shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                  <strong className="font-extrabold">25% OFF</strong> en las 6 siguientes
                </span>
              </div>
            </div>

            {/* Primary & Secondary CTAs (Verb + Object per design-taste-frontend copy.md) */}
            <div
              className="hero-enter-fade flex flex-wrap items-center gap-3.5 pt-2"
              style={{ animationDelay: '340ms' }}
            >
              <a
                href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                target="_blank"
                rel="noopener noreferrer"
                className="m-btn inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold px-7 min-h-[52px] rounded-xl text-base shadow-btn-primary"
              >
                <span>Activar membresía con 50% OFF</span>
                <ArrowRight className="w-5 h-5 m-arrow" aria-hidden="true" />
              </a>

              <a
                href="#planes"
                className="m-btn inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold px-6 min-h-[52px] rounded-xl text-base shadow-sm"
              >
                <Layers className="w-5 h-5 text-red-600 dark:text-amber-400" aria-hidden="true" />
                <span>Comparar planes y costos</span>
              </a>
            </div>

            {/* Verified Social Proof Bar */}
            <div
              className="hero-enter-fade flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex -space-x-2 shrink-0">
                <img
                  src="/assets/socio-aca-equipo.png"
                  alt="Socio ACA en ruta"
                  width="36"
                  height="36"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-slate-900"
                />
                <img
                  src="/assets/hero-back.png"
                  alt="Familia socia ACA"
                  width="36"
                  height="36"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-slate-900"
                />
                <img
                  src="/assets/auxilio-aca.png"
                  alt="Unidad de auxilio ACA"
                  width="36"
                  height="36"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-slate-900"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white ml-1.5 tabular-nums">
                    4.9 / 5 en Google Reviews
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Respaldo verificado por socios vitalicios y conductores de todo el país.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Stage + Live Operational Telemetry Card (No 3D Tilt per motion.md) */}
          <div className="lg:col-span-5 relative" onMouseEnter={handleCardHover}>
            <div className="m-zoom-frame relative bg-white dark:bg-slate-900 rounded-3xl p-3 shadow-elevated-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden">
              
              {!reducedMotion && !loopPaused && (
                <BorderBeam size={240} duration={9} colorFrom="#E51937" colorTo="#FEC526" />
              )}

              {/* Main Hero Photography with 1.1s settle animation and hover 1.03 zoom */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
                <img
                  src="/assets/hero-back.png"
                  alt="Socios del Automóvil Club Argentino viajando tranquilos por rutas nacionales"
                  width="640"
                  height="420"
                  fetchpriority="high"
                  className="hero-photo-settle m-zoom-img w-full h-[300px] sm:h-[370px] lg:h-[420px] object-cover"
                />

                {/* Top Badge: Regional Coverage */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-elevated border border-slate-200/80 dark:border-slate-800 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-red-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Corredor La Rioja &amp; Catamarca + Red Nacional
                  </span>
                </div>

                {/* Top-Right Official Promo Badge */}
                <div className="absolute top-3.5 right-3.5 bg-amber-400 text-slate-950 px-3 py-1.5 rounded-xl shadow-elevated font-extrabold text-xs tabular-nums">
                  +$48.000 YPF
                </div>
              </div>

              {/* Bottom Live Telemetry UI Fragment (cycles every 3.2s with 32px Pause Disc per motion.md) */}
              <div
                className="mt-3 bg-slate-950 text-white p-4 rounded-2xl border border-slate-800 relative"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="flex items-center justify-between gap-2 mb-2 pr-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      {!reducedMotion && !loopPaused && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      )}
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      {currentDispatch.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 tabular-nums">
                    {activeEventIdx + 1} / {DISPATCH_EVENTS.length}
                  </span>
                </div>

                <div className="pr-10">
                  <p className="text-sm font-bold text-white leading-snug">
                    {currentDispatch.unit}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {currentDispatch.route} — <strong className="text-emerald-300 font-semibold">{currentDispatch.status}</strong>
                  </p>
                </div>

                {/* Progress Indicator dots */}
                <div className="flex items-center gap-1.5 mt-3">
                  {DISPATCH_EVENTS.map((ev, idx) => (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => setActiveEventIdx(idx)}
                      aria-label={`Ver estado operativo ${idx + 1}: ${ev.unit}`}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        idx === activeEventIdx ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                {/* 32px Pause/Play Disc per design-taste-frontend motion.md ("solid 32px disc, 12px in from bottom-right") */}
                {!reducedMotion && (
                  <button
                    type="button"
                    onClick={() => setLoopPaused((prev) => !prev)}
                    aria-label={loopPaused ? 'Reanudar monitor de despacho en vivo' : 'Pausar monitor de despacho en vivo'}
                    title={loopPaused ? 'Reanudar ciclo' : 'Pausar ciclo'}
                    className="loop-pause absolute bottom-3 right-3 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white flex items-center justify-center transition-colors"
                  >
                    {loopPaused ? (
                      <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    ) : (
                      <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    )}
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
