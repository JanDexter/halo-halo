import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./shared/ImageWithFallback";

interface WorkSpreadProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
  reverse?: boolean;
}

export const WorkSpread: React.FC<WorkSpreadProps> = ({ 
  title, 
  category, 
  description, 
  image, 
  index,
  reverse = false 
}) => {
  return (
    <section className="min-h-[80vh] lg:min-h-screen py-24 px-8 sm:px-12 md:px-24 flex items-center bg-[#f4f1ea]">
      <div className="grid grid-cols-12 gap-8 lg:gap-16 w-full max-w-7xl mx-auto items-center">
        
        {/* Text Section */}
        <div className={`col-span-12 lg:col-span-5 relative z-10 flex flex-col justify-center 
          ${reverse ? "lg:col-start-8 lg:order-2" : "lg:col-start-1 lg:order-1"}`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
               <span className="text-xs uppercase tracking-[0.3em] text-[#a67c52] font-bold">
                 Project No. 0{index + 1}
               </span>
               <div className="h-[1px] w-12 bg-[#3a352f]/20" />
            </div>
            
            <h2 
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif italic text-[#3a352f] leading-none"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {title}
            </h2>
            
            <p className="text-sm font-bold uppercase tracking-widest text-[#a67c52]">
              {category}
            </p>
            
            <div className="mt-4 max-w-sm">
               <p 
                 className="text-base text-[#3a352f]/80 leading-relaxed font-serif"
                 style={{ fontFamily: 'var(--font-serif)' }}
               >
                 {description}
               </p>
            </div>
            
            <div className="mt-8">
               <a 
                 href="#" 
                 className="inline-block pb-1 border-b border-[#3a352f] text-xs uppercase tracking-widest hover:text-[#a67c52] transition-colors font-bold"
               >
                 View Project Detail
               </a>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className={`col-span-12 lg:col-span-7 relative 
          ${reverse ? "lg:col-start-1 lg:order-1" : "lg:col-start-6 lg:order-2"}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/3] w-full overflow-hidden shadow-2xl group"
          >
             <ImageWithFallback 
               src={image} 
               alt={title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-[#3a352f]/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
             
             {/* Editorial Overlay Elements */}
             <div className={`absolute bottom-4 ${reverse ? "right-4 text-right" : "left-4 text-left"} pointer-events-none`}>
                <span className="text-[8vw] lg:text-[10vw] font-serif-sc font-black text-white/20 select-none">
                  0{index + 1}
                </span>
             </div>
          </motion.div>
          
          {/* Overlapping Decorative Zone */}
          <div className={`absolute -bottom-8 ${reverse ? "-left-8" : "-right-8"} p-8 bg-[#3a352f] text-[#f4f1ea] z-20 max-w-[200px] hidden sm:block`}>
             <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-2">Technical Insight</p>
             <p className="text-xs font-serif italic" style={{ fontFamily: 'var(--font-serif)' }}>
               Built with Next.js, Framer Motion, and custom Shaders for a fluid digital canvas.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
