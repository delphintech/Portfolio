import './assets/style/index.scss'

import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="vg-page page-home" id="home" >
        <Navbar />
        <Landing />
      </div>
      <div className="vg-page" id="about">
          <Profile />
          <Skills />
      </div>
      <div className="vg-page" id="resume">
        <Timeline />
      </div>
      <div className="vg-page" id="portfolio">
        <Portfolio />
      </div>
      <div className="vg-page" id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
