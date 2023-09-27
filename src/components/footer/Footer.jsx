import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sanjeev</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="" className="home__social-icon" target="_blank">
            <i className="uil uil-dribbble"></i>
          </a>
          <a href="" className="home__social-icon" target="_blank">
            <i className="uil uil-github"></i>
          </a>
        </div>
        <div className="footer__copy">all copyright reserved 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
