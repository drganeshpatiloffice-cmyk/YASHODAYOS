'use client';

import React, { useMemo } from 'react';
import { careers } from '@/data/database';
import { scholarships } from '@/data/scholarships';
import { entranceExams } from '@/data/entranceExams';
import { competitiveExams } from '@/data/competitiveExams';
import { futureSkills } from '@/data/futureSkills';

interface SearchResult {
  id: string;
  title: string;
  type: 'career' | 'scholarship' | 'exam' | 'skill';
  description: string;
  category?: string;
  relevanceScore: number;
}

export const useGlobalSearch = (query: string): SearchResult[] => {
  return useMemo(() => {
    if (query.length < 2) return [];

    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search careers
    careers.forEach((career) => {
      let score = 0;
      if (career.name.toLowerCase().includes(lowerQuery)) score = 10;
      if (career.description.toLowerCase().includes(lowerQuery)) score = Math.max(score, 7);
      if (career.skillsRequired.some((s) => s.toLowerCase().includes(lowerQuery))) score = Math.max(score, 5);

      if (score > 0) {
        results.push({
          id: career.id,
          title: career.name,
          type: 'career',
          description: career.description,
          relevanceScore: score,
        });
      }
    });

    // Search scholarships
    scholarships.forEach((scholarship) => {
      let score = 0;
      if (scholarship.name.toLowerCase().includes(lowerQuery)) score = 10;
      if (scholarship.provider.toLowerCase().includes(lowerQuery)) score = Math.max(score, 7);
      if (scholarship.description.toLowerCase().includes(lowerQuery)) score = Math.max(score, 5);

      if (score > 0) {
        results.push({
          id: scholarship.id,
          title: scholarship.name,
          type: 'scholarship',
          description: scholarship.description,
          category: scholarship.provider,
          relevanceScore: score,
        });
      }
    });

    // Search exams
    [...entranceExams, ...competitiveExams].forEach((exam) => {
      let score = 0;
      if ('fullName' in exam && exam.fullName.toLowerCase().includes(lowerQuery)) score = 10;
      if ('name' in exam && exam.name.toLowerCase().includes(lowerQuery)) score = 10;
      if ('organization' in exam && exam.organization.toLowerCase().includes(lowerQuery)) score = Math.max(score, 7);

      if (score > 0) {
        results.push({
          id: exam.id,
          title: 'name' in exam ? exam.name : exam.fullName,
          type: 'exam',
          description: 'organization' in exam ? exam.organization : 'Entrance Exam',
          relevanceScore: score,
        });
      }
    });

    // Search skills
    futureSkills.forEach((skill) => {
      let score = 0;
      if (skill.name.toLowerCase().includes(lowerQuery)) score = 10;
      if (skill.description.toLowerCase().includes(lowerQuery)) score = Math.max(score, 7);
      if (skill.careerApplications.some((c) => c.toLowerCase().includes(lowerQuery))) score = Math.max(score, 5);

      if (score > 0) {
        results.push({
          id: skill.id,
          title: skill.name,
          type: 'skill',
          description: skill.description,
          category: skill.category,
          relevanceScore: score,
        });
      }
    });

    // Sort by relevance
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 20);
  }, [query]);
};
