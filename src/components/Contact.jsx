import React from 'react';
import contact from '../data/contact.json';
import Form from './Form';

const Contact = () => {

return (
    <div className="bg-[#1a1a1a] text-white py-20">

      {/* Header */}
      <div className="text-center mb-16 px-4">
        <div className="glitch font-light text-4xl md:text-5xl mb-4" data-text="Let's Connect">
          Let's Connect
        </div>
        <div className="w-16 h-px bg-[#f1aeb5] mx-auto mt-4 mb-4"></div>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
      </div>

      {/* Two-column layout */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left — Contact Info */}
        <div className="flex flex-col gap-6">

          {/* Tagline card */}
          <div className="bg-[#242424] border border-[#3E3E3E] rounded-lg p-8">
            <h3 className="text-[#f1aeb5] text-sm uppercase tracking-widest font-semibold mb-3">
              Get in Touch
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              I'm here to help bring your ideas to life. Whether it's a new project, a
              collaboration, or just a conversation — reach out and let's create something amazing.
            </p>
          </div>

          {/* Links */}
          <div className="bg-[#242424] border border-[#3E3E3E] rounded-lg p-8 flex flex-col gap-5">
            <h3 className="text-[#f1aeb5] text-sm uppercase tracking-widest font-semibold">
              Find Me Online
            </h3>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-sm bg-[#1a1a1a] border border-gray-600 flex items-center justify-center group-hover:border-[#f1aeb5] transition-colors duration-300">
                <i className="fab fa-linkedin text-lg text-[#f1aeb5]"></i>
              </div>
              <span className="text-gray-300 group-hover:text-[#f1aeb5] transition-colors duration-300 text-sm tracking-wide">
                LinkedIn Profile
              </span>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-sm bg-[#1a1a1a] border border-[#3E3E3E] flex items-center justify-center group-hover:border-[#f1aeb5] transition-colors duration-300">
                <i className="fab fa-github text-lg text-[#f1aeb5]"></i>
              </div>
              <span className="text-gray-300 group-hover:text-[#f1aeb5] transition-colors duration-300 text-sm tracking-wide">
                GitHub Repository
              </span>
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="bg-[#242424] border border-[#3E3E3E] rounded-lg p-8 shadow-xl">
          <h3 className="text-[#f1aeb5] text-sm uppercase tracking-widest font-semibold mb-1">
            Send Me a Message
          </h3>
          <div className="w-10 h-px bg-[#f1aeb5] mb-6"></div>
          <Form />
        </div>

      </div>
    </div>
);
};

export default Contact;