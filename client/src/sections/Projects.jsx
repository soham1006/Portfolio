import React, { useEffect, useState } from 'react';
import SwiperCarousel from '../components/SwiperCarousel';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  const renderProject = (project) => (
    <div
      className="bg-dark border border-success rounded shadow-sm p-4 h-100 d-flex flex-column justify-content-between"
      style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,195,0.5)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h5 className="text-light fw-bold">{project.title}</h5>
      <p className="text-light small flex-grow-1">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-3 px-4 py-2 rounded-pill"
        style={{
          color: '#00ffc3',
          border: '2px solid #00ffc3',
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
          width: 'fit-content'
        }}
      >
        View Project
      </a>
    </div>
  );

  return (
    <section id="projects" className="bg-custom text-light py-5">
      <div className="container">
        <h2 className="fw-bold text-success mb-4 border-bottom border-success pb-2" style={{ maxWidth: '250px' }}>
          My Projects
        </h2>

        {/* Desktop View */}
        <div className="row d-none d-md-flex">
          {projects.map(project => (
            <div key={project._id} className="col-12 col-md-6 col-lg-4 mb-4">
              {renderProject(project)}
            </div>
          ))}
        </div>

        {/* Mobile View (Swiper) */}
        <SwiperCarousel items={projects} renderItem={renderProject} />
      </div>
    </section>
  );
};

export default Projects;
