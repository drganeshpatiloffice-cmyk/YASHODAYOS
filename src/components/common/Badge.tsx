'use client';

import React from 'react';

type Variant = 'primary' | 'secondary' | 'accent';

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary/20 text-primary border border-primary/30',
  secondary: 'bg-secondary/20 text-secondary border border-secondary/30',
  accent: 'bg-accent/20 text-accent border border-accent/30',
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
