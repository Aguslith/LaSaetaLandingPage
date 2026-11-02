import React from 'react';

export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = ''
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block font-extrabold ${className}`}
      style={{
        backgroundImage: disabled
          ? 'none'
          : 'linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0) 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
      }}
    >
      {text}
    </span>
  );
}
