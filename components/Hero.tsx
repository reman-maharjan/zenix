import React, { useState, useEffect, useRef } from 'react';
import { SlideData } from '../types';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const SLIDE_DURATION = 6000; // 6 seconds per slide

const slides: SlideData[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070', // Tech Team / Digital
    subtitle: 'Digital Acceleration',
    title: 'Transforming Ideas into Digital Reality',
    description: 'We craft data-driven marketing strategies that elevate your brand and connect you with the right audience at the right time.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1726066012751-2adfb5485977?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Business Strategy
    subtitle: 'Strategic Growth',
    title: 'Scale Your Business With Precision',
    description: 'Our proprietary analytics engine finds hidden opportunities in your market sector to maximize ROI and drive sustainable growth.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070', // Creative / Office
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
          <div className="absolute inset-0">
             <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay Gradient - Darker on left for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/40 to-transparent" />
        </div>
      ))}

      {/* Content Container - Static Content */}
      <div className="container max-w-7xl mx-auto px-14 md:px-18 relative z-20 pt-20">
        <div className="max-w-7xl">
            {/* Using content from the first slide as the static content */}
            <div className="relative">
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                {slides[0].title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-2xl">
                {slides[0].description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" className="rounded-full cursor-pointer px-8 py-6 text-base font-semibold shadow-lg bg-[#c7ab86] hover:bg-[#c7ab86]/90 ">
                  Contact Us
                </Button>
                <button className="flex items-center gap-2 px-6 py-3 text-white font-medium hover:text-[#c7ab86]/90 cursor-pointer transition-colors">
                  View Portfolio <ChevronRight size={16} />
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* Custom Progress Bar Indicators - Bottom Right Aligned */}
      <div className="absolute bottom-12 right-6 md:right-12 z-30 w-full max-w-md pl-6">
        <div className="flex items-center gap-4 w-full">
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
                            width: index < currentSlide ? '100%' : index > currentSlide ? '0%' : '0%',
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