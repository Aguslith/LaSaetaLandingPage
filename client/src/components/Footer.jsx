import React from 'react';

export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 text-xs sm:text-sm border-t border-slate-900" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Logo & Legal Authority */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <img src="/assets/logo-la-saeta-dark.png" alt="La Saeta S.R.L. - Corredor Auxilio Mecánico La Rioja-Catamarca" className="h-14 sm:h-16 w-auto self-start object-contain" />
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Los seguros son emitidos por Caja de Seguros S.A. Fitz Roy 957 (C1414CHI) C.A.B.A. CUIT 30-66320562-1. Nº de Inscripción en SSN: 501. Superintendencia de Seguros de la Nación 4338-4000 o 0-800-666-8400, www.argentina.gob.ar/ssn. Consultá acerca de las coberturas, sus límites, condiciones de suscripción y exclusiones de la póliza. Agente Institorio: Automóvil Club Argentino. Av. del Libertador 1850 (C1425AAR) C.A.B.A. CUIT 30-50014329-7. N° de Inscripción en SSN: 350.
            </p>
          </div>

          {/* Column: Servicios */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#beneficios" className="hover:text-red-400 transition-colors">Auxilio Mecánico 24/7</a></li>
              <li><a href="#beneficios" className="hover:text-red-400 transition-colors">Red Hotelera ACA</a></li>
              <li><a href="#beneficios" className="hover:text-red-400 transition-colors">Seguro Automotor</a></li>
              <li><a href="#beneficios" className="hover:text-red-400 transition-colors">Asistencia al Viajero</a></li>
              <li><a href="#beneficios" className="hover:text-red-400 transition-colors">Gestión de Licencias y DNI</a></li>
            </ul>
          </div>

          {/* Column: Membresías */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Membresías</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#planes" className="hover:text-red-400 transition-colors">Plan Activo</a></li>
              <li><a href="#planes" className="hover:text-red-400 transition-colors">Plan Integral</a></li>
              <li><a href="#planes" className="hover:text-red-400 transition-colors">Plan Familiar / Total</a></li>
            </ul>
          </div>

          {/* Column: Contacto */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contacto Oficial</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><strong className="text-slate-300">Central 24hs:</strong> 0800-888-4222</li>
              <li><strong className="text-slate-300">Sede Central:</strong> Av. del Libertador 1850, CABA</li>
              <li><strong className="text-slate-300">Auxilio Rutero:</strong> *222 desde el celular</li>
              <li><a href="#solicitud" className="text-red-400 font-semibold hover:underline">Solicitar llamada</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Automóvil Club Argentino (ACA). Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <a
              href="http://www.aca.org.ar/condiciones/somos-equipo-4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
