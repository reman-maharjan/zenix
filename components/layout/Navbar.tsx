'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { NavLink } from '@/types';
import { Button } from '@/components/ui/button';

const links: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
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
      <div className="container max-w-7xl mx-auto  flex items-center justify-between">
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

            // Desktop dropdown for Portfolio
            if (link.label === 'Portfolio') {
              const isPortfolioActive = pathname.startsWith('/portfolio');

              return (
                <div key={link.label} className="relative group">
                  <button
                    type="button"
                    className={`relative inline-flex items-center gap-0.5 text-sm font-medium transition-colors pb-1 cursor-default ${
                      isPortfolioActive
                        ? 'text-[#c7ab86]'
                        : 'text-black hover:text-[#c7ab86]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                    <span
                      className={`pointer-events-none absolute bottom-0 left-0 h-[2px] bg-[#c7ab86] transition-all duration-300 ease-in-out ${
                        isPortfolioActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-md bg-white shadow-lg opacity-0 transition-all duration-200 ease-out group-hover:opacity-100">
                    <div className="py-2">
                      <Link
                        href="/portfolio/digital-marketing"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#c7ab86]"
                      >
                        Digital Marketing
                      </Link>
                      <Link
                        href="/portfolio/video-projects"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#c7ab86]"
                      >
                        Video Projects
                      </Link>
                      <Link
                        href="/portfolio/web-projects"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#c7ab86]"
                      >
                        Web Projects
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

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

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+9779843590789"
            className="inline-flex items-center gap-2 rounded-full bg-[#c7ab86] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#c7ab86]/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call now</span>
          </a>
          <a
            href="https://wa.me/9779843590789?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20working%20with%20Zenix."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border  px-5 py-2.5 text-sm font-semibold text-[#128C7E] bg-white hover:bg-[#e9f8f0] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
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

            // Simple nested items for Portfolio on mobile
            if (link.label === 'Portfolio') {
              const isPortfolioActive = pathname.startsWith('/portfolio');

              return (
                <div key={link.label} className="border-b border-border pb-2">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between text-left text-lg font-medium transition-colors ${
                      isPortfolioActive ? 'text-[#c7ab86]' : ''
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="mt-2 space-y-1 pl-4 text-base">
                    <Link
                      href="/portfolio/digital-marketing"
                      className="block text-gray-700 hover:text-[#c7ab86] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      href="/portfolio/video-projects"
                      className="block text-gray-700 hover:text-[#c7ab86] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Video Projects
                    </Link>
                    <Link
                      href="/portfolio/web-projects"
                      className="block text-gray-700 hover:text-[#c7ab86] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Web Projects
                    </Link>
                  </div>
                </div>
              );
            }

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
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="tel:+9779843590789"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c7ab86] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#c7ab86]/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              <span>Call now</span>
            </a>
            <a
              href="https://wa.me/9779843590789?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20working%20with%20Zenix."
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/60 px-5 py-3 text-sm font-semibold text-[#128C7E] bg-white hover:bg-[#e9f8f0] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;