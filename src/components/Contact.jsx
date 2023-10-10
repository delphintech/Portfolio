export default function Contact() {
  return (
    <div className="page-contact">
      <div className="container my-5">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead mb-3 mt-5">Contact</div>
        </div>
        <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
        <div className="row d-flex justify-content-center py-5">
          <div className="col-lg-5">
            <form className="vg-contact-form">
              <div className="form-row justify-content-center">
                <div className="col-12 mt-3 wow fadeInUp">
                  <input className="form-control" type="text" name="Name" placeholder="Your Name" />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input className="form-control" type="text" name="Email" placeholder="Email Address" />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input className="form-control" type="text" name="Subject" placeholder="Subject" />
                </div>
                <div className="col-12 mt-3 wow fadeInUp">
                  <textarea className="form-control" name="Message" rows="6" placeholder="Enter message here.."></textarea>
                </div>
                <button type="submit" className="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
