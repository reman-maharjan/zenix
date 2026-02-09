'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '@/lib/portfolioData';

type ProjectDetailsProps = {
  portfolio: PortfolioItem;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ portfolio }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        {/* Challenge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-[#c7ab86] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              The Challenge
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {portfolio.challenge}
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-[#c7ab86] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Our Solution
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {portfolio.solution}
          </p>
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-[#c7ab86] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Our Approach
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {portfolio.approach}
          </p>
        </motion.div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#c7ab86]/10 to-[#8b7457]/5 p-8 md:p-12 border border-[#c7ab86]/20"
        >
          <div className="relative z-10">
            <svg
              className="h-8 w-8 text-[#c7ab86] mb-4"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
              {portfolio.tagline}
            </p>
          </div>
          
          {/* Decorative Element */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-[#c7ab86]/10 rounded-full blur-3xl -z-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
