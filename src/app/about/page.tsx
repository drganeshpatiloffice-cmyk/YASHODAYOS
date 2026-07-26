'use client';

import React from 'react';
import { Card } from '@/components';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About YASHODAYOS</h1>
          <p className="text-gray-400 text-lg">Your Academic Success & Holistic Development is Our Only Success</p>
        </div>

        {/* Mission */}
        <Card>
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            YASHODAYOS is dedicated to providing comprehensive career guidance and educational support to students from Class 9 to Post-Graduation. We believe every student has unique potential and deserves personalized guidance to explore their career paths effectively.
          </p>
        </Card>

        {/* Vision */}
        <Card>
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To be the leading platform that empowers students with knowledge, skills, and opportunities to make informed career decisions and achieve their academic and professional goals.
          </p>
        </Card>

        {/* What We Offer */}
        <Card>
          <h2 className="text-2xl font-bold text-white mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Career Guidance',
                desc: '10+ career pathways with detailed information about jobs, salaries, and growth',
              },
              {
                title: 'Educational Roadmaps',
                desc: 'Step-by-step guidance from Class 9 to Post-Graduation',
              },
              {
                title: 'Scholarship Database',
                desc: 'Latest scholarships and financial aid opportunities',
              },
              {
                title: 'Exam Preparation',
                desc: 'Resources for entrance exams and competitive exams',
              },
              {
                title: 'Skill Development',
                desc: 'Future skills with demand scores and career applications',
              },
              {
                title: 'Interactive Roadmap',
                desc: 'Visual representation of your career journey',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Team */}
        <Card>
          <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            YASHODAYOS is founded and led by experienced educators and counselors who have dedicated their careers to student success.
          </p>
          <div className="bg-white/5 p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Dr. Ganesh Patil</p>
            <p className="text-gray-400 text-sm">Founder & Educational Counselor</p>
            <p className="text-gray-400 text-sm mt-2">With over 20 years of experience in education and career counseling</p>
          </div>
        </Card>

        {/* Contact */}
        <Card>
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4">Have questions or feedback? We'd love to hear from you!</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
