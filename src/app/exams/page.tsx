'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, Navbar, Section } from '@/components';
import { entranceExams } from '@/data/entranceExams';
import { competitiveExams } from '@/data/competitiveExams';
import { Calendar, Target, Users, FileText } from 'lucide-react';

type ExamType = 'entrance' | 'competitive';

export const ExamsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ExamType>('entrance');
  const [selectedStream, setSelectedStream] = useState<'all' | 'science' | 'commerce' | 'arts'>('all');

  const allExams = selectedType === 'entrance' ? entranceExams : competitiveExams;

  const filteredExams = allExams.filter((exam: any) => {
    if (selectedType === 'entrance' && exam.stream && selectedStream !== 'all') {
      return exam.stream === selectedStream;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Entrance & Competitive Exams"
        subtitle="Prepare for your future with comprehensive exam guides"
        className="pt-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <motion.button
              onClick={() => setSelectedType('entrance')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedType === 'entrance'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Entrance Exams ({entranceExams.length})
            </motion.button>
            <motion.button
              onClick={() => setSelectedType('competitive')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedType === 'competitive'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Competitive Exams ({competitiveExams.length})
            </motion.button>
          </div>

          {/* Stream Filter (for entrance exams) */}
          {selectedType === 'entrance' && (
            <div className="flex flex-wrap gap-4 mb-8">
              {['all', 'science', 'commerce', 'arts'].map((stream) => (
                <motion.button
                  key={stream}
                  onClick={() => setSelectedStream(stream as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedStream === stream
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {stream.charAt(0).toUpperCase() + stream.slice(1)}
                </motion.button>
              ))}
            </div>
          )}

          {/* Exams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam: any, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {exam.fullName || exam.name}
                      </h3>
                      <p className="text-sm text-gray-400">{exam.organization}</p>
                    </div>
                    <Target size={24} className="text-primary flex-shrink-0" />
                  </div>

                  {/* Info Grid */}
                  <div className="space-y-3 mb-4 flex-1">
                    <div className="flex items-start gap-2">
                      <Calendar size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-gray-400">Exam Date</p>
                        <p className="text-white">{exam.examDate}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Users size={16} className="text-accent mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-gray-400">Eligibility</p>
                        <p className="text-white truncate">{exam.eligibility}</p>
                      </div>
                    </div>

                    {exam.salary && (
                      <div className="flex items-start gap-2">
                        <FileText size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                        <div className="text-sm">
                          <p className="text-gray-400">Salary</p>
                          <p className="text-white">{exam.salary}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exam.stream && <Badge variant="primary">{exam.stream}</Badge>}
                    {exam.level && <Badge variant="secondary">{exam.level}</Badge>}
                    {exam.category && <Badge variant="accent">{exam.category}</Badge>}
                  </div>

                  {/* Action */}
                  <Button variant="primary" size="sm" className="w-full">
                    View Details →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ExamsPage;
