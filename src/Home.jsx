import React from 'react'
import Services from './components/services/Services';
import Project from './components/project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const Home = () => {
    return (
      <div>
        {/* <Navbar/> */}
        <Services />
        <Project />
        <About />
        <Contact />
      </div>
    );
  };

export default Home