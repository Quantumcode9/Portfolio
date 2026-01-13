import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
const [state, handleSubmit] = useForm("mwkgrqle");
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
}

useEffect(() => {
    if (state.succeeded) {
    resetForm();
    }
}, [state.succeeded]);

return (
<div className="contact-form-container">
    <p>Fill out the form below to send me a message</p>
    <div className="contact-form">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input
        id="name"
        type="name"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="focus:outline-none" 
        /><br />
        <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
        />
        <label htmlFor="email">Email</label> <br />
        <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="focus:outline-none"
        /><br />
        <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
        />
        <label htmlFor="message">Message</label> <br />
        <textarea
            id="message"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="focus:outline-none"
        /><br />
        <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
        />
        <button type="submit" className='submit-button focus:outline-none' disabled={state.submitting}>
            Submit
        </button>
        {state.succeeded && <p>Thanks! I'll get back to you soon.</p>}
        {state.error && <p>Oops! There was a problem submitting your form, please try again, or contact through LinkedIn or GitHub.</p>}
    </form>
    </div>
</div>
);
}


export default ContactForm;