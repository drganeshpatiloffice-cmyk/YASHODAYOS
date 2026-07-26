'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';

interface OpportunityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
  delay?: number;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  title,
  description,
  icon,
  onClick,
  delay = 0,
}) => {
  return (
    <Card delay={delay} onClick={onClick}>
      <div className="flex flex-col gap-4 h-full">
        <div className="text-4xl">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        </div>
        <Button variant="ghost" size="sm" className="mt-auto">
          Explore →
        </Button>
      </div>
    </Card>
  );
};
