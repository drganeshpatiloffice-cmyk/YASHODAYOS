'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = true }) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      className={`bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 transition-all ${
        hoverable ? 'hover:border-primary/50 hover:shadow-primary' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};
