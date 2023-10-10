export default function Skills() {
  return (
    <div className="page-service">
      <div className="container pt-5">
        <div className="text-center wow fadeInUp">
          {/* <div className="badge badge-subhead">Programmation</div> */}
          <h1 className="text-center fw-normal wow fadeIn">Compétences</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Programmation</h4>
                <p>Ruby on Rails, React JS</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Web</h4>
                <p>JavaScript, HTML, CSS</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <i className="fa-solid fa-computer-mouse"></i>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Tools</h4>
                <p>Visual Studio, GitHub, Bootstrap, Heroku, Figma</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <i className="fa-solid fa-database"></i>
              </div>
              <div className="caption">
                <h4 className="fg-theme">DataBase</h4>
                <p>MySQL, PostGreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
