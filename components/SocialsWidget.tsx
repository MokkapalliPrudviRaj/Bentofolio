import React from 'react';
import { BentoCard } from './BentoCard';
import { SOCIALS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const SocialsWidget: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <BentoCard className={className} title="CONTROL CENTER" noPadding>
      <div className="grid grid-cols-2 grid-rows-2 h-full gap-3 p-4">
        {/* Social Links */}
        {SOCIALS.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-600 transition-all hover:bg-white dark:hover:bg-neutral-700"
          >
            <social.icon size={20} className="text-neutral-600 dark:text-neutral-300 group-hover:scale-110 transition-transform duration-300 mb-1" />
            <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">{social.platform}</span>
            <ArrowUpRight size={10} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
          </a>
        ))}
        
        {/* Theme Toggle spans last slot */}
        <div className="col-span-2">
            <ThemeToggle />
        </div>
      </div>
    </BentoCard>
  );
};