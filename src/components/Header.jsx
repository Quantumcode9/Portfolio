import React, { useEffect, useState } from 'react';

const Header = () => {
  const titles = ["Full-Stack Developer", "Front-End Developer", "Back-End Developer", "DB Administrator", "Specialized Skills"]; 
  const skillsForTitles = [
    "JavaScript - Django - TypeScript - Next.js - Python - Git - Vercel",
    "CSS3 - JavaScript - TypeScript - Tailwind - React - EJS",
    "Node.js - Express - REST API - OAuth - Prisma",
    "MongoDB - PostgreSQL - AWS RDS - Firebase - Supabase - NeonDB",
    "AI Integration - Rich Text Editors - Data Visualization"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [glitchTrigger, setGlitchTrigger] = useState(false);
  
  const titlesLength = titles.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % titlesLength);
      setGlitchTrigger(true);
      setTimeout(() => setGlitchTrigger(false), 1000); 
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [titlesLength]);

  return (
    <header className="header relative overflow-hidden bg-[#242424] text-white flex flex-col items-center justify-center" style={{ minHeight: '100vh' }}>
      {/* Name */}
      <div className="glitch text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2" data-text="Brian Taylor">
        Brian Taylor
      </div>

      {/* Role */}
      <div className="glitch mt-2 text-xl sm:text-2xl md:text-3xl" data-text="Software Engineer">
        Software Engineer
      </div>

      <hr className="w-1/2 border-[#3E3E3E] my-6" />

      {/* Rotating title */}
      <div
        className={`glitch-white text-lg sm:text-xl md:text-2xl font-semibold tracking-widest uppercase ${glitchTrigger ? 'glitch-effect' : ''}`}
        id="glitchTitle"
        data-text={titles[currentIndex]}
      >
        {titles[currentIndex]}
      </div>

      {/* Rotating skills */}
      <div
        className="glitch mt-3 text-xs sm:text-sm md:text-base font-light tracking-wider px-4 text-center max-w-4xl"
        data-text={skillsForTitles[currentIndex]}
        style={{ color: 'white' }}
      >
        {skillsForTitles[currentIndex]}
      </div>

      {/* CTA */}
      <a
        href="#projects"
        className="mt-10 z-20 relative px-8 py-3 border border-[#f1aeb5] text-[#f1aeb5] text-sm uppercase tracking-widest rounded-sm hover:bg-[#f1aeb5] hover:text-[#1a1a1a] transition-all duration-300"
      >
        View My Work
      </a>

      {/* Scroll arrow */}
      <a href="#about" className="absolute bottom-8 z-20 animate-bounce text-[#f1aeb5] opacity-70">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      {/* Background effects */}
      <div className="static-background absolute inset-0 z-10 opacity-10"></div>
      <div className="scanlines absolute inset-0 z-10 opacity-5"></div>
      <div className="noise absolute inset-0 z-10 opacity-20"></div>
    </header>
);
};

export default Header;