/* eslint-disable react/prop-types */
import Carousel from 'react-bootstrap/Carousel';

export default function Project({ toggle, data }) {
  const images =
   <Carousel indicators= {false}>
      {data.img.map((image, index) =>
        <Carousel.Item key={index}>
          <img className="img-fluid" src={image} />
        </Carousel.Item>
      )}
    </Carousel>

  console.log(data)


  return (
    <div className="container project">
      <div className="card-project">
        <i className="fa-solid fa-xmark dismiss" onClick={toggle}/>
        <div className="row">
          <div className="col-md-6 text-center align-self-center">
            {Array.isArray(data.img) ? images : <img className="img-fluid" src={data.img} />}
          </div>
          <div className="col-md-6 info">
            <div className="row title">
              <div className="col">
                <h2>{data.title}</h2>
              </div>
          </div>
          {data.text}
        </div>
      </div>
      </div>
    </div>
  )
}
