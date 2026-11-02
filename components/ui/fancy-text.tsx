'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface FancyTextProps {
  children: string;
  className?: string;
  fillClassName?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}

export const FancyText = React.forwardRef<HTMLSpanElement, FancyTextProps>(
  (props, ref) => {
    const {
      children,
      className = 'text-5xl font-black leading-none text-black/10 dark:text-white/10',
      fillClassName = 'text-black dark:text-white',
      stagger = 0.08,
      duration = 1.4,
      delay = 0,
    } = props;

    const spanRef = useRef<HTMLSpanElement>(null);
    const finalRef = (ref ?? spanRef) as React.RefObject<HTMLSpanElement>;

    const chars = typeof children === 'string' ? children.split('') : [];

    return (
      <span ref={finalRef} className="relative inline-flex flex-wrap pb-4">
        {chars.map((char, index) => (
          <span key={`wrapper-${index}-${char}`} className="relative inline-block overflow-visible">
            {/* Huruf Dasar (Abu-abu Transparan sebagai Background) */}
            <span className={cn(className, 'opacity-20')}>
              {char === ' ' ? '\u00A0' : char}
            </span>

            {/* Huruf Animasi (Putih yang Menyapu Masuk) */}
            <motion.span
              className={cn(className, fillClassName, 'absolute inset-0')}
              initial={{ clipPath: 'inset(-20% -20% 100% -20%)' }}
              whileInView={{ clipPath: 'inset(-20% -20% -20% -20%)' }}
              viewport={{ once: true }}
              transition={{
                duration,
                delay: delay + index * stagger,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                display: 'inline-block',
                whiteSpace: char === ' ' ? 'pre' : 'normal',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }
);

FancyText.displayName = 'FancyText';