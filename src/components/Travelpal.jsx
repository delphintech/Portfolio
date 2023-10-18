import around from "../assets/img/projets/travelpal/Travelpal - around.png"
import chat from "../assets/img/projets/travelpal/Travelpal - chat.png"
import dashMap from "../assets/img/projets/travelpal/Travelpal - Dashboard map.png"
import dashPics from "../assets/img/projets/travelpal/Travelpal - Dashboard pics.png"
import feed from "../assets/img/projets/travelpal/Travelpal - feed.png"
import cover from "../assets/img/projets/travelpal/Travelpal - cover2.png"


const travelpal = {
  card: {
    img: cover,
    title: "TravelPal",
    text: "Réseau social de création, suivi et partage de journaux de voyage"
  },

  details: {
    img: [feed, around, chat, dashMap, dashPics],
    title: "TravelPal",
    text:
      <div>
        <br/>
        <span className="icons">
          <i className="icon-ruby-on-rails" />
          <i className="icon-javascript" />
          <i className="icon-sass"> </i>
          <i className="icon-html5"/>
        </span><br/>
        <em>Ruby on Rails, Stimulus (Javscript), HTML5, SASS</em><br/><br/>
        <ul>
          <li><strong>PostgreSQL: </strong>Base de donnée</li>
          <li><strong>ActionCable: </strong>Chatroom</li>
          <li><strong>MapBox API: </strong>Trouver les voyageurs autours de soit et voir les voyages</li>
          <li><strong>Bootstrap: </strong>Front et interactivitée (tab, carrousel ...)</li>
        </ul>
      </div>
  }
}

export default travelpal
