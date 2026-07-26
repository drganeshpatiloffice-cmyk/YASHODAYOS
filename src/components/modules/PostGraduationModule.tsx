'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from '@/components';
import { BookOpen, Award } from 'lucide-react';

export const PostGraduationModule: React.FC = () => {
  const programs = [
    { name: 'MBA', duration: '2 years', focus: 'Management & Business', salary: '8-30 LPA' },
    { name: 'M.Tech', duration: '2 years', focus: 'Engineering & Technology', salary: '6-25 LPA' },
    { name: 'M.Sc', duration: '2 years', focus: 'Science & Research', salary: '4-15 LPA' },
    { name: 'LLM', duration: '2 years', focus: 'Law & Legal Studies', salary: '5-25 LPA' },
    { name: 'PGDM', duration: '2 years', focus: 'Management Diploma', salary: '6-20 LPA' },
    { name: 'PhD', duration: '3-5 years', focus: 'Research & Academia', salary: '5-20 LPA' },
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-2xl font-bold mb-4">Post-Graduation - Advanced Studies</h3>
        <p className="text-gray-400 mb-6">
          Advance your career with specialized post-graduation programs. Choose from MBA, M.Tech, M.Sc, and more.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((program, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card>
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-secondary" />
                <Badge variant="secondary" className="text-xs">{program.duration}</Badge>
              </div>
              <h4 className="font-bold text-lg mb-2">{program.name}</h4>
              <p className="text-gray-400 text-sm mb-3">{program.focus}</p>
              <p className="text-primary font-semibold">{program.salary}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
