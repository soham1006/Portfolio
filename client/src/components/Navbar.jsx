import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

function Navbar() {
  const [active, setActive] = useState('home');

  const handleNavClick = (section) => {
    setActive(section);
    setTimeout(() => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }, 500); // shorter delay is enough
  };

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'certificates', label: 'Certificates' },
    { to: 'blog', label: 'My Blogs' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark navbar-dark px-4 shadow-sm border-bottom border-success">
      <div className="container-fluid">
        {/* Brand */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="navbar-brand fw-bold"
          style={{ cursor: 'pointer', color: '#00ffc3' }}
          onClick={() => handleNavClick('home')}
        >
          Soham.dev
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiOutlineMenuAlt3 size={28} color="#00ffc3" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav text-center gap-3">
            {navItems.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onSetActive={() => setActive(item.to)}
                  onClick={() => handleNavClick(item.to)}
                  className={`nav-link fw-semibold ${active === item.to ? 'active-link' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
