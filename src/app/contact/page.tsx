"use client";
import React from "react";
import "../style/contact.css"

import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";


const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-inner-container">
          <h2 className="contact-heading">Get in Touch</h2>
          <p data-aos="fade-down" className="contact-subheading">
            Have a question or want to collaborate? Let&apos;s connect!
          </p>

          {/* Contact Form */}
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div data-aos="fade-right" className="contact-info-row">
                <FiMail className="contact-icon" />
                <p>
                  <span className="contact-label">Email:</span>{" "}
                  <a href="mailto:khalidghani.333@gmail.com"
                    className="contact-link">
                    khalidghani.333@gmail.com
                  </a>
                </p>
              </div>

              <div data-aos="fade-right" className="contact-info-row">
                <FiPhone className="contact-icon" />
                <p>
                  <span className="contact-label">Phone:</span>{" "}
                  <a href="tel:0312-3549066"
                    className="contact-link">
                    0312-3549066
                  </a>
                </p>
              </div>

              <div
                data-aos="fade-right"
                className="contact-social-links">
                <a data-aos="fade-right"
                  data-aos-duration="1500"
                  href="https://linkedin.com/in/khalid-ghani-1a5a45272"
                  target="_blank"
                  className="contact-social-link">
                  <FiLinkedin size={24} />
                  LinkedIn
                </a>
                <a data-aos="fade-right"
                  data-aos-duration="2000"
                  href="https://github.com/KhalidGhani333"
                  target="_blank"
                  className="contact-social-link">
                  <FiGithub size={24} />
                  Github
                </a>
                <a data-aos="fade-right"
                  data-aos-duration="2500"
                  href="https://www.facebook.com/khalidghani.ghani?mibextid=ZbWKwL"
                  target="_blank"
                  className="contact-social-link">
                  <FiFacebook size={24} />
                  Facebook
                </a>
                <a data-aos="fade-right"
                  data-aos-duration="3000"
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  className="contact-social-link">
                  <IoLogoWhatsapp size={24} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <form data-aos="fade-left"
              className="contact-form">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input data-aos="zoom-in"
                  data-aos-duration="1200"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="form-input"/>
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input data-aos="zoom-in"
                  data-aos-duration="1500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-input"/>
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea data-aos="zoom-in"
                  data-aos-duration="1800"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="form-textarea"
                ></textarea>
              </div>
              <button data-aos="zoom-in-left"
                type="submit"
                className="form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
