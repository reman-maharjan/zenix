'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { PortfolioItem } from '@/lib/portfolioData';

type RelatedProjectsProps = {
  projects: PortfolioItem[];
};

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ projects }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
              More Projects
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl">
              Explore other collaborations from our portfolio
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b7457] hover:text-[#c7ab86] transition-colors group"
          >
            <span className="uppercase tracking-[0.18em]">View all projects</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block relative overflow-hidden rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="mb-2">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 leading-snug mb-1 group-hover:text-[#8b7457] transition-colors">
                      {project.client}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {project.location} • {project.year}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-[#8b7457] font-medium uppercase tracking-[0.18em] mt-4">
                    <span>View project</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
