'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Sparkles, CheckCircle2 } from 'lucide-react';

type TechnicalSpecsProps = {
  services: string[];
  deliverables: string[];
};

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ services, deliverables }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const serviceIcons: Record<string, any> = {
    'Product Photography': Camera,
    'Lifestyle Videography': Video,
    'Social Media Content': Sparkles,
    'Creative Direction': Palette,
    'Post-Production': Palette,
    'Motion Graphics': Video,
    'Sound Design': Video,
    'Color Grading': Palette,
    'Creative Concept': Sparkles,
    'Set Design': Palette,
    'Art Direction': Palette,
    'Retouching': Camera,
    'Documentary Photography': Camera,
    'Brand Videography': Video,
    'Storytelling': Sparkles,
    'Social Impact Content': Sparkles,
    'Community Engagement': Sparkles,
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                Services Provided
              </h2>
              <p className="text-base text-gray-600">
                Comprehensive creative solutions tailored to project needs
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = serviceIcons[service] || Camera;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#c7ab86]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-[#c7ab86]/10 group-hover:bg-[#c7ab86]/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-[#8b7457]" />
                    </div>
                    <span className="text-base font-medium text-gray-900">
                      {service}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                Deliverables
              </h2>
              <p className="text-base text-gray-600">
                High-quality assets ready for immediate use
              </p>
            </div>

            <div className="space-y-3">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 hover:bg-white transition-colors duration-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700">
                    {deliverable}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#c7ab86]/10 to-[#8b7457]/5 border border-[#c7ab86]/20"
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                All deliverables are provided in high-resolution formats optimized for both digital and print use, with full commercial rights transferred upon project completion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
