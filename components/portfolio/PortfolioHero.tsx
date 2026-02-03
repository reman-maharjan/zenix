'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight} from 'lucide-react';
import Link from 'next/link';

const PortfolioHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-white text-gray-900">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 50px, currentColor 50px, currentColor 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, currentColor 50px, currentColor 51px)',
          }}
        />
      </div>

      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-10 h-72 w-72 rounded-full bg-[#c7ab86]/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-[#c7ab86]/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-40 w-40 rounded-full border border-[#c7ab86]/20" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* Text column */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-[#c7ab86]/20 bg-[#c7ab86]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#8b7457]"
            >
              Selected Work
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight"
            >
              A calm space for
              <span className="block text-[#c7ab86]">elevated visuals.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl text-base md:text-lg text-gray-600 leading-relaxed"
            >
              A curated selection of projects across jewelry, lifestyle and product brands. 
              Minimal compositions, warm tones and intentional details that let each story breathe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/contact">
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-8 py-5 text-sm font-semibold bg-[#c7ab86] hover:bg-[#c7ab86]/90"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
              </Link>
            </motion.div>
          </div>

          {/* Minimal collage column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative h-[280px] md:h-[360px] lg:h-[420px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gray-50 border border-gray-100" />

            <div className="absolute inset-5 md:inset-6 flex gap-4 md:gap-6">
              {/* Left tall frame */}
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaborating in a digital marketing workspace"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right stacked frames */}
              <div className="flex w-[45%] flex-col gap-4 md:gap-6">
                <div className="relative h-1/2 rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                    alt="Client meeting discussing campaign strategy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative h-1/2 rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1726812103168-6ad609e53f94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBwb3J0Zm9saW98ZW58MHx8MHx8fDA%3D"
                    alt="Digital marketing dashboards and analytics on screens"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;

