import React, { useState } from 'react';
import { BentoCard } from './BentoCard';
import { SKILL_CATEGORIES } from '../constants';
import { ChevronDown } from 'lucide-react';

export const SkillsChart: React.FC<{ className?: string }> = ({ className }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  return (
    <BentoCard className={`${className} flex flex-col`} title="SKILLS & EXPERTISE" noPadding>
      <div className="flex-grow overflow-y-auto custom-scrollbar p-5">
        {/* 2 Column Grid for the 2x2 Bento Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SKILL_CATEGORIES.map((category) => {
            const isActive = activeCard === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => toggleCard(category.id)}
                className={`
                  relative group flex flex-col text-left transition-all duration-300 ease-out
                  rounded-2xl border w-full
                  ${isActive 
                    ? 'bg-neutral-50 dark:bg-neutral-800/80 border-neutral-300 dark:border-neutral-600 shadow-sm col-span-1 sm:col-span-2' 
                    : 'bg-white dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md'
                  }
                  p-4 overflow-hidden
                `}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                      <div className={`
                        p-2 rounded-xl transition-colors duration-300
                        ${isActive 
                          ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                          : 'bg-neutral-50 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-500'
                        }
                      `}>
                        <category.icon size={18} />
                      </div>
                      <h4 className={`
                        text-sm font-bold tracking-tight transition-colors
                        ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-700 dark:text-neutral-200'}
                      `}>
                        {category.title}
                      </h4>
                  </div>
                  <ChevronDown 
                    size={14} 
                    className={`text-neutral-400 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
                  />
                </div>

                {/* Expanded Content */}
                <div className={`
                  transition-all duration-300 ease-in-out overflow-hidden w-full
                  ${isActive ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'}
                `}>
                  <div className="flex flex-wrap gap-1.5 pl-1">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </BentoCard>
  );
};