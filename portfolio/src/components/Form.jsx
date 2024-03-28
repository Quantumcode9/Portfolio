import React from 'react';

const Form = () => {



const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            alert("Message sent!");
        } else {
            alert("Message failed to send.");
            
        }
    }
    xhr.send(data);
}
    return (
        <div className="contact-form-container">
        <p>Send me a message using the form below:</p>
        <form id="contact-form" data-netlify="true" onSubmit={handleSubmit}>
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

