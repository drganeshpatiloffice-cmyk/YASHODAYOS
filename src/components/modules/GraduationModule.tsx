'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from '@/components';
import { Target, TrendingUp } from 'lucide-react';

export const GraduationModule: React.FC = () => {
  const careers = [
    { title: 'Engineering', salaries: '4-10 LPA', demand: 'Very High' },
    { title: 'Medicine', salaries: '5-20 LPA', demand: 'High' },
    { title: 'Law', salaries: '3-15 LPA', demand: 'High' },
    { title: 'Management', salaries: '6-25 LPA', demand: 'Very High' },
    { title: 'IT/Software', salaries: '4-15 LPA', demand: 'Very High' },
    { title: 'Finance', salaries: '5-30 LPA', demand: 'High' },
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-2xl font-bold mb-4">Graduation - Career Pathways</h3>
        <p className="text-gray-400 mb-6">
          Explore 10+ career pathways with detailed salary information, job opportunities, and growth prospects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((career, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
            <Card hoverable>
              <Target className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-lg mb-3">{career.title}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Salary Range:</span>
                  <Badge variant="primary" className="text-xs">{career.salaries}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Demand:</span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
