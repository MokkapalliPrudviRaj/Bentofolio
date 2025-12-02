import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or logic here if needed
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="group flex flex-col items-center justify-center w-full h-full bg-orange-50 dark:bg-neutral-800 rounded-2xl hover:bg-orange-100 dark:hover:bg-neutral-700 transition-all duration-300 border border-orange-100 dark:border-neutral-700"
      aria-label="Toggle Theme"
    >
      <div className={`
        relative flex items-center justify-center p-2 rounded-full 
        transition-all duration-500 ease-out
        ${isDark ? 'text-white rotate-180' : 'text-orange-500 rotate-0'}
      `}>
        {isDark ? <Moon size={24} /> : <Sun size={24} />}
      </div>
      <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mt-1">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};