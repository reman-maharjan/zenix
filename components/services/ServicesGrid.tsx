'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  icon: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'Content Creation',
    description: 'High-quality, engaging content that tells your brand story and connects with your audience.',
    longDescription: 'We create high-quality, engaging content that tells your brand story and connects with your audience. From written content to visual creatives, everything is crafted to align with your brand voice and marketing goals. Our content is designed to inform, inspire, and drive action across all digital platforms.',
    image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMGNyZWF0aW9ufGVufDB8fDB8fHww',
    features: [
      'Blog Posts & Articles',
      'Social Media Content',
      'Email Campaigns',
      'Copywriting',
      'Content Strategy'
    ],
    icon: '✍️'
  },
  {
    id: '02',
    title: 'Photography & Videography',
    description: 'Professional photos and videos that capture the essence of your brand and leave a lasting impression.',
    longDescription: 'We produce professional photos and videos that capture the essence of your brand. From product shoots to brand films and social media visuals, our visuals are crafted to stand out and leave a lasting impression. High-quality visuals help build trust, credibility, and stronger audience engagement.',
    image: 'https://images.unsplash.com/photo-1621701816825-b5abfadae6c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5JTIwYW5kJTIwdmlkZW9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    features: [
      'Product Photography',
      'Brand Films',
      'Social Media Videos',
      'Event Coverage',
      'Post-Production'
    ],
    icon: '📸'
  },
  {
    id: '03',
    title: 'Social Media Management',
    description: 'Strategic, consistent, and creative social media management that grows your following and boosts engagement.',
    longDescription: 'We manage your social media presence with a strategic, consistent, and creative approach. From content planning and posting to audience engagement and performance tracking, we handle it all. Our goal is to grow your following, boost engagement, and turn social media into a powerful marketing channel.',
    image: 'https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Content Strategy',
      'Community Management',
      'Analytics & Reporting',
      'Paid Advertising',
      'Influencer Partnerships'
    ],
    icon: '📱'
  },
  {
    id: '04',
    title: 'Graphic Design',
    description: 'Visually compelling graphics that bring your brand to life with consistency, clarity, and strong visual impact.',
    longDescription: 'We design visually compelling graphics that bring your brand to life. From logos and brand identity to social media creatives, ads, and marketing materials, our designs are both creative and strategic. Every design is crafted to ensure consistency, clarity, and strong visual impact.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop',
    features: [
      'Logo & Brand Identity',
      'Social Media Graphics',
      'Print Design',
      'Marketing Materials',
      'UI/UX Design'
    ],
    icon: '🎨'
  },
  {
    id: '05',
    title: 'Web Development',
    description: 'Modern, responsive, and user-friendly websites optimized for performance, speed, and conversions.',
    longDescription: 'We design and develop modern, responsive, and user-friendly websites that reflect your brand identity. Our websites are optimized for performance, speed, and conversions across all devices. Whether it\'s a simple site or a complex platform, we build solutions that support your business growth.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'CMS Integration',
      'Performance Optimization',
      'SEO & Analytics'
    ],
    icon: '💻'
  }
];

const ServicesGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and drive results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#c7ab86]/30 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === service.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c7ab86] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#c7ab86] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-[#c7ab86] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#c7ab86]/10 via-[#c7ab86]/5 to-[#c7ab86]/10 rounded-3xl p-12 border border-[#c7ab86]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Let's discuss how we can help transform your brand and achieve your goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full px-8 py-6 bg-[#c7ab86] hover:bg-[#c7ab86]/90"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 border-[#c7ab86] text-[#c7ab86] hover:bg-[#c7ab86] hover:text-white"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
