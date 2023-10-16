import React from "react"

import Card from "../components/Card"
import Project from "../components/Project"

import work1 from "../assets/img/work/work-1.jpg"

export default function Portfolio() {
  const [showDetails, setShowDetails] = React.useState(false)
  console.log(showDetails)

  const data={image: work1, title: "Mobile Travel App", text: "Travel, Discovery" }

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
        {showDetails && <Project toggle={toggleDetails}/>}
        <div className="row my-5">
            <Card data={data} toggleDetails={toggleDetails} />
        </div>
      </div>
    </div>
  )
}
