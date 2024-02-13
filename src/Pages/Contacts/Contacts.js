import React, { useState } from 'react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <p>Contact us for support and additional information.</p>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      )}
      <div><p>Contact us for support and additional information.</p>
    <ul>
      <li>Email: zalypanigera@gmail.com</li>
      <li>Phone: +380983791339</li>
      <li>Address: KOshalin, KOshalin, Poland</li>
    </ul></div>
    </div>
    
  );
};

export default Contacts;
