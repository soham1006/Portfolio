import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center py-4 mt-5 text-white bg-dark border-top border-success">
      {/* Icons */}
      <div className="d-flex gap-4 justify-content-center mb-3">
        <a href="https://github.com/soham1006" className="text-white fs-4" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/soham-mewada-0b3342285" className="text-white fs-4" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/soham.mewada1505" className="text-white fs-4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="mailto:soaham1006@gmail.com" className="text-white fs-4"><FaEnvelope /></a>
        <a href="tel:+919399274689" className="text-white fs-4"><FaPhone /></a>
      </div>

      {/* Location + Tech Line */}
      <p className="text-light small mb-1">
        <span role="img" aria-label="location">🌍</span> India &nbsp; • &nbsp; Built with <span role="img" aria-label="heart">💚</span> using <span className="text-success fw-semibold">React.js</span>
      </p>

      {/* Copyright */}
      <p className="text-light small mb-0">
        &copy; 2025 <strong>Soham.dev</strong> — All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
