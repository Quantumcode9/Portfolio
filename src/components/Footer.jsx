import React from 'react';
import contact from '../data/contact.json';


const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-[10vh] border border-[#ffffff] bg-[#b5b5b5] text-[#ffffff] font-sans">
      <div className="flex justify-evenly items-center text-center flex-wrap text-[1.3em]">
        <a
          href="#about"
          className="mx-[15px] text-[#ffffff] no-underline hover:text-[#f1aeb5] focus:text-[#f1aeb5]"
        >
          About
        </a>
        <a
          href="#projects"
          className="mx-[15px] text-[#ffffff] no-underline hover:text-[#f1aeb5] focus:text-[#f1aeb5]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="mx-[15px] text-[#ffffff] no-underline hover:text-[#f1aeb5] focus:text-[#f1aeb5]"
        >
          Contact
        </a>
        <div className="flex">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[10px] text-[0.8em] inline-block text-[#ffffff] hover:text-[#f1aeb5] focus:text-[#f1aeb5]"
          >
            <i className="fab fa-linkedin icon"></i>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[10px] text-[0.8em] inline-block text-[#ffffff] hover:text-[#f1aeb5] focus:text-[#f1aeb5]"
          >
            <i className="fab fa-github icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;