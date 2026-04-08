import React from "react";
import { Link } from "react-router";

export const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-multiply flex justify-between items-center p-8 pointer-events-none">
      <div className="pointer-events-auto">
        <Link 
          to="/" 
          className="text-lg tracking-widest uppercase font-serif-sc font-bold text-[#3a352f]"
          style={{ fontFamily: 'var(--font-serif-sc)' }}
        >
          Your Name Here
        </Link>
      </div>
      <div className="flex gap-12 pointer-events-auto">
        {["Works", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs tracking-[0.2em] uppercase font-medium text-[#3a352f] hover:text-[#a67c52] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
