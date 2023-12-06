// import logo from "../assets/img/delphintech_logo"

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
      <div className="container">
        <div>
          {/* {logo("0 0 200 200")} */}
          <a href="" className="navbar-brand"><b className="fg-theme">Delphin</b>Tech</a>
        </div>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-expanded="true">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link" data-animate="scrolling">Accueil</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" data-animate="scrolling">A propos</a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link" data-animate="scrolling">Curriculum</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" data-animate="scrolling">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" data-animate="scrolling">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
