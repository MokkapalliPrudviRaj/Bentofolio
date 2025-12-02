import React from 'react';
import { BentoCard } from './BentoCard';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';

export const ProjectsWidget: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <BentoCard className={`${className} flex flex-col`} title="SELECTED WORKS" noPadding>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 h-full overflow-y-auto custom-scrollbar">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx}
            className="group/item flex flex-col p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 h-full min-h-fit"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full shadow-sm ${project.color}`} />
                <h4 className="font-bold text-neutral-800 dark:text-neutral-100 text-sm">{project.title}</h4>
              </div>
              <div className="flex gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                {/* Icons placeholder */}
                <ArrowUpRight size={14} className="text-neutral-400" />
              </div>
            </div>
            
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-3 mb-3 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[9px] uppercase font-bold tracking-wide px-1.5 py-0.5 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};