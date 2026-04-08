import React from "react";
import { Hero } from "../components/Hero";
import { WorkSpread } from "../components/WorkSpread";
import { Footnotes } from "../components/Footnotes";
import { Nav } from "../components/Nav";

const PROJECTS = [
  {
    title: "The Minimalist Canvas",
    category: "Web Architecture / 2024",
    description: "A digital gallery space for a New York based architect. We explored the concept of negative space as a functional interface element, using custom scroll-driven animations and a refined typography system.",
    image: "https://images.unsplash.com/photo-1646913505723-fb736adf6975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwZWRpdG9yaWFsJTIwZGVzaWduJTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc3NTY2NjE2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Temporal Echoes",
    category: "Interactive Design / 2025",
    description: "An experimental music visualizer that translates acoustic patterns into fluid, marble-like textures. Built with Three.js and GLSL shaders, it allows users to 'sculpt' sound in real-time.",
    image: "https://images.unsplash.com/photo-1772850867966-d5eccb3c6717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGxpZ2h0JTIwc2hhZG93JTIwYmVpZ2V8ZW58MXx8fHwxNzc1NjY2MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Sculpting Form",
    category: "Creative Direction / 2026",
    description: "A branding identity and portfolio site for a ceramics studio. The focus was on tactile digital interactions, using mouse-tracking distortions and organic page transitions to mimic the movement of clay.",
    image: "https://images.unsplash.com/photo-1760716478620-2c2eb0570143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJ0JTIwb2JqZWN0JTIwZGVzaWduJTIwc2N1bHB0dXJlfGVufDF8fHx8MTc3NTY2NjE3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export const Home: React.FC = () => {
  return (
    <div className="bg-[#f4f1ea] selection:bg-[#a67c52]/30 selection:text-[#3a352f]">
      <Nav />
      <Hero />
      <div id="works">
        {PROJECTS.map((project, index) => (
          <WorkSpread
            key={index}
            index={index}
            {...project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <div id="about">
         <section className="py-24 px-8 sm:px-12 md:px-24 max-w-7xl mx-auto border-t border-[#3a352f]/10">
            <div className="grid grid-cols-12 gap-8 items-start">
               <div className="col-span-12 lg:col-span-4">
                  <h2 className="text-4xl font-serif italic text-[#3a352f] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
                    About Me
                  </h2>
               </div>
               <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
                  <p className="text-xl font-serif text-[#3a352f]/90 leading-relaxed italic" style={{ fontFamily: 'var(--font-serif)' }}>
                    "I believe that the web is a blank sheet of paper that hasn't found its rhythm yet. My work is an attempt to bridge the gap between traditional editorial design and modern frontend engineering."
                  </p>
                  <p className="text-sm font-serif text-[#3a352f]/70 leading-relaxed lg:columns-2 gap-8" style={{ fontFamily: 'var(--font-serif)' }}>
                    With a background in typography and a passion for motion graphics, I build web experiences that prioritize clarity, beauty, and emotional impact. I've spent the last 8 years refining my craft, working with architects, artists, and studios to translate their vision into fluid digital canvases. 
                    I specialize in React, Three.js, and custom motion systems, ensuring that every interaction feels deliberate and every layout feels balanced. When I'm not coding, you can find me collecting old art books or exploring the brutalist architecture of London.
                  </p>
               </div>
            </div>
         </section>
      </div>
      <div id="contact">
        <Footnotes />
      </div>
    </div>
  );
};
