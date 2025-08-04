import React from 'react';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <section id="home" className="bg-custom text-light py-5 hero text-center">
      <h1 className="display-3 fw-bold mb-3">
        Hi, I'm <span className="text-success">Soham Mewada</span>
      </h1>

      <h4 className="mb-4 text-light">
        <ReactTyped
          strings={[
  'Full-Stack Web Developer',
  'MERN Stack Developer',
  'React &amp; Node.js Enthusiast',
  'Passionate Problem Solver'
]
}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h4>

      <img
        src="/assets/me.jpg"
        alt="Soham"
        className="profile-img glow mb-4"
      />

      <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px', color: '#c9d1d9' }}>
       This portfolio showcases my projects, skills, and experiences as I grow as a full-stack web developer. Let’s build something great together!
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
