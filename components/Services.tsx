import React, { useState } from 'react';
import Image from 'next/image';
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
    title: 'Content Creation',
    description: 'We create high-quality, engaging content that tells your brand story and connects with your audience. From written content to visual creatives, everything is crafted to align with your brand voice and marketing goals. Our content is designed to inform, inspire, and drive action across all digital platforms.',
    image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMGNyZWF0aW9ufGVufDB8fDB8fHww'
  },
  {
    id: '02',
    title: 'Photography & Videography',
    description: 'We produce professional photos and videos that capture the essence of your brand. From product shoots to brand films and social media visuals, our visuals are crafted to stand out and leave a lasting impression. High-quality visuals help build trust, credibility, and stronger audience engagement.',
    image: 'https://images.unsplash.com/photo-1621701816825-b5abfadae6c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5JTIwYW5kJTIwdmlkZW9ncmFwaHl8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '03',
    title: 'Social Media Management',
    description: 'We manage your social media presence with a strategic, consistent, and creative approach. From content planning and posting to audience engagement and performance tracking, we handle it all. Our goal is to grow your following, boost engagement, and turn social media into a powerful marketing channel.',
    image: 'https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '04',
    title: 'Graphic Design',
    description: 'We design visually compelling graphics that bring your brand to life. From logos and brand identity to social media creatives, ads, and marketing materials, our designs are both creative and strategic. Every design is crafted to ensure consistency, clarity, and strong visual impact.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'Web Development',
    description: 'We design and develop modern, responsive, and user-friendly websites that reflect your brand identity. Our websites are optimized for performance, speed, and conversions across all devices. Whether it\'s a simple site or a complex platform, we build solutions that support your business growth.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop'
  }
];

export const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-white mx-4 my-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-16">

        <h2 className="text-4xl font-bold  text-gray-900 mb-4">Our Services</h2>
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
              className="flex justify-between items-center p-5 sm:p-8 md:p-10 cursor-pointer"
              onClick={() => toggleService(service.id)}
            >
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">{service.title}</h3>
              <button 
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openId === service.id ? 'bg-[#c7ab86] rotate-0' : 'bg-white border border-gray-200 rotate-0 hover:bg-[#c7ab86] hover:border-[#c7ab86]'
                }`}
              >
                {openId === service.id ? <X size={20} className="text-black sm:w-6 sm:h-6" /> : <Plus size={20} className="text-black sm:w-6 sm:h-6" />}
              </button>
            </div>

            {/* Expanded Content */}
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openId === service.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 sm:px-8 md:px-10 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                   {/* Left: Image */}
                    <div className="rounded-[2rem] overflow-hidden h-[250px] sm:h-[350px] md:h-[400px] w-full shadow-sm relative">
                     <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover" 
                     />
                   </div>

                   {/* Right: Content */}
                   <div className="flex flex-col justify-center">
                      <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 sm:mb-6 leading-tight">
                        {service.title}
                      </h4>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                        {service.description}
                      </p>
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