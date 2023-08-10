import React from 'react'
import "../connexion/connexion.css";
export default function Connexion() {
  return (
    <div><h1>Connexion</h1>
    
    
    
  
      <div className="container">
        <div className="form-container">
          <div className="left-container">
            <img src="imageConnexion.jpg" alt="image radio" />
          </div> {/**/}
          <div className="right-container">
            <h2 className="lg-view">Connexion</h2>
            <h2 className="sm-view">Connexion</h2>
            <div className="formulaire">
              <form action="#">
                <h4>Email</h4>
                <input type="email" placeholder="Entrer votre email" />
                <h4>Mot de passe :</h4>
                <input type="password" placeholder="Entrez votre mot de passe" />
                <button>Se connecter</button>
              </form>
            </div>
            <h5>Pas de compte ?<a href>Inscrivez-vous</a></h5>
          </div>
        </div>
      </div>  
    
    
    
    
    </div>
  )
}