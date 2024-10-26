import React from "react";
import aboutDetails from '../data/aboutDetails.json';

const Intro = () => {
    return (
        <div className="intro bg-white text-gray-800 flex md:flex-row justify-evenly items-center gap-2 py-10 h-32 text-center">
            <h3 className="intro-title text-xl md:text-3xl font-light mb-2">
                {aboutDetails.name}: Portfolio
            </h3>
            
            <p className="intro-description text-base md:text-lg text-gray-500 hidden md:block">
                Here you can find some of my projects and contact information.
            </p>
            
            <h3 className="intro-call-to-action text-xl md:text-2xl font-light">
                Let's build something <span className="highlight text-red-300 font-semibold">together!</span>
            </h3>
        </div>
    );
};

export default Intro;