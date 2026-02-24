export default function Footer() {
  return (
     <div className="relative block m-0 py-12 bg-dark-1 text-back-2">
      <h1 className="text-center font-lta">DelphinTech</h1>

      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap justify-around">
          <div className="col-md-6 col-lg-3 py-3">
            <div >
              <p>Réseaux</p>
              <hr className="block my-4 -mt-5 max-w-38 border-b-2 border-dashed border-back-2" />
              <ul className="list-none pl-0">
                <li><a 
                      href="https://www.linkedin.com/in/delphine-abouab/"  
                      rel="noreferrer" 
                      target="_blank"
                      className="mb-1.5 text-xl text-white"
                      >
                        Linkedin
                  </a></li>
                <li><a 
                  href="https://github.com/delphintech" 
                  rel="noreferrer" 
                  target="_blank"
                  className="mb-1.5 text-xl text-white"
                  >
                    Github
                  </a></li>
              </ul>
            </div>
          </div>
          {/* here */}
          <div className="col-md-6 col-lg-3 py-3">
            <div>
              <p>Contact</p>
              <hr className="block my-4 -mt-5 max-w-38 border-b-2 border-dashed border-back-2" />
              <ul className="list-unstyled">
                <li><a href="mailto:delphine.abouab@outlook.fr">delphine.abouab@outlook.fr</a></li>
                <li><a href="tel:+33679327751">+33 6 79 32 77 51</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">

          <div className="col-12">
            <p className="text-center mb-0 mt-4">© Copyright 2023 - Delphine Abouab. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
