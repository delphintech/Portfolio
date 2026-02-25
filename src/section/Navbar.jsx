// import logo from "../assets/img/delphintech_logo"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return(
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 text-back-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="text-xl font-bold">
              <span className="text-main-1">Delph</span><span className="text-back-2">in</span>Tech
            </a>
          <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
          </button>
          {
            open &&
              <div className="w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                  <li>
                    <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
                  </li>
                </ul>
              </div>
          }
          </div>
      </nav>
    )
  }
    // return (
    //   <nav className="fixed top-0 w-full bg-dark-1/80 text-back-3 z-50">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <div className="flex items-center justify-between h-16">

    //         {/* Logo */}
    //         <a href="#" className="text-xl font-bold">
    //           <span className="text-main-1">Delph</span><span className="text-back-2">in</span>Tech
    //         </a>

    //         {/* Mobile button */}
    //         <button onClick={() => setOpen(!open)}
    //           className="lg:hidden text-white focus:outline-none">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
    //               d= {open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
    //           </svg>
    //         </button>

    //         {/* Desktop menu */}
    //         <ul className="hidden lg:flex space-x-8 ml-auto">
    //           <li><a href="#home" className="hover:text-red-500">Accueil</a></li>
    //           <li><a href="#about" className="hover:text-red-500">A propos</a></li>
    //           <li><a href="#resume" className="hover:text-red-500">Curriculum</a></li>
    //           <li><a href="#portfolio" className="hover:text-red-500">Portfolio</a></li>
    //           <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
    //         </ul>

    //         {/* Mobile menu */}
    //       {open && (
    //         <div className="lg:hidden pb-4">
    //           <ul className="flex flex-col space-y-4">
    //             <li><a href="#home" className="block hover:text-red-500">Accueil</a></li>
    //             <li><a href="#about" className="block hover:text-red-500">A propos</a></li>
    //             <li><a href="#resume" className="block hover:text-red-500">Curriculum</a></li>
    //             <li><a href="#portfolio" className="block hover:text-red-500">Portfolio</a></li>
    //             <li><a href="#contact" className="block hover:text-red-500">Contact</a></li>
    //           </ul>
    //         </div>
    //       )}

    //       </div>
    //     </div>
    //   </nav>)

    // return (
    // <nav className="fixed top-0 w-full bg-dark-1/80 text-back-3 z-50">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <div className="flex items-center justify-between h-16">

    //       {/* Logo */}
    //       <a href="#" className="text-xl font-bold">
    //         <span className="text-main-1">Delph</span><span className="text-back-2">in</span>Tech
    //       </a>

    //       {/* Mobile button */}
    //       <button onClick={() => setOpen(!open)}
    //         className="lg:hidden text-white focus:outline-none">
    //         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
    //             d= {open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
    //         </svg>
    //       </button>

    //       {/* Desktop menu */}
    //       <ul className="hidden lg:flex space-x-8 ml-auto">
    //         <li><a href="#home" className="hover:text-red-500">Accueil</a></li>
    //         <li><a href="#about" className="hover:text-red-500">A propos</a></li>
    //         <li><a href="#resume" className="hover:text-red-500">Curriculum</a></li>
    //         <li><a href="#portfolio" className="hover:text-red-500">Portfolio</a></li>
    //         <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
    //       </ul>

    //       {/* Mobile menu */}
    //     {open && (
    //       <div className="lg:hidden pb-4">
    //         <ul className="flex flex-col space-y-4">
    //           <li><a href="#home" className="block hover:text-red-500">Accueil</a></li>
    //           <li><a href="#about" className="block hover:text-red-500">A propos</a></li>
    //           <li><a href="#resume" className="block hover:text-red-500">Curriculum</a></li>
    //           <li><a href="#portfolio" className="block hover:text-red-500">Portfolio</a></li>
    //           <li><a href="#contact" className="block hover:text-red-500">Contact</a></li>
    //         </ul>
    //       </div>
    //     )}

    //     </div>
    //   </div>
    // </nav>)
