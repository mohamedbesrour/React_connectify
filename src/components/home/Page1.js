import React from "react";
import "../../styles/header.css";
import "../../styles/sectionAccueil.css";
import "../../styles/sectionContact.css";
import Text from "../text";


export default function Page1() {
  return (
    <main>
      <div className="Page12">
{/* section Bienvenue */}
<section>
          <div className="sectionBienvenue">
            <div className="titreBienvenue">
              <h2>Bienvenue</h2>
              <p className="texteBienvenue">
                "Harmonisez vos passions, partagez vos émotions avec
                Connectify!"{" "}
              </p>
            </div>
          </div>
</section>

<Text
cName=""
text="Actualite"
text2="Le lieu où vous pouvez vous connecter avec vos amis,
partager des moments spéciaux et explorer de nouvelles
rencontres.
Le lieu où vous pouvez vous connecter avec vos amis,
partager des moments spéciaux et explorer de nouvelles
rencontres.
"/>
<Text
cName="mon texte"
text="Actualite"/>


{/* section Actualité */}
<section className="blocAcc">
          <div className="container">
            <div className="form-container">
              <div className="left-container">
              IMAGE</div>
              <div className="right-container">
              <div className="left-inner-container">
                  <h2>Actualité</h2>
                  <br></br>
                  <br></br>
                  <p className="texte">
                    Le lieu où vous pouvez vous connecter avec vos amis,
                    partager des moments spéciaux et explorer de nouvelles
                    rencontres.
                  </p>
                  <p className="texte">
                    Exprimez-vous à travers des photos, des vidéos et des
                    messages, et découvrez le monde passionnant de la communauté
                    Connectify.
                  </p>
                  <p className="texte">
                    Rejoignez-nous dès maintenant et commencez à créer des
                    liens, à inspirer et à être inspiré. Connectify est là pour
                    vous aider à rester connecté et à célébrer les moments de la
                    vie, ensemble.
                  </p>
                </div>
              </div>
            </div>
          </div>
</section>


{/* section Qui sommes nous */}
<section className="blocAcc">
          <div className="container">
            <div className="form-container">
              <div className="right-container">
              <div className="left-inner-container">
                  <h2>Qui sommes nous ?</h2>
                      <br></br>
                      <br></br>
                  <p className="texte">
                  Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier.
                  </p>  <br></br>
                  <p className="texte">
                  Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.
                  </p>
                </div>
              </div>



              <div className="left-container">
IMAGE
              </div>

            </div>
          </div>
</section>


{/* section Contact */}
<section className="blocAcc">
  <div className="container">
            <div className="form-container">
              <div className="left-container">
              IMAGE</div>
              <div className="right-container">
                <div className="formulContact">
                  <form action="#">
                    <h2 className="lg-view">Nous Contacter</h2>
                    <h2 className="sm-view">Contact</h2>
                    <p>* Required</p>
                    <input type="text" placeholder="Name.." />
                    <input type="email" placeholder="Email.." />
                    {/* <input type="text" placeholder="Company"/>
                        <input type="phone" placeholder="Phone" /> */}
                    <textarea
                      rows={4}
                      placeholder="Message.."
                      defaultValue={""}
                    />
                    <button>Submit</button>
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
      <p className="texte">Inscrivez-vous à notre newsletter pour rester informé et connecté avec Connectify !</p>
      <input type="email" placeholder="Email *" />
      <button>Submit</button>
    </div>
  </div>
</section>
      </div>
    </main>
  );
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
