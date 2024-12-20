"use client"
import React from 'react'
import  "../style/about.css"
import Image from "next/image";
import aboutImage from "../../../public/myPic.png"


const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          {/* Image */}
          <div className="about-image-wrapper">
            <div className="about-image" data-aos="zoom-out-right">
              <Image
                src={aboutImage}
                alt="About Me"
                layout="fill"
                objectFit="cover"
                className="image" />
            </div>
          </div>

          {/* Text */}
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="about-text">
            <h2 className="about-title">
              About Me
            </h2>
            <p className="about-paragraph">
              I am a passionate Frontend Developer with a knack for building dynamic and responsive user experiences. 
              With expertise in modern technologies like Next.js, TypeScript, and Tailwind CSS, I craft innovative web applications that merge design and functionality seamlessly.
            </p>
            <p className="about-paragraph">
              Beyond coding, I am a technology enthusiast committed to exploring fields like Artificial Intelligence, Cloud Computing, and Automation to push the boundaries of innovation. 
            </p>

            <div className="about-button-wrapper">
              <a href="" className="about-button">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
