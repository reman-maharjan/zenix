'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="px-7 py-2 rounded-full flex items-center gap-0.5 transition-transform hover:scale-105">
        <img src="/logo.png" alt="Logo" className="w-40 h-40" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-10">
              <a href="#about" className="text-gray-900 font-medium text-lg hover:text-gray-600 transition-colors">About us</a>
              <a href="#services" className="text-gray-900 font-medium text-lg hover:text-gray-600 transition-colors">Services</a>
              <a href="#work" className="text-gray-900 font-medium text-lg hover:text-gray-600 transition-colors">Portfolio</a>
              <a href="#blog" className="text-gray-900 font-medium text-lg hover:text-gray-600 transition-colors">Pricing</a>
            </div>
            
            <a href="#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors">
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
           <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-900">About us</a>
           <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-900">Services</a>
           <a href="#work" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-900">Portfolio</a>
           <a href="#blog" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-900">Pricing</a>
           <a href="#contact" onClick={() => setIsOpen(false)} className="bg-black text-white px-6 py-3 rounded-full font-medium text-lg text-center">Get in touch</a>
        </div>
      )}
    </nav>
  );
};