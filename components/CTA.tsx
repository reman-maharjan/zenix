import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className=" mx-4">
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-[3rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Content */}
                <div className="p-12 lg:p-20 flex flex-col justify-center items-start">
                    <span className="inline-block px-6 py-2 rounded-full bg-[#c7ab86] text-sm font-semibold text-black mb-8 border border-black/5">
                        Get in touch
                    </span>
                    
                    <h2 className="text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
                        Lets work together
                    </h2>
                    
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-md font-light">
                        Ready to transform your brand&apos;s digital presence and unlock the full potential of social media marketing? Reach out today, and let&apos;s start crafting your success story together.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="cursor-pointer px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-black transition-colors flex items-center justify-center gap-2 group">
                            Get in touch
                            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                        </button>
                        <button className="cursor-pointer px-8 py-4 bg-transparent border border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:bg-white hover:border-gray-400 transition-all flex items-center justify-center">
                            Book a call
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden m-4 lg:m-6 rounded-[2.5rem]">
                    <Image 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                        alt="Modern office space"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};
