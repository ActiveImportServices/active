'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={cn(
        'rounded-xl p-6 transition-all duration-300 relative',
        glass
          ? 'glass'
          : 'bg-[rgba(15,23,42,0.6)] backdrop-blur-md border border-white/10 hover:border-accent/50',
        hover && 'hover:shadow-2xl hover:shadow-accent/20',
        className
      )}
    >
      {/* Subtle inner glow on hover */}
      {hover && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 via-transparent to-accent-yellow/5" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
