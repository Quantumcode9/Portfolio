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
                'OpenRouter',
                'GraphQL',
                'MongoDB',
                'PostgreSQL',
                'NeonDB',
                'Migrations',
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
            'Time Management',
            'Adaptability',
            'Critical Thinking',
            
            'Attention to Detail',
            'Project Management',
            'Creativity',
            'Collaboration',
            'Communication',
            'Agile Methodologies',
            'Problem Solving',
            

            'Conflict Resolution'
        ],
    },
        {
        id: 4,
        title: 'Experience',
        description: aboutDetails.experience,
        backTitle: 'Education',
        skills: [
            'Software Engineering Certification - 500+ hours',
            'Full-Stack Development',
            'CI/CD Pipelines',
            'OOP & MVC Frameworks', 
            'Project Deployment',
            'Agile Team Collaboration',
            'Continuous Learning',       
            'Version Control with Git',
         
        ],
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 mb-10">
        {/* Profile Card */}
        <div className="profile-card mx-auto flex justify-center">
        <div className="relative w-72 h-72 md:w-85 md:h-80 overflow-hidden shadow-lg border-2 border-red-300">
            <img
            src={aboutDetails.imageUrl}
            alt={aboutDetails.name}
            className="w-full h-full object-cover grayscale transition-all duration-500"
            />
        </div>
        </div>

        {/* Description Section */}
        <div className="about-me-card bg-gray-800  p-6 rounded-lg shadow-lg space-y-2 whitespace-pre-line">
        <p className="about-me-description text-xl uppercase  mb-4 leading-relaxed whitespace-pre-line">
            Welcome!
        </p>
        <p className="about-me-description text-lg leading-relaxed whitespace-pre-line text-left">
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