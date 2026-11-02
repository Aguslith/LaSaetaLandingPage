import React from 'react';
import { motion } from 'framer-motion';

export default function BlurText({
  text = '',
  delay = 0.05,
  className = '',
  animateBy = 'words' // 'words' | 'letters'
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span className={`inline-flex flex-wrap gap-x-2 ${className}`}>
      {elements.map((el, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {el === ' ' ? '\u00A0' : el}
        </motion.span>
      ))}
    </span>
  );
}
