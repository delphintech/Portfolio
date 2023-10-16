export default function Footer() {
  return (
     <div className="vg-footer">
      <h1 className="text-center">DelphinTech</h1>
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-6 col-lg-3 py-3">
            <div >
              <p>Réseaux</p>
              <hr className="divider" />
              <ul className="list-unstyled">
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Github</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3">
            <div>
              <p>Contact</p>
              <hr className="divider" />
              <ul className="list-unstyled">
                <li>delphine.abouab@outlook.fr</li>
                <li>+33 6 79 32 77 51</li>
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
