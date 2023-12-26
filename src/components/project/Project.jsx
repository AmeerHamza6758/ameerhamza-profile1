import React from 'react';
import './Project.css'
import pro1 from '../../images/pro1.png'
import pro2 from '../../images/pro2.png'
import pro3 from '../../images/pro3.png'
import pro4 from '../../images/pro4.png'
import pro5 from '../../images/pro5.png'
const Project = () => {
    return (
        <section id="projects">
            <div className="projects container">
                <div className="projects-header">
                    <h1 className="section-title">
                        Recent <span>Projects</span>
                    </h1>
                </div>
                <div className="all-projects">
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 1</h1>
                            <h2>Dark mode and access data from Github</h2>
                            <p>
                                Embark on a personalized digital journey with my React-based web app, effortlessly retrieving your GitHub data. Seamlessly integrated with the GitHub API, it allows you to fetch and display repositories effortlessly. Elevate your experience with a customizable dark mode for enhanced aesthetics and user comfort. Effortlessly navigate your GitHub world, toggling between light and dark modes to suit your preferences. Experience the perfect blend of functionality and design in this tailored web app, making GitHub exploration engaging and visually pleasing.
                            </p>
                            <p />
                        </div>
                        <div className="project-img">
                            <img src={pro1} alt="img" />
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Prject 2</h1>
                            <h2>CRUD complete responsive Form</h2>
                            <p>
                                Dive into streamlined data management with my web app's dynamic form
                                featuring CRUD operations. Crafted with precision, this
                                user-friendly form allows seamless creation, retrieval, updating,
                                and deletion of data. Elevate your workflow with efficient data
                                handling, ensuring a smooth and intuitive experience. Simplify your
                                processes and maximize productivity as you navigate through the
                                versatile functionalities of this thoughtfully designed form.
                            </p>
                        </div>
                        <div className="project-img">
                            <img src={pro2} alt="img" />
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 3</h1>
                            <h2>Admin Panel</h2>
                            <p>
                                Explore the allure of my meticulously designed admin panel, where
                                beauty meets functionality. With an intuitive interface,
                                effortlessly manage customer reviews and track order placement
                                times. This dynamic admin hub ensures seamless data management,
                                providing you with a powerful tool to oversee and optimize your
                                operations. Elevate your administrative experience as you navigate
                                through a visually stunning and feature-rich environment tailored to
                                enhance your control and decision-making processes.
                            </p>
                        </div>
                        <div className="project-img">
                            <img src={pro3} alt="img" />
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 4</h1>
                            <h2>TODO </h2>
                            <p>
                                Step into productivity with my elegantly crafted TODO app.
                                Seamlessly manage your daily tasks by effortlessly adding,
                                organizing, and tracking them in a sleek and intuitive interface.
                                This thoughtfully designed TODO app enhances your daily routine,
                                providing a user-friendly platform to stay organized and focused.
                                Experience the simplicity of task management as you prioritize and
                                check off your goals, making every day a step closer to success.
                            </p>
                        </div>
                        <div className="project-img">
                            <img src={pro4} alt="img" />
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 5</h1>
                            <h2>Colors changer</h2>
                            <p>
                                Immerse yourself in the creativity of my web app, where
                                personalization takes center stage. With the power to change
                                background colors at your fingertips, this dynamic platform
                                transforms your digital space. Explore a palette of possibilities,
                                choosing colors that resonate with you, and effortlessly obtain
                                their codes. This innovative web app puts the control of aesthetics
                                in your hands, making every interaction a canvas of self-expression
                                and visual delight.
                            </p>
                        </div>
                        <div className="project-img">
                            <img src={pro5} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
