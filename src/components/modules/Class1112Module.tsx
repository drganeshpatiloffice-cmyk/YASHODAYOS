'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Card, Button, Badge, Navbar } from '@/components';
import { ChevronDown, BookOpen, Target, FileText, Video } from 'lucide-react';

const class1112Streams = [
  {
    id: 'science',
    name: 'Science Stream',
    icon: '🔬',
    color: 'from-green-600 to-green-400',
    subjects: ['Physics', 'Chemistry', 'Biology/Maths'],
    careers: ['Engineer', 'Doctor', 'Scientist', 'Researcher'],
    exams: ['JEE', 'NEET', 'MHT CET', 'CUET'],
    courses: ['B.Tech', 'MBBS', 'B.Sc'],
  },
  {
    id: 'commerce',
    name: 'Commerce Stream',
    icon: '📊',
    color: 'from-purple-600 to-purple-400',
    subjects: ['Accounts', 'Economics', 'Business'],
    careers: ['CA', 'CS', 'Entrepreneur', 'Banker'],
    exams: ['CA', 'CS', 'CMA'],
    courses: ['B.Com', 'BBA', 'MBA'],
  },
  {
    id: 'arts',
    name: 'Arts Stream',
    icon: '📚',
    color: 'from-pink-600 to-pink-400',
    subjects: ['History', 'Geography', 'Political Science'],
    careers: ['Lawyer', 'Journalist', 'Teacher', 'IAS'],
    exams: ['CLAT', 'UPSC'],
    courses: ['BA', 'LLB', 'B.Ed'],
  },
];

const scienceCourses = [
  { name: 'Engineering', exams: ['JEE Main', 'JEE Advanced', 'MHT CET', 'CUET'] },
  { name: 'Medical', exams: ['NEET'] },
  { name: 'Agriculture', exams: ['ICAR'] },
  { name: 'Pharmacy', exams: ['NEET Pharmacy'] },
  { name: 'Nursing', exams: ['Nursing Entrance'] },
  { name: 'Veterinary', exams: ['Vet Entrance'] },
];

const commerceCourses = [
  { name: 'CA (Chartered Accountant)', exams: ['CA Foundation'] },
  { name: 'CS (Company Secretary)', exams: ['CS Foundation'] },
  { name: 'CMA (Cost Accountant)', exams: ['CMA Foundation'] },
  { name: 'BBA', exams: ['Merit based'] },
  { name: 'MBA Roadmap', exams: ['CAT', 'MAT', 'XAT'] },
  { name: 'Banking', exams: ['Bank PO', 'IBPS'] },
];

const artsCourses = [
  { name: 'Law', exams: ['CLAT', 'AILET'] },
  { name: 'Journalism', exams: ['Merit based'] },
  { name: 'Teaching', exams: ['B.Ed entrance'] },
  { name: 'Psychology', exams: ['Merit based'] },
  { name: 'UPSC Foundation', exams: ['UPSC'] },
  { name: 'MPSC Foundation', exams: ['MPSC'] },
];

const competitiveExams = [
  { name: 'Police', icon: '🚨' },
  { name: 'Army', icon: '🪖' },
  { name: 'SSC CHSL', icon: '📋' },
  { name: 'SSC MTS', icon: '📋' },
  { name: 'Forest', icon: '🌲' },
  { name: 'Bank', icon: '🏦' },
  { name: 'Railway', icon: '🚂' },
];

interface StreamDetailsProps {
  streamId: string;
  onBack: () => void;
}

const StreamDetails: React.FC<StreamDetailsProps> = ({ streamId, onBack }) => {
  const stream = class1112Streams.find((s) => s.id === streamId);
  if (!stream) return null;

  const courseList =
    streamId === 'science'
      ? scienceCourses
      : streamId === 'commerce'
        ? commerceCourses
        : artsCourses;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen bg-dark-900 p-4 sm:p-6 lg:p-8">
        <Button variant="ghost" onClick={onBack} className="mb-8">
          ← Back to Streams
        </Button>

        <Section title={stream.name}>
          <div className="max-w-6xl mx-auto">
            {/* Stream Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card>
                <h3 className="text-lg font-bold mb-4">Subjects</h3>
                <div className="space-y-2">
                  {stream.subjects.map((subject) => (
                    <Badge key={subject} variant="primary">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold mb-4">Entrance Exams</h3>
                <div className="space-y-2">
                  {stream.exams.map((exam) => (
                    <Badge key={exam} variant="secondary">
                      {exam}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold mb-4">Career Options</h3>
                <div className="space-y-2">
                  {stream.careers.map((career) => (
                    <Badge key={career} variant="accent">
                      {career}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Courses */}
            <h2 className="text-3xl font-bold mb-8 gradient-text">Available Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {courseList.map((course) => (
                <Card key={course.name}>
                  <h3 className="text-lg font-bold mb-4">{course.name}</h3>
                  <div className="space-y-2">
                    {course.exams.map((exam) => (
                      <Badge key={exam} variant="primary">
                        {exam}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Competitive Exams */}
            <h2 className="text-3xl font-bold mb-8 gradient-text">Government Job Exams</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {competitiveExams.map((exam) => (
                <Card key={exam.name}>
                  <div className="text-4xl mb-4">{exam.icon}</div>
                  <h3 className="text-lg font-bold">{exam.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export const Class1112Module: React.FC = () => {
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [expandedStream, setExpandedStream] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Class 11-12 - Specialization"
        subtitle="Choose your stream and plan your future"
        className="pt-32"
      >
        <div className="max-w-6xl mx-auto">
          {/* Streams */}
          <h2 className="text-2xl font-bold mb-8">Choose Your Stream</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {class1112Streams.map((stream, index) => (
              <motion.button
                key={stream.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedStream(stream.id)}
                className="text-left"
              >
                <Card className="h-full">
                  <div className={`text-4xl p-4 bg-gradient-to-br ${stream.color} rounded-lg w-fit mb-4`}>
                    {stream.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{stream.name}</h3>
                  <p className="text-gray-400 mb-4">Subjects: {stream.subjects.join(', ')}</p>
                  <Badge variant="primary">Explore →</Badge>
                </Card>
              </motion.button>
            ))}
          </div>

          {/* Quick Reference */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Exam Timeline & Roadmap</h2>
            <Card>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="font-bold text-lg mb-2">Class 11-12</h3>
                  <p className="text-gray-300">Focus on studies, choose stream, prepare for entrance exams</p>
                </div>
                <div className="border-l-4 border-secondary pl-6 py-4">
                  <h3 className="font-bold text-lg mb-2">Board Exams</h3>
                  <p className="text-gray-300">Final exam before graduation in Class 12</p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-4">
                  <h3 className="font-bold text-lg mb-2">Entrance Exams</h3>
                  <p className="text-gray-300">Take your stream-specific entrance exams (JEE, NEET, CLAT)</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6 py-4">
                  <h3 className="font-bold text-lg mb-2">College Admission</h3>
                  <p className="text-gray-300">Get admitted to college based on exam scores</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {selectedStream && (
        <StreamDetails streamId={selectedStream} onBack={() => setSelectedStream(null)} />
      )}
    </div>
  );
};
