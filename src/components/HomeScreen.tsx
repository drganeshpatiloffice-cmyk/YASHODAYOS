'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalaxyBackground } from './GalaxyBackground';
import { Button } from './Button';
import { Card } from './Card';
import { useCareer } from '@context/CareerContext';
import { BookOpen, Microscope, Trophy, Briefcase, GraduationCap } from 'lucide-react';

interface ClassOption {
  id: number;
  label: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const classOptions: ClassOption[] = [
  {
    id: 9,
    label: 'Class 9',
    icon: <BookOpen size={32} />,
    description: 'Foundation Building',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 10,
    label: 'Class 10',
    icon: <Microscope size={32} />,
    description: 'Stream Selection',
    color: 'from-purple-600 to-purple-400',
  },
  {
    id: 11,
    label: 'Class 11-12',
    icon: <Trophy size={32} />,
    description: 'Specialization',
    color: 'from-pink-600 to-pink-400',
  },
  {
    id: 13,
    label: 'Graduation',
    icon: <GraduationCap size={32} />,
    description: 'Career Launch',
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    id: 14,
    label: 'Post Graduation',
    icon: <Briefcase size={32} />,
    description: 'Advanced Growth',
    color: 'from-orange-600 to-orange-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const HomeScreen: React.FC = () => {
  const [showClassOptions, setShowClassOptions] = useState(false);
  const { setSelectedClass } = useCareer();
  const [isGalaxyLoaded, setIsGalaxyLoaded] = useState(false);

  const handleClassSelect = (classLevel: number) => {
    setSelectedClass(classLevel);
    // Navigate to class module
    window.location.href = `/module/class-${classLevel}`;
  };

  return (
    <div className="relative w-full min-h-screen bg-dark-900 overflow-hidden">
      <GalaxyBackground onLoaded={() => setIsGalaxyLoaded(true)} />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Animated Student Figure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isGalaxyLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <div className="w-32 h-40 mx-auto relative">
            {/* Head */}
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full mx-auto mb-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Body */}
            <motion.div className="w-16 h-20 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-2" />
            {/* Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isGalaxyLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">CAREERVERSE</span>
            <br />
            <span className="text-gray-300">MAHARASHTRA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">Discover Your Future</p>
        </motion.div>

        {/* Question */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isGalaxyLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-center mb-12 text-white"
        >
          Which class are you currently studying in?
        </motion.h2>

        {/* Class Options */}
        {!showClassOptions ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isGalaxyLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => setShowClassOptions(true)}
            className="btn-primary text-lg px-8 py-4"
          >
            Select Your Class
          </motion.button>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl w-full"
          >
            {classOptions.map((option) => (
              <motion.div key={option.id} variants={itemVariants}>
                <Card
                  onClick={() => handleClassSelect(option.id)}
                  className="h-full"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${option.color} text-white`}>
                      {option.icon}
                    </div>
                    <h3 className="text-lg font-bold text-center">{option.label}</h3>
                    <p className="text-sm text-gray-400 text-center">{option.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isGalaxyLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
