import React from 'react';
import "../styles/header.css";

export default function Page1() {
  return (
    <div>
      <h1>Page1</h1>
    <p>Ceci est un message pour me rappeler d'ajouter une div en global et de déplacer mes elements du header dans cette section main ci-dessous</p>
    <div className="blocAcc1">
        <div>
          <h2 className="bienvenue">Bienvenue</h2></div>
          <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
        </div>
        <div className="blocAcc2"></div>
        <div className="blocAcc3"></div>
        <div className="blocAcc4"></div>
    </div>
  )
}
// import video from "../Image/videoConnectify.mp4";
// import navBar from ""
/*export default function Main() {
  return (
    <main className="mainContainer">
        <h1>Les composents</h1>
        <img src={ReactLogo} alt='logo React'></img>
    </main>
  );
}*/

