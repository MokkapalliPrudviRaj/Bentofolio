import React, { useState } from "react";
import { BentoCard } from "./BentoCard";
import { Sparkles } from "lucide-react";

export const ProfileCard: React.FC<{ className?: string }> = ({ className }) => {
  const [imgSrc, setImgSrc] = useState("/Bentofolio/image.jpeg");

  return (
    <BentoCard
      className={`${className} !p-0 overflow-hidden relative group transition-all duration-500 group-hover:-translate-y-1`}
      noPadding
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/20 transition-all duration-700" />

      {/* Profile image */}
      <div className="absolute bottom-0 right-0 w-[70%] h-full md:w-[55%] md:h-full z-0 pointer-events-none select-none">
        <img
          src={imgSrc}
          onError={() =>
            setImgSrc(
              "https://ui-avatars.com/api/?name=Prudvi+Raj&background=0D8ABC&color=fff&size=512"
            )
          }
          alt="Mokkapalli Prudvi Raj"
          className="w-full h-full object-cover object-[center_top] opacity-90 dark:opacity-80 grayscale-[60%] group-hover:grayscale-0 transition-transform duration-700 ease-out scale-100 group-hover:scale-105 shadow-xl shadow-black/20 dark:shadow-white/5"
          style={{
            maskImage: "linear-gradient(to left, black 65%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 65%, transparent 95%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between h-full p-5 sm:p-6 md:p-10 relative z-10">
        <div className="space-y-6 max-w-[70%] sm:max-w-[60%] lg:max-w-[50%]">
          <Sparkles
            className="absolute top-10 right-6 md:top-14 md:right-10 text-neutral-300 dark:text-neutral-700 group-hover:text-yellow-500 transition-colors duration-500"
            size={24}
          />

          {/* Badge */}
          <div className="flex items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-neutral-200/40 dark:border-neutral-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-700 dark:text-neutral-300">
                Open to Work
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-neutral-900 dark:text-white leading-[0.9]">
            PRUDVI<br />RAJ.
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Angular Developer & UI/UX Specialist crafting high-performance enterprise experiences.
          </p>
        </div>

        {/* Small bars */}
        <div className="flex gap-2 pt-4">
          <div className="h-1 w-12 bg-neutral-900 dark:bg-white rounded-full transition-all duration-300 group-hover:w-20" />
          <div className="h-1 w-2 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
          <div className="h-1 w-2 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
        </div>
      </div>
    </BentoCard>
  );
};
