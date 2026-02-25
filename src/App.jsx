import './assets/style/index.scss'
import { useState } from 'react'

import Navbar from "./section/Navbar"
import Landing from "./section/Landing"
import Profile from "./section/Profile"
import Skills from "./section/Skills"
import Timeline from "./section/Timeline"
import Portfolio from "./section/Portfolio"
import Contact from "./section/Contact"
import Footer from "./section/Footer"

function App() {

  return (
        <>
      <div id="home" >
        <Navbar />
        <Landing />
      </div>
      <div className="bg-back-3 text-dark-1">
        <div id="about">
          <Profile />
          <Skills />
        </div>
        <div id="resume">
          <Timeline />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
