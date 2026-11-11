import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/A11yContext';

export default function Particles({
  particleCount = 50,
  particleColors = ['#E51937', '#FEC526', '#94A3B8'],
  speed = 0.35,
  connectParticles = true,
  connectionDistance = 120,
  paused = false,
  className = ''
}) {
  const canvasRef = useRef(null);
  const { reducedMotion } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const isMobile = window.innerWidth < 768;
    const effectiveCount = isMobile ? Math.min(16, particleCount) : particleCount;
    const effectiveConnect = isMobile ? false : connectParticles;

    const particles = [];
    for (let i = 0; i < effectiveCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 1.8 + 1,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        alpha: Math.random() * 0.45 + 0.15
      });
    }

    const drawFrame = (advance) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (advance) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;

          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        if (effectiveConnect) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = p.color;
              ctx.globalAlpha = (1 - dist / connectionDistance) * 0.12;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    if (reducedMotion || paused || isMobile) {
      drawFrame(false);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    const render = () => {
      drawFrame(true);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, particleColors, speed, connectParticles, connectionDistance, reducedMotion, paused]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
