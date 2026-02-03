'use client';

import React from 'react';

const values = [
  {
    id: '01',
    label: 'Clarity over noise',
    description:
      'We focus on simple, clear stories that your audience can recognise instantly — across every channel.',
  },
  {
    id: '02',
    label: 'Crafted visuals',
    description:
      'From shot lists to colour grading, we sweat the details so every asset feels on-brand and intentional.',
  },
  {
    id: '03',
    label: 'Steady partnership',
    description:
      'We work as an extended team, not a one-off vendor — staying close to your goals as they evolve.',
  },
];

const AboutValues: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f3]">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8b7457]">
              What we believe
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              Principles that shape every project.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-[#e3d6c4] bg-white px-6 py-6 md:px-7 md:py-7 overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-10 -right-8 h-24 w-24 rounded-full bg-[#c7ab86]/10 blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#b19a76]">
                  {value.id}
                </p>
                <h3 className="text-lg font-medium text-gray-900">
                  {value.label}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;

