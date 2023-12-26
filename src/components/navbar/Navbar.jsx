import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [barOpen, setBarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleToggleMobileMenu = () => {
    setBarOpen(!barOpen);
  };

  const handleMenuItemClick = () => {
    setBarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  },[]);

  const headerStyle = {
    backgroundColor: scrollPosition > 250 ? '#ffc300' : '',
  };

  return (
    <>
      <section id="header">
        <div className="header container" style={headerStyle}>
          <div className="nav-bar">
            <div className="brand">
              <Link to="/hero">
                <h1>
                  <span>A</span>meer <span>H</span>amza
                </h1>
              </Link>
            </div>
            <div className="nav-list">
              <div className={`hamburger ${barOpen ? 'active' : ''}`} onClick={handleToggleMobileMenu}>
                <div className="bar" />
              </div>
              <ul className={` ${barOpen ? 'active' : ''}`}>
                <li>
                  <Link to="/" data-after="Home" onClick={handleMenuItemClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" data-after="Service" onClick={handleMenuItemClick}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/project" data-after="Projects" onClick={handleMenuItemClick}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" data-after="About" onClick={handleMenuItemClick}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" data-after="Contact" onClick={handleMenuItemClick}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/Footer" onClick={handleMenuItemClick}>
                    Social Links
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hero">
        <div className="hero container">
          <div className='nav-font'>
            <h1>&nbsp;&nbsp; &nbsp;Welcome</h1>
            
            <h1> <span>To my</span> Profile</h1>
            <Link to="/projects" type="button" className="cta">
              Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
