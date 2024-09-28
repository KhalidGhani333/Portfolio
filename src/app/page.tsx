import React from 'react'
import Link from 'next/link'
import About from './components/about/page'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import Skills from './components/skills/page'
import Project from './components/projects/page'
import Contact from './components/contact/page'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      
      
      

    
    </div>
  )
}

export default Home
