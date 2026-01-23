'use client'; 
import React, { useState } from 'react';
import { Badge } from './ui/Badge';
import { Plus, X } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'Social Media Marketing',
    description: 'Craft a compelling story designed to enthral your audience. We understand the science and art behind viral campaigns. With our finger on the pulse of the latest trends, we create strategies that spark conversations and build communities.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Digital Advertising',
    description: 'Maximize your ROI with our data-driven digital advertising campaigns. We specialize in PPC, display ads, and social media advertising to target the right audience at the right time, ensuring every dollar spent contributes to your growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Engagement Growth',
    description: 'Building a loyal community is key. We implement organic growth strategies that foster genuine connections with your audience, turning followers into brand advocates through consistent, meaningful interaction.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
  }
];

export const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('01');

  const toggleService = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-white mx-4 my-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-16">
        <div className="flex justify-center">
           <Badge>What we do</Badge>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-xl text-gray-600">Propel Your Presence with Proven Expertise</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-in-out border border-gray-100 ${
              openId === service.id ? 'bg-[#F3F4F6]' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            {/* Header / Toggle Bar */}
            <div 
              className="flex justify-between items-center p-6 md:p-10 cursor-pointer"
              onClick={() => toggleService(service.id)}
            >
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900">{service.title}</h3>
              <button 
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openId === service.id ? 'bg-[#c7ab86] rotate-0' : 'bg-white border border-gray-200 rotate-0 hover:bg-[#c7ab86] hover:border-[#c7ab86]'
                }`}
              >
                {openId === service.id ? <X size={24} className="text-black" /> : <Plus size={24} className="text-black" />}
              </button>
            </div>

            {/* Expanded Content */}
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openId === service.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 md:px-10 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                   {/* Left: Image */}
                   <div className="rounded-[2rem] overflow-hidden h-[300px] md:h-[400px] w-full shadow-sm">
                     <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover" 
                     />
                   </div>

                   {/* Right: Content */}
                   <div className="flex flex-col justify-center">
                      <h4 className="text-3xl md:text-5xl font-normal text-gray-900 mb-6 leading-tight">
                        {service.title}
                      </h4>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <button className="self-start px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                        Learn more
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};