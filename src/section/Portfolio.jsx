import React from "react"

import Card from "../components/Card"
import Project from "../components/Project"

import TravelPal from "../components/Travelpal"

export default function Portfolio() {
  const [showDetails, setShowDetails] = React.useState(false)
  console.log(showDetails)

  function toggleDetails() {
    setShowDetails(p => !p )
    console.log(showDetails)
  }


  return (
    <div className="page-portfolio">
      <div className="container my-5">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead mb-3">Portfolio</div>
          <h1 className="fw-normal wow fadeInUp">Mes projets</h1>
        </div>
        {showDetails && <Project toggle={toggleDetails} data={TravelPal.details} />}
        <div className="row my-5">
            <Card data={TravelPal.card} toggleDetails={toggleDetails} />
        </div>
      </div>
    </div>
  )
}
