import React, { useRef, useState } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(229, 25, 55, 0.12)',
  spotlightBorder = 'rgba(229, 25, 55, 0.35)'
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`m-card relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-elevated ${className}`}
    >
      {/* Spotlight Radial Background Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(560px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 42%)`,
        }}
      />

      {/* Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl border transition-opacity duration-300 z-20"
        style={{
          opacity,
          borderColor: spotlightBorder,
        }}
      />

      <div className="relative z-30 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
