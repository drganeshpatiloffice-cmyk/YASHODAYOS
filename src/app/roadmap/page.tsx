'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Section } from '@/components';
import { useCareerRoadmap } from '@/hooks/useCareerRoadmap';

const RoadmapVisualization: React.FC = () => {
  const { nodes, edges } = useCareerRoadmap();

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <Section
        title="Career Roadmap"
        subtitle="Visual representation of your career journey"
        className="pt-32 pb-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* SVG Canvas */}
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl p-8 overflow-x-auto">
            <svg
              width={1200}
              height={800}
              className="min-w-full"
              viewBox="0 0 1200 800"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Draw Edges */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#00d9ff" />
                </marker>
              </defs>

              {edges.map((edge, idx) => {
                const fromNode = nodes.find((n) => n.id === edge.from);
                const toNode = nodes.find((n) => n.id === edge.to);

                if (!fromNode || !toNode) return null;

                const x1 = (fromNode.x / 100) * 1200;
                const y1 = (fromNode.y / 100) * 800;
                const x2 = (toNode.x / 100) * 1200;
                const y2 = (toNode.y / 100) * 800;

                return (
                  <line
                    key={`edge-${idx}`}
                    x1={x1}
                    y1={y1 + 40}
                    x2={x2}
                    y2={y2 - 40}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    opacity="0.6"
                  />
                );
              })}

              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00d9ff', stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: '#ff006e', stopOpacity: 0.5 }} />
                </linearGradient>
              </defs>

              {/* Draw Nodes */}
              {nodes.map((node) => {
                const x = (node.x / 100) * 1200;
                const y = (node.y / 100) * 800;
                const colors = [
                  '#00d9ff',
                  '#ff006e',
                  '#8338ec',
                  '#ffbe0b',
                  '#fb5607',
                  '#3a86ff',
                ];
                const color = colors[node.level % colors.length];

                return (
                  <g key={node.id}>
                    {/* Circle */}
                    <circle cx={x} cy={y} r="35" fill={color} opacity="0.2" />
                    <circle cx={x} cy={y} r="30" fill="none" stroke={color} strokeWidth="2" />
                    <circle cx={x} cy={y} r="25" fill={color} opacity="0.8" />

                    {/* Text */}
                    <text
                      x={x}
                      y={y - 50}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      {node.label}
                    </text>
                    <text
                      x={x}
                      y={y + 55}
                      textAnchor="middle"
                      fill="#888"
                      fontSize="10"
                    >
                      {node.description}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-cyan-500 rounded-full mx-auto mb-2"></div>
              <p className="text-gray-400 text-sm">Foundation (Class 9-10)</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-rose-500 rounded-full mx-auto mb-2"></div>
              <p className="text-gray-400 text-sm">Specialization (Class 11-12)</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
              <p className="text-gray-400 text-sm">Undergraduate</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
              <p className="text-gray-400 text-sm">Postgraduate</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default RoadmapVisualization;
