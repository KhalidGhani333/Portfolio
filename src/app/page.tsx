import React from 'react'
import About from './about/page'
import Hero from './hero/page'
import Skills from './skills/page'
import Project from './projects/page'
import Contact from './contact/page'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      
    </div>
  )
}

export default Home
