import React from 'react';

const ContactCards = ({ id, flippedId, handleFlip, frontContent, backContent, width = 'w-full md:w-[26rem]', height = 'h-[14rem]' }) => {
    return (
        <div
        className={`relative ${width} ${height} perspective mx-auto`}
        onClick={() => handleFlip(id)}
        >
        <div
            className={`relative ${width} ${height} transition-transform duration-700 transform-style-preserve-3d ${
            flippedId === id ? 'rotate-y-180' : ''
            }`}
        >
            {/* Front Face */}
            <div className="absolute w-full h-full bg-[#242424] hover:bg-[#2c2c2c] rounded-lg shadow-xl p-4 backface-hidden group overflow-hidden">
            {frontContent}
            </div>

            {/* Back Face */}
            <div className="absolute w-full h-full bg-[#242424] rounded-lg shadow-xl flex flex-col justify-center items-center rotate-y-180 backface-hidden overflow-hidden p-4">
            {backContent}
            </div>
        </div>
        </div>
    );
    };

export default ContactCards;