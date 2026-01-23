import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-4 py-1.5 rounded-full bg-[#c7ab86] text-xs font-medium text-black uppercase tracking-wide mb-6 ${className}`}>
      {children}
    </span>
  );
};