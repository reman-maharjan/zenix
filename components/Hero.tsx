import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SlideData } from '../types';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const SLIDE_DURATION = 6000;

const slides: SlideData[] = [
  {
    id: 1,
    image: '/hero/img1.jpg', // Tech Team / Digital
    subtitle: 'Digital Acceleration',
    title: 'Transforming Ideas into Digital Reality',
    description: 'We craft data-driven marketing strategies that elevate your brand and connect you with the right audience at the right time.',
  },
  {
    id: 2,
    image: '/hero/img2.jpg', // Business Strategy
    subtitle: 'Strategic Growth',
    title: 'Scale Your Business With Precision',
    description: 'Our proprietary analytics engine finds hidden opportunities in your market sector to maximize ROI and drive sustainable growth.',
  },
  {
    id: 3,
    image: '/hero/img3.jpg', // Creative / Office
    subtitle: 'Creative Excellence',
    title: 'Design That Speaks Volumes',
    description: 'From UI/UX design to compelling content creation, we build digital experiences that leave a lasting impression on your customers.',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSlideTimer = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };
  }, []);

  // Handle manual navigation if user clicks a bar (optional, but good UX)
  const handleManualChange = (index: number) => {
    setCurrentSlide(index);
    startSlideTimer(); // Reset timer on manual interaction
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center bg-gray-900">
      
      {/* Background Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Content Container - Static Content */}
      <div className="container max-w-7xl mx-auto px-6 sm:px-10 md:px-18 relative z-20 pt-20">
        <div className="max-w-7xl">
            {/* Using content from the first slide as the static content */}
            <div className="relative">
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {slides[0].title}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white mb-10 leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {slides[0].description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" className="rounded-full cursor-pointer px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg bg-[#c7ab86] hover:bg-[#c7ab86]/90 ">
                  Contact Us
                </Button>
                <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-white font-medium hover:text-[#c7ab86]/90 cursor-pointer transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  View Portfolio <ChevronRight size={16} />
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* Custom Progress Bar Indicators - Bottom Right Aligned */}
      <div className="absolute bottom-8 sm:bottom-12 right-6 md:right-12 z-30 w-[calc(100%-3rem)] sm:w-full max-w-md pl-6">
        <div className="flex items-center gap-2 sm:gap-4 w-full">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleManualChange(index)}
                    className="group relative h-1 flex-1 bg-muted/50 rounded-full overflow-hidden transition-all hover:h-2 focus:outline-none"
                    aria-label={`Go to slide ${index + 1}`}
                >
                    {/* Background track is handled by the parent div class */}
                    
                    {/* The Active/Filled Part */}
                    {/* 
                        Logic:
                        1. If index < currentSlide: Fully filled (white)
                        2. If index === currentSlide: Animate width from 0 to 100% over duration
                        3. If index > currentSlide: Empty (transparent)
                    */}
                    <div 
                        className={`absolute top-0 left-0 h-full bg-white rounded-full transition-all ${
                            index < currentSlide ? 'w-full' : 
                            index > currentSlide ? 'w-0' :
                            ''
                        }`}
                        style={{
                            animation: index === currentSlide ? `fill ${SLIDE_DURATION}ms linear forwards` : 'none',
                            width: index < currentSlide ? '100vw' : index > currentSlide ? '0%' : '0%',
                        }}
                    />
                </button>
            ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;