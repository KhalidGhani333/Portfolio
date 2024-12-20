"use client"

import "../style/hero.css"
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import profilepic from "../../../public/myPic.png";
import "aos/dist/aos.css";
import AOS from "aos";





const Hero = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="hero">
      <div className="hero-container">
        {/* Text Section */}
        <div data-aos="fade-down"
          className="hero-text">
          <h1
            data-aos="fade-down"
            data-aos-delay="400"
            className="hero-title">
            Hello, <br /> I&apos;m Khalid <span>Ghani</span>
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="hero-subtitle">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "AI Enthusiast",
                  "Tech Innovator",
                ],
                autoStart: true,
                loop: true,
              }} />
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="800"
            className="hero-description">
            I am committed to mastering the world&apos;s New Technologies, Cloud
            Computing, and Artificial Intelligence. My goal is to innovate and
            contribute to the future of technology...
          </p>

          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className="hero-buttons" >
            <a
              href="./myCv.pdf"
              target="_blank"
              className="hero-button hero-button-primary" >
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/khalid-ghani-1a5a45272/"
              target="_blank"
              className="hero-button hero-button-secondary">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="zoom-in"
          className="hero-image" >
          <div className="hero-image-wrapper">
            <Image
              src={profilepic}
              alt="Profile Picture"
              fill
              objectFit="cover"
              className="rounded-full" />
            <div className="hero-image-decorative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
