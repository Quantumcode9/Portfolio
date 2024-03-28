import React from 'react';

const Form = () => {
const handleSubmit = (event) => {
    event.preventDefault();
};

return (
    <div className="contact-form-container">
        <p>Send me a message using the form below:</p>
    <form id="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
);
};

export default Form;

