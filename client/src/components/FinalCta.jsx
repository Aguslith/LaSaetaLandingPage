import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="relative min-h-[460px] flex items-center justify-center overflow-hidden bg-slate-950" aria-labelledby="final-cta-heading">
      {/* Background Image */}
      <img
        src="/assets/socio-aca-equipo.png"
        alt="Equipo de auxilio y socios del Automóvil Club Argentino"
        width="1440"
        height="520"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        loading="lazy"
      />
      {/* High-contrast dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/75" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <h2 id="final-cta-heading" className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4 tracking-tight leading-tight">
          Asociate hoy y empezá a viajar con el respaldo del ACA
        </h2>
        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Sumate a la comunidad de conductores más grande de la Argentina. Auxilio mecánico 24/7, 3 cuotas al 50% OFF y $48.000 en combustible YPF.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
            target="_blank"
            rel="noopener noreferrer"
            className="m-btn min-h-[52px] inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-btn-primary"
          >
            <span>Activar membresía con 50% OFF</span>
            <ArrowRight className="w-5 h-5 m-arrow" aria-hidden="true" />
          </a>

          <a
            href="#solicitud"
            className="m-btn min-h-[52px] inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold px-7 py-4 rounded-xl text-base"
          >
            <PhoneCall className="w-5 h-5 text-amber-400" aria-hidden="true" />
            <span>Solicitar llamado de asesor</span>
          </a>
        </div>
      </div>
    </section>
  );
}
