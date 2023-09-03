import React from 'react'
import Footer from "../Footer";
import Image from '../../Image/article.jpg';
import '../inscription/inscription.css'
import styled from 'styled-components'

const Button = styled.button`
border-radius: 16px;
	border: 2px solid black;
	background-color: #DACA3B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 15px 45px;
  margin-bottom: 20px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  cursor:pointer;
`
export default function Inscription() {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="left-container">
          <img src={Image} />
          </div> {/**/}
          <div className="right-container">
            <h2 className="lg-view">Inscription</h2>
            <h2 className="sm-view">Inscription</h2>
            <div className="formulaire">
              <form action="#">
                <div className="blocElementX2">
                  <h4>Nom :</h4><h4>Prénom :</h4></div>
                <div className="blocElementX2">
                  <input className="inputSmall" type="text" placeholder="Entrez votre nom..." />
                  <input className="inputSmall" type="text" placeholder="Entrez votre prénom..." />
                </div>
                <h4>Email</h4>
                <input type="email" placeholder="Entrer votre email..." />
                <div className="blocGenreX2">
                  <label id="Genre" name="sexe">genre :</label>
                  <input type="radio" name="sexe" className="rond" defaultValue="homme" id="homme" />
                  <h4>Homme</h4>
                  <input type="radio" name="sexe" className="rond" defaultValue="femme" id="femme" />
                  <h4>Femme</h4>
                </div>
                <h4>Mot de passe :</h4>
                <input type="password" placeholder="Entrez votre mot de passe..." />
                <h4>Vérification du mot de passe</h4>
                <input type="password" placeholder="Entrez votre mot de passe..." />
                <Button>S'inscrire</Button>
              </form>
            </div>
            <h5>Déja Inscrit ?<a href>Connectez-vous</a></h5>
          </div>
        </div>
      </div>
  <Footer />
</>
  )
}
