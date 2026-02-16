import React from 'react';
import { Badge } from './ui/Badge';
import { Search, Map, Rocket, BarChart2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We dive deep into your brand, audience, and competitors to uncover unique opportunities and insights.'
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategy',
    description: 'We develop a comprehensive roadmap tailored to your specific business goals, ensuring every move counts.'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution',
    description: 'Our creative and technical teams bring the strategy to life across high-impact channels with precision.'
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Optimization',
    description: 'We continuously monitor performance data and refine campaigns to maximize your ROI and growth.'
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-gray-50 rounded-2xl sm:rounded-[3rem] mx-4 my-8 sm:my-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge>Our Process</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From Concept to Conversion</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We follow a proven, data-driven approach to ensure every campaign delivers measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group border border-gray-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#c7ab86]/10 rounded-full blur-xl group-hover:bg-[#c7ab86]/20 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-2xl flex items-center justify-center text-[#c7ab86] transform group-hover:-translate-y-1 transition-transform duration-300">
                    <step.icon size={24} className="sm:w-[26px] sm:h-[26px]" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-bold text-gray-200 group-hover:text-[#c7ab86]/40 transition-colors">
                    {step.number}
                  </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};