'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-gray-200 bg-[#faf7f3] px-8 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8b7457]">
              Work with us
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              Ready to share what you&apos;re building?
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Tell us about your brand, timeline and what a successful collaboration looks like.
              We&apos;ll respond with ideas, availability and a simple path forward.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#c7ab86] px-7 py-3 text-sm font-semibold text-white hover:bg-[#c7ab86]/90 transition-colors"
            >
              <span>Start a project enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-gray-500 max-w-xs text-left md:text-right">
              Or reach us directly on WhatsApp or phone using the details in the contact page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;

