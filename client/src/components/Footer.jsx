import React from 'react';

export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 text-xs sm:text-sm border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Logo & Legal Authority */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <img
              src="/assets/logo-la-saeta-dark.png"
              alt="La Saeta S.R.L. - Corredor Auxilio Mecánico La Rioja-Catamarca"
              width="240"
              height="56"
              loading="lazy"
              className="h-14 sm:h-16 w-auto self-start object-contain"
            />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Los seguros son emitidos por Caja de Seguros S.A. Fitz Roy 957 (C1414CHI) C.A.B.A. CUIT 30-66320562-1. Nº de Inscripción en SSN: 501. Superintendencia de Seguros de la Nación 4338-4000 o 0-800-666-8400, www.argentina.gob.ar/ssn. Consultá acerca de las coberturas, sus límites, condiciones de suscripción y exclusiones de la póliza. Agente Institorio: Automóvil Club Argentino. Av. del Libertador 1850 (C1425AAR) C.A.B.A. CUIT 30-50014329-7. N° de Inscripción en SSN: 350.
            </p>
          </div>

          {/* Column: Servicios */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Servicios</h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#beneficios" className="hover:text-amber-400 transition-colors py-1 inline-block">Auxilio Mecánico 24/7</a></li>
              <li><a href="#beneficios" className="hover:text-amber-400 transition-colors py-1 inline-block">Red Hotelera ACA</a></li>
              <li><a href="#beneficios" className="hover:text-amber-400 transition-colors py-1 inline-block">Seguro Automotor</a></li>
              <li><a href="#beneficios" className="hover:text-amber-400 transition-colors py-1 inline-block">Asistencia al Viajero</a></li>
              <li><a href="#beneficios" className="hover:text-amber-400 transition-colors py-1 inline-block">Gestión de Licencias y DNI</a></li>
            </ul>
          </div>

          {/* Column: Membresías */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Membresías &amp; Promo</h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#planes" className="hover:text-amber-400 transition-colors py-1 inline-block">Plan Activo</a></li>
              <li><a href="#planes" className="hover:text-amber-400 transition-colors py-1 inline-block">Plan Integral (50% OFF)</a></li>
              <li><a href="#planes" className="hover:text-amber-400 transition-colors py-1 inline-block">Plan Familiar / Total</a></li>
              <li><a href="#calculadora" className="hover:text-amber-400 transition-colors py-1 inline-block">Simulador de Ahorro</a></li>
            </ul>
          </div>

          {/* Column: Contacto */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Contacto Oficial</h3>
            <ul className="space-y-2.5 text-xs text-slate-300 tabular-nums">
              <li><strong className="text-white">Central 24hs:</strong> 0800-888-4222</li>
              <li><strong className="text-white">Sede Central:</strong> Av. del Libertador 1850, CABA</li>
              <li><strong className="text-white">Auxilio Rutero:</strong> *222 desde el celular</li>
              <li><a href="#solicitud" className="text-amber-400 font-bold hover:underline py-1 inline-block">Solicitar llamada de asesor</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© 2026 Automóvil Club Argentino (ACA) · Agente Oficial La Saeta S.R.L. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-amber-400 transition-colors cursor-pointer py-1 font-medium"
            >
              Política de Privacidad
            </button>
            <a
              href="http://www.aca.org.ar/condiciones/somos-equipo-4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors py-1 font-medium"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>

        {/* Micro Watermark */}
        <div className="mt-6 flex items-center justify-center sm:justify-start">
          <p className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.06em] text-slate-400 hover:text-slate-200 transition-colors select-none">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M2 13L6.5 5l3 4.5 2-2.5L14 13H2z" />
            </svg>
            <span>
              Creado por <strong className="font-medium text-slate-300">Cumbre Digital SRL</strong>
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
