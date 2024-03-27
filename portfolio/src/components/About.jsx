import React, { useState } from 'react';
import aboutDetails from '../data/aboutDetails.json';





const About = () => {
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };
    



return (

<section className="about-me">
<div className="container-fluid">


<div className="about-me-header">
    <div className="glitch" data-text="About Me" style={{ fontSize: '30px' }}>About Me</div>
</div>
{/* ROW 1 */}
<div className="about-me-container">
<div className='col-md-4'>
    <div className='profile-card'>
    <img src={aboutDetails.imageUrl} alt={`${aboutDetails.name}`} className="about-me-image"/>
    </div>
    </div>
    <div className='col-md-6'>
    <div className="about-me-card">
    <p className="about-me-description">{aboutDetails.description}</p>
    {/* <a href={aboutDetails.resumeUrl} target="_blank" rel="noopener noreferrer" className="about-me-resume">
    Download Resume
    </a> */}
    <a href={aboutDetails.resumeDoc} target="_blank" rel="noopener noreferrer" className="about-me-resume">
    View Resume
    </a>
    </div>
</div>
</div>
<div className='row'>
<div className='col-lg-3 col-md-4 col-sm-6'>
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


<div className='col-lg-3  col-md-4 col-sm-6'>
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

<div className='col-lg-3 col-md-4 col-sm-6'>
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
    
<div className='col-lg-2 col-md-4 col-sm-6'>
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
</div>


</div>
</section>
    );
};

export default About;
