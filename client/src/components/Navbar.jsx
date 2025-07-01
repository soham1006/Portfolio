import React from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark navbar-dark px-4 shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
       <a className="navbar-brand color: #00ffc3 !important" href="#home">
  Soham.dev
</a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiOutlineMenuAlt3 size={28} color="#00ffc3" />
        </button>

        {/* Collapsible Nav Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth duration={500} offset={-70}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth duration={500} offset={-70}>
                About
              </Link>
            </li>
            <li className="nav-item">
  <Link className="nav-link" to="skills" smooth duration={500}>Skills</Link>
</li>

            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth duration={500} offset={-70}>
                Projects
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="Certificates" smooth duration={500} offset={-70}>
                Certificates
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth duration={500} offset={-70}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
