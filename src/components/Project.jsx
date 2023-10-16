/* eslint-disable react/prop-types */

export default function Project({ toggle }) {
  return (
    <div className="container project">
            <div className="card-project">
                <i className="fa-solid fa-xmark dismiss" onClick={toggle}/>
                <div className="row">
                  <div className="col-md-6 text-center align-self-center">
                    <img className="img-fluid" src="https://i.imgur.com/7a9V4yw.png" />
                    <div className="row lower">
                      <div className="col">
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                          <i className="fa fa-arrow-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                          <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 info">
                    <div className="row title">
                      <div className="col">
                        <h2>Herbalism</h2>
                      </div>
                  </div>
                  <p>Natural herbal wash</p>
                </div>
              </div>
            </div>
    </div>
  )
}
