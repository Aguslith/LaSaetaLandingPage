import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Layers, Star, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/A11yContext';
import Particles from './reactbits/Particles';
import BlurText from './reactbits/BlurText';
import ShinyText from './reactbits/ShinyText';
import BorderBeam from './reactbits/BorderBeam';

export default function Hero() {
  const { reducedMotion, isDarkMode } = useTheme();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (reducedMotion || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (x / (rect.width / 2)) * 6,
      y: (-y / (rect.height / 2)) * 6
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors" aria-labelledby="hero-title">
      
      {/* React Bits Interactive Particles Background */}
      <Particles
        particleCount={55}
        particleColors={isDarkMode ? ['#E51937', '#FEC526', '#60A5FA'] : ['#E51937', '#F59E0B', '#94A3B8']}
        speed={0.4}
        connectionDistance={130}
      />

      {/* Ambient gradient backlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-600/10 dark:bg-red-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Prestigious Copy & Value Proposition */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Authority Pill with ShinyText */}
            <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 px-3.5 py-1.5 rounded-full w-fit shadow-sm">
              <ShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400" />
              <ShinyText
                text="120 Años Cuidando a los Conductores Argentinos"
                className="text-xs sm:text-sm text-red-700 dark:text-red-300 font-bold"
                speed={4}
              />
            </div>

            {/* Main Headline with BlurText */}
            <h1 id="hero-title" className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Tu tranquilidad en cada camino con el{' '}
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                respaldo más completo del país
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Auxilio mecánico 24/7 en cualquier punto de la Argentina, red hotelera exclusiva, asistencia al viajero y beneficios cotidianos. No manejás solo: contás con la mayor red de asistencia federal.
            </p>

            {/* Service Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-sm flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Auxilio Mecánico 24/7</span>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-sm flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Red Hotelera Propia</span>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-sm flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Asistencia al Viajero</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pulse-red inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold px-7 py-3.5 rounded-xl text-base shadow-red-glow hover:translate-y-[-2px] transition-all"
              >
                <span>Hacete Socio Online</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#planes"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold px-6 py-3.5 rounded-xl text-base shadow-sm hover:border-red-500 hover:translate-y-[-2px] transition-all"
              >
                <Layers className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span>Conocé los Planes</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex -space-x-2">
                <img src="/assets/socio-aca-equipo.png" alt="Socio" className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-slate-800" />
                <img src="/assets/hero-back.png" alt="Socio" className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-slate-800" />
                <img src="/assets/auxilio-aca.png" alt="Socio" className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-slate-800" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-900 dark:text-white ml-1">4.9 / 5</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Puntaje verificado por miles de socios en todo el país.</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Tilt Card with React Bits BorderBeam */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <div
              className="relative bg-white dark:bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-transform duration-150 ease-out"
              style={{
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
              }}
            >
              {/* React Bits Border Beam */}
              <BorderBeam size={250} duration={9} colorFrom="#E51937" colorTo="#FEC526" />

              <img
                src="/assets/hero-back.png"
                alt="Socios ACA disfrutando de un viaje por carretera"
                className="w-full h-[280px] sm:h-[360px] lg:h-[410px] object-cover rounded-2xl"
              />

              {/* Floating Badge 1: Federal Presence */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">Cobertura La Rioja & Catamarca</span>
              </div>

              {/* Floating Badge 2: Emergency Response */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-slate-950/90 text-white p-3 sm:p-4 rounded-2xl shadow-xl border border-white/10 max-w-[180px] sm:max-w-[210px] backdrop-blur-md">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Central Operativa</span>
                <span className="text-lg sm:text-xl font-extrabold text-white block mt-0.5">Auxilio 24hs</span>
                <span className="text-[11px] sm:text-xs text-slate-300">Rescate y asistencia mecánica en ruta</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
