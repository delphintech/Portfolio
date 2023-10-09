export default function Footer() {
  return (
     <div className="vg-footer">
      <h1 className="text-center">Virtual Folio</h1>
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-6 col-lg-3 py-3">
            <div >
              <p>Follow me</p>
              <hr className="divider" />
              <ul className="list-unstyled">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Youtube</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3">
            <div>
              <p>Contact me</p>
              <hr className="divider" />
              <ul className="list-unstyled">
                <li>info@virtual.com</li>
                <li>+8890234</li>
                <li>+813023</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-12 mb-3">
            <h3 className="fw-normal text-center">Subscribe</h3>
          </div>
          <div className="col-lg-6">
            <form className="mb-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Email address" />
                <input type="submit" className="btn btn-theme no-shadow" value="Subscribe" />
              </div>
            </form>
          </div>
          <div className="col-12">
            <p className="text-center mb-0 mt-4">Copyright &copy;2020. All right reserved | This template is made with <span className="ti-heart fg-theme-red"></span> by <a href="https://www.macodeid.com/">MACode ID</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
