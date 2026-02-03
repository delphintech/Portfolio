import { Zoom } from "react-awesome-reveal";

export default function Landing() {
  return (
    <div className="caption-header text-center">
      <Zoom direction="down" triggerOnce={true} duration={2000} >
        <h5 className="fw-normal">Bienvenue</h5>
        <h1 className="fw-light mb-4"><b className="fg-theme">Delphin</b>Tech</h1>
        <div className="badge">Software engineer</div>
      </Zoom>
    </div>
  )
}
