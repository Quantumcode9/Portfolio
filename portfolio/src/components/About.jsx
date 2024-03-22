import React, { useState } from 'react';




const About = () => {
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };
    

const aboutDetails = {
    name: "Brian Taylor",
    role: "Full Stack Developer",
    description: "Hi there, I'm Brian Taylor.I am a passionate Full Stack Developer with a knack for building scalable web applications and working across the full stack of technology. With a love for coding and design, I craft software solutions that are not only functional but also aesthetically pleasing.",
    imageUrl: "/me3.png", 
    resumeUrl: "/brian-taylor-resume.pdf",
    resumeDoc: "https://docs.google.com/document/d/1GraOy9czTcyPxVfR26UFOd8lBwiRAl0i2ji9WC_lnQE/edit?usp=sharing", 
    fullstack: "I am a Full Stack Developer with experience in building web applications using modern technologies. I have a strong foundation in computer science and software development, and I am constantly learning new technologies and frameworks to stay up-to-date.",
    experience: "I have worked on a variety of projects, including web applications, mobile apps, and APIs. I have experience working with both teams and independently, and I am comfortable working in a fast-paced environment.",
    backend: "I am a Back End Developer with experience in building APIs and web services using modern technologies. I have a good understanding of databases and data modeling, and I am comfortable working with both SQL and NoSQL databases.",
    education: "I have a certification in Full Stack Development with 500+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.",
    interests: "I am passionate about technology and software development, and I am constantly learning new technologies and frameworks to stay up-to-date. I enjoy working on a variety of projects, and I am always looking for new opportunities to learn and grow.",
    softSkills: "I have excellent communication skills and I am comfortable working with both technical and non-technical teams. I am a quick learner and I am always looking for new opportunities to learn and grow. I am also a team player and I enjoy collaborating with others to achieve common goals."
};

return (
<section className="about-me">
    <div className="about-me-header">
        <div className="glitch" data-text="About Me" style={{ fontSize: '30px' }}>About Me</div>
    </div>
{/* ROW 1 */}
<div className="about-me-container">


    <div className="about-me-content">
        <div className='profile-card'>
        <h1>{aboutDetails.name}</h1>
        <img src={aboutDetails.imageUrl} alt={`Portrait of ${aboutDetails.name}`} className="about-me-image"/>
        </div>
        <div className="about-me-card">
        <p className="about-me-description">{aboutDetails.description}</p>
        <a href={aboutDetails.resumeUrl} target="_blank" rel="noopener noreferrer" className="about-me-resume">
        Download Resume
        </a>
        <a href={aboutDetails.resumeDoc} target="_blank" rel="noopener noreferrer" className="about-me-resume">
        View Resume
        </a>
        </div>
     

        
    </div>


    <div className="row">
    <div className='col'>
    <div className="card-flipper" onClick={() => handleFlip(1)}>
            <div className={`card-content ${flippedId === 1 ? 'flipped' : ''}`}>
                    {/* Front face of the card */}
                    <div className="card-face card-face-front">
                        <h2>Front End Developer</h2>
                        <p className="card-description">
                        {aboutDetails.fullstack}</p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </div>
                    {/* Back face of the card */}
                    <div className="card-face card-face-back">
                        <h2>Skill Level</h2>
                        <p className="skill-description">
                        </p>
                        <div className="skill-level">
                        <div className="skill-level-bar" style={{ width: '90%'}}>HTML</div>
                        </div>
                        <div className="skill-level">
                        <div className="skill-level-bar" style={{ width: '80%'}}>React</div>
                        </div>
                        <div className="skill-level">
                        <div className="skill-level-bar" style={{ width: '90%'}}>JavaScript</div>
                        </div>
                        <div className="skill-level">
                        <div className="skill-level-bar" style={{ width: '70%'}}>Python</div>
                        </div>
                        <div className="skill-level">
                        <div className="skill-level-bar" style={{ width: '80%'}}>Sass</div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>


                    <div className='col'>
    <div className="card-flipper" onClick={() => handleFlip(5)}>
            <div className={`card-content ${flippedId === 5 ? 'flipped' : ''}`}>
                    {/* Front face of the card */}
                    <div className="card-face card-face-front">
                        <h2>Back End Developer</h2>
                        <p className="card-description">
                            {aboutDetails.backend}
                        </p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </div>

                    {/* Back face of the card */}
                    <div className="card-face card-face-back">
                        <h2>Skill Level</h2>
                        <p className="skills-description">
                        </p>
                        <div className="skill-level">
                            <div className="skill-level-bar" style={{ width: '80%' }}>Node.js</div>
                        </div>
                        <div className="skill-level">
                            <div className="skill-level-bar" style={{ width: '80%' }}>Express</div>
                        </div>
                        <div className="skill-level">
                            <div className="skill-level-bar" style={{ width: '100%' }}>MongoDB</div>
                        </div>
                        <div className="skill-level">
                            <div className="skill-level-bar" style={{ width: '70%' }}>SQL</div>
                        </div>
                        <div className="skill-level">
                            <div className="skill-level-bar" style={{ width: '80%' }}>REST</div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col">
        <div className="card-flipper" onClick={() => handleFlip(3)}>
        <div className={`card-content ${flippedId === 3 ? 'flipped' : ''}`}>
                    {/* Front face of the card */}
                    <div className="card-face card-face-front">

                    <h2>Soft Skills</h2>
                    <p className="card-description">
                        {aboutDetails.softSkills}
                        </p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </div>
                        {/* Back face of the card */}
                        <div className="card-face card-face-back">
                            <h2>Skill Level</h2>
                            <p className="skills-description">
                            </p>
                            <div className="skill-level">
                                <div className="skill-level-bar" style={{ width: '90%' }}>Communication</div>
                            </div> 
                            <div className="skill-level">
                                <div className="skill-level-bar" style={{ width: '80%' }}>Teamwork</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-level-bar" style={{ width: '90%' }}>Problem Solving</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-level-bar" style={{ width: '90%' }}>Adaptability</div>
                            </div>
                            <div className="skill-level">
                                <div className="skill-level-bar" style={{ width: '70%' }}>Time Management</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
                {/* ROW 2 */}
    

        <div className='row'>
            <div className='col'>
        <div className="card-flipper" onClick={() => handleFlip(2)}>
        <div className={`card-content ${flippedId === 2 ? 'flipped' : ''}`}>
                    {/* Front face of the card */}
                    <div className="card-face card-face-front">
                        <h2>Experience</h2>
                        <p className="card-description">
                            {aboutDetails.experience}
                        </p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </div>
                    {/* Back face of the card */}
                    <div className="card-face card-face-back">
                        <h2>Education</h2>
                        <p className="card-description">
                            {aboutDetails.education}
                        </p>
                    </div>
                    </div>
                    </div>    
            </div>

       
        <div className="col">
        <div className="card-flipper" onClick={() => handleFlip(4)}>
        <div className={`card-content ${flippedId === 4 ? 'flipped' : ''}`}>
                    {/* Front face of the card */}
                    <div className="card-face card-face-front">
                        <h2>Interests</h2>
                        <p className="card-description">
                            {aboutDetails.interests}
                        </p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </div>
                    {/* Back face of the card */}
                    <div className="card-face card-face-back">
                        <h2>Interests</h2>
                        <p className="card-description">
                        
                        </p>
                    </div>
                </div>
        </div>
    </div>
</div>
</div>

    



        </section>
    );
};

export default About;
