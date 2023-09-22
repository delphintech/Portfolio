import './assets/style/index.scss'

import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Profile from "./components/Profile"

function App() {


  return (
    <>
      <div className="vg-page page-home" id="home" >
        <Navbar />
        <Landing />
      </div>
      <Profile />
    </>
  )
}

export default App
