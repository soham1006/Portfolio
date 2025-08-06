import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        alert('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Message failed to send.');
      }
    } catch (error) {
      alert('Error sending message.');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="bg custom text-light py-5">
      <div className="container">
     <h2 className="fw-bold text-success mb-4 border-bottom border-success pb-2" style={{ maxWidth: '250px' }}>
          Contact Me</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control bg-dark text-light border-secondary"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control bg-dark text-light border-secondary"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="form-label ">Message</label>
          <textarea
            name="message"
            className="form-control bg-dark text-light border-secondary"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message! "
          />
        </div>
        <div className="text-center">
<button
  type="submit"
  className="btn px-4 py-2 rounded-pill"
  style={{
    cursor: 'pointer',
    color: '#00ffc3',
    border: '2px solid #00ffc3',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease'
  }}
>
  Send Message
</button>
     
</div>
      </form>
</div>
    </section>
  );
};

export default Contact;
