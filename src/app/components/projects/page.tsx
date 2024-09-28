import React from 'react';
import Image from 'next/image';
import "../../style/projects.css"

const Project = () => {
  return (
    <div>
      <section className="section">
        <h1 className="title">
          <span>My</span> Pro<span>je</span>cts
        </h1>
        <div className="projects-grid">
          <div className="project-card">
            <Image
              src="/Countdown.png"
              alt="Countdown"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://count-down-timer-lovat.vercel.app/" target="_blank" className="project-link">
              <h3>Count Down Timer</h3>
            </a>
          </div>

          <div className="project-card">
            <Image
              src="/resumebuilder.webp"
              alt="resumebuilder"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://hackathon-milestone-3-4-5.vercel.app/" target="_blank" className="project-link">
              <h3>Interactive Resume Builder</h3>
            </a>
          </div>

          <div className="project-card">
            <Image
              src="/timebox.jpg"
              alt="Ecommerce web"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://time-box-web-page.vercel.app/" target="_blank" className="project-link">
              <h3>Ecommerce Web</h3>
            </a>
          </div>
          <div className="project-card">
            <Image
              src="/interactive table.webp"
              alt="Interactive table"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/Console-Interactive-Table.git" target="_blank" className="project-link">
              <h3>Console Interactive Table</h3>
            </a>
          </div>

          <div className="project-card">
            <Image
              src="/digitalclock.png"
              alt="Digital clock"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/Digital-Clock.git" target="_blank" className="project-link">
              <h3>Digital Clock</h3>
            </a>
          </div>

          <div className="project-card">
            <Image
              src="/bankAccount.png"
              alt="Bank Account"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/OOP-Mybank.git" target="_blank" className="project-link">
              <h3>Bank Account System</h3>
            </a>
          </div>
          <div className="project-card">
            <Image
              src="/quiz.webp"
              alt="quiz"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/Quiz-System.git" target="_blank" className="project-link">
              <h3>Quiz System</h3>
            </a>
          </div>

          <div className="project-card">
            <Image
              src="/student-management.webp"
              alt="student management"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/Student-Magement-System.git" target="_blank" className="project-link">
              <h3>Student Management System</h3>
            </a>
          </div>

          <div className="project-card">
            <Image
              src="/currency_converter.jpg"
              alt="currency_converter"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/Currency-Convertor.git" target="_blank" className="project-link">
              <h3>Currency Converter</h3>
            </a>
          </div>
          <div className="project-card">
            <Image
              src="/To-Do_List_App.webp"
              alt="To-Do_List"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/To-Do-List-.git" target="_blank" className="project-link">
              <h3>To-Do List App</h3>
            </a>
          </div>

          <div className="project-card">
            <Image
              src="/Atm-Machine.jpg"
              alt="Atm-Machine"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/ATM-Machine.git" target="_blank" className="project-link">
              <h3>Atm Machine</h3>
            </a>
          </div>

          <div className="project-card">
            <Image
              src="/number-gussing.jpg"
              alt="number-gussing"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/Number-guessing-game.git" target="_blank" className="project-link">
              <h3>Number Guessing Game</h3>
            </a>
          </div>
          <div className="project-card">
            <Image
              src="/calculator.jpg"
              alt="calculator"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/Calculator.git" target="_blank" className="project-link">
              <h3>Calculator</h3>
            </a>
          </div>
          <div className="project-card">
            <Image
              src="/adventureGame.jpg"
              alt="adventureGame"
              width={300}
              height={300}
              className="project-image"
            />
            <a href="https://github.com/KhalidGhani333/Adventure-Game.git" target="_blank" className="project-link">
              <h3>Adventure Game</h3>
            </a>
          </div>
          

          
          

        </div>
      </section>
    </div>
  );
};

export default Project;
