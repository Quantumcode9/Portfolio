import React  from 'react';
import aboutDetails from '../data/aboutDetails.json';
import SkillCardGrid from './SkillCards';

const About = () => {


    const cardsData = [
        {
            id: 1,
            title: 'Front End Developer',
            description: aboutDetails.fullstack,
            backTitle: 'Skill Level',
            skills: [
                { name: 'HTML5', level: '100%' },
                { name: 'React', level: '90%' },            
                { name: 'JavaScript', level: '90%' },
                { name: 'TypeScript', level: '90%' },
                { name: 'Tailwind CSS', level: '90%' },
                { name: 'SASS/CSS', level: '80%' },
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
                { name: 'PostgresSQL', level: '70%' },
                { name: 'Django', level: '90%' },
                { name: 'REST', level: '90%'},
            ],
        },
        {
            id: 3,
            title: 'Soft Skills',
            description: aboutDetails.softSkills,
            backTitle: 'Skill Level',
            skills: [
                { name: 'Creativity', level: '100%' },
                { name: 'Communication', level: '90%' },
                { name: 'Teamwork', level: '80%' },
                { name: 'Adaptability', level: '100%' },
                { name: 'Problem Solving', level: '100%' },
                { name: 'Time Management', level: '75%' },
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
<section className="about-me bg-gray-900 text-gray-300 py-16">
{/* Section Header */}
    <div className="text-center mb-12">
        <h2
            className="glitch font-light text-3xl md:text-4xl"
            data-text="About Me"
            >
            About Me
        </h2>
    </div>

    {/* Profile Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto px-6 mb-10">
        {/* Profile Card */}
        <div className="profile-card mx-auto flex justify-center">
        <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden shadow-lg border-2 border-red-300">
            <img
            src={aboutDetails.imageUrl}
            alt={aboutDetails.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
        </div>
        </div>

        {/* Description Section */}
        <div className="about-me-card bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <p className="about-me-description text-lg leading-relaxed">
            {aboutDetails.description}
        </p>
        <div className="flex justify-center space-x-4">
                    <a
                        href={aboutDetails.resumeDoc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-me-resume bg-gray-700 text-pink-400 px-4 py-2 rounded-md hover:bg-gray-600"
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
    </div>

            <SkillCardGrid cardsData={cardsData} />
        </section>
    );
};

export default About;