import portrait from "../assets/img/Portrait-2023.jpg"

export default function Profile() {
  return (
    <div className="vg-page page-about" id="about">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 py-3">
            <div className="img-place wow fadeInUp">
              <img src={portrait} alt="" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 wow fadeInRight">
            <h1 className="fw-light">Stephen Doe</h1>
            <h5 className="fg-theme mb-3">UI/UX & Web Designer</h5>
            <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form but the majority have suffered alteration in some</p>
            <ul className="theme-list">
              <li><b>From:</b> Texas, US</li>
              <li><b>Lives In:</b> Texas, US</li>
              <li><b>Age:</b> 25</li>
              <li><b>Gender:</b> Male</li>
            </ul>
            <button className="btn btn-theme-outline">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}
