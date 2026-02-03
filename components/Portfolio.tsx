`use client`;

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

type PortfolioHighlight = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

const highlights: PortfolioHighlight[] = [
  {
    id: 'primary',
    title: 'Zuleika – Ribbon collection',
    subtitle: 'Jewellery visuals for website and social.',
    image: '/portfolio/zuleika/newdec2.jpg',
    href: '/portfolio',
  },
  {
    id: 'secondary-1',
    title: 'Zuleika – The Toast Duo',
    subtitle: 'Warm lifestyle frames for campaign storytelling.',
    image: '/portfolio/zuleika/The Toast Duo.jpg',
    href: '/portfolio',
  },
  {
    id: 'secondary-2',
    title: 'Elevations – Product visuals',
    subtitle: 'Clean product imagery for digital touchpoints.',
    image: '/portfolio/elevations/elevations2 copy.jpg',
    href: '/portfolio',
  },
];

export const Portfolio: React.FC = () => {
  const primary = highlights[0];
  const secondary = highlights.slice(1);

  return (
    <section className="min-h-screen py-10 md:py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8b7457]">
              Selected work
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              Recent campaigns and collaborations.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          {/* Primary large card */}
          <a
            href={primary.href}
            className="group relative overflow-hidden rounded-3xl h-[420px] md:h-[500px] lg:h-[540px] bg-gray-900"
          >
            <img
              src={primary.image}
              alt={primary.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            <div className="absolute inset-x-6 inset-y-6 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white border border-white/30 backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">
                  {primary.title}
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  {primary.subtitle}
                </p>
              </div>
            </div>
          </a>

          {/* Secondary stacked cards — heights roughly half of primary */}
          <div className="grid gap-4 md:gap-6">
            {secondary.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group relative overflow-hidden rounded-3xl h-[200px] md:h-[230px] lg:h-[250px] bg-gray-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute inset-x-5 inset-y-5 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white border border-white/30 backdrop-blur-sm">
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/80">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

