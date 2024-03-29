import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        setName("");
        setEmail("");
        setMessage("");

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message })
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
    }

    return (
        <div className="contact-form-container">
            <p>Fill out the form below to send me a message</p>
            <div className="contact-form">
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Form;
