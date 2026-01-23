import React from 'react';
import { Badge } from './ui/Badge';
import { AccordionItem } from './ui/Accordion';

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50/80 rounded-[3rem] mx-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <Badge>FAQs</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">We are often asked...</p>
        </div>

        <div className="space-y-2 mb-16">
            <AccordionItem title="What services do you offer?" content="We offer a full suite of digital marketing services including social media management, content creation, paid advertising, and community engagement strategies." />
            <AccordionItem title="How do you measure success in social media marketing?" content="We track key performance indicators (KPIs) such as engagement rates, reach, conversion rates, and ROI. We provide detailed monthly reports to show exactly how our efforts are impacting your bottom line." />
            <AccordionItem title="Can you handle all social media platforms?" content="Yes, we have expertise across all major platforms including Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and Pinterest." />
            <AccordionItem title="What makes your agency different from others?" content="Our unique blend of creative storytelling and data-driven strategy sets us apart. We don't just post content; we build communities and drive real business results." />
            <AccordionItem title="How do we get started?" content="Simply book a call with us using the button below. We'll discuss your goals, audit your current presence, and propose a tailored strategy." />
        </div>

        <div className="bg-[#c7ab86] rounded-[2.5rem] p-10 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">Still have questions?</h3>
            <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                Contact one of our experts to find out how we can help your business today.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors">
                Get in touch
            </button>
        </div>
      </div>
    </section>
  );
};