import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">
          {/* Left Column - Logo */}
          <div className="lg:w-1/3">
             <Link href="/" className="inline-block bg-black px-7 py-2 rounded-full mb-8 transition-transform hover:scale-105">
              <span className="text-[#c7ab86] font-bold text-2xl tracking-tight">Nova</span>
              <span className="text-white font-bold text-2xl">.</span>
            </Link>
          </div>

          {/* Right Columns - Links */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-600 hover:text-black transition-colors">About us</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Services</a></li>
                <li><a href="#work" className="text-gray-600 hover:text-black transition-colors">Case studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Case studies CMS</a></li>
                <li><a href="#blog" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog post CMS</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="text-gray-600">01234 567 890</li>
                <li className="text-gray-600">info@nova.agency</li>
                <li className="text-gray-600 leading-relaxed">Nova Office Complex<br/>13 Imaginary Street<br/>Manchester</li>
              </ul>
            </div>

             {/* Follow us */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Follow us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black group transition-colors">
                    <span className="bg-black text-[#c7ab86] p-2 rounded-full group-hover:bg-[#c7ab86] group-hover:text-black transition-colors">
                      <Facebook size={18} fill="currentColor" />
                    </span>
                    Facebook
                  </a>
                </li>
                 <li>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black group transition-colors">
                    <span className="bg-black text-[#c7ab86] p-2 rounded-full group-hover:bg-[#c7ab86] group-hover:text-black transition-colors">
                      <Instagram size={18} />
                    </span>
                    Instagram
                  </a>
                </li>
                 <li>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black group transition-colors">
                    <span className="bg-black text-[#c7ab86] p-2 rounded-full group-hover:bg-[#c7ab86] group-hover:text-black transition-colors">
                      {/* Using Twitter icon for X as placeholder, styled to look similar in shape/context */}
                      <Twitter size={18} fill="currentColor" />
                    </span>
                    X
                  </a>
                </li>
                 <li>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black group transition-colors">
                    <span className="bg-black text-[#c7ab86] p-2 rounded-full group-hover:bg-[#c7ab86] group-hover:text-black transition-colors">
                      <Linkedin size={18} fill="currentColor" />
                    </span>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
           <p>© {new Date().getFullYear()} Nova Agency. All rights reserved.</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
           </div>
        </div>
      </div>
    </footer>
  );
};