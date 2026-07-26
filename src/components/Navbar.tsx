'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useCareer } from '@context/CareerContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useCareer();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg" />
            <span className="text-xl font-bold text-glow">YASHODAY</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Careers
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Exams
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Scholarships
            </a>
          </div>

          {/* Theme Toggle & Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            <a href="#" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition">
              Home
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition">
              Careers
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition">
              Exams
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition">
              Scholarships
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
