import React, { useState } from 'react';
import contact from '../data/contact.json';
import Form from './Form';
import ContactCards from './ContactCards';

const Contact = () => {
const [flippedId, setFlippedId] = useState(null);

const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
};

return (
    <>
    {/* Header */}
    <div className="projects-header text-center py-8">
        <div
        className="glitch font-bold text-4xl md:text-5xl mb-4"
        data-text="Let's Connect"
        >
        Let's Connect
        </div>
        <p className="text-gray-200 text-lg mt-2 max-w-2xl mx-auto">
        Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
    </div>

    {/* Main Contact Section */}
    <div className="contact-content grid gap-8 px-6 py-12 bg-[#242424] rounded-2xl text-white shadow-2xl md:grid-cols-2 relative z-0 mb-20">
        {/* Contact Info Section */}
        <div className="contact-info flex flex-col items-center gap-8 md:row-span-2 relative">
            {/* Card 1: Get in Touch */}
            <ContactCards
            id={2}
            flippedId={flippedId}
            handleFlip={handleFlip}
            frontContent={
                <div className="flex flex-col items-center justify-center h-full gap-3 px-4 text-center">
                    <div className="w-12 h-12 bg-[#f1aeb5] rounded-full flex items-center justify-center mb-1">
                        <i className="fas fa-paper-plane text-xl text-[#242424]"></i>
                    </div>
                    <h2 className="text-lg font-semibold text-[#f1aeb5]">Get in Touch</h2>
                    <p className="text-gray-300 text-sm leading-snug">
                        Drop me a message!
                    </p>
                    <div className="flex items-center text-xs text-[#f1aeb5] mt-1">
                        <span>Click to explore</span>
                        <i className="fas fa-arrow-right ml-2"></i>
                    </div>
                </div>
            }
            backContent={
                <div className="flex flex-col items-center justify-center h-full gap-3 px-4 text-center">
                    <div className="w-12 h-12 bg-[#f1aeb5] rounded-full flex items-center justify-center mb-1">
                        <i className="fas fa-handshake text-xl text-[#242424]"></i>
                    </div>
                    <h2 className="text-lg font-semibold text-[#f1aeb5]">Let's Collaborate</h2>
                    <p className="text-gray-300 text-sm leading-snug">
                        I'm here to help bring your ideas to life. Let's create something amazing!
                    </p>
                </div>
            }
            />
            
            {/* Card 2: Connect with Me */}
            <ContactCards
            id={3}
            flippedId={flippedId}
            handleFlip={handleFlip}
            frontContent={
                <div className="flex flex-col items-center justify-center h-full gap-3 px-4 text-center">
                    <div className="w-12 h-12 bg-[#f1aeb5] rounded-full flex items-center justify-center mb-1">
                        <i className="fas fa-network-wired text-xl text-[#242424]"></i>
                    </div>
                    <h2 className="text-lg font-semibold text-[#f1aeb5]">Connect with Me</h2>
                    <p className="text-gray-300 text-sm leading-snug">
                        Find me on LinkedIn and GitHub to see more of my work.
                    </p>
                    <div className="flex items-center text-xs text-[#f1aeb5] mt-1">
                        <span>Flip to connect</span>
                        <i className="fas fa-chevron-circle-right ml-2"></i>
                    </div>
                </div>
            }
            backContent={
                <div className="contact-links flex flex-col items-center gap-4 py-4">
                    <div className="flex items-center group">
                        <div className="w-10 h-10 bg-[#f1aeb5] rounded-full flex items-center justify-center mr-3">
                            <i className="fab fa-linkedin text-lg text-[#242424]"></i>
                        </div>
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-base hover:text-[#f1aeb5] transition-colors duration-300"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                    <div className="flex items-center group">
                        <div className="w-10 h-10 bg-[#f1aeb5] rounded-full flex items-center justify-center mr-3">
                            <i className="fab fa-github text-lg text-[#242424]"></i>
                        </div>
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-base hover:text-[#f1aeb5] transition-colors duration-300"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
            }
            />
        </div>

        {/* Form Section */}
        <div className="contact-form relative p-8 rounded-2xl shadow-xl border border-[#494949] ">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#f1aeb5] mb-2">Send Me a Message</h3>
                <div className="w-16 h-1 bg-[#f1aeb5] rounded-full"></div>
            </div>
            <Form />
        </div>
    </div>
    </>
);
};

export default Contact;