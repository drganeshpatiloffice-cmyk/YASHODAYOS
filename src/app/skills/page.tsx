'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, Navbar, Section } from '@/components';
import { futureSkills } from '@/data/futureSkills';
import { Zap, Clock, BarChart3, BookOpen } from 'lucide-react';

type DifficultyLevel = 'all' | 'beginner' | 'intermediate' | 'advanced';
type CategoryType = 'all' | 'technical' | 'soft-skills' | 'industry-specific' | 'emerging';

export const SkillsPage: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');

  const filteredSkills = futureSkills.filter((skill) => {
    const difficultyMatch = selectedDifficulty === 'all' || skill.difficulty === selectedDifficulty;
    const categoryMatch = selectedCategory === 'all' || skill.category === selectedCategory;
    return difficultyMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Future Skills"
        subtitle="Learn in-demand skills for your career growth"
        className="pt-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Difficulty Filter */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Difficulty Level</p>
              <div className="flex flex-wrap gap-3">
                {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                  <motion.button
                    key={level}
                    onClick={() => setSelectedDifficulty(level as DifficultyLevel)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      selectedDifficulty === level
                        ? 'bg-primary text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Category</p>
              <div className="flex flex-wrap gap-3">
                {['all', 'technical', 'soft-skills', 'industry-specific', 'emerging'].map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as CategoryType)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-secondary text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {cat.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                    </div>
                    <Zap size={24} className="text-accent flex-shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{skill.description}</p>

                  {/* Info Row */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock size={14} />
                      <span>{skill.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <BarChart3 size={14} />
                      <span>{skill.demandInMarket}/10 Demand</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="primary">{skill.category}</Badge>
                    <Badge variant="secondary">{skill.difficulty}</Badge>
                  </div>

                  {/* Career Applications */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Career Applications:</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.careerApplications.slice(0, 2).map((app) => (
                        <span key={app} className="text-xs bg-white/5 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <Button variant="primary" size="sm" className="flex-1">
                      Learn Now
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      Resources
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SkillsPage;
