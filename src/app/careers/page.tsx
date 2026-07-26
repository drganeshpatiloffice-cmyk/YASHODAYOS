'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, Navbar, Section } from '@/components';
import { careers } from '@/data/database';
import { TrendingUp, Target, Users, Briefcase, BookOpen } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const [filterStream, setFilterStream] = useState<'all' | 'science' | 'commerce' | 'arts'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'salary' | 'demand'>('name');

  const filteredCareers = careers
    .filter((c) => filterStream === 'all' || c.stream === filterStream)
    .sort((a, b) => {
      if (sortBy === 'salary') {
        const extractNumber = (str: string) => parseInt(str.replace(/\D/g, '')) || 0;
        return extractNumber(b.salary.entry) - extractNumber(a.salary.entry);
      }
      if (sortBy === 'demand') {
        return b.demandScore - a.demandScore;
      }
      return a.name.localeCompare(b.name);
    });

  const selectedCareerData = selectedCareer
    ? careers.find((c) => c.id === selectedCareer)
    : null;

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Career Pathways"
        subtitle="Explore careers by stream and salary"
        className="pt-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Stream Filter */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Filter by Stream</p>
              <div className="flex flex-wrap gap-3">
                {['all', 'science', 'commerce', 'arts'].map((stream) => (
                  <motion.button
                    key={stream}
                    onClick={() => setFilterStream(stream as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      filterStream === stream
                        ? 'bg-primary text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {stream.charAt(0).toUpperCase() + stream.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Sort by</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { id: 'name', label: 'Name' },
                  { id: 'salary', label: 'Salary' },
                  { id: 'demand', label: 'Demand' },
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => setSortBy(option.id as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      sortBy === option.id
                        ? 'bg-secondary text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Careers List */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">
                {filterStream === 'all' ? 'All Careers' : `${filterStream.charAt(0).toUpperCase() + filterStream.slice(1)} Careers`} ({filteredCareers.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-3">
                {filteredCareers.map((career) => (
                  <motion.button
                    key={career.id}
                    onClick={() => setSelectedCareer(career.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedCareer === career.id
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <p className="font-semibold">{career.name}</p>
                    <p className="text-xs opacity-75 mt-1">{career.salary.entry}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Career Details */}
            <div className="lg:col-span-2">
              {selectedCareerData ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {/* Header */}
                  <Card>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedCareerData.name}</h2>
                        <p className="text-gray-400">{selectedCareerData.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Demand Score</p>
                        <p className="text-3xl font-bold text-primary">{selectedCareerData.demandScore}/10</p>
                      </div>
                    </div>
                  </Card>

                  {/* Salary Info */}
                  <Card>
                    <h3 className="text-xl font-bold text-white mb-4">Salary Range</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-gray-400 text-sm mb-2">Entry Level</p>
                        <p className="text-lg font-bold text-primary">{selectedCareerData.salary.entry}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-sm mb-2">Mid Career</p>
                        <p className="text-lg font-bold text-secondary">{selectedCareerData.salary.mid}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-sm mb-2">Senior</p>
                        <p className="text-lg font-bold text-accent">{selectedCareerData.salary.senior}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Educational Roadmap */}
                  <Card>
                    <h3 className="text-lg font-bold text-white mb-4">Educational Roadmap</h3>
                    <div className="space-y-3">
                      {selectedCareerData.educationalRoadmap.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="pt-1">
                            <p className="text-white">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Skills Required */}
                  <Card>
                    <h3 className="text-lg font-bold text-white mb-4">Skills Required</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareerData.skillsRequired.map((skill) => (
                        <Badge key={skill} variant="primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  {/* Entrance Exams */}
                  <Card>
                    <h3 className="text-lg font-bold text-white mb-4">Entrance Exams</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareerData.entranceExams.map((exam) => (
                        <Badge key={exam} variant="secondary">
                          {exam}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  {/* Job Opportunities */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Briefcase size={20} className="text-primary" />
                        Government Jobs
                      </h3>
                      <div className="space-y-2">
                        {selectedCareerData.governmentJobs.map((job) => (
                          <div key={job} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {job}
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp size={20} className="text-secondary" />
                        Private Sector
                      </h3>
                      <div className="space-y-2">
                        {selectedCareerData.privateJobs.slice(0, 5).map((job) => (
                          <div key={job} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-secondary rounded-full" />
                            {job}
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Future Scope */}
                  <Card>
                    <h3 className="text-lg font-bold text-white mb-3">Future Scope</h3>
                    <p className="text-gray-300">{selectedCareerData.futureScope}</p>
                    <p className="text-primary font-semibold mt-3">Growth Rate: {selectedCareerData.growthRate}</p>
                  </Card>
                </motion.div>
              ) : (
                <Card className="text-center py-12 text-gray-400">
                  <p>Select a career from the list to view details</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CareersPage;
