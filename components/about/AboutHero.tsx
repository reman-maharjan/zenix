'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] mt-10 md:mt-12 flex items-center justify-center overflow-hidden bg-white text-gray-900">
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
              About Zenix
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight"
            >
              A studio built for
              <span className="block text-[#c7ab86]">modern digital brands.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl text-base md:text-lg text-gray-600 leading-relaxed"
            >
              Zenix is a digital marketing and content studio based in Jwagal, Lalitpur.
              We partner with ambitious teams to shape strategy, create compelling visuals
              and run campaigns that feel thoughtful, not noisy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 hover:border-[#c7ab86] hover:text-[#8b7457] transition-colors"
              >
                <span>View our work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs md:text-sm text-gray-500 max-w-xs">
                Strategy, content and performance — handled by a small senior team that
                stays close to your brand.
              </p>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative h-[280px] md:h-[360px] lg:h-[420px]"
          >
            <div className="absolute inset-0 rounded-3xl" />

            <div className="absolute inset-5 md:inset-6">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661281345831-72aac72beb52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="Creative digital marketing team collaborating"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

