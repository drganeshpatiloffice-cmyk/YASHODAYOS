'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Careers', href: '/careers' },
    { label: 'Scholarships', href: '/scholarships' },
    { label: 'Exams', href: '/exams' },
    { label: 'Skills', href: '/skills' },
    { label: 'Roadmap', href: '/roadmap' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="font-bold text-lg gradient-text">YASHODAYOS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.button
                className="px-4 py-2 text-gray-300 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Admin & More */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/admin">
            <motion.button
              className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition"
              whileHover={{ scale: 1.05 }}
            >
              Admin
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-primary transition"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-dark-800"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition">
                  {item.label}
                </button>
              </Link>
            ))}
            <Link href="/admin" className="block">
              <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition">
                Admin
              </button>
            </Link>
            <Link href="/about" className="block">
              <button className="w-full text-left px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg">
                About
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
