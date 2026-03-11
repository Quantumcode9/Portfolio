import React from 'react';
import contact from '../data/contact.json';

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] border-t border-[#3E3E3E] text-gray-400 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Nav links */}
        <nav className="flex gap-6 text-sm uppercase tracking-widest">
          <a href="#about"    className="hover:text-[#f1aeb5] transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-[#f1aeb5] transition-colors duration-200">Projects</a>
          <a href="#contact"  className="hover:text-[#f1aeb5] transition-colors duration-200">Contact</a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-600 order-last md:order-none">
          &copy; {new Date().getFullYear()} Brian Taylor
        </p>

        {/* Social icons */}
        <div className="flex gap-5 text-lg">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f1aeb5] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f1aeb5] transition-colors duration-200"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;