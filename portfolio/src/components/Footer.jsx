import React from 'react';
import contact from '../data/contact.json';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#intro">Intro</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <div className="footer-social">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          </div>


      </div>
    </footer>
  );
};

export default Footer;