'use client';

import React from 'react';
import { Card } from '@/components';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg">Have questions? Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <Mail size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">info@yashodayos.com</p>
            <p className="text-gray-400">support@yashodayos.com</p>
          </Card>

          <Card className="text-center">
            <Phone size={40} className="mx-auto mb-4 text-secondary" />
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+91-XXXXXXXXXX</p>
            <p className="text-gray-400">Mon-Fri 9AM-6PM IST</p>
          </Card>

          <Card className="text-center">
            <MapPin size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="text-lg font-bold text-white mb-2">Address</h3>
            <p className="text-gray-400">Pune, Maharashtra</p>
            <p className="text-gray-400">India</p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-primary"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-primary resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
