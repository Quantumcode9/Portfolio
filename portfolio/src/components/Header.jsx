import React, { useEffect, useState } from 'react';

const Header = () => {
  const titles = ["Full-Stack Developer", "Front-End Developer", "Back-End Developer", "DB Administrator"];
  const skillsForTitles = [
    "JavaScript - Django - Next.js - Python - Git",
    "CSS3 - JavaScript - React - Tailwind CSS - EJS",
    "Node.js - Express - REST APIs - OAuth - Docker",
    "MongoDB - PostgreSQL - AWS RDS",
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
    <header className="header relative overflow-hidden bg-gray-900 text-white flex flex-col items-center justify-center space-y-2 " style={{ minHeight: '80vh' }}>
    <div className="glitch text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" data-text="Brian Taylor">
    Brian Taylor
</div>
  <br />
  <div className="glitch" data-text="Software Engineer" style={{ fontSize: '6vw' }}>Software Engineer</div>
  <hr className="w-1/2 border-gray-200 my-4" />
  <div className={`glitch ${glitchTrigger ? 'glitch-effect' : ''} `} id="glitchTitle" data-text={titles[currentIndex]} style={{ fontSize: '5vw' }}>
        {titles[currentIndex]}
      </div>
      <br />
      <div className= "glitch text-[2.5vw] md:text-[2.5vw] lg:text-lg font-light" data-text={skillsForTitles[currentIndex]} style={{ color:'white' }}>
        {skillsForTitles[currentIndex]}
    </div>

    <div className="static-background absolute inset-0 z-10 opacity-10"></div>
    <div className="scanlines absolute inset-0 z-10 opacity-5"></div>
    <div className="noise absolute inset-0 z-10 opacity-20"></div>

    </header>

    
);
};

export default Header;