'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const ServicesHero: React.FC = () => {
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

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#c7ab86]/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#c7ab86]" />
            <span className="text-sm font-medium text-[#c7ab86]">Our Services</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Your Brand with
            <span className="block text-[#c7ab86] mt-2">Expert Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            We deliver comprehensive digital services that elevate your brand, engage your audience, and drive measurable results. From creative content to technical excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact">
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full cursor-pointer px-8 py-6 text-base font-semibold bg-[#c7ab86] hover:bg-[#c7ab86]/90 shadow-lg hover:shadow-xl transition-all"
            >
              Contact
            </Button>
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
