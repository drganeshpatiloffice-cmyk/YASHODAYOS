'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Card, Button, Badge, Navbar } from '@/components';
import { careers } from '@/data/database';
import { BookOpen, TrendingUp, FileText, Video, Star } from 'lucide-react';

interface CareerDetailsProps {
  careerId: string;
  onBack: () => void;
}

const CareerDetails: React.FC<CareerDetailsProps> = ({ careerId, onBack }) => {
  const career = careers.find((c) => c.id === careerId);
  if (!career) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen bg-dark-900 p-4 sm:p-6 lg:p-8">
        <Button variant="ghost" onClick={onBack} className="mb-8">
          ← Back to Careers
        </Button>

        <Section title={career.name}>
          <div className="max-w-6xl mx-auto">
            {/* Career Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <h3 className="text-xl font-bold mb-4">Introduction</h3>
                <p className="text-gray-300 leading-relaxed">{career.introduction}</p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-4">Salary Range</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Entry Level</p>
                    <p className="text-lg font-bold text-primary">{career.salary.entry}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Mid Career</p>
                    <p className="text-lg font-bold text-secondary">{career.salary.mid}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Senior Level</p>
                    <p className="text-lg font-bold text-accent">{career.salary.senior}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Educational Roadmap */}
            <h2 className="text-3xl font-bold mb-8 gradient-text">Educational Roadmap</h2>
            <Card className="mb-12">
              <div className="space-y-4">
                {career.educationalRoadmap.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Three Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <h3 className="text-lg font-bold mb-4">Entrance Exams</h3>
                <div className="space-y-2">
                  {career.entranceExams.map((exam) => (
                    <Badge key={exam} variant="primary">
                      {exam}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold mb-4">Skills Required</h3>
                <div className="space-y-2">
                  {career.skillsRequired.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold mb-4">Future Scope</h3>
                <p className="text-gray-300 text-sm">{career.futureScope}</p>
              </Card>
            </div>

            {/* Jobs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <h3 className="text-lg font-bold mb-4">Government Jobs</h3>
                <div className="space-y-2">
                  {career.governmentJobs.map((job) => (
                    <div key={job} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {job}
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold mb-4">Private Sector</h3>
                <div className="space-y-2">
                  {career.privateJobs.slice(0, 6).map((job) => (
                    <div key={job} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {job}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Resources */}
            <h2 className="text-3xl font-bold mb-8 gradient-text">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Video size={24} className="text-primary" />
                  <h3 className="text-lg font-bold">Video Tutorials</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm">Learn from industry experts</p>
                <Button variant="ghost" size="sm">Watch Videos →</Button>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <FileText size={24} className="text-secondary" />
                  <h3 className="text-lg font-bold">Study Materials</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm">Comprehensive notes and guides</p>
                <Button variant="ghost" size="sm">Download →</Button>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={24} className="text-accent" />
                  <h3 className="text-lg font-bold">Books</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm">Recommended reading materials</p>
                <Button variant="ghost" size="sm">View List →</Button>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export const GraduationModule: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Graduation - Career Launch"
        subtitle="Explore top careers and plan your future"
        className="pt-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => (
              <motion.button
                key={career.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCareer(career.id)}
                className="text-left"
              >
                <Card className="h-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold flex-1">{career.name}</h3>
                      <Star size={20} className="text-accent flex-shrink-0" />
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2">{career.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-primary" />
                        <span className="text-sm text-gray-300">{career.salary.entry} - {career.salary.senior}</span>
                      </div>
                      <Badge variant="primary">Explore →</Badge>
                    </div>
                  </div>
                </Card>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {selectedCareer && (
        <CareerDetails careerId={selectedCareer} onBack={() => setSelectedCareer(null)} />
      )}
    </div>
  );
};
