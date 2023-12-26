import React from 'react';
import './Footer.css';
// import { Facebook, GitHub, Linkedin, Discord } from 'react-feather';

const Footer = () => {
  return (
    <>
    <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>A</span>meer <span>H</span>amza</h1>
      </div>
      <h2>I'll do needful for you..!</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="https://www.facebook.com/chhamza.chhamza.946?mibextid=ZbWKwL"><i
              class="ri-facebook-circle-fill"></i></a>
        </div>
        <div class="social-item">
          <a href="https://github.com/AmeerHamza6758"><i class="ri-github-fill"></i></a>
        </div>
        <div class="social-item">
          <a
            href="https://www.linkedin.com/in/ameer-hamza-12b389212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i
              class="ri-linkedin-box-fill"></i></a>
        </div>
        <div class="social-item">
          <a href="meer_hamza"><i class="ri-discord-fill"></i></a>
        </div>
      </div>
      <p>Copyright © 2023 Ameer. All rights reserved</p>
    </div>
  </section>
  </>
  );
};

export default Footer;
