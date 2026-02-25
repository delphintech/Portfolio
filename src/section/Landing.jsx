import { Zoom } from "react-awesome-reveal";

export default function Landing() {
  return (
    <div className="relative flex flex-col flex-wrap justify-center items-center w-full h-full text-back-3 text-shadow-xs text-center z-10 ">
      <Zoom direction="down" triggerOnce={true} duration={2000} >
        <h5 className="subtitle mb-2 text-xl">Bienvenue</h5>
        <h1 className="page-title font-light font-serif text-6xl mb-4">
          <span className=" text-main-1">Delph</span><span className=" text-back-2">in</span>Tech
        </h1>
        <div className="font-bold px-6 py-4 bg-back-2/20 text-red-600 text-base rounded-full drop-shadow-md">Software engineer</div>
      </Zoom>
    </div>
  )
}
