import React, { useState } from 'react';
import contact from '../data/contact.json';
import Form from './Form';

const Contact = () => {

    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

return (
<>
<div className="projects-header">
    <div className="glitch" data-text="Contact" style={{ fontSize: '30px' }}>Contact</div>
</div>
    
<div className="contact-content">
    <div className="contact-info">
        <div className="contact-card-extra">
        {/* <div className="contact-card-flipper" onClick={() => handleFlip(2)}> */}
                <div className={`contact-card-content ${flippedId === 2 ? 'flipped' : ''}`}>
                        {/* Front face of the card */}
                    <div className="contact-card-face card-face-front">
                        <h2>Get in Touch</h2>
                        <p>Feel free to reach out to me with any questions or comments. I'm always looking for new opportunities.</p>
                        {/* <i className="fas fa-chevron-circle-right"></i>
                        </div>
                        {/* Back face of the card */}
                        {/* <div className="contact-card-face card-face-back">
                        <h2>Contact Me</h2>
                        <p><i className="fas fa-envelope"></i></p>
                        <p><i className="fas fa-map-marker-alt"></i></p>
                        <p><i className="fas fa-phone"></i></p> */} 
                    </div>
                </div>
             {/* </div> */}    
        </div>
    
            <div className="contact-card-flipper" onClick={() => handleFlip(3)}>
                <div className={`contact-card-content ${flippedId === 3 ? 'flipped' : ''}`}>
                    <div className="contact-card-face card-face-front">
                        <h2>Connect with Me</h2>
                        <p>Find me on LinkedIn and GitHub to see more of my work and experience.</p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </div>
                    <div className="contact-card-face card-face-back">
                        <h2>Connect with Me</h2>
                        <div className="contact-links">
                            <p><i className="fab fa-linkedin"></i>: <a href={contact.linkedin}>LinkedIn</a></p>
                            <p><i className="fab fa-github"></i>: <a href={contact.github}>GitHub</a></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>

        <Form />
</div>


</>

);
}

export default Contact;