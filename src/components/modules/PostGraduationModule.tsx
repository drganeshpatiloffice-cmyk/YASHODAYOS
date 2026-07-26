'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Card, Button, Badge, Navbar } from '@/components';
import { FileText, Video, Users, Target, TrendingUp } from 'lucide-react';

const postGradOptions = [
  {
    id: 'mba',
    name: 'MBA (Master of Business Admin)',
    icon: '📊',
    color: 'from-blue-600 to-blue-400',
    duration: '2 years',
    eligibility: 'Bachelor degree + Work experience',
    salary: '₹8-20 LPA',
    specializations: ['Finance', 'Marketing', 'HR', 'Operations', 'Analytics'],
    topColleges: ['IIM Ahmedabad', 'IIM Bangalore', 'IIM Calcutta', 'XLRI Jamshedpur'],
    exams: ['CAT', 'MAT', 'XAT', 'GMAT'],
  },
  {
    id: 'mtech',
    name: 'M.Tech (Master of Technology)',
    icon: '🔧',
    color: 'from-green-600 to-green-400',
    duration: '2 years',
    eligibility: 'B.Tech in Engineering',
    salary: '₹6-15 LPA',
    specializations: ['CS', 'ECE', 'Mechanical', 'Civil', 'EEE'],
    topColleges: ['IIT Bombay', 'IIT Delhi', 'IIT Madras', 'NIT Nagpur'],
    exams: ['GATE', 'CAT'],
  },
  {
    id: 'ms',
    name: 'M.S (Master of Science)',
    icon: '🔬',
    color: 'from-purple-600 to-purple-400',
    duration: '2-3 years',
    eligibility: 'Bachelor degree in Science',
    salary: '₹5-14 LPA',
    specializations: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    topColleges: ['Delhi University', 'Mumbai University', 'IIT Bombay'],
    exams: ['Merit based', 'Entrance exams'],
  },
  {
    id: 'ca',
    name: 'CA (Chartered Accountant)',
    icon: '📈',
    color: 'from-cyan-600 to-cyan-400',
    duration: '5.5 years',
    eligibility: '12th passed, CA Foundation',
    salary: '₹5-30 LPA',
    specializations: ['Audit', 'Taxation', 'Finance', 'Management'],
    topColleges: ['ICAI', 'Professional body'],
    exams: ['CA Foundation', 'Intermediate', 'Final'],
  },
  {
    id: 'llm',
    name: 'LLM (Master of Law)',
    icon: '⚖️',
    color: 'from-pink-600 to-pink-400',
    duration: '2 years',
    eligibility: 'Bachelor of Law (LLB)',
    salary: '₹8-25 LPA',
    specializations: ['Corporate', 'Criminal', 'Constitutional', 'International'],
    topColleges: ['NLS Bangalore', 'Delhi Law College', 'Gujarat NLU'],
    exams: ['Merit based', 'Entrance exams'],
  },
  {
    id: 'phd',
    name: 'PhD (Doctor of Philosophy)',
    icon: '🎓',
    color: 'from-orange-600 to-orange-400',
    duration: '3-6 years',
    eligibility: 'Master degree',
    salary: '₹6-20 LPA (Academic)',
    specializations: ['All fields', 'Research focused'],
    topColleges: ['All Universities', 'Research Institutes'],
    exams: ['Research proposal', 'Interview'],
  },
  {
    id: 'upsc',
    name: 'UPSC Civil Services',
    icon: '🏛️',
    color: 'from-red-600 to-red-400',
    duration: '1-2 years prep',
    eligibility: 'Any graduation',
    salary: '₹56,100+ (Government)',
    specializations: ['IAS', 'IPS', 'IFS', 'IES'],
    topColleges: ['Any University', 'Self study'],
    exams: ['UPSC Prelims', 'Mains', 'Interview'],
  },
  {
    id: 'mpsc',
    name: 'MPSC State Services',
    icon: '🏢',
    color: 'from-indigo-600 to-indigo-400',
    duration: '1-2 years prep',
    eligibility: 'Any graduation',
    salary: '₹47,000+ (State Government)',
    specializations: ['State PSC', 'Group A', 'Group B'],
    topColleges: ['Any University', 'Self study'],
    exams: ['State prelims', 'Mains', 'Interview'],
  },
  {
    id: 'ssb',
    name: 'Armed Forces',
    icon: '✈️',
    color: 'from-teal-600 to-teal-400',
    duration: '1 year training',
    eligibility: 'Any graduation',
    salary: '₹60,000+ (Commission)',
    specializations: ['Indian Army', 'Navy', 'Air Force'],
    topColleges: ['NDA', 'OTA'],
    exams: ['SSB Interview', 'Medical'],
  },
  {
    id: 'research',
    name: 'Research & Development',
    icon: '🔭',
    color: 'from-lime-600 to-lime-400',
    duration: '2-5 years',
    eligibility: 'Master degree (relevant field)',
    salary: '₹6-18 LPA',
    specializations: ['ISRO', 'DRDO', 'CSIR', 'Private labs'],
    topColleges: ['IIT', 'NIT', 'Universities'],
    exams: ['GATE', 'Interview'],
  },
];

interface OptionDetailsProps {
  optionId: string;
  onBack: () => void;
}

const OptionDetails: React.FC<OptionDetailsProps> = ({ optionId, onBack }) => {
  const option = postGradOptions.find((o) => o.id === optionId);
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
          <div className="max-w-6xl mx-auto">
            {/* Key Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <p className="text-gray-400 text-sm mb-2">Duration</p>
                <p className="text-2xl font-bold text-primary">{option.duration}</p>
              </Card>
              <Card>
                <p className="text-gray-400 text-sm mb-2">Salary</p>
                <p className="text-2xl font-bold text-secondary">{option.salary}</p>
              </Card>
              <Card>
                <p className="text-gray-400 text-sm mb-2">Eligibility</p>
                <p className="text-sm text-gray-300">{option.eligibility}</p>
              </Card>
              <Card>
                <p className="text-gray-400 text-sm mb-2">Exams</p>
                <div className="space-y-1">
                  {option.exams.slice(0, 2).map((exam) => (
                    <Badge key={exam} variant="primary" className="text-xs">
                      {exam}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Specializations */}
            <h2 className="text-3xl font-bold mb-8 gradient-text">Specializations</h2>
            <Card className="mb-12">
              <div className="flex flex-wrap gap-3">
                {option.specializations.map((spec) => (
                  <Badge key={spec} variant="secondary">
                    {spec}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Top Colleges */}
            <h2 className="text-3xl font-bold mb-8 gradient-text">Top Institutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {option.topColleges.map((college) => (
                <Card key={college}>
                  <p className="font-semibold text-white text-center">{college}</p>
                </Card>
              ))}
            </div>

            {/* Resources */}
            <h2 className="text-3xl font-bold mb-8 gradient-text">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <Users size={24} className="text-accent" />
                  <h3 className="text-lg font-bold">Mentor Connect</h3>
                </div>
                <Button variant="ghost" size="sm">Connect →</Button>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export const PostGraduationModule: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Post Graduation - Advanced Growth"
        subtitle="Pursue higher education and advanced careers"
        className="pt-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {postGradOptions.map((option, index) => (
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
                    <h3 className="font-bold text-sm">{option.name}</h3>
                    <p className="text-xs text-gray-400">{option.duration}</p>
                    <Badge variant="primary" className="mt-auto text-xs">Explore →</Badge>
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
