import React from 'react';
import SwiperCarousel from '../components/SwiperCarousel';

const blogs = [
  {
    title: 'Why I Chose Full-Stack Development',
    description: `As a student exploring tech, I found full-stack dev both exciting and empowering. It lets me build full apps, from UI to backend logic. I love the blend of design and problem-solving.`,
    link: '#'
  },
  {
    title: 'Building a Chat App using Socket.IO',
    description: 'A breakdown of how I created a real-time encrypted chat room using React, Node.js, Socket.IO, and MongoDB. The app supports private messaging, live typing indicators, and room-based architecture — ideal for secure group communication.',
    link: '#'
  },
  {
    title: 'My First Hackathon Experience',
    description: 'During my first datathon, I collaborated with a team to build a machine learning project on heart disease prediction. I learned how to divide tasks under pressure, communicate ideas quickly, and push working code to the cloud within limited time.',
    link: '#'
  }
];

const Blog = () => {
  const renderBlog = (blog) => (
    <div className="bg-dark border border-success rounded shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
      <h5 className="text-light fw-bold mb-2">{blog.title}</h5>
      <p className="text-light small flex-grow-1">{blog.description}</p>
      <a
        href={blog.link}
        target="_blank"
        rel="noreferrer"
         className="btn mt-3 px-4 py-2 rounded-pill"
        style={{
          color: '#00ffc3',
          border: '2px solid #00ffc3',
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
          width: 'fit-content'
        }}
      >
        Read More
      </a>
    </div>
  );

  return (
    <section id="blog" className="py-5 text-white">
      <div className="container">
        <h2 className="fw-bold text-success mb-4 border-bottom border-success pb-2" style={{ maxWidth: '250px' }}>
          My Blogs
        </h2>

        <div className="row d-none d-md-flex">
          {blogs.map((blog, index) => (
            <div key={index} className="col-md-4 mb-4">
              {renderBlog(blog)}
            </div>
          ))}
        </div>

        <SwiperCarousel items={blogs} renderItem={renderBlog} />
      </div>
    </section>
  );
};

export default Blog;
