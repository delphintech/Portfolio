import tenzy from "../assets/img/projets/react/Tenzy_vf.gif"
import cover from "../assets/img/projets/react/react-pic.jpg"
import notePad from "../assets/img/projets/react/NotePad-phone.png"


const reactMini = {
  card: {
    img: cover,
    title: "React mini projects",
    text: "Réseau social de création, suivi et partage de journaux de voyage"
  },

  details:[
    {
    img: tenzy,
    title: "Tenzy Game",
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
    },
    {
    img: notePad,
    title: "NotePad",
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
  ]
}

export default reactMini
