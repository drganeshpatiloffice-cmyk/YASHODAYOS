'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from '@/components';
import { useGlobalSearch } from '@/hooks/useGlobalSearch';
import { careers } from '@/data/database';
import { scholarships } from '@/data/scholarships';
import { entranceExams } from '@/data/entranceExams';
import { competitiveExams } from '@/data/competitiveExams';
import { futureSkills } from '@/data/futureSkills';
import { Search, TrendingUp, Award, BookOpen } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = useGlobalSearch(searchQuery);

  const stats = [
    { label: 'Careers Explored', value: careers.length, icon: TrendingUp },
    { label: 'Scholarships', value: scholarships.length, icon: Award },
    { label: 'Entrance Exams', value: entranceExams.length + competitiveExams.length, icon: BookOpen },
    { label: 'Future Skills', value: futureSkills.length, icon: Search },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to CareerVerse</h1>
        <p className="text-lg text-white/80">Discover your future with personalized career guidance</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10 mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-4 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search careers, scholarships, exams, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-dark-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Search Results */}
        {searchQuery && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 left-4 right-4 bg-dark-800 rounded-lg max-h-96 overflow-y-auto z-50 border border-white/10"
          >
            {searchResults.map((result, index) => (
              <motion.button
                key={result.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="w-full text-left px-6 py-4 hover:bg-white/5 transition border-b border-white/5 last:border-0"
              >
                <p className="font-semibold text-white">{result.title}</p>
                <p className="text-sm text-gray-400">{result.description}</p>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <Icon size={32} className="mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold text-white">{stat.value}+</p>
                  <p className="text-gray-400 mt-2">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Careers */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Careers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.slice(0, 6).map((career) => (
            <motion.div key={career.id} whileHover={{ y: -5 }}>
              <Card className="h-full">
                <h3 className="text-lg font-bold mb-2">{career.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{career.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    <span className="text-gray-400">Entry Salary:</span>
                    <span className="text-primary ml-2 font-semibold">{career.salary.entry}</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-400">Demand:</span>
                    <span className="text-secondary ml-2 font-semibold">{career.demandScore}/10</span>
                  </p>
                </div>
                <Button variant="primary" size="sm" className="w-full">
                  Learn More →
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Top Scholarships */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Available Scholarships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scholarships.slice(0, 4).map((scholarship) => (
            <motion.div key={scholarship.id} whileHover={{ y: -5 }}>
              <Card>
                <h3 className="text-lg font-bold mb-2">{scholarship.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{scholarship.provider}</p>
                <div className="mb-4">
                  <p className="text-primary font-semibold text-lg">{scholarship.amount}</p>
                  <p className="text-gray-400 text-sm mt-1">Deadline: {scholarship.deadline}</p>
                </div>
                <Button variant="secondary" size="sm" className="w-full">
                  Apply Now →
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
