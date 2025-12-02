import React from 'react';
import { ProfileCard } from './components/ProfileCard';
import { ProjectsWidget } from './components/ProjectsWidget';
import { SkillsChart } from './components/SkillsChart';
import { SocialsWidget } from './components/SocialsWidget';
import { ExperienceWidget } from './components/ExperienceWidget';
import { LocationWidget } from './components/LocationWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#f8f9fa] dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 p-4 md:p-6 lg:p-10 flex items-center justify-center transition-colors duration-500 font-sans selection:bg-blue-500/30">
      
      {/* 
        Grid System - 4x4 on Desktop
        Total Gap: Consistent 24px (gap-6)
      */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 
        auto-rows-min lg:grid-rows-4 lg:h-[calc(100vh-5rem)] lg:min-h-[800px] lg:max-h-[1080px]">
        
        {/* -- Row 1 & 2 -- */}
        
        {/* Profile (2x2) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[350px] lg:min-h-0 opacity-0 animate-fade-in-up [animation-delay:0ms]">
          <ProfileCard className="h-full shadow-sm" />
        </div>

        {/* Projects (2x2) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[350px] lg:min-h-0 opacity-0 animate-fade-in-up [animation-delay:100ms]">
          <ProjectsWidget className="h-full" />
        </div>
        
        {/* -- Row 3 & 4 -- */}
        
        {/* Skills (2x2) - Now larger and on the left */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-0 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          <SkillsChart className="h-full" />
        </div>

        {/* Experience (1x2) - Vertical Timeline */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2 min-h-[400px] lg:min-h-0 opacity-0 animate-fade-in-up [animation-delay:300ms]">
          <ExperienceWidget className="h-full" />
        </div>

        {/* Right Column Stack */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2 flex flex-col gap-4 md:gap-5 lg:gap-6 h-full min-h-[300px] lg:min-h-0 opacity-0 animate-fade-in-up [animation-delay:400ms]">
             {/* Control Center (1x1) - Socials + Theme */}
             <SocialsWidget className="flex-1 min-h-[140px]" />
             
             {/* Contact (1x1) - Location + Email */}
             <LocationWidget className="flex-1 min-h-[140px]" />
        </div>

      </div>
    </div>
  );
};

export default App;