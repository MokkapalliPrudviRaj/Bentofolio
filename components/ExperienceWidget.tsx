import React from 'react';
import { BentoCard } from './BentoCard';
import { EXPERIENCE } from '../constants';

export const ExperienceWidget: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <BentoCard className={`${className} flex flex-col`} title="EXPERIENCE" noPadding>
        <div className="flex flex-col h-full overflow-y-auto custom-scrollbar p-5">
            <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8 my-2">
                {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="relative pl-6">
                        {/* Dot */}
                        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white dark:bg-neutral-900 border-2 border-blue-500"></div>
                        
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-blue-500 font-medium bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded w-fit">
                                {exp.period}
                            </span>
                            <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mt-1">{exp.role}</h4>
                            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{exp.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </BentoCard>
  );
};