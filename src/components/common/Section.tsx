'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`py-16 md:py-24 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
