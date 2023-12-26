import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <section id="services">
            <div className="service-top">
                <h1 className="section-title">
                    Edu<span>ca</span>tion
                </h1>
                <p>

                    Hello, everyone!
                    I'm thrilled to have the opportunity to share a bit about myself with you.
                    I hold a Masters's degree in Computer Science from the prestigious Islamia University of Bahawalpur. Throughout my educational journey, I have delved deep into the diverse realms of computer science, gaining a solid foundation and a comprehensive understanding of various programming languages, algorithms, and software development methodologies.
                    With a passion for technology and problem-solving, I embarked on a professional journey that allowed me to apply my academic knowledge to real-world scenarios. During my 8-month tenure at an international bank, I had the privilege of contributing to small application modules. This experience honed my skills in frontend development, with a particular focus on the React.js library.
                    I specialize in frontend development, bringing to the table a unique blend of technical expertise and creative problem-solving. My proficiency in React.js, coupled with a meticulous approach to coding, allows me to deliver solutions that not only meet but exceed expectations.
                    In the fast-paced world of technology, I embrace the ever-evolving landscape and thrive on the challenges it presents. I approach each project with a forward-thinking mindset, ensuring that my work aligns with the latest industry trends and standards.
                    Dedication and precision are at the core of my work ethic.
                </p>
            </div>
            <div className="education-bottom">
                <div className='education-item'>
                    <h1>MCS (Master's of Computer Science)</h1>
                    <p>Islamia university of Bahawalpur</p>
                    <h3>CGP: 3.34/4.0</h3>
                    <p>Major Subjects</p>
                    <strong>Object Oriented Programming</strong>
                    <strong>Web programming</strong>
                    <strong>Software engeenering</strong>
                </div>
                <div className='education-item'>
                    <h1>ADP(Associate Degree Program)</h1> 
                    <p>University of central punjab,lahore</p>
                    <h3>CGP: 3.34/4.0</h3>
                    <p>Major Subjects</p>
                    <strong>Communication skills</strong>
                    <strong>Database management system</strong>
                    <strong>Networking</strong>
                    <div>
                        

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
