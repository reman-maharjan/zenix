'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { PortfolioItem } from '@/lib/portfolioData';

type CompanyOverviewProps = {
  portfolio: PortfolioItem;
};

const CompanyOverview: React.FC<CompanyOverviewProps> = ({ portfolio }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 text-sm text-gray-500"
        >
          <a href="/portfolio" className="hover:text-[#c7ab86] transition-colors">
            Portfolio
          </a>
          <span>/</span>
          <span className="text-gray-900">{portfolio.client}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Category Badge */}
            <div className="inline-flex items-center rounded-full border border-[#c7ab86]/30 bg-[#c7ab86]/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#8b7457]">
                {portfolio.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
              {portfolio.client}
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
              {portfolio.tagline}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              {portfolio.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              {portfolio.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#c7ab86]" />
                  <span>{portfolio.location}</span>
                </div>
              )}
              {portfolio.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#c7ab86]" />
                  <span>{portfolio.year}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100">
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#c7ab86]/10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
