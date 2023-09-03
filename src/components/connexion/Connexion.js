import React from 'react'
import "../connexion/connexion.css";
import Footer from "../Footer"; 
import Image from '../../Image/music3.jpg';
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

export default function Connexion() {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="left-container">
          <img src={Image} />
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
                <Button>Se connecter</Button>
              </form>
            </div>
            <h5>Pas de compte ?<a>Inscrivez-vous</a></h5>
          </div>
        </div>
      </div>  
  
<Footer />
    </>
  )
}