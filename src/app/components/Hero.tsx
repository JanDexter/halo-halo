import React from "react";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-12 pt-24 pb-12 overflow-hidden bg-[#f4f1ea]">
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-12 gap-8">
        {/* Pull Quote */}
        <div className="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] italic font-serif text-[#3a352f] text-center"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            "Building digital experiences that feel like paper but move like light."
          </motion.h1>
          <div className="mt-12 flex justify-center">
             <div className="h-[1px] w-24 bg-[#a67c52]" />
          </div>
        </div>

        {/* Overlapping Type Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
          <span className="text-[25vw] font-serif tracking-tighter italic">Creative</span>
        </div>
        
        {/* Bottom Details */}
        <div className="col-start-2 col-span-10 mt-auto pt-12 flex flex-col sm:flex-row justify-between items-end border-t border-[#3a352f]/10">
          <div className="max-w-xs mb-6 sm:mb-0">
            <p className="text-xs uppercase tracking-widest text-[#a67c52] mb-2 font-bold">Role</p>
            <p className="text-sm font-serif italic text-[#3a352f]/80" style={{ fontFamily: 'var(--font-serif)' }}>
              Creative Frontend Developer & UI Architect based in London.
            </p>
          </div>
          <div className="text-right">
             <p className="text-xs uppercase tracking-widest text-[#a67c52] mb-2 font-bold">Selected Works</p>
             <p className="text-sm font-serif italic text-[#3a352f]/80" style={{ fontFamily: 'var(--font-serif)' }}>
               Volume No. 04 / 2026
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
