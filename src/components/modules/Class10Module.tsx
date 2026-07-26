'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Card, Button, Badge, Navbar } from '@/components';
import { GraduationCap, BookOpen, Target, FileText, Video } from 'lucide-react';

const class10Options = [
  {
    id: 'board-exam',
    name: 'Board Exam Preparation',
    description: 'SSC Board exam guidance',
    icon: '📝',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 'science',
    name: 'Science Stream',
    description: 'Physics, Chemistry, Biology',
    icon: '🔬',
    color: 'from-green-600 to-green-400',
  },
  {
    id: 'commerce',
    name: 'Commerce Stream',
    description: 'Accounts, Economics, Business',
    icon: '📊',
    color: 'from-purple-600 to-purple-400',
  },
  {
    id: 'arts',
    name: 'Arts Stream',
    description: 'History, Geography, Politics',
    icon: '📚',
    color: 'from-pink-600 to-pink-400',
  },
  {
    id: 'iti',
    name: 'ITI Courses',
    description: 'Vocational training programs',
    icon: '🔧',
    color: 'from-orange-600 to-orange-400',
  },
  {
    id: 'polytechnic',
    name: 'Polytechnic',
    description: 'Diploma in Engineering',
    icon: '🏗️',
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    id: 'diploma',
    name: 'Diploma Courses',
    description: 'Various professional diplomas',
    icon: '🎓',
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    id: 'foundation',
    name: 'Foundation Courses',
    description: 'Entrance exam preparation',
    icon: '🏛️',
    color: 'from-teal-600 to-teal-400',
  },
  {
    id: 'police',
    name: 'Police Preparation',
    description: 'Police constable exams',
    icon: '🚨',
    color: 'from-red-600 to-red-400',
  },
  {
    id: 'army',
    name: 'Army Preparation',
    description: 'Military entrance exams',
    icon: '🪖',
    color: 'from-slate-600 to-slate-400',
  },
  {
    id: 'nda',
    name: 'NDA Foundation',
    description: 'National Defence Academy prep',
    icon: '✈️',
    color: 'from-violet-600 to-violet-400',
  },
  {
    id: 'railway',
    name: 'Railway Preparation',
    description: 'Railway recruitment exams',
    icon: '🚂',
    color: 'from-yellow-600 to-yellow-400',
  },
  {
    id: 'skill-courses',
    name: 'Skill Courses',
    description: 'Digital and professional skills',
    icon: '💻',
    color: 'from-lime-600 to-lime-400',
  },
  {
    id: 'counselling',
    name: 'Career Counselling',
    description: 'Personalized guidance',
    icon: '🎯',
    color: 'from-rose-600 to-rose-400',
  },
];

interface OptionDetailsProps {
  optionId: string;
  onBack: () => void;
}

const OptionDetails: React.FC<OptionDetailsProps> = ({ optionId, onBack }) => {
  const option = class10Options.find((o) => o.id === optionId);
  if (!option) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen bg-dark-900 p-4 sm:p-6 lg:p-8">
        <Button variant="ghost" onClick={onBack} className="mb-8">
          ← Back
        </Button>

        <Section title={option.name}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <h3 className="text-xl font-bold mb-4">Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                {option.description} is an important decision for your future. Explore all aspects including
                curriculum, career opportunities, and entrance requirements.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4">Key Information</h3>
              <div className="space-y-3">
                <Badge variant="primary">Duration: 1-4 years</Badge>
                <Badge variant="secondary">Post-Secondary Option</Badge>
                <Badge variant="accent">Career Focused</Badge>
              </div>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Video size={24} className="text-primary" />
                <h3 className="text-lg font-bold">Video Guides</h3>
              </div>
              <Button variant="ghost" size="sm">Watch →</Button>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <FileText size={24} className="text-secondary" />
                <h3 className="text-lg font-bold">Study Materials</h3>
              </div>
              <Button variant="ghost" size="sm">Download →</Button>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-accent" />
                <h3 className="text-lg font-bold">Roadmap</h3>
              </div>
              <Button variant="ghost" size="sm">View →</Button>
            </Card>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export const Class10Module: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Class 10 - Stream Selection"
        subtitle="Choose your path for higher education"
        className="pt-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {class10Options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedOption(option.id)}
                className="text-left"
              >
                <Card className="h-full">
                  <div className="flex flex-col gap-3">
                    <div className={`text-3xl p-3 bg-gradient-to-br ${option.color} rounded-lg w-fit`}>
                      {option.icon}
                    </div>
                    <h3 className="font-bold text-lg">{option.name}</h3>
                    <p className="text-sm text-gray-400">{option.description}</p>
                    <Badge variant="primary" className="mt-auto w-fit">
                      Explore →
                    </Badge>
                  </div>
                </Card>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {selectedOption && (
        <OptionDetails optionId={selectedOption} onBack={() => setSelectedOption(null)} />
      )}
    </div>
  );
};
