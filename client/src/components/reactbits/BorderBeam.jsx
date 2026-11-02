import React from 'react';

export default function BorderBeam({
  size = 200,
  duration = 8,
  borderWidth = 1.5,
  colorFrom = '#E51937',
  colorTo = '#FEC526',
  className = '',
}) {
  return (
    <div
      style={{
        '--size': `${size}px`,
        '--duration': `${duration}s`,
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--border-width': `${borderWidth}px`,
      }}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-[var(--size)] [animation:border-beam_var(--duration)_infinite_linear] [background:radial-gradient(var(--color-from)_0%,var(--color-to)_50%,transparent_100%)] [offset-anchor:calc(var(--size)/2)_calc(var(--size)/2)] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)))]"
      />
    </div>
  );
}
