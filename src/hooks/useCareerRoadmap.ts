'use client';

import React, { useMemo } from 'react';
import { careers } from '@/data/database';

export interface RoadmapNode {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  level: number;
}

export interface RoadmapEdge {
  from: string;
  to: string;
}

const generateRoadmapData = (): { nodes: RoadmapNode[]; edges: RoadmapEdge[] } => {
  const nodes: RoadmapNode[] = [
    { id: 'start', label: 'Class 9', description: 'Foundation Building', x: 50, y: 10, level: 0 },
    { id: 'class10', label: 'Class 10', description: 'Stream Selection', x: 50, y: 30, level: 1 },

    // Class 11-12 branches
    { id: 'science', label: 'Science Stream', description: 'PCM / PCB', x: 20, y: 50, level: 2 },
    { id: 'commerce', label: 'Commerce', description: 'Accounts + Econ', x: 50, y: 50, level: 2 },
    { id: 'arts', label: 'Arts Stream', description: 'Humanities', x: 80, y: 50, level: 2 },

    // Career paths from Science
    { id: 'engineer', label: 'Engineer', description: 'B.Tech in CS/IT', x: 10, y: 70, level: 3 },
    { id: 'doctor', label: 'Doctor', description: 'MBBS Programs', x: 20, y: 70, level: 3 },
    { id: 'scientist', label: 'Scientist', description: 'Research Career', x: 30, y: 70, level: 3 },

    // Career paths from Commerce
    { id: 'ca', label: 'Chartered Accountant', description: 'CA Programs', x: 40, y: 70, level: 3 },
    { id: 'bba', label: 'Business Admin', description: 'BBA/MBA', x: 50, y: 70, level: 3 },
    { id: 'cs', label: 'Company Secretary', description: 'CS Programs', x: 60, y: 70, level: 3 },

    // Career paths from Arts
    { id: 'lawyer', label: 'Lawyer', description: 'LLB Programs', x: 70, y: 70, level: 3 },
    { id: 'ias', label: 'IAS Officer', description: 'UPSC Exams', x: 80, y: 70, level: 3 },
    { id: 'journalist', label: 'Journalist', description: 'Media Career', x: 90, y: 70, level: 3 },

    // Post-graduation
    { id: 'mtech', label: 'M.Tech', description: 'Advanced Engineering', x: 10, y: 90, level: 4 },
    { id: 'mba', label: 'MBA', description: 'Management', x: 50, y: 90, level: 4 },
    { id: 'phd', label: 'PhD', description: 'Research', x: 30, y: 90, level: 4 },
    { id: 'specialization', label: 'Specialization', description: 'Advanced Study', x: 70, y: 90, level: 4 },
  ];

  const edges: RoadmapEdge[] = [
    { from: 'start', to: 'class10' },
    { from: 'class10', to: 'science' },
    { from: 'class10', to: 'commerce' },
    { from: 'class10', to: 'arts' },

    // Science careers
    { from: 'science', to: 'engineer' },
    { from: 'science', to: 'doctor' },
    { from: 'science', to: 'scientist' },

    // Commerce careers
    { from: 'commerce', to: 'ca' },
    { from: 'commerce', to: 'bba' },
    { from: 'commerce', to: 'cs' },

    // Arts careers
    { from: 'arts', to: 'lawyer' },
    { from: 'arts', to: 'ias' },
    { from: 'arts', to: 'journalist' },

    // Post-graduation
    { from: 'engineer', to: 'mtech' },
    { from: 'bba', to: 'mba' },
    { from: 'scientist', to: 'phd' },
    { from: 'doctor', to: 'specialization' },
  ];

  return { nodes, edges };
};

export const useCareerRoadmap = () => {
  return useMemo(() => generateRoadmapData(), []);
};
