'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Input, Badge, Navbar, Section } from '@/components';
import { scholarships } from '@/data/scholarships';
import { Trophy, Calendar, Users, ExternalLink } from 'lucide-react';

export const ScholarshipsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'deadline'>('all');
  const [savedScholarships, setSavedScholarships] = useState<string[]>([]);

  const filteredScholarships = scholarships.filter((s) => {
    if (selectedFilter === 'deadline') {
      return true; // Upcoming deadlines
    }
    return true;
  });

  const toggleSave = (id: string) => {
    setSavedScholarships((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Scholarships & Financial Aid"
        subtitle="Find scholarships and funding opportunities"
        className="pt-32"
      >
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            {[
              { id: 'all', label: 'All Scholarships' },
              { id: 'active', label: 'Applications Open' },
              { id: 'deadline', label: 'Upcoming Deadlines' },
            ].map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id as any)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Scholarships Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredScholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{scholarship.name}</h3>
                      <p className="text-sm text-gray-400">{scholarship.provider}</p>
                    </div>
                    <Trophy size={24} className="text-accent flex-shrink-0" />
                  </div>

                  {/* Amount */}
                  <div className="mb-4">
                    <p className="text-primary font-bold text-xl">{scholarship.amount}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">({scholarship.description})</p>

                  {/* Eligibility Tags */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Eligibility:</p>
                    <div className="flex flex-wrap gap-2">
                      {scholarship.eligibility.slice(0, 2).map((e) => (
                        <Badge key={e} variant="primary" className="text-xs">
                          {e}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-auto">
                    <Calendar size={16} />
                    <span>Deadline: {scholarship.deadline}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Apply
                    </Button>
                    <Button
                      variant={savedScholarships.includes(scholarship.id) ? 'secondary' : 'ghost'}
                      size="sm"
                      className="flex-1"
                      onClick={() => toggleSave(scholarship.id)}
                    >
                      {savedScholarships.includes(scholarship.id) ? 'Saved' : 'Save'}
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

export default ScholarshipsPage;
