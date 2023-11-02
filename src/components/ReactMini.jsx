import tenzy from "../assets/img/projets/react/Tenzy_vf.gif"
import cover from "../assets/img/projets/react/react-pic.jpg"
import notePad from "../assets/img/projets/react/NotePad-phone.png"
// import firebase from "../assets/img/projets/react/firebaseIcon"


const reactMini = {
  card: {
    img: cover,
    title: "React mini projects",
    text: "Mini projets pour appronfondir de ReactJS"
  },

  details:[
    {
    img: tenzy,
    title: "Tenzi Game",
    text:
      <div>
        <br/>
        <span className="icons">
          <i className="icon-reactjs" />
          <i className="icon-sass" />
          <i className="icon-html5" />
        </span><br/>
        <em>ReactJS, SASS, HTML5</em><br/><br/>
        <ul>
          <li><strong>Local Storage: </strong>Suivi des meilleurs scores</li>
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
          <i className="icon-reactjs" />
          {/* <i>{firebase}</i> */}
          <i className="icon-sass"> </i>
          <i className="icon-html5"/>
        </span><br/>
        <em>ReactJS, Firebase, SASS, HTML5</em><br/><br/>
        <ul>
          <li><strong>Firebase: </strong>Base de donnée</li>
        </ul>
      </div>
    }
  ]
}

export default reactMini
