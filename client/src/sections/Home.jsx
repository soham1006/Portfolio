import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="bg-custom text-light py-5 hero" >
      <h1 className="display-3 fw-bold mb-3">Hi, I'm Soham Mewada</h1>
      <img
        src="/assets/me.jpg"
        alt="Soham"
        className="profile-img glow"
      />
      <p className="lead mb-4" style={{ maxWidth: '600px', color: '#c9d1d9' }}>
        A Full-Stack Developer passionate about building modern web apps using React, Node.js, and MongoDB.
      </p>
      <Link
        to="projects"
        smooth={true}
        duration={600}
        className="btn btn-outline-light px-4 py-2 rounded-pill"
        style={{
    cursor: 'pointer',
    color: '#00ffc3',
    border: '2px solid #00ffc3',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease'
  }}
      >
        See My Work ↓
      </Link>
    </section>
  );
};

export default Home;