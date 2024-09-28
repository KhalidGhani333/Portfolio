"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import profilepic from "../../../../public/myPic.png";
import "../../style/hero.css"

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-text-container">
          <h1 className="hello-text">Hello,</h1>
          <h1 className="name-text">I&apos;m Khalid<span>Ghani</span></h1>
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: ["FrontEnd Web Developer"],
                autoStart: true,
                loop: true,
              }} 
            />
          </div>

          <p className="description">
            I am committed to mastering the world&apos;s New Technologies, Cloud Computing, and Artificial Intelligence.
            My goal is to innovate and contribute to the future of technology...
          </p>

          <div className="buttons-container">
            <a href="./myCv.pdf" target='_blank' className="download-cv-btn">
              Download CV 
            </a>
            <a href="https://www.linkedin.com/in/khalid-ghani-1a5a45272/" target='_blank' className="linkedin-btn">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <Image src={profilepic} alt="My Profile Picture" width={300} height={300} className="profile-pic"/>
        </div>
      </section>
    </div>
  )
}

export default Hero;
