'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold text-gray-300 mb-2">{label}</label>}
      <input
        className={`w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-primary transition-all ${className}`}
        {...props}
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};
