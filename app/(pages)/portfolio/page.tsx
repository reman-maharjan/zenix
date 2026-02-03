'use client';

import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import PortfolioDetails from '@/components/portfolio/PortfolioDetails';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioDetails />
      <PortfolioCTA />
    </div>
  );
}

