'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-2 text-gray-300">{label}</label>}
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`
          w-full px-4 py-3 rounded-lg
          bg-white/5 border border-white/10
          text-white placeholder-gray-400
          focus:outline-none focus:border-primary/50 focus:bg-white/10
          transition-all duration-300
          ${error ? 'border-accent/50' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-accent text-sm mt-1">{error}</p>}
    </div>
  );
};
