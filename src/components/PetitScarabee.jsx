import dash from "../assets/img/projets/petitScarabee/dashboard_lpt.png"
import landing from "../assets/img/projets/petitScarabee/landing_lpt.png"
import lessonsList from "../assets/img/projets/petitScarabee/list_lpt.png"
import lessonPage from "../assets/img/projets/petitScarabee/lesson_lpt.png"
import cover from "../assets/img/projets/petitScarabee/Petit scarabée - cover.avif"

const petitScarabee = {
  card: {
    img: cover,
    title: "Petit-scarabée",
    text: "Marketplace de propositions et réservations de lessons entre particuliers."
  },

  details: {
    img: [landing, lessonsList, lessonPage, dash],
    title: "Petit-scarabée",
    text:
      <div>
        <br/>
        <span className="icons">
          <i className="icon-ruby-on-rails" />
          <i className="icon-javascript" />
          <i className="icon-sass"> </i>
          <i className="icon-html5"/>
        </span><br/>
        <em>Ruby on Rails, Stimulus (Javscript), SASS, HTML5</em><br/><br/>
        <ul>
          <li><strong>PostgreSQL: </strong>Base de donnée</li>
          <li><strong>MapBox API: </strong>Montrer la localisation du cours</li>
          <li><strong>Flastpickr: </strong>Gestion des calendriers</li>
          <li><strong>Bootstrap: </strong>Front et interactivitée (tab, carrousel ...)</li>
        </ul>
      </div>
  }
}

export default petitScarabee
