import { Fade } from "react-awesome-reveal";

export default function Timeline() {
  return (
    <div className="container my-5">
        <div className="text-center pb-5">
          <Fade direction="down" triggerOnce={true}>
            <div className="badge badge-subhead mb-3">Curriculum</div>
            <h1 className="fw-normal">Expériences & Formations</h1>
          </Fade>
        </div>
      <div className="row">
        <div className="col-md-6">
          <Fade direction="right" cascade triggerOnce={true}>
            <h2 className="fw-normal">Formations</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">2024 - 2027</div>
                <div className="details">
                  <h5>Expert en architecture informatique</h5>
                  <small className="fg-theme">École 42, Paris</small>
                  <p><em>RNCP 7</em><br/>C, C++, Python, Algorithmes, Structures de données, DevOps, Projet collaboratif</p>
                </div>
              </li>
              <li>
                <div className="title">2023</div>
                <div className="details">
                  <h5>Certification de Concepteur(rice)- développeur(se) d&apos;applications web</h5>
                  <small className="fg-theme">Le Wagon, Paris</small>
                  <p><em>RNCP 6</em><br/>Ruby on rails, JS, CSS, HTML, SQL</p>
                </div>
              </li>
              <li>
                <div className="title">2015 - 2016</div>
                <div className="details">
                  <h5>Licence professionnelle Technico-commerciale</h5>
                  <small className="fg-theme">IUT Cachan</small>
                  <p><em>Major de promotion</em><br/>. Alternance chez les Régulateurs Georgin</p>
                </div>
              </li>
              <li>
                <div className="title">2010 - 2014</div>
                <div className="details">
                  <h5>Ecole d&apos;Ingénieur généraliste</h5>
                  <small className="fg-theme">HEI, Lille</small>
                  <p>Validation équivalent licence 3</p>
                </div>
              </li>
            </ul>
          </Fade>
        </div>
        <div className="col-md-6">
          <Fade direction="right" cascade triggerOnce={true}>
            <h2 className="fw-normal">Expériences</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">2023 - 2024</div>
                <div className="details">
                  <h5>Professeure assistante</h5>
                  <small className="fg-theme">Le Wagon, Paris</small>
                  <p>Accompagnement des élèves sur la résolution d&apos;exercices<br/>Explication des cours</p>
                </div>
              </li>
              <li>
                <div className="title">2021 - 2022</div>
                <div className="details">
                  <h5>Commerciale & Customer Success manager</h5>
                  <small className="fg-theme">Plato.immo</small>
                  <p><em>Start-up achetée par Aviv group en mai 2022</em>
                  <br/>Prospection téléphonique, démonstrations du produit, suivi client, articles de presse …
                  <br/>Installations, formations, création d&apos;un product tour(Userpilot), support client (Intercom).</p>
                </div>
              </li>
              <li>
                <div className="title">2018 - 2021</div>
                <div className="details">
                  <h5>Technico-commerciale sédentaire</h5>
                  <small className="fg-theme">Flowserve, Villebon-sur-Yvette</small>
                  <p>Création d&apos;outils en VBA Excel pour optimiser certaines tâches quotidiennes
                  <br/>Accompagnement technique, création d&apos;offres et vérification des commandes pour le matériel de trois usines différentes sur plusieurs systèmes (SAP, Excel, interface extranet...)
                  </p>
                </div>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  )
}
