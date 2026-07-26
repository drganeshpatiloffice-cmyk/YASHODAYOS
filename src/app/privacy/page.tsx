'use client';

import React from 'react';
import { Card } from '@/components';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              YASHODAYOS ("we" or "us" or "our") operates the website and application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection and Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect various types of information in connection with the services we provide:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Personal Information (name, email, phone number)</li>
              <li>Academic Information (class, stream, marks)</li>
              <li>Career Preferences and Interests</li>
              <li>Usage Data (pages visited, time spent, features used)</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Data</h2>
            <p className="text-gray-300 leading-relaxed">
              YASHODAYOS uses the collected data for various purposes including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
              <li>Providing and maintaining our service</li>
              <li>Personalizing career guidance and recommendations</li>
              <li>Notifying users about changes or updates</li>
              <li>Improving our service quality</li>
              <li>Monitoring usage patterns</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">4. Security</h2>
            <p className="text-gray-300 leading-relaxed">
              The security of your data is important to us. We use industry-standard encryption and security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@yashodayos.com
            </p>
          </Card>
        </div>

        <p className="text-gray-400 text-sm mt-8">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
