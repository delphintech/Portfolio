import React from "react"
import { Fade } from "react-awesome-reveal";

import Card from "../components/Card"
import Project from "../components/Project"

import travelPal from "../components/Travelpal"
import petitScarabee from "../components/PetitScarabee"
import reactMini from "../components/ReactMini"

export default function Portfolio() {
  const project_list = [travelPal, petitScarabee, reactMini]

  const [project, setProject] = React.useState({ show: false, current: null })


  function toggleDetails(projectData) {
    setProject(prevProject => ({
      show: !prevProject.show,
      current: prevProject.current ? null : projectData
    }))
  }

  const cards = project_list.map((project, index) =>
    <Card project={project} toggleDetails={toggleDetails} key={index} />
  )

  return (
    <div className="page-portfolio" onClick={() => setProject({ show: false })}>
      <div className="container my-5">
        <div className="text-center">
          <Fade direction="down" triggerOnce={true}>
            <div className="badge badge-subhead mb-3">Portfolio</div>
            <h1 className="fw-normal">Mes projets</h1>
          </Fade>
        </div>
          {project.show && <Project toggle={toggleDetails} details={project.current.details} />}
        <div className="row my-5">
            { cards }
        </div>
      </div>
    </div>
  )
}
