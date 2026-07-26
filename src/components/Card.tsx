'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, onClick, className = '', delay = 0, hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={hover ? { y: -8, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' } : {}}
      onClick={onClick}
      className={`card cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
      transition={{ delay }}
      className={`glass p-6 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};
