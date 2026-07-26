'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, title, subtitle, className = '' }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h2>
          )}
          {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </motion.section>
  );
};
