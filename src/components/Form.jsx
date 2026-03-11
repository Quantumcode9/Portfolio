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
<div className="flex flex-col gap-5">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Name */}
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-400 text-xs uppercase tracking-widest">
                Name
            </label>
            <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className="bg-[#1a1a1a] border border-[#3E3E3E] text-white text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-[#f1aeb5] transition-colors duration-200 placeholder-gray-600"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-400 text-xs uppercase tracking-widest">
                Email
            </label>
            <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-[#1a1a1a] border border-[#3E3E3E] text-white text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-[#f1aeb5] transition-colors duration-200 placeholder-gray-600"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-gray-400 text-xs uppercase tracking-widest">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                className="bg-[#1a1a1a] border border-[#3E3E3E] text-white text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-[#f1aeb5] transition-colors duration-200 placeholder-gray-600 resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
        </div>

        <button
            type="submit"
            disabled={state.submitting}
            className="mt-1 px-6 py-3 bg-[#f1aeb5] text-[#1a1a1a] text-sm uppercase tracking-widest rounded-sm font-semibold hover:bg-[#e89da6] disabled:opacity-50 transition-all duration-300"
        >
            {state.submitting ? 'Sending...' : 'Send Message'}
        </button>

        {state.succeeded && (
            <p className="text-[#f1aeb5] text-sm text-center mt-1">
                Thanks! I'll get back to you soon.
            </p>
        )}
        {state.errors && state.errors.length > 0 && !state.succeeded && (
            <p className="text-red-400 text-sm text-center mt-1">
                Oops! There was a problem. Please try again or reach out via LinkedIn.
            </p>
        )}
    </form>
</div>
);
}


export default ContactForm;