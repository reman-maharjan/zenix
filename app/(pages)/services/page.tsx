'use client';

import { motion } from 'framer-motion';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesGrid />
    </div>
  );
}
