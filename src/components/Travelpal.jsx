import around from "../assets/img/projets/travelpal/Travelpal - around.png"
import chat from "../assets/img/projets/travelpal/Travelpal - chat.png"
import dashMap from "../assets/img/projets/travelpal/Travelpal - Dashboard map.png"
import dashPics from "../assets/img/projets/travelpal/Travelpal - Dashboard pics.png"
import feed from "../assets/img/projets/travelpal/Travelpal - feed.png"
import cover from "../assets/img/projets/travelpal/Travelpal - cover.jpg"


const travelPal = {
  card: {
    img: cover,
    title: "Travelpal",
    text: "Réseau social de création, suivi et partage de journaux de voyages."
  },

  details: {
    img: [feed, around, chat, dashMap, dashPics],
    title: "Travelpal",
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
          <li><strong>PostgreSQL: </strong>Base de données</li>
          <li><strong>ActionCable: </strong>Chatroom</li>
          <li><strong>MapBox API: </strong>Trouver les voyageurs autours de soit et voir les voyages</li>
          <li><strong>Bootstrap: </strong>Front et interactivité (tab, carrousel ...)</li>
        </ul>
      </div>
  }
}

export default travelPal
