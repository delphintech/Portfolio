import portrait from "../assets/img/Portrait-2023.jpg"
import CV from "../assets/Delphine Abouab - CV 2023 FR.pdf"

import { Fade } from "react-awesome-reveal";

export default function Profile() {
  return (
    <div className="page-about">
      <div className="text-center">
        <Fade direction="down">
          <div className="badge badge-subhead">A propos</div>
        </Fade>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 py-3 picture">
            <Fade direction="up">
              <div className="img-place">
                <img src={portrait} alt="" />
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <Fade direction="right">
              <h1 className="fw-light">Delphine Abouab</h1>
              <h5 className="fg-theme mb-3">Développeuse web Full Stack</h5>
              <p className="text-muted">
                <span>Curieuse, dynamique et dotée d&apos;une forte capacité d&apos;abstraction et de logique, j&apos;ai soif
                de consolider mes compétences techniques acquises pendant ma formation de développement web à Le Wagon.</span><br/><br/>
                <span>Ma grande adaptabilité saura me faire monter rapidement en compétence dans ma future carrière de développeuse.</span></p>
              {/* <ul className="theme-list">
                <li><b>From:</b> Chatou, France</li>
                <li><b>Lives In:</b> Rueil-Malmaison, France</li>
                <li><b>Age:</b> 32</li>
                <li><b>Gender:</b> Female</li>
              </ul> */}
              <div className="centered">
                <a href={CV} download="Delphine Abouab - CV 2023">
                  <button className="btn btn-theme-outline" >
                    <i className="fa-solid fa-file-arrow-down pr-1"></i> Mon CV
                  </button>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
