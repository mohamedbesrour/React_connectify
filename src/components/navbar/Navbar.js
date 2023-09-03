import {Link} from "react-router-dom"
// import '../navbar'

import "../../styles/header.css";

export default function Navbar() {
  return (
    <header className="headerContainer">
      <div className="Accueil">

        {/* <img src={ReactLogo} alt='logo React'></img> */}

        <div className="nav">
          <input type="checkbox" id="nav-check" />

          <div className="nav-header">
            <div className="nav-title">
            <Link to="/" className="logo"><a>Connectify</a></Link><br></br>
            </div>
          </div>

          <div className="nav-btn">
            <label htmlFor="nav-check"><br></br><span /><span /><span /></label>
          </div>

          <div className="nav-links">
          <Link to="/" className="homeStyle"><a>Accueil</a></Link><br></br>
          <Link to="/connexion"><a>Connexion</a></Link><br></br>
          <Link to="/inscription"><a>Inscription</a></Link><br></br>
          <Link to="/profil"><a>Profil</a></Link>
          </div>
        </div>
      </div>
    </header> 
  )
}