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
<div className="projects-header text-center py-6">
    <div
    className="glitch font-bold text-3xl md:text-4xl"
    data-text="Contact"
    >
    Contact
    </div>
</div>

{/* Main Contact Section */}
<div className="contact-content grid gap-6 px-4 py-10 bg-[#242424] rounded-lg text-white shadow-lg md:grid-cols-2">
{/* Contact Info Section */}
    <div className="contact-info flex flex-col items-center gap-6 md:row-span-2">
        {/* Card 1: Get in Touch */}
        <ContactCards
        id={2}
        flippedId={flippedId}
        handleFlip={handleFlip}
        frontContent={
        <div className="flex flex-col items-center justify-center h-full gap-4 px-4 text-center">
            <h2 className="text-lg font-semibold">Get in Touch</h2>
                <p className="text-gray-300">
                    Reach out using the contact form below. I’m always excited to
                    connect and explore new opportunities!
                </p>
        </div>
    }
            backContent={
            <div className="flex flex-col items-center justify-center h-full gap-4 px-4 text-center">
                <h2 className="text-lg font-semibold">Let’s Collaborate</h2>
                    <p className="text-gray-300">
                    Use the form or find me on LinkedIn and GitHub. Let’s build something awesome together!
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
        <div className="flex flex-col items-center justify-center h-full gap-4 px-4 text-center">
            <h2 className="text-lg font-semibold">Connect with Me</h2>
            <p className="text-gray-300">
                Find me on LinkedIn and GitHub to see more of my work and
                experience.
            </p>
            <i className="fas fa-chevron-circle-right text-lg mt-2 transition-transform duration-300 hover:rotate-90 hover:text-[#b5b5b5]"></i>
        </div>
    }
    backContent={
        <div className="contact-links flex flex-col items-center gap-5">
            <p className="flex items-center">
                <i className="fab fa-linkedin mr-2"></i>
                <a
                href={contact.linkedin}
                className="text-white text-base hover:text-[#008dd4] transition-colors duration-300"
                >
                LinkedIn
                </a>
            </p>
            <p className="flex items-center">
                <i className="fab fa-github mr-2"></i>
                <a
                href={contact.github}
                className="text-white text-base hover:text-[#008dd4] transition-colors duration-300"
                >
                GitHub
                </a>
            </p>
        </div>
    }
    />
</div>

  {/* Form Section */}
    <div className="contact-form border p-4 rounded-lg bg-white text-black">
        <Form />
    </div>
</div>
</>
);
};

export default Contact;