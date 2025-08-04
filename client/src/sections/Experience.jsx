import React from 'react';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'Nullclass EdTech Pvt. Ltd.',
    date: 'Jun 2025 – Jul 2025',
    location: 'Remote',
    description: [
      'Contributed to a real-world web development project as part of the Nullclass internship program.',
      'Delivered clean, responsive, and interactive frontend interfaces while following best practices.',
      'Demonstrated strong problem-solving, adaptability, and teamwork throughout the project.',
      'Recognized for consistent performance, professionalism, and a willingness to learn.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="container py-5" id="experience">
     <h2 className="fw-bold text-success mb-4 border-bottom border-success pb-2" style={{ maxWidth: '250px' }}>
          Experience
        </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="card bg-dark text-light border border-success mb-4 shadow">
          <div className="card-body">
            <h5 className="card-title text-white">{exp.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {exp.company} · {exp.date} · {exp.location}
            </h6>
            <ul className="mt-3">
              {exp.description.map((point, idx) => (
                <li key={idx} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
