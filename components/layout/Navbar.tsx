'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '@/types';
import { Button } from '@/components/ui/button';

const links: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes based on scroll state
  const navClasses = scrolled
    ? 'bg-background text-foreground shadow-md py-4'
    : 'bg-transparent text-white py-6';

  const logoClasses = scrolled ? 'text-primary' : 'text-white';
  const buttonVariant = scrolled ? 'default' : 'outline';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navClasses}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-tighter uppercase flex items-center gap-2 ${logoClasses}`}>
          <div className={`w-38 h-8 rounded-lg flex items-center justify-center ${scrolled ? 'text-white' : 'text-primary'}`}>
            <img src="/logo.png" alt="Logo" className="w-32 h-38" />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${scrolled ? 'text-muted-foreground' : 'text-gray-200'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant={buttonVariant} size="lg" className={`rounded-full px-8 bg-[#c7ab86] cursor-pointer`}>
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background text-foreground shadow-lg p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium border-b border-border pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full mt-4 rounded-full " size="lg">Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;