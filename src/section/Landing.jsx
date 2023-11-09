import { Zoom } from "react-awesome-reveal";

export default function Landing() {
  return (
    <div className="caption-header text-center">
      <Zoom direction="down" triggerOnce={true}>
        <h5 className="fw-normal">Bienvenue</h5>
        <h1 className="fw-light mb-4"><b className="fg-theme">Delphin</b>Thech</h1>
        <div className="badge">Full Stack Web Developper</div>
      </Zoom>
    </div>
  )
}
