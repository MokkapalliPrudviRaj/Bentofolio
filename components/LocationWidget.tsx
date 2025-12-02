import React, { useState } from 'react';
import { BentoCard } from './BentoCard';
import { Copy, Check, MapPin, Mail } from 'lucide-react';

export const LocationWidget: React.FC<{ className?: string }> = ({ className }) => {
  const [copied, setCopied] = useState(false);
  const email = "uiuxbyprudvi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <BentoCard className={`${className} flex flex-col`} noPadding>
        {/* Top: Location Map Visual */}
        <div className="relative h-1/2 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
             <div className="absolute inset-0 opacity-10 dark:opacity-20 pattern-grid-lg text-neutral-500" />
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="flex items-center gap-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">Bengaluru, IN</span>
                 </div>
             </div>
        </div>

        {/* Bottom: Email Action */}
        <button 
            onClick={handleCopy}
            className="h-1/2 w-full flex flex-col items-center justify-center gap-2 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group relative"
        >
            <div className={`p-2 rounded-full transition-all duration-300 ${copied ? 'bg-green-100 text-green-600' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 group-hover:text-blue-500'}`}>
                {copied ? <Check size={18} /> : <Mail size={18} />}
            </div>
            <span className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {copied ? 'Copied!' : 'Copy Email'}
            </span>
        </button>
    </BentoCard>
  );
};