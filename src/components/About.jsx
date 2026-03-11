import React  from 'react';
import aboutDetails from '../data/aboutDetails.json';
import SkillCardGrid from './SkillCards';

const About = () => {


    const cardsData = [
        {
            id: 1,
            title: 'Front End Developer',
            description: aboutDetails.fullstack,
            backTitle: 'Technologies',
            skills: [
                'JavaScript',
                'TypeScript', 
                'React',
                'Next.js',
                'Tailwind CSS',
                'HTML5',
                'CSS3',
                'SASS',
                'TipTap',
                'ProseMirror',
                'Responsive Design',
                'Accessibility'
            ],
        },
        {
            id: 2,
            title: 'Back End Developer',
            description: aboutDetails.backend,
            backTitle: 'Technologies',
            skills: [
                'Node.js',
                'Express',
                'Python',
                'Django',
                'REST APIs',
                'OAuth',
                'WebSockets',
                'Prisma ORM',
                'AWS S3',
                'MongoDB',
                'PostgreSQL',
                'NeonDB',
                'Data Modeling',
                'Query Optimization',
            
        
        ],
    },
        {
        id: 3,
        title: 'Soft Skills',
        description: aboutDetails.softSkills,
        backTitle: 'Technologies',
        skills: [
            'Adaptability',
            'Creativity',
            'Critical Thinking',
            'Attention to Detail',
            'Project Management',
            'Communication',
            'Agile Methodologies',
            'Problem Solving',
        ],
    },
        {
        id: 4,
        title: 'Experience',
        description: aboutDetails.experience,
        backTitle: 'Experience',
        skills: [
            'Built & deployed multiple fullstack applications',
            'Created custom rich text editing platforms',
            'Implemented AI-integrated web apps',
            'Designed large scale databases',
            'Worked solo and in teams',
        ],
    },
    ];

    return (
<div className="about-me bg-gray-900 text-gray-300 py-20">

    {/* Section Header */}
    <div className="text-center mb-16 px-4">
        <h2 className="glitch font-light text-4xl md:text-5xl mb-4" data-text="About Me">
            About Me
        </h2>
        <div className="w-16 h-px bg-[#f1aeb5] mx-auto mt-4"></div>
    </div>

    {/* Profile + Bio */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto px-6 mb-16">

        {/* Profile Image */}
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-2xl border border-[#f1aeb5]">
                <img
                    src={aboutDetails.imageUrl}
                    alt={aboutDetails.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700"
                />
            </div>
            {/* Resume buttons under photo */}
            <div className="flex gap-3">
                <a
                    href={aboutDetails.resumeDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-[#f1aeb5] text-[#f1aeb5] text-sm uppercase tracking-wider rounded-sm hover:bg-[#f1aeb5] hover:text-[#1a1a1a] transition-all duration-300"
                >
                    View Resume
                </a>
                <a
                    href={aboutDetails.resumeUrl}
                    download
                    className="px-5 py-2 bg-[#f1aeb5] text-[#1a1a1a] text-sm uppercase tracking-wider rounded-sm hover:bg-[#e89da6] transition-all duration-300"
                >
                    Download
                </a>
            </div>
        </div>

        {/* Bio Card */}
        <div className="bg-[#1e1e1e] border border-[#3E3E3E] rounded-lg p-8 shadow-xl space-y-4">
            <p className="text-[#f1aeb5] text-sm uppercase tracking-widest mb-2 font-semibold">
                Welcome!
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
                {aboutDetails.description}
            </p>
        </div>
    </div>

    {/* Skill Cards */}
    <div className="max-w-8xl mx-auto px-4 md:px-10">
        <div className="text-center mb-8">
            <h3 className="text-[#f1aeb5] text-sm uppercase tracking-widest font-semibold">
                Skills &amp; Experience
            </h3>
        </div>
        <SkillCardGrid cardsData={cardsData} />
    </div>

</div>
    );
};

export default About;