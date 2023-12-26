import React from 'react';
import './About.css';
import resume from '../../images/AmeerHamzaResume.pdf';
import img2 from '../../images/img-2.png'
const About = () => {
  return (
    
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={img2} alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            About <span>me</span>
          </h1>
          <h2>Front End Developer</h2>
          <p>
            Ameer Hamza, a dynamic professional with a Masters's in Computer
            Science from the esteemed Islamia University of Bahawalpur, brings a
            wealth of expertise to the realm of frontend development,
            specializing in the React.js library. With a commendable 8-month
            tenure at an international bank, I meticulously contributed to small
            application modules, showcasing my dedication and precision. My
            hardworking ethos and genius-level skills position me as an asset for
            long-term collaboration with reputable companies. As a
            forward-thinking individual, I thrive in the ever-evolving landscape
            of technology, delivering excellence in every project I undertake.
          </p>
          <a href={resume} className="cta" download="AmeerHamzaResume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
