import React, { useEffect, useState } from 'react';

const Header = () => {
  const titles = ["Software Engineer", "Web Developer", "UI/UX Developer", "Frontend Developer", "Backend Developer", "DB Administrator"];
  const skillsForTitles = [
    "Git - Python -  SQL - NoSQL", 
    "HTML5 - CSS - JavaScript - Bootstrap - jQuery",
    "SASS - Sketch - Figma - Adobe XD",
    "React - Vue - Angular - Webpack - Next.js",
    "Node.js - Express - Django - REST - OAuth",
    "MongoDB - MySQL - PostgreSQL - AWS", 
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
    <header className="header" style={{ minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
   
    <div className="glitch" data-text="Brian Taylor" style={{ fontSize: '30px' }}>Brian Taylor</div>
    <br />
    <div className="glitch" data-text="Full Stack Developer" style={{ fontSize: '3vw' }}>Full Stack Developer</div>
    <hr />
      <div className={`glitch ${glitchTrigger ? 'glitch-effect' : ''}`} id="glitchTitle" data-text={titles[currentIndex]}>
        {titles[currentIndex]}
      </div>
      <br />
      <div className="glitch" style={{ fontSize: '2.08333vw', color:'white' }} data-text={skillsForTitles[currentIndex]}>
        {skillsForTitles[currentIndex]}
      </div>
      <div className="static-background"></div>
      <div className="scanlines"></div>
        <div className="noise"></div>
     
    {/* <h2 className={`fadeInUp ${titleAnimation}`}>UI/UX Designer</h2> */}


    
    </header>
    
);
};

export default Header;