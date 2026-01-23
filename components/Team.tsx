import React from 'react';
import { Badge } from './ui/Badge';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Peter',
    role: 'CEO',
    description: 'James is the founder of Zenix, and passionate about helping businesses grow through Social Media.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: true, twitter: true }
  },
  {
    id: '2',
    name: 'Claudia',
    role: 'Digital Marketing Analyst',
    description: 'Skilled in translating data into actionable insights for strategic online marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: true, twitter: true }
  },
  {
    id: '3',
    name: 'Sarah',
    role: 'Social Media Strategy Director',
    description: 'Expert in crafting compelling brand stories on social media platforms for heightened engagement.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: true, twitter: true }
  },
  {
    id: '4',
    name: 'Stanley',
    role: 'Admin',
    description: 'Stanley is a master at stress relief and spreading happiness throughout the office.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: true, twitter: true }
  }
];

export const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Badge>Who you work with</Badge>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Our team</h2>
                    <p className="text-xl text-gray-600">Meet the team behind our success</p>
                </div>
                <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm">
                    All team members
                </button>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
            {teamMembers.map((member) => (
                <div key={member.id} className="relative rounded-2xl overflow-hidden group cursor-pointer h-[300px] md:h-full">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-left w-full">
                            <p className="text-[#c7ab86] font-bold text-sm uppercase tracking-wider mb-1">{member.role}</p>
                            <h3 className="text-white font-bold text-2xl mb-2">{member.name}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};