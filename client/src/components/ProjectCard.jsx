import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SwiperCarousel from '../components/SwiperCarousel';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const renderProject = (project) => (
    <div className="card bg-dark text-light p-4 rounded shadow-sm border border-success">
      <h5 className="fw-bold">{project.title}</h5>
      <p>{project.description}</p>
      <a
        href={project.link}
        className="btn btn-success btn-sm mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </a>
    </div>
  );

  return (
    <section id="projects" className="py-5 text-white">
      <div className="container">
        <h2 className="fw-bold text-success mb-4 border-bottom border-success pb-2" style={{ maxWidth: '200px' }}>
          Projects
        </h2>

        {/* Desktop view */}
        <div className="row d-none d-md-flex">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              {renderProject(project)}
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <SwiperCarousel items={projects} renderItem={renderProject} />
      </div>
    </section>
  );
};

export default Projects;
