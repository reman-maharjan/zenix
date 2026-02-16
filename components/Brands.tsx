import React from 'react';
import Image from 'next/image';
import { useBrands } from '@/hooks/use-brands';

export const Brands: React.FC = () => {
  const { data: brands, isLoading } = useBrands();

  if (isLoading || !brands || brands.length === 0) {
    return null; // Or a skeleton loader
  }

  return (
    <section className="pt-6 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="flex flex-nowrap justify-start md:justify-center items-center gap-8 lg:gap-12 overflow-x-auto pb-4 scrollbar-hide">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="flex flex-col items-center justify-center group relative shrink-0 transition-all duration-300 min-w-[100px]"
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