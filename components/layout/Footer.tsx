import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">
          {/* Left Column - Logo */}
          <div className="lg:w-1/3">
             <Link href="/" className="inline-block px-7 py-2 rounded-full mb-8 transition-transform hover:scale-105">
              <Image src="/logo-dark.png" alt="Logo" width={240} height={240} className="w-60 h-60" />
            </Link>
          </div>

          {/* Right Columns - Links */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-black transition-colors">About us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-black transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="text-gray-600">+977 9843590789</li>
                <li className="text-gray-600">+977 9708835021</li>
                <li className="text-gray-600">zenixdigitalproductions@gmail.com</li>
                <li className="text-gray-600 leading-relaxed">Jwagal, Lalitpur</li>
              </ul>
            </div>

             {/* Follow us */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Follow us</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="flex items-center gap-3 text-gray-600 hover:text-black group transition-colors">
                    <span className="bg-black text-[#c7ab86] p-2 rounded-full group-hover:bg-[#c7ab86] group-hover:text-black transition-colors">
                      <Facebook size={18} fill="currentColor" />
                    </span>
                    Facebook
                  </Link>
                </li>
                 <li>
                  <Link href="https://www.instagram.com/zenix_digital_productions/" className="flex items-center gap-3 text-gray-600 hover:text-black group transition-colors">
                    <span className="bg-black text-[#c7ab86] p-2 rounded-full group-hover:bg-[#c7ab86] group-hover:text-black transition-colors">
                      <Instagram size={18} />
                    </span>
                    Instagram
                  </Link>
                </li>
                 <li>
                  <Link href="#" className="flex items-center gap-3 text-gray-600 hover:text-black group transition-colors">
                    <span className="bg-black text-[#c7ab86] p-2 rounded-full group-hover:bg-[#c7ab86] group-hover:text-black transition-colors">
                      {/* Using Twitter icon for X as placeholder, styled to look similar in shape/context */}
                      <Twitter size={18} fill="currentColor" />
                    </span>
                    X
                  </Link>
                </li>
                 <li>
                  <Link href="#" className="flex items-center gap-3 text-gray-600 hover:text-black group transition-colors">
                    <span className="bg-black text-[#c7ab86] p-2 rounded-full group-hover:bg-[#c7ab86] group-hover:text-black transition-colors">
                      <Linkedin size={18} fill="currentColor" />
                    </span>
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
           <p>© {new Date().getFullYear()} Nova Agency. All rights reserved.</p>
           <div className="flex gap-8">
             <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};