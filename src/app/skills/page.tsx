
"use client";


import React from "react";

import "../style/skills.css"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";
import "aos/dist/aos.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="html-icon" /> },
    { name: "CSS", icon: <FaCss3Alt className="css-icon" /> },
    { name: "JavaScript", icon: <FaJsSquare className="js-icon" /> },
    { name: "TypeScript", icon: <SiTypescript className="ts-icon" /> },
    { name: "Next.js", icon: <SiNextdotjs className="next-icon" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="tailwind-icon" /> },
    { name: "Figma", icon: <SiFigma className="figma-icon" /> },
  ];

  return (
    <>
      <div className="skills-container">
        <div className="container">
          {/* Title */}
          <h2 className="skills-title">My Skills</h2>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up-right"
                className="skill-card">
                {/* Skill Icon */}
                <div data-aos="fade-up-left" data-aos-duration="2500" className="skill-icon">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;