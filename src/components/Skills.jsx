export default function Skills() {
  return (
    <div className="page-service">
      <div className="container py-5">
        <div className="text-center wow fadeInUp">
          <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
          {/* <div className="badge badge-subhead">Service</div> */}
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <span className="ti-paint-bucket"></span>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Web Design</h4>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <span className="ti-search"></span>
              </div>
              <div className="caption">
                <h4 className="fg-theme">SEO</h4>
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
