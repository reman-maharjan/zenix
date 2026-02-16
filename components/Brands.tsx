import React from 'react';
import Image from 'next/image';

const brands = [
  { name: 'Zuleika by Gahana Griha', image: '/brands/zuleika.png' },
  { name: 'Tekkers Trio', image: '/brands/tekkers.png' },
  { name: 'Elevations Inc.', image: '/brands/elevations.png' },
  { name:"Brand360", image:"/brands/brand360.png"},
  { name:"Digital Gurkha", image:"/brands/digitalgurkha.png"},
  { name:"Yabai", image:"/brands/yabai.png"},
];

export const Brands: React.FC = () => {
  return (
    <section className="pt-6 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-nowrap justify-center items-center gap-8 lg:gap-12 overflow-x-auto">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="flex flex-col items-center justify-center group relative shrink-0 transition-all duration-300"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={150}
                height={80}
                className="object-contain w-[120px] h-[80px] opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-gray-700 font-medium whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};