import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__tile">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me </h3>
          <div className="contact__info">
            <div className="contact__card">
              <i class="uil uil-at contact__card-icon"></i>
              <h3 className="contact__card-title"></h3>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
        </div>

        <div className="contact__content">
          <h3 className="contact__title"></h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
