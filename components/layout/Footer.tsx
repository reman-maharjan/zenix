import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#c7ab86]/10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Identity */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-8 transition-transform hover:scale-105">
              <Image 
                src="/logo-dark.png" 
                alt="Zenix Logo" 
                width={200} 
                height={200} 
                className="w-48 h-auto" 
              />
            </Link>

          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#c7ab86] mb-8">Navigation</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-600 hover:text-[#c7ab86] transition-colors text-sm font-medium">About Us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-[#c7ab86] transition-colors text-sm font-medium">Services</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-[#c7ab86] transition-colors text-sm font-medium">Contact</Link></li>
              </ul>
            </div>

            {/* Portfolio Sections */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#c7ab86] mb-8">Portfolio</h3>
              <ul className="space-y-4">
                <li><Link href="/portfolio/photography" className="text-gray-600 hover:text-[#c7ab86] transition-colors text-sm font-medium">Photography</Link></li>
                <li><Link href="/portfolio/video-projects" className="text-gray-600 hover:text-[#c7ab86] transition-colors text-sm font-medium">Video Projects</Link></li>
                <li><Link href="/portfolio/web-projects" className="text-gray-600 hover:text-[#c7ab86] transition-colors text-sm font-medium">Web Projects</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#c7ab86] mb-8">Get in Touch</h3>
              <ul className="space-y-5">
                <li>
                  <a href="tel:+9779708835021" className="group flex flex-col">
                    <span className="text-xs text-gray-400 mb-1">Call Us</span>
                    <span className="text-gray-600 group-hover:text-[#c7ab86] transition-colors text-sm font-medium">+977 9708835021</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:zenixdigitalproductions@gmail.com" className="group flex flex-col">
                    <span className="text-xs text-gray-400 mb-1">Email Us</span>
                    <span className="text-gray-600 group-hover:text-[#c7ab86] transition-colors text-sm font-medium break-all">zenixdigitalproductions@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 mb-1">Location</span>
                    <span className="text-gray-600 text-sm font-medium leading-relaxed">Jwagal, Lalitpur</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} Zenix Digital Productions.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-[#c7ab86] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#c7ab86] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};