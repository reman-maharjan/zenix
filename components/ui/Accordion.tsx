import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-full mb-4 overflow-hidden bg-white transition-all duration-300 hover:border-gray-400">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-black text-white' : 'bg-[#c7ab86] text-black'}`}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && content && (
        <div className="px-6 pb-6 text-gray-600 animate-fadeIn">
          {content}
        </div>
      )}
    </div>
  );
};