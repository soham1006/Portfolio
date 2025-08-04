import React from 'react';
import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Certificates from './sections/Certificates';
import Blog from './sections/Blog';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience/>
      <Projects />   
      <Certificates/>
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;