'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar, Section, Button } from '@/components';
import { ArrowRight, Sparkles, Target, BookOpen, Award, Zap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Target,
      title: 'Career Exploration',
      description: '10+ detailed career pathways with salary, skills, and growth prospects',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: BookOpen,
      title: 'Educational Roadmaps',
      description: 'Complete guidance from Class 9 to Post-Graduation',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Scholarships & Exams',
      description: 'Latest scholarships, entrance exams, and competitive exam info',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Zap,
      title: 'Future Skills',
      description: 'Learn in-demand skills with career applications',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles size={20} className="text-primary" />
              <span className="text-primary font-semibold">Welcome to Your Career Journey</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Your Academic Success & Holistic Development
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              is Our Only Success
            </p>

            <p className="text-lg text-gray-400 mb-10">
              Comprehensive career guidance from Class 9 to Post-Graduation. Explore careers, find
              scholarships, prepare for exams, and develop future skills.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/dashboard">
                  <Button variant="primary" size="lg" className="flex items-center gap-2">
                    Explore Now <ArrowRight size={20} />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/about">
                  <Button variant="secondary" size="lg">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Section title="Why Choose YASHODAYOS" subtitle="Everything you need for your career success">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all group">
                  <div
                    className={`inline-block p-4 rounded-lg bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Stats Section */}
      <Section title="By The Numbers">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Career Pathways' },
            { number: '50+', label: 'Scholarships' },
            { number: '20+', label: 'Entrance Exams' },
            { number: '25+', label: 'Future Skills' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of students who are already using YASHODAYOS to plan their careers and
            achieve their goals.
          </p>
          <Link href="/dashboard">
            <Button variant="primary" size="lg" className="flex items-center gap-2 mx-auto">
              Get Started Now <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-dark-800 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">YASHODAYOS</h3>
              <p className="text-gray-400 text-sm">Your Academic Success & Holistic Development</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/dashboard" className="hover:text-primary transition">Dashboard</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition">Careers</Link></li>
                <li><Link href="/scholarships" className="hover:text-primary transition">Scholarships</Link></li>
                <li><Link href="/exams" className="hover:text-primary transition">Exams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/skills" className="hover:text-primary transition">Skills</Link></li>
                <li><Link href="/roadmap" className="hover:text-primary transition">Roadmap</Link></li>
                <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
                <li><Link href="/" className="hover:text-primary transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 YASHODAYOS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
