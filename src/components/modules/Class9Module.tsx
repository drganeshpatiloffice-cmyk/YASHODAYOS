'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Card, Button, Badge, Navbar } from '@/components';
import { BookOpen, Star, Target, FileText, Video, Download } from 'lucide-react';

const opportunities = [
  {
    id: 'scholarship-exams',
    name: 'Scholarship Exams',
    description: 'Competitive exams for scholarships',
    icon: '🎓',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 'olympiad',
    name: 'Olympiad Exams',
    description: 'International STEM competitions',
    icon: '🏆',
    color: 'from-purple-600 to-purple-400',
  },
  {
    id: 'computer-skills',
    name: 'Computer Skills',
    description: 'Learn programming fundamentals',
    icon: '💻',
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    id: 'ai-coding',
    name: 'AI & Coding',
    description: 'Introduction to AI and Python',
    icon: '🤖',
    color: 'from-pink-600 to-pink-400',
  },
  {
    id: 'english',
    name: 'Spoken English',
    description: 'Improve communication skills',
    icon: '🗣️',
    color: 'from-green-600 to-green-400',
  },
  {
    id: 'reading',
    name: 'Reading Habit',
    description: 'Develop reading skills',
    icon: '📚',
    color: 'from-orange-600 to-orange-400',
  },
  {
    id: 'personality',
    name: 'Personality Development',
    description: 'Build confidence & character',
    icon: '✨',
    color: 'from-red-600 to-red-400',
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Physical fitness & discipline',
    icon: '⚽',
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    id: 'science-exhibition',
    name: 'Science Exhibition',
    description: 'Project-based learning',
    icon: '🔬',
    color: 'from-teal-600 to-teal-400',
  },
  {
    id: 'innovation',
    name: 'Innovation Club',
    description: 'Creative problem solving',
    icon: '💡',
    color: 'from-yellow-600 to-yellow-400',
  },
  {
    id: 'startup-club',
    name: 'Startup Club',
    description: 'Entrepreneurship basics',
    icon: '🚀',
    color: 'from-violet-600 to-violet-400',
  },
  {
    id: 'foundation-courses',
    name: 'Foundation Courses',
    description: 'Academic preparation',
    icon: '🏗️',
    color: 'from-lime-600 to-lime-400',
  },
  {
    id: 'drawing',
    name: 'Drawing & Art',
    description: 'Artistic expression',
    icon: '🎨',
    color: 'from-rose-600 to-rose-400',
  },
  {
    id: 'quiz',
    name: 'Quiz Competitions',
    description: 'Knowledge contests',
    icon: '❓',
    color: 'from-sky-600 to-sky-400',
  },
  {
    id: 'ncc',
    name: 'NCC',
    description: 'National Cadet Corps',
    icon: '🪖',
    color: 'from-slate-600 to-slate-400',
  },
  {
    id: 'scouts',
    name: 'Scouts & Guides',
    description: 'Adventure & leadership',
    icon: '🏕️',
    color: 'from-amber-600 to-amber-400',
  },
];

interface OpportunityDetailsProps {
  opportunityId: string;
  onBack: () => void;
}

const OpportunityDetails: React.FC<OpportunityDetailsProps> = ({ opportunityId, onBack }) => {
  const opportunity = opportunities.find((o) => o.id === opportunityId);
  if (!opportunity) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen bg-dark-900 p-4 sm:p-6 lg:p-8">
        <Button variant="ghost" onClick={onBack} className="mb-8">
          ← Back
        </Button>

        <Section title={opportunity.name}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-4">Introduction</h3>
                <p className="text-gray-300 leading-relaxed">
                  {opportunity.name} is an excellent opportunity to develop skills and knowledge. This program is
                  designed for students in Class 9 to help them explore their interests and build a strong foundation
                  for their future.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <Star size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Skill development and personal growth</span>
                  </li>
                  <li className="flex gap-3">
                    <Star size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Certificate upon completion</span>
                  </li>
                  <li className="flex gap-3">
                    <Star size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Career advantages and recognition</span>
                  </li>
                  <li className="flex gap-3">
                    <Star size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Networking opportunities</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-4">Eligibility</h3>
                <p className="text-gray-300 mb-4">Students currently in Class 9 or above</p>
                <div className="space-y-2">
                  <Badge variant="primary">Minimum Marks: 50%</Badge>
                  <Badge variant="secondary">Age: 13+</Badge>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-4">Preparation Strategy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Start with online tutorials, practice regularly, join study groups, and participate in workshops.
                  Dedicate 1-2 hours daily to strengthen your skills.
                </p>
              </Card>
            </div>
          </div>

          {/* Resources */}
          <div className="max-w-6xl mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Useful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Video size={24} className="text-primary" />
                  <h3 className="text-lg font-bold">Video Tutorials</h3>
                </div>
                <p className="text-gray-400 mb-4">Learn from expert instructors on YouTube and EdTech platforms</p>
                <Button variant="ghost" size="sm">
                  Watch Videos →
                </Button>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <FileText size={24} className="text-secondary" />
                  <h3 className="text-lg font-bold">Study Materials</h3>
                </div>
                <p className="text-gray-400 mb-4">Comprehensive notes and practice questions</p>
                <Button variant="ghost" size="sm">
                  Download PDF →
                </Button>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Target size={24} className="text-accent" />
                  <h3 className="text-lg font-bold">Practice Tests</h3>
                </div>
                <p className="text-gray-400 mb-4">Test your knowledge with mock exams</p>
                <Button variant="ghost" size="sm">
                  Take Test →
                </Button>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export const Class9Module: React.FC = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Class 9 - Foundation Building"
        subtitle="Explore opportunities and build your future foundation"
        className="pt-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Central Student Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-16"
          >
            <div className="relative w-32 h-40">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full mx-auto mb-2"
              />
              <div className="w-16 h-20 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto" />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl"
              />
            </div>
          </motion.div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {opportunities.map((opp, index) => (
              <motion.button
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedOpportunity(opp.id)}
                className="text-left"
              >
                <Card className="h-full">
                  <div className="flex flex-col gap-3">
                    <div className={`text-3xl p-3 bg-gradient-to-br ${opp.color} rounded-lg w-fit`}>
                      {opp.icon}
                    </div>
                    <h3 className="font-bold text-lg">{opp.name}</h3>
                    <p className="text-sm text-gray-400">{opp.description}</p>
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

      {/* Opportunity Details Modal */}
      {selectedOpportunity && (
        <OpportunityDetails
          opportunityId={selectedOpportunity}
          onBack={() => setSelectedOpportunity(null)}
        />
      )}
    </div>
  );
};
