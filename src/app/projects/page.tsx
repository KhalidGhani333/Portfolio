"use client"

import React from 'react';
import Image from 'next/image';
import "../style/projects.css"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "Dynamic Resume Builder",
    image:"/resumebuilder.webp",
    description:"A web application to create, edit, and share resumes dynamically with a unique URL. Features include PDF download and print options.",
    tech: ["HTML", "CSS", "TypeScript"],
    liveLink: "https://hackathon-milestone-5-iota.vercel.app",
    githubLink: "https://github.com/KhalidGhani333/Hackathon.git",
  },
  {
    title: "Company Portfolio",
    image:"/Company portfolio.jpg",
    description:"I create company portfolios highlighting services, features, progress, and contact details for a professional impression.",
    tech: ["HTML", "CSS", "Typescript"],
    liveLink: "https://giaic-html-css-final-assignment.vercel.app",
    githubLink: "https://github.com/KhalidGhani333/GIAIC-HTML-CSS-Assignments.git",
  },
  {
    title: "Weather Widget",
    image:'/weather-widget.webp',
    description:"A real-time weather app where users can search for their city's weather and get detailed forecasts instantly.",
    tech: ["Nextjs", "Tailwind CSS", "TypeScript"],
    liveLink: "",
    githubLink: "https://github.com/KhalidGhani333/Weather-Widget.git",
  },
  {
    title: "Text-To-Voice-Convertor",
    image:"/voice-to-text-converter.png",
    description:"Simply input your desired text, and it will seamlessly generate a natural-sounding voice note for you",
    tech: ["HTML", "CSS", "Javascript"],
    liveLink: "https://text-to-voice-convertor-zeta.vercel.app",
    githubLink: "https://github.com/KhalidGhani333/Text-To-Voice-Convertor.git",
  },
  {
    title: "Watch E-commerce Website",
    image:"/timebox.jpg",
    description:"I design and develop watch e-commerce stores, providing a seamless platform for showcasing and selling timepieces",
    tech: ["HTML", "CSS",],
    liveLink: "https://time-box-web-page.vercel.app",
    githubLink: "https://github.com/KhalidGhani333/Time-Box-WebPage.git",
  },
  {
    title: "CountDown Timer",
    image:"/Countdown.png",
    description:"I developed a Countdown Timer app where you can set a specific time, and the timer will start to help you track it precisely.",
    tech: ["Nextjs","Tailwind CSS","Typescript"],
    liveLink: "",
    githubLink: "https://github.com/KhalidGhani333/CountDown_Timer.git",
  },
  {
    title: "Calculator",
    image:"/calculator.jpg",
    description:"I have created a versatile calculator that allows users to perform calculations with any number.",
    tech: ["HTML","CSS","JavaScript"],
    liveLink: "",
    githubLink: "https://github.com/KhalidGhani333/Calculator.git",
  },
  {
    title: "Console-Interactive-Table",
    image:"/interactive table.webp",
    description:"I developed a Console-Interactive-Table tool where users can input any desired number to instantly generate its complete multiplication table.",
    tech: ["TypeScript"],
    liveLink: "",
    githubLink: "https://github.com/KhalidGhani333/Console-Interactive-Table.git",
},
{
  title: "Digital Clock",
  image:"/digitalclock.png",
  description:"I create dynamic digital clock to display real-time updates, allowing users to effortlessly check the current time.",
  tech: ["HTML", "CSS","TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/Digital-Clock.git",
},
{
  title: "Bank Account System",
  image:"/bankAccount.png",
  description:"I develop efficient bank account systems that streamline account management and transactions.",
  tech: ["TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/OOP-Mybank.git",
},
{
  title: "Quiz System",
  image:"/quiz.webp",
  description:"I have developed a quiz system where students can easily come and attempt quizzes.",
  tech: ["TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/Quiz-System.git",
},
{
  title: "Adventure-Game",
  image:"/adventureGame.jpg",
  description:"I design console adventure games where players embark on thrilling quests directly in the terminal of their screen.",
  tech: ["TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/Adventure-Game.git",
},
{
  title: "Student-Magement-System",
  image:"/student-management.webp",
  description:"I developed a Student Management System that allows students to select courses and conveniently pay their fees online.",
  tech: ["TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/Student-Magement-System.git",
},
{
  title: "Currency Convertor",
  image:"/currency_converter.jpg",
  description:"I have developed a Currency Converter that allows users to seamlessly convert their currency into any global currency.",
  tech: ["TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/Currency-Convertor.git",
},
{
  title: "To Do List",
  image:"/To-Do_List_App.webp",
  description:"I create a To-Do app that allows users to easily add and manage their daily tasks. ",
  tech: ["TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/To-Do-List-.git",
},
{
  title: "ATM Machine",
  image:"/Atm-Machine.jpg",
  description:"I  developed a console-based ATM machine where users can perform debit, withdrawal, and other transactions.",
  tech: ["TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/ATM-Machine.git",
},
{
  title: "Number Guessing Game",
  image:"/number-gussing.jpg",
  description:"I developed a number guessing game where users input a number, and the game intelligently guesses it.",
  tech: ["TypeScript"],
  liveLink: "",
  githubLink: "https://github.com/KhalidGhani333/Number-guessing-game.git",
},
];

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <Image
                src={project.image}
                alt="image"
                width={100}
                height={100}
                className="project-image"/>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="project-tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="project-actions">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="live-preview-button">
                    <FaExternalLinkAlt className="icon" />
                    Live Preview
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="github-button">
                  <FaGithub className="icon" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;