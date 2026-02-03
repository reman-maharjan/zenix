'use client';

import { motion, Variants } from 'framer-motion';
import Hero from '@/components/Hero';
import { Brands } from '@/components/Brands';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Team } from '@/components/Team';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonial';
import { CTA } from '@/components/CTA';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <main className="pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        <SectionWrapper>
          <Brands />
        </SectionWrapper>

        <SectionWrapper>
          <Services />
        </SectionWrapper>

        <SectionWrapper>
          <Portfolio />
        </SectionWrapper>

        <SectionWrapper>
          <Team />
        </SectionWrapper>

        <SectionWrapper>
          <Process />
        </SectionWrapper>


        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>
        <SectionWrapper>
          <CTA />
        </SectionWrapper>
      </main>
    </div>
  );
}

export default App;