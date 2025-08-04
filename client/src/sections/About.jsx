import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 text-white">
      <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
        
        {/* Profile Image */}
        <div className="text-center">
          <img
            src={'../assets/me1.jpg'}
            alt="Soham"
            className="profile-img glow"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </div>

        {/* Text Content */}
<div>
  <h2 className="fw-bold mb-3 text-success border-bottom border-success pb-2" style={{ maxWidth: '300px' }}>
    About Me
  </h2>

  <p className="fs-5 mb-3">
    <span className="fw-bold text-success">👋 Hi, I'm Soham Mewada</span>, a <strong className="text-success">Full-Stack Developer</strong> who enjoys building clean and scalable web applications.
  </p>

  <ul className="list-unstyled text-light">
    <li className="mb-2">🎓 Pursuing <strong className="text-success">B.Tech in Electronics and Communication Engineering (ECE)</strong> at IIIT Bhopal (2023–2027).</li>
    <li className="mb-2">💻 Specialized in <strong className="text-success">React, Node.js, Express, and MongoDB</strong>.</li>
    <li className="mb-2">🚀 Passionate about learning modern tools and contributing to impactful projects.</li>
    <li className="mb-2">🎯 Focused on improving skills through practical development and side projects.</li>
    <li className="mb-2">🧩 Outside of code: enjoy chess, cricket, and watching movies.</li>
  </ul>

  {/* Resume Button */}
  <div className="mt-4">
    <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-success px-4 py-2 rounded-pill"
  style={{
    cursor: 'pointer',
    color: '#00ffc3',
    border: '2px solid #00ffc3',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease'
  }}
>
  📄 View Resume
</a>

  </div>
</div>
</div>

    </section>
  );
};

export default About;
