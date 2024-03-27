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


const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
});

    const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
    });

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });


switch (e.target.name) {
case 'name':
    setErrors({ ...errors, name: e.target.value ? '' : 'Name is required' });
    break;
case 'email':
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors({ ...errors, email: emailRegex.test(e.target.value) ? '' : 'Email is not valid' });
    break;
case 'message':
    setErrors({ ...errors, message: e.target.value ? '' : 'Message is required' });
    break;
default:
    break;
}
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    if (!errors.name && !errors.email && !errors.message) {
        const form = new FormData();
        form.append('form-name', 'contact');
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('message', formData.message);

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Accept': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(form).toString()
            });

            setFormData({ name: '', email: '', message: '' });
            setFormStatus({ submitting: false, success: true, error: false });
        } catch (error) {
            setFormStatus({ submitting: false, success: false, error: true });
        }
    }
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
    {/* </div> */}
    </div>
    </div>

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

        <form id="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label><br />
                <input type="text" id="email" name="email" onChange={handleChange} /><br />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" onChange={handleChange} /><br />
                {errors.message && <p>{errors.message}</p>}
            </div>
            <div>
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
        {formStatus.submitting && <p>Submitting...</p>}
    {formStatus.success && <p>Thanks for your message! I'll will get back to you soon.</p>}
    {formStatus.error && <p>Sorry, there was a problem with your submission. Please try again, or contact me through LinkedIn or GitHub.</p>}
    </div>
    </div>


</>

);
}

export default Contact;