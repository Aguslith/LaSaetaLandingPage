import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="relative min-h-[460px] flex items-center justify-center overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Background Image */}
      <img
        src="/assets/socio-aca-equipo.png"
        alt="Socios ACA disfrutando juntos en equipo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay with brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-900/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <h2 id="final-cta-heading" className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4 leading-tight">
          Asociate y empezá a vivir la tranquilidad de tenernos cerca
        </h2>
        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 font-light">
          Completá tus datos y sumate a la comunidad de conductores más importante del país. Seguridad, compañía y respaldo real en cada ruta.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse-red inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold px-8 py-4 rounded-2xl text-base shadow-red-glow transition-all"
          >
            <span>Hacerme Socio Online</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#solicitud"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-2xl text-base backdrop-blur-md transition-all"
          >
            <PhoneCall className="w-5 h-5 text-amber-400" />
            <span>Quiero que me llamen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
