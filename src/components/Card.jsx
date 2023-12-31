import { Zoom } from "react-awesome-reveal";

/* eslint-disable react/prop-types */

export default function Card({ project, toggleDetails }) {
  const data = project.card

  function handleClick(event) {
    event.stopPropagation()
    toggleDetails(project)
  }

  return (
    <div className="grid-item col-md-12 col-lg-6 col-xl-4" >
      <Zoom triggerOnce={true}>
        <div className="img-place" onClick={handleClick} >
          <img src={data.img} alt="" />
          <div className="img-caption">
            <h5 className="fg-theme">{data.title}</h5>
            <p>{data.text}</p>
          </div>
        </div>
      </Zoom>
    </div>
  )
}
