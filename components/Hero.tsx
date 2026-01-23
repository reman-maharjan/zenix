import React from 'react';
import { Badge } from './ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge>Welcome to Zenix!</Badge>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
          Connecting Your Brand to the World, One Click at a Time.
        </h1>
        
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          We&apos;re not just a social media marketing agency&mdash;we&apos;re your ticket to digital excellence and engagement growth. With a canvas as vast as the internet, your business has limitless potential to connect with its audience. And we&apos;re here to paint that picture of success.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-8 py-3 bg-black text-white rounded-full cursor-pointer font-medium text-lg hover:bg-gray-800 transition-colors">
            Get in touch
          </button>
          <button className="px-8 py-3 bg-white text-black border cursor-pointer border-gray-300 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors">
            Book a call
          </button>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden w-full max-w-6xl mx-auto shadow-xl">
           <img 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
             alt="Team working together" 
             className="w-full h-auto object-cover"
           />
        </div>
      </div>
    </section>
  );
};