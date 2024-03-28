import React, { useState } from 'react';
import contact from '../data/contact.json';

const Contact = () => {

    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        setFormData({ name: '', email: '', message: '' });
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
    
    <div className="contact-form-container">
        <p>Send me a message using the form below:</p>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />
            </div>
            <div>
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br />
            </div>
            <div>
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} /><br />
            </div>
            <div>
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
    </div>
</div>


</>

);
}

export default Contact;