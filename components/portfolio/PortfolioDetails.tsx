'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PortfolioDetails: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f3]">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start"
        >
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8b7457]">
              Approach
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              Calm, intentional and quietly bold.
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Every project starts with understanding how you want people to feel when
              they meet your brand. From there, we build simple frames, soft light and
              considered compositions that highlight material, form and story.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We work closely with founders, creative teams and agencies to translate
              brand language into visuals that feel timeless — suited for campaigns,
              websites, social and print.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e3d6c4] bg-white px-5 py-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-2">
                Focus
              </p>
              <p className="text-sm text-gray-800">
                Product, jewellery and lifestyle visuals with an emphasis on warmth and
                texture.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e3d6c4] bg-white px-5 py-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-2">
                Deliverables
              </p>
              <p className="text-sm text-gray-800">
                Campaign sets, website imagery, social media libraries and hero visuals
                for launches.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e3d6c4] bg-white px-5 py-6 sm:col-span-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-2">
                Availability
              </p>
              <p className="text-sm text-gray-800">
                Currently booking select projects for the next quarter. Remote and on-site
                collaborations available.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioDetails;

