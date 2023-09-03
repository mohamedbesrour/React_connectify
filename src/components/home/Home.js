import React from "react";
import "../../styles/header.css";
import "../../styles/sectionAccueil.css";
import "../../styles/sectionContact.css";
import video from "../../Image/videoConnectify.mp4";
import Bienvenue from './Bienvenue';
import Text from './text';
import Image1 from '../../Image/img1Accueil.jpg';
import Image2 from '../../Image/img2Accueil.png';
import Image3 from '../../Image/img3Accueil.png';
import Footer from "../Footer";

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

export default function Home() {
  return (
    <div className="Page12">
      
      {/* section 0 Bienvenue */}
      <video src={video} id="background-video" autoPlay loop muted></video>
      <div class="content">
        <h1>Connectify</h1>
      </div>
      <section>
        <Bienvenue />
      </section>


      {/* section 1 Actualité */}
      <section className="blocAcc">
        <div className="container">
          <div className="form-container">
            <div className="left-container">
              <img src={Image1} />
            </div>
            <div className="right-container">
              <div className="left-inner-container">
                <Text
                  cName="actu"
                  text="Actualité"
                  text2="Le lieu où vous pouvez vous connecter avec vos amis, partager
                  des moments spéciaux et explorer de nouvelles rencontres.
                  Exprimez-vous à travers des photos, des vidéos et des
                  messages, et découvrez le monde passionnant de la communauté
                  Connectify. 
                  Rejoignez-nous dès maintenant et commencez à créer des liens,
                  à inspirer et à être inspiré. Connectify est là pour vous
                  aider à rester connecté et à célébrer les moments de la vie,ensemble."
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section 2 Qui sommes nous */}
      <section className="blocAcc">
        <div className="container">
          <div className="form-container">
            <div className="right-container">
              <div className="left-inner-container">
                <Text
                  cName="actu"
                  text="Qui sommes nous ?"
                  text2="Chez Connectify, nous sommes une plateforme sociale dynamique
                et inclusive, dédiée à connecter les individus du monde
                entier.
                Notre objectif est de créer un espace numérique où chacun peut
                se sentir libre d'exprimer sa véritable identité, de partager
                ses passions et de tisser des liens authentiques."
                />
              </div>
            </div>

            <div className="left-container">
              <img src={Image2} />
            </div>
          </div>
        </div>
      </section>


      {/* section 3 Contact */}
      <section className="blocAcc">
        <div className="container">
          <div className="form-container">
            <div className="left-container">
              <img src={Image3} />
            </div>
            <div className="right-container">
              <div className="formulContact">
                <form action="#">
                  <h2 className="lg-view">Nous Contacter</h2>
                  <h2 className="sm-view">Contact</h2>
                  <p>* Required</p>
                  <input type="text" placeholder="Name.." />
                  <input type="email" placeholder="Email.." />
                  <textarea
                    rows={4} placeholder="Message.." defaultValue={""}
                  />
                  <Button>Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section Newsletter */}
      <section>
        <div className="sectionNewsletter">
          <div className="contenuNewsletter">
            <h2>Newsletter</h2>
            <p className="texte">
              Inscrivez-vous à notre newsletter pour rester informé et connecté
              avec Connectify !
            </p>
            <input type="email" placeholder="Email *" />
            <Button>Submit</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
