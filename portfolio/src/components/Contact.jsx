import React, { useState } from 'react';
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

const response = await fetch('https://example.com/api/contact', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
});

if (response.ok) {
    console.log('Message sent successfully');
} else {
    console.log('Message sending failed');
}
};

return (
    <>
    <div className="projects-header">
    <div className="glitch" data-text="Contact" style={{ fontSize: '30px' }}>Contact</div>
        </div>
    
    <div className="contact-content">

    <div className='row'>
            <div className='col'>
        <div className="card-flipper" onClick={() => handleFlip(2)}>
        <div className={`card-content ${flippedId === 2 ? 'flipped' : ''}`}>
                    {/* Front face of the card */}
    <div className="card-face card-face-front">
    <h2>Get in Touch</h2>
    <p>Feel free to reach out to me with any questions or comments. I'm always looking for new opportunities.</p>
    <i className="fas fa-chevron-circle-right"></i>
    </div>
    {/* Back face of the card */}
    <div className="card-face card-face-back">
    <h2>Contact Me</h2>
    <p>Email:
    <a href="mailto:Bataylor@gmail.com"></a>
    </p>
    <p>Phone: 555-555-5555</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='col'>
    <div className="card-flipper" onClick={() => handleFlip(3)}>
    <div className={`card-content ${flippedId === 3 ? 'flipped' : ''}`}>
    <div className="card-face card-face-front">
    <h2>Connect with Me</h2>
    <p>Find me on LinkedIn and GitHub to see more of my work and experience.</p>
    <i className="fas fa-chevron-circle-right"></i>
    </div>
    <div className="card-face card-face-back">
    <h2>Connect with Me</h2>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/bataylor">linkedin.com/in/bataylor</a></p>
    <p>GitHub: <a href="https://github.com/bataylor">github.com/bataylor</a></p>
    </div>
    </div>
    </div>
    </div>

    <div className='col'>
        <div className="contact-form-card">
    <h2>Contact Form</h2>
    <p>Send me a message using the form below:</p>
    </div>
    <div className="contact-form">
    <h2>Message Me</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" onChange={handleChange} /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="text" id="email" name="email" onChange={handleChange} /><br />
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" onChange={handleChange} /><br />
        <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
    </div>

    </>








);
}

export default Contact;