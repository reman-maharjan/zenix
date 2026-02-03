'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PortfolioCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-gray-200 bg-[#faf7f3] px-8 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b7457] mb-2">
              Next step
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
              Have a project in mind?
            </h3>
            <p className="text-sm md:text-base text-gray-600 max-w-md">
              Share a brief about your brand, timeline and what you&apos;re hoping to
              create. We&apos;ll get back with direction, availability and a simple plan.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Button
              variant="default"
              size="lg"
              className="rounded-full px-8 py-5 text-sm font-semibold bg-[#c7ab86] hover:bg-[#c7ab86]/90"
            >
              Enquire about availability
            </Button>
            <p className="text-xs text-gray-500">
              Prefer email? You can also reach out with a link to your moodboard or deck.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;

