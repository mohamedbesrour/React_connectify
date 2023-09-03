// import ReactLogo from "../logo.svg";
import "../styles/header.css";
import "../styles/navBarFooter.css";
import video from "../Image/videoConnectify.mp4";
// import navBar from ""
export default function Header() {
  return (
    <header className="headerContainer">
      <div className="Accueil">
        
        {/* <img src={ReactLogo} alt='logo React'></img> */}

        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <a href="index.html">
                <h2 className="logo">Connectify</h2>
              </a>
            </div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span />
              <span />
              <span />
            </label>
          </div>
          <div className="nav-links">
            <a href="./html/jeu.html">Accueil</a>
            <a href="./html/regle.html">Connexion</a>
            <a href="./html/support.html">Inscription</a>
          </div>
        </div>

        <video src={video} id="background-video" autoPlay loop muted></video>

        <div class="content">
          <h1>Connectify</h1>
        </div>
        
      </div>
    </header>
  );
}
