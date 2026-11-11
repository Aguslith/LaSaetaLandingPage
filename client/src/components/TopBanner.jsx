import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, Flame } from 'lucide-react';

export default function TopBanner() {
  const [timeLeft, setTimeLeft] = useState('01d 14h 38m 22s');

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);
    target.setHours(23, 59, 59, 999);

    const pad = (n) => (n < 10 ? `0${n}` : String(n));

    const update = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft('00d 00h 00m 00s');
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`${pad(d)}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside
      aria-label="Aviso de promoción oficial por tiempo limitado"
      className="bg-slate-950 text-white border-b border-slate-800/80 py-2 px-4 text-xs sm:text-sm relative z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
            <Flame className="w-3 h-3 fill-slate-950" aria-hidden="true" />
            <span>Promo Oficial ACA</span>
          </span>
          <span className="text-white font-medium">
            <strong className="font-bold text-amber-300">3 cuotas al 50% OFF</strong> +{' '}
            <strong className="font-bold text-white">$48.000 en combustible YPF</strong> de bienvenida
          </span>
        </div>

        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-200">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
            <span>Cierre de cupo:</span>
            <span
              className="tabular-nums font-bold text-amber-300 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded-md"
              aria-live="off"
            >
              {timeLeft}
            </span>
          </div>

          <a
            href="#calculadora"
            className="m-btn inline-flex items-center gap-1 font-bold text-amber-300 hover:text-amber-200 text-xs sm:text-sm whitespace-nowrap"
          >
            <span>Calcular mi ahorro</span>
            <ArrowRight className="w-3.5 h-3.5 m-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
}

