import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiSocketdotio, SiCplusplus, SiPostman } from 'react-icons/si';

const skillGroups = {
  Frontend: [
    { icon: <FaHtml5 color="#e34c26" />, label: 'HTML' },
    { icon: <FaCss3Alt color="#264de4" />, label: 'CSS' },
    { icon: <FaJs color="#f0db4f" />, label: 'JavaScript' },
    { icon: <FaReact color="#61DBFB" />, label: 'React.js' },
    { icon: <FaBootstrap color="#563d7c" />, label: 'Bootstrap' },
  ],
  Backend: [
    { icon: <FaNodeJs color="#3c873a" />, label: 'Node.js' },
    { icon: <SiExpress color="#ffffff" />, label: 'Express.js' },
    { icon: <SiSocketdotio color="#010101" />, label: 'Socket.IO' },
  ],
  Databases: [
    { icon: <SiMongodb color="#4db33d" />, label: 'MongoDB' },
    { icon: <SiMysql color="#00758f" />, label: 'MySQL' },
  ],
  Tools: [
    { icon: <FaGitAlt color="#f34f29" />, label: 'Git & GitHub' },
    { icon: <SiPostman color="#ff6c37" />, label: 'Postman' },
    { icon: <SiCplusplus color="#00599c" />, label: 'C/C++' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-5 text-white">
      <div className="container">
        <h2 className="fw-bold text-success mb-4 border-bottom border-success pb-2" style={{ maxWidth: '200px' }}>
          My Skills
        </h2>
        <div className="row">
          {Object.entries(skillGroups).map(([group, skills], idx) => (
            <div key={idx} className="col-12 col-md-6 mb-4">
              <h5 className="text-success mb-3">{group}</h5>
              <div className="d-flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                 <div
  key={index}
  className={`skill-badge bg-dark text-light px-3 py-2 rounded border border-success d-flex align-items-center gap-2`}
  style={skill.label === 'React.js' ? { backgroundColor: '#0d1b2a' } : {}}
>
  {skill.icon} {skill.label}
</div>


                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;