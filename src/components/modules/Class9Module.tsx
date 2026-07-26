'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from '@/components';
import { BookOpen, Award, Briefcase } from 'lucide-react';

export const Class9Module: React.FC = () => {
  const opportunities = [
    { icon: BookOpen, title: 'Core Subjects', desc: 'Science, Math, English, Social Studies' },
    { icon: Award, title: 'Co-curricular', desc: 'Sports, Arts, Music, Clubs' },
    { icon: Briefcase, title: 'Skill Development', desc: 'Communication, Problem Solving, Leadership' },
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-2xl font-bold mb-4">Class 9 - Foundation Building</h3>
        <p className="text-gray-400 mb-6">
          Class 9 is crucial for building a strong foundation. Explore 16 diverse opportunities to discover your interests and strengths.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {opportunities.map((opp, i) => {
          const Icon = opp.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card>
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">{opp.title}</h4>
                <p className="text-gray-400 text-sm">{opp.desc}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
