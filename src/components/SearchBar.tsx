'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from './Input';
import { Badge } from './Badge';
import { LoadingSpinner } from './LoadingSpinner';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
}

const mockResults: SearchResult[] = [
  { id: '1', title: 'Police Career Path', category: 'Career', description: 'Become a police officer in India' },
  { id: '2', title: 'Police Preparation', category: 'Exam', description: 'Prepare for police recruitment exams' },
  { id: '3', title: 'Police Eligibility', category: 'Eligibility', description: 'Check police job eligibility criteria' },
  { id: '4', title: 'Police Salary', category: 'Salary', description: 'Police officer salary and benefits' },
  { id: '5', title: 'Police Roadmap', category: 'Roadmap', description: 'Step by step career roadmap' },
];

interface SearchBarProps {
  onResultClick?: (result: SearchResult) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onResultClick }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      setIsLoading(true);
      setTimeout(() => {
        const filtered = mockResults.filter(
          (r) =>
            r.title.toLowerCase().includes(value.toLowerCase()) ||
            r.description.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <Input
        placeholder="Search careers, exams, scholarships..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="w-full"
      />

      <AnimatePresence>
        {isOpen && (query.length > 2 || results.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full glass rounded-2xl overflow-hidden z-50"
          >
            {isLoading ? (
              <div className="p-8 flex justify-center">
                <LoadingSpinner size="sm" />
              </div>
            ) : results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <motion.button
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      onResultClick?.(result);
                      setQuery('');
                      setResults([]);
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-6 py-4 hover:bg-white/5 transition border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">{result.title}</p>
                        <p className="text-sm text-gray-400">{result.description}</p>
                      </div>
                      <Badge variant="primary">{result.category}</Badge>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-400">
                <p>No results found for "{query}"</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
