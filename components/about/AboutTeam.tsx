'use client';

import React from 'react';
import { Team } from '@/components/Team';

const AboutTeam: React.FC = () => {
  return (
    <section className="py-4 md:py-8 bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Reuse existing Team component but keep spacing consistent with About page */}
        <Team />
      </div>
    </section>
  );
};

export default AboutTeam;

