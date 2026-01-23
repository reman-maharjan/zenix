import React from 'react';
import { Hexagon, Disc, Command, Layers } from 'lucide-react';

export const Brands: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-gray-600 mb-8">Brands we work with</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale">
          
          <div className="flex items-center gap-2 font-bold text-xl">
             <Hexagon className="fill-black" size={28} /> Logoipsum
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
             <Disc className="fill-black" size={28} /> Logoipsum
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
             <Command className="fill-black" size={28} /> Logoipsum
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
             <Layers className="fill-black" size={28} /> Logoipsum
          </div>

        </div>
      </div>
    </section>
  );
};