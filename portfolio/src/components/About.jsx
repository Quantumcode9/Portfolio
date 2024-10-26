import React, { useState } from 'react';
import aboutDetails from '../data/aboutDetails.json';

const About = () => {
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    const cardsData = [
        {
            id: 1,
            title: 'Front End Developer',
            description: aboutDetails.fullstack,
            backTitle: 'Skill Level',
            skills: [
                { name: 'HTML', level: '100%' },
                { name: 'React', level: '90%' },
                { name: 'JavaScript', level: '90%' },
                { name: 'Python', level: '70%' },
                { name: 'CSS', level: '80%' },
            ],
        },
        {
            id: 2,
            title: 'Back End Developer',
            description: aboutDetails.backend,
            backTitle: 'Skill Level',
            skills: [
                { name: 'Node.js', level: '90%' },
                { name: 'Express', level: '80%' },
                { name: 'MongoDB', level: '100%' },
                { name: 'SQL', level: '60%' },
                { name: 'REST', level: '90%' },
            ],
        },
        {
            id: 3,
            title: 'Soft Skills',
            description: aboutDetails.softSkills,
            backTitle: 'Skill Level',
            skills: [
                { name: 'Communication', level: '90%' },
                { name: 'Teamwork', level: '80%' },
                { name: 'Problem Solving', level: '100%' },
                { name: 'Adaptability', level: '100%' },
                { name: 'Time Management', level: '70%' },
            ],
        },
        {
            id: 4,
            title: 'Experience',
            description: aboutDetails.experience,
            backTitle: 'Education',
            backDescription: aboutDetails.education,
        },
    ];

    return (
        <section className="about-me bg-gray-900 text-gray-300 py-10">
            <div className="text-center mb-8">
                <h2 className="glitch" data-text="About Me" style={{ fontSize: '30px' }}>
                    About Me
                </h2>
            </div>
            
            {/* Profile Section */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
                <div className="profile-card mx-auto">
                    <img
                        src={aboutDetails.imageUrl}
                        alt={aboutDetails.name}
                        className="about-me-image w-full max-w-xs rounded-lg mx-auto border-4 border-pink-400 grayscale transition-all"
                    />
                </div>
                <div className="about-me-card bg-gray-800 p-6 rounded-lg shadow-md">
                    <p className="about-me-description text-lg leading-relaxed mb-4">
                        {aboutDetails.description}
                    </p>
                    <a
                        href={aboutDetails.resumeDoc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-me-resume bg-gray-700 text-pink-400 px-4 py-2 rounded-md mr-4 hover:bg-gray-600"
                    >
                        View Resume
                    </a>
                    <a
                        href={aboutDetails.resumeUrl}
                        download
                        className="about-me-resume bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Cards Section */}
            <div className="cards-section grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="card-flipper"
                        onClick={() => handleFlip(card.id)}
                    >
                        <div className={`card-content ${flippedId === card.id ? 'flipped' : ''}`}>
                            {/* Front Face */}
                            <div className="card-face card-face-front bg-gray-800 p-2 rounded-lg shadow-md">
                                <h2 className="text-xl mt-6 font-semibold uppercase text-white mb-3">
                                    {card.title}
                                </h2>
                        
                                <p className="text-md ">{card.description}</p>
                                <i className="fas fa-chevron-circle-right bottom-0 text-white text-lg"></i>
                            </div>
                            {/* Back Face */}
                            <div className="card-face card-face-back bg-gray-800 p-2 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-white mb-4">
                                    {card.backTitle}
                                </h2>
                                {card.backDescription && (
                                    <p className="card-description text-md mb-2">{card.backDescription}</p>
                                )}
                            {card.skills && card.skills.length > 0 && (
                            <div>
                                {card.skills.map((skill, index) => (
                                    <div key={index} className="skill-level mb-2">
                                        {/* Background bar for progress */}
                                        <div className="bg-[#121212] rounded-md h-6 overflow-hidden">
                                            {/* Progress bar */}
                                            <div
                                                className="skill-level-bar bg-pink-400 h-full rounded-md text-center text-xs text-white flex items-center justify-center"
                                                style={{ width: skill.level }}
                                            >
                                                {skill.name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;