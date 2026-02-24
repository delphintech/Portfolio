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
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <>
      <div className="page-home" id="home" >
        <Navbar />
        <Landing />
      </div>

    <div className="vg-relative block w-full overflow-hidden py-20">
              <section className="tab-section">
          <div className="d-flex justify-content-center mb-4">
            <ul className="nav nav-pills gap-2" role="tablist" aria-label="Projects tabs">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'projects'}
                  aria-controls="projects"
                  onClick={() => setActiveTab('projects')}
                >
                  Projects
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'profile'}
                  aria-controls="profile"
                  onClick={() => setActiveTab('profile')}
                >
                  Profile
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-panel">
            {activeTab === 'projects' && (
              <div id="projects" role="tabpanel">
                <Skills />
                <Portfolio />
              </div>
            )}

            {activeTab === 'profile' && (
              <div id="profile" role="tabpanel" >
                <Profile />
                <Timeline />
              </div>
            )}
          </div>
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* <div className="relative block w-full overflow-hidden py-20">
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
      </div> */}

      <Footer />
    </>
  )
}

export default App
