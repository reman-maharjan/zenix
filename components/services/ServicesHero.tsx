'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

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
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full px-8 py-6 text-base font-semibold bg-[#c7ab86] hover:bg-[#c7ab86]/90 shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Button>
            <button className="flex items-center gap-2 px-6 py-3 text-gray-700 font-medium hover:text-[#c7ab86] transition-colors group">
              View Portfolio 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
