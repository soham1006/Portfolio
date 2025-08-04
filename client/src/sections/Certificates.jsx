import React from 'react';
import SwiperCarousel from '../components/SwiperCarousel';

const certificates = [
  {
    title: "Nullclass Internship",
    image: "/certificates/Nullclass.jpg",
    link: "/certificates/Nullclass.pdf"
  },
  {
    title: "ATF 2024",
    image: "/certificates/Algo'24.jpg",
    link: "/certificates/ai-bootcamp.pdf"
  },
  {
    title: "Web Development",
    image: "/certificates/webdev.jpg",
    link: "/certificates/webdev.pdf"
  }
];

const Certificates = () => {
  const renderCert = (cert) => (
    <div
      className="bg-dark border border-success rounded shadow-sm p-3 h-100 d-flex flex-column align-items-center text-center card"
      style={{
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="img-fluid rounded mb-3"
        style={{ maxHeight: '200px', objectFit: 'contain' }}
      />
      <h5 className="text-light">{cert.title}</h5>
      <a
        href={cert.link}
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
        View Certificate
      </a>
    </div>
  );

  return (
    <section className="py-5 text-white" id="certificates">
      <div className="container">
        <h2 className="fw-bold text-success mb-4 border-bottom border-success pb-2" style={{ maxWidth: '300px' }}>
          My Certificates
        </h2>

        <div className="row d-none d-md-flex">
          {certificates.map((cert, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              {renderCert(cert)}
            </div>
          ))}
        </div>

        <SwiperCarousel items={certificates} renderItem={renderCert} />
      </div>
    </section>
  );
};

export default Certificates;








