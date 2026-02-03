'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NavLink } from '@/types';
import { Button } from '@/components/ui/button';

const links: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Detect active hash section
      const sections = ['about', 'services', 'portfolio'];
      const currentHash = window.location.hash.slice(1);
      if (sections.includes(currentHash)) {
        setActiveHash(currentHash);
      } else {
        setActiveHash('');
      }
    };

    // Check initial hash
    const initialHash = window.location.hash.slice(1);
    if (['about', 'services', 'portfolio'].includes(initialHash)) {
      setActiveHash(initialHash);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  // Permanent white background
  const navClasses = scrolled
    ? 'bg-white text-foreground shadow-md py-4'
    : 'bg-white text-foreground py-4';

  const logoClasses = 'text-primary';
  const buttonVariant = 'default';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navClasses}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold tracking-tighter uppercase flex items-center gap-2 ${logoClasses}`}>
          <div className="w-38 h-8 rounded-lg flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={128} 
              height={38}
              className="w-32 h-38"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isHashLink = link.href.startsWith('#');
            const isActive = isHashLink 
              ? activeHash === link.href.slice(1)
              : pathname === link.href;
            
            return isHashLink ? (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm font-medium transition-colors pb-1 ${
                  isActive 
                    ? 'text-[#c7ab86]' 
                    : 'text-black hover:text-[#c7ab86]'
                } group`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#c7ab86] transition-all duration-300 ease-in-out ${
                    isActive 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-sm font-medium transition-colors pb-1 ${
                  isActive 
                    ? 'text-[#c7ab86]' 
                    : 'text-black hover:text-[#c7ab86]'
                } group`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#c7ab86] transition-all duration-300 ease-in-out ${
                    isActive 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant={buttonVariant} size="lg" className={`rounded-full px-8 bg-[#c7ab86] cursor-pointer`}>
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 focus:outline-none text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white text-foreground shadow-lg p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {links.map((link) => {
            const isHashLink = link.href.startsWith('#');
            const isActive = isHashLink 
              ? activeHash === link.href.slice(1)
              : pathname === link.href;
            
            return isHashLink ? (
              <a
                key={link.label}
                href={link.href}
                className={`text-lg font-medium border-b border-border pb-2 transition-colors ${
                  isActive ? 'text-[#c7ab86]' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-lg font-medium border-b border-border pb-2 transition-colors ${
                  isActive ? 'text-[#c7ab86]' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button className="w-full mt-4 rounded-full " size="lg">Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;