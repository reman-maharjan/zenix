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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
                <Badge>Testimonials</Badge>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">What our clients say</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                Don&apos;t just take our word for it, see what the awesome people we work with have to say about their experience.
            </p>
        </div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {reviews.map((review) => (
                <motion.div 
                    key={review.id} 
                    variants={cardVariants}
                    className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col"
                >
                    <Quote className="absolute top-8 right-8 text-gray-100 fill-gray-100 w-16 h-16 -z-0 group-hover:text-gray-50 transition-colors" />
                    
                    <div className="flex gap-1 mb-6 relative z-10">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-light italic">
                        &quot;{review.quote}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-gray-50 pt-6">
                        <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm tracking-wider">
                            {review.initials}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-base">{review.author}</p>
                            <p className="text-gray-500 text-sm font-medium">{review.role}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};