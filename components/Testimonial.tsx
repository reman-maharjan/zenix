'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Badge } from './ui/Badge';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        quote: "Since partnering with this incredible social media marketing team, our online engagement has skyrocketed! Sales have increased by 30% in just a few months, and our brand awareness is at an all-time high. Their creative approach to content and targeted advertising strategies really make a difference. Highly recommend if you're looking to elevate your brand's online presence!",
        author: "Emily R.",
        role: "Boutique Owner",
        initials: "ER"
    },
    {
        id: 2,
        quote: "This agency has been a game-changer for our startup. Their data-driven strategies and deep understanding of social media algorithms have significantly boosted our lead generation and conversion rates. The team is proactive, transparent, and really dedicated to our success. It's been a pleasure working with professionals who are as passionate about our growth as we are.",
        author: "Marcus L.",
        role: "Tech Startup Founder",
        initials: "ML"
    },
    {
        id: 3,
        quote: "I was amazed by the immediate impact their work had on our event promotions. Not only did they increase our event's visibility, but they also engaged our target audience in meaningful ways, resulting in sold-out venues. Their professionalism and creativity are unmatched.",
        author: "Sarah J.",
        role: "Event Coordinator",
        initials: "SJ"
    }
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f3] relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(148,148,148,0.12) 60px, rgba(148,148,148,0.12) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(148,148,148,0.12) 60px, rgba(148,148,148,0.12) 61px)',
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="flex justify-start md:justify-start">
              <Badge>Testimonials</Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
              Words from teams we work with.
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              A few kind notes from founders, marketers and teams who trusted us with
              their campaigns, launches and always-on content.
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {reviews.map((review) => (
            <motion.article
              key={review.id}
              variants={cardVariants}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
            >
              <Quote className="absolute -top-4 -right-4 text-gray-100/80 fill-gray-100/80 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none" />

              <div className="flex gap-1 mb-4 relative z-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-[#c7ab86] text-[#c7ab86]" />
                ))}
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 relative z-10">
                &quot;{review.quote}&quot;
              </p>

              <div className="flex items-center gap-4 mt-auto pt-5 border-t border-gray-100 relative z-10">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-xs md:text-sm tracking-widest">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    {review.author}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};