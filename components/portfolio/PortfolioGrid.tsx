'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  location?: string;
  year?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: '01',
    title: 'Zuleika – Ribbon Collection',
    client: 'Zuleika',
    category: 'Jewellery Campaign',
    image: '/portfolio/zuleika/newdec2.jpg',
    location: 'Kathmandu',
    year: '2025',
  },
  {
    id: '02',
    title: 'The Toast Duo',
    client: 'Zuleika',
    category: 'Lifestyle Still Life',
    image: '/portfolio/zuleika/The Toast Duo.jpg',
    location: 'Studio',
    year: '2025',
  },
  {
    id: '03',
    title: 'Elevations',
    client: 'Elevations',
    category: 'Product Imagery',
    image: '/portfolio/elevations/elevations2 copy.jpg',
    location: 'Studio',
    year: '2024',
  },
];

const PortfolioGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
              Portfolio
            </h2>
            <p className="max-w-xl text-sm md:text-base text-gray-600 leading-relaxed">
              A small selection of recent collaborations. Each frame is built around light, 
              texture and a quiet aesthetic that lets the product lead.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            03 — Selected projects
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-gray-50/40 hover:bg-white transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-4 md:px-6 md:pb-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                      {item.category}
                    </p>
                    {item.year && (
                      <span className="text-xs text-gray-400">{item.year}</span>
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.client}
                    {item.location ? ` • ${item.location}` : ''}
                  </p>
                </div>

                <button
                  className="inline-flex items-center justify-between rounded-full border border-gray-200 px-3 py-2 text-xs text-gray-700 transition-all duration-300 group-hover:border-[#c7ab86] group-hover:bg-[#c7ab86]/5 group-hover:text-[#8b7457]"
                  type="button"
                >
                  <span className="uppercase tracking-[0.18em]">
                    View details
                  </span>
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;

