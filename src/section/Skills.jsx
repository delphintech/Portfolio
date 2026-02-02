import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <div className="page-service">
      <div className="container my-5">
        <div className="text-center">
          <Fade direction="down" triggerOnce={true}>
            {/* <div className="badge badge-subhead">Programmation</div> */}
            <h1 className="text-center fw-normal">Compétences</h1>
          </Fade>
        </div>
        <Fade direction="up" cascade triggerOnce={true}>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service">
                <div className="icon">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Programmation</h4>
                  <p>C · C++ · Python · JavaScript · TypeScript · Ruby · Assembly</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service">
                <div className="icon">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Web</h4>
                  <p>Rails · Fastify · Node.js · React · WebSocket · PostgreSQL · SQLite · Tailwind · Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service">
                <div className="icon">
                  <i className="fa-solid fa-computer-mouse"></i>
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Tools</h4>
                  <p>Git · Docker · VirtualBox · VSCode · Linux · gdb/lldb</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service">
                <div className="icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Soft skills</h4>
                  <p>Communication  · Dynamisme  · Adaptabilité  · Esprit d'équipe</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
