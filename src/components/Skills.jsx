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
                <i className="icon-ruby-on-rails"></i>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Ruby on Rails</h4>
                <p>Full Stack Framework</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <i className="icon-reactjs"></i>
              </div>
              <div className="caption">
                <h4 className="fg-theme">React JS</h4>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <span className="ti-vector"></span>
              </div>
              <div className="caption">
                <h4 className="fg-theme">UI/UX Design</h4>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <span className="ti-desktop"></span>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Web Development</h4>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
