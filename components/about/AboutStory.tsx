'use client';

import React from 'react';

const AboutStory: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8b7457]">
              Our Story
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              From small campaigns to long-term brand partners.
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Zenix started as a small content studio helping local businesses show up
              better online. Over time, we grew into a tight, multi-disciplinary team
              focused on strategy, production and performance marketing for modern brands.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Today, we collaborate with founders, in-house marketing teams and agencies
              to build campaigns that feel intentional and grounded in real brand goals —
              not just trends or noise.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              These values guide how we think, communicate and make decisions — from the first
              discovery call to the final asset delivery.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-[#faf7f3] px-5 py-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 mb-2">
                What we focus on
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Digital strategy, content production, performance campaigns and always-on
                social for brands that want a steady, considered presence.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 mb-2">
                How we work
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                A small, senior-led core team with a trusted network of creatives — so
                you always know who you&apos;re working with.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-6 sm:col-span-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 mb-2">
                Clients
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                We partner with lifestyle, product, tech and service brands across Nepal
                and beyond — from early-stage teams to established names refreshing their
                digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

