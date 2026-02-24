import { Zoom } from "react-awesome-reveal";

export default function Landing() {
  return (
    <div className="relative flex flex-col flex-wrap justify-center items-center w-full h-full text-back-3 text-center z-10">
      <Zoom direction="down" triggerOnce={true} duration={2000} >
        <h5 className="subtitle">Bienvenue</h5>
        <h1 className="page-title text-lta text-5xl font-bold">
          <span className=" text-main-1">Delph</span><span className=" text-back-2">in</span>Tech
        </h1>
        <div className="badge">Software engineer</div>
      </Zoom>
    </div>
  )
}
