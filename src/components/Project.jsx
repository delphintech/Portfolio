/* eslint-disable react/prop-types */
import Carousel from 'react-bootstrap/Carousel';

export default function Project({ toggle, details }) {
  console.log(details)
  const singleProject =
    <div className="row">
      <div className="col-md-6 text-center align-self-center">
          <Carousel indicators= {false}>
            {!Array.isArray(details) && details.img.map((image, index) =>
              <Carousel.Item key={index}>
                <img src={image} />
              </Carousel.Item>
            )}
          </Carousel>
      </div>
      <div className="col-md-6 info">
        <div className="row title">
          <div className="col">
            <h2>{details.title}</h2>
          </div>
      </div>
      {details.text}
    </div>
  </div>

  const multipleProjects =
    <Carousel indicators= {false}>
      {Array.isArray(details) && details.map((detail, index) =>
        <Carousel.Item key={index}>
          <div className="row">
            <div className="col-md-6 text-center align-self-center">
                <img src={detail.img} />
            </div>
            <div className="col-md-6 info">
              <div className="row title">
                <div className="col">
                    <h2>{detail.title}</h2>
                </div>
              </div>
              {detail.text}
            </div>
          </div>
        </Carousel.Item> )}
    </Carousel>


  return (
    <div className="container project" onClick={(e) => e.stopPropagation()} >
      <div className="card-project">
        <i className="fa-solid fa-xmark dismiss" onClick={toggle}/>
        { Array.isArray(details) ? multipleProjects : singleProject }
      </div>
    </div>
  )
}
