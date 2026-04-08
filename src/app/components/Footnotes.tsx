import React from "react";

export const Footnotes: React.FC = () => {
  const socialLinks = [
    { label: "Twitter / X", href: "#", id: "01" },
    { label: "LinkedIn", href: "#", id: "02" },
    { label: "Instagram", href: "#", id: "03" },
    { label: "Github", href: "#", id: "04" },
    { label: "Dribbble", href: "#", id: "05" },
  ];

  return (
    <footer className="py-24 px-8 sm:px-12 md:px-24 bg-[#f4f1ea] border-t border-[#3a352f]/10 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        
        {/* About Citation */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
           <h3 className="text-xl italic font-serif text-[#3a352f]" style={{ fontFamily: 'var(--font-serif)' }}>
             Editorial Note:
           </h3>
           <p className="text-sm font-serif text-[#3a352f]/70 leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-serif)' }}>
             This portfolio is a curated digital journal of my explorations in the intersection of typography, code, and design. 
             Each project is approached with the same care as an editorial spread, where information hierarchy is the soul.
           </p>
           <p className="text-xs uppercase tracking-widest text-[#a67c52] font-bold">
             Curated by Your Name Here. 2026.
           </p>
        </div>

        {/* Footnotes Social */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-8">
           <h3 className="text-xl italic font-serif text-[#3a352f]" style={{ fontFamily: 'var(--font-serif)' }}>
             Social Footnotes:
           </h3>
           <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
             {socialLinks.map((link) => (
               <div key={link.id} className="flex flex-col gap-1 border-b border-[#3a352f]/10 pb-4 group">
                 <span className="text-[10px] font-bold text-[#a67c52] font-serif-sc">
                    [{link.id}]
                 </span>
                 <a 
                   href={link.href}
                   className="text-sm uppercase tracking-widest text-[#3a352f] hover:text-[#a67c52] transition-colors font-bold"
                 >
                   {link.label}
                 </a>
               </div>
             ))}
           </div>
        </div>
      </div>
      
      {/* Bottom Legal */}
      <div className="mt-24 w-full flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-[#3a352f]/40">
         <span>© 2026 YOUR NAME HERE</span>
         <div className="hidden sm:block">EST. 2018 / VOLUME 04</div>
         <span>BASED IN LONDON</span>
      </div>
    </footer>
  );
};
