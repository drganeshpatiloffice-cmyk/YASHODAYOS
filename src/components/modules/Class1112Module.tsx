'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from '@/components';
import { Zap } from 'lucide-react';

export const Class10Module: React.FC = () => {
  const streams = [
    { name: 'Science', description: 'Physics, Chemistry, Biology - for engineering, medicine, research', color: 'from-cyan-500 to-blue-500' },
    { name: 'Commerce', description: 'Accounting, Economics, Business - for finance, business careers', color: 'from-yellow-500 to-orange-500' },
    { name: 'Arts', description: 'History, Geography, Political Science - for humanities, law, civil services', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-2xl font-bold mb-4">Class 10 - Stream Selection</h3>
        <p className="text-gray-400 mb-6">
          Choose your stream based on your interests and career aspirations. This decision shapes your academic path ahead.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {streams.map((stream, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}>
            <Card>
              <Badge variant="primary" className="mb-4">{stream.name}</Badge>
              <p className="text-gray-300">{stream.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
