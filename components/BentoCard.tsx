import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  noPadding?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", title, noPadding = false }) => {
  return (
    <div className={`group relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${className}`}>
      {title && (
        <div className="px-5 pt-5 pb-2 shrink-0 z-10">
          <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">{title}</h3>
        </div>
      )}
      <div className={`flex-grow w-full min-h-0 ${noPadding ? '' : 'px-5 pb-5 pt-1'}`}>
        {children}
      </div>
    </div>
  );
};