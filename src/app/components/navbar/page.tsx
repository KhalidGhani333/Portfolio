
import React from 'react'
import Link from 'next/link'
import "../../style/navbar.css"

const Navbar = () => {
  return (
    <div>
  <div className="header-container">
    <div className="header-content">
      <div className="logo">
        Khalid<span>Ghani</span>
      </div>
      <div className="nav-links">
        <Link href="./components/about" className="nav-link">About</Link>
        <Link href="./components/skills" className="nav-link">Skills</Link>
        <Link href="./components/projects" className="nav-link">Project</Link>
        <Link href="./components/contact" className="nav-link">Contact</Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default Navbar
