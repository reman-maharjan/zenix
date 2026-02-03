import React from 'react';
import Image from 'next/image';

const brands = [
  { name: 'Zuleika by Gahana Griha', image: '/brands/zuleika.png' },
  { name: 'Tekkers Trio', image: '/brands/tekkers.png' },
  { name: 'Elevations Inc.', image: '/brands/elevations.png' },
];

export const Brands: React.FC = () => {
  return (
    <section className="pt-6 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="flex flex-col items-center justify-center group relative"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={250}
                height={100}
                className="object-contain h-auto max-h-24 transition-opacity group-hover:opacity-100"
              />
              <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 font-medium whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};