// import React, {useContext, useRef, useState } from 'react'
// import {UserContext} from "../../Sources/context/userContext"
import { useContext, useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Sources/context/userContext";

import { auth } from "../../Sources/firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import Footer from "../Footer";
import "../inscription/inscription.css";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 16px;
  border: 2px solid black;
  background-color: #daca3b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 45px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
`;

function Inscription() {
  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);
  const navigate = useNavigate();

  // VARIABLE QUI VA STOCKER LES INFOS DU FORMULAIRE
  // PREMIER INITIALISATION DE LA VARIABLE AVANT DE L'UTILISER
  const inputs = useRef([]);
  // VA AJOUTER LES INFOS DU FORMULAIRE DANS LA VARIABLE INPUTS
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const [formatValide, setFormatValide] = useState("");
  const [motDePasseValide, setMotDePasseValide] = useState("");

  // const handleOnChange = () => {
  //   setMotDePasseValide("");
  //   setFormatValide("");
  // };

  // ASYNC INDIQUE QUE C'EST UNE FONCTION ASYNCHRONE, FONCTION EN DEUX TEMPS
  const HandleForm = async (e) => {
    // PREVENTDEFAULT INDIQUE QUE SI L'EVENEMENT N'EST PAS GERER, FAIRE PAR DEFAUT
    e.preventDefault();
    // INPUTS.CURRENT[0] -> [4]
    // LE 0 = NOM / 1 = PRENOM /2 = EMAIL / 3 = MOT DE PASSE / 4 = RETAPE MOT DE PASSE
    if (inputs.current[2].value.length < 6) {
      setFormatValide("C'EST 6 CARACTERES OH");
      return;
    } else if (inputs.current[3].value.length < 6) {
      setMotDePasseValide("TON MOT DE PASSE EST AUSSI PETIT QUE TOI");
      return;
    } else if (inputs.current[3].value !== inputs.current[4].value) {
      setMotDePasseValide("TON MOT DE PASSE DOIT ETRE PAREIL");
      return;
    }
    // LE TRY PERMET D'ESSAYER LES ACTIONS EN PREMIER ET SI CA NE FONCTIONNE PAS, IL ENTRE DANS CATCH
    try {
      const credits = await signUp(
        inputs.current[2].value,
        inputs.current[3].value
      );
      console.log(credits);
      setFormatValide("");
      setMotDePasseValide("");
      navigate("/profil");
    } catch (erreur) {
      console.log("cc l'erreur " + erreur);
    }
  };
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="left-container">
            <img src={Image} />
          </div>

          <div className="right-container">
            <h2 className="lg-view">Inscription</h2>
            <h2 className="sm-view">Inscription</h2>

            <div className="formulaire">
              <form onSubmit={HandleForm}>
                <div className="blocElementX2">
                  <label>Nom</label>
                  <input ref={addInputs} placeholder="Entrez votre nom..." />
                  <label>Prénom</label>
                  <input ref={addInputs} placeholder="Entrez votre prénom..." />
                </div>

                <div className="genre-utilisateur">
                  <label>HOMME</label>
                  <input
                    type="radio"
                    name="genre"
                    className="rond"
                    defaultValue="femme"
                    id="homme"
                  />

                  <label>FEMME</label>
                  <input
                    type="radio"
                    name="genre"
                    className="rond"
                    defaultValue="HOMME"
                    id="homme"
                  />

                  <label>Non renseigner</label>
                  <input
                    type="radio"
                    name="genre"
                    className="rond"
                    defaultValue="PATATE"
                    id="homme"
                  />
                </div>

                <div className="email">
                  <label>EMAIL :</label>
                  <input
                    ref={addInputs}
                    type="email"
                    placeholder="Entrez votre email..."
                  />
                  {/* CETTE BALISE P CONTIENDRA UNE LIGNE POUR DIRE SI L'ADRESSE MAIL EST OK OU PAS
            C'EST A DIRE ASSEZ LONGUE OU UN FORMAT MAIL */}
                  <p>{formatValide}</p>
                </div>
                <div className="mot-de-passe">
                  <label>MOT DE PASSE :</label>
                  <input
                    ref={addInputs}
                    type="password"
                    placeholder="Entrez votre mot de passe à 6 caractères minimums..."
                  />
                  {/* VA INDIQUER UN MESSAGE D'ERREUR SI LE MOT DE PASSE N'EST PAS ASSEZ LONG */}
                  <p>{motDePasseValide}</p>
                  <label>MOT DE PASSE :</label>
                  <input
                    ref={addInputs}
                    type="password"
                    placeholder="Confirmer votre mot de passe..."
                  />
                  {/* CELUI LA POUR SI LES MOTS DE PASSE NE CORRESPONDENT PAS */}
                  <p>{motDePasseValide}</p>
                </div>

                <button>Soumettre</button>
              </form>
            </div>
            <p className="no-account">
              Déjà membre ?{" "}
              <Link to="/connexion" id="sign-in-link">
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inscription;
// export default function Inscription() {

//   return (
//     <>
//       <div className="container">
//         <div className="form-container">
//           <div className="left-container">
//             <img src={Image} />
//           </div>

//           <div className="right-container">
//             <h2 className="lg-view">Inscription</h2>
//             <h2 className="sm-view">Inscription</h2>

//             <div className="formulaire">
//               <form action="#">
//                 <div className="blocElementX2">
//                   <h4>Nom :</h4>
//                   <h4>Prénom :</h4>
//                 </div>

//                 <div className="blocElementX2">
//                   <label id="lastname" name="sexe">
//                     genre :
//                   </label>
//                   <input
//                     className="inputSmall"
//                     type="text"
//                     placeholder="Entrez votre nom..."
//                   />

//                   <label id="name" name="sexe">
//                     genre :
//                   </label>
//                   <input
//                     className="inputSmall"
//                     type="text"
//                     placeholder="Entrez votre prénom..."
//                   />
//                 </div>

//                 <h4>Email</h4>
//                 <input type="email" placeholder="Entrer votre email..." />

//                 <div className="blocGenreX2">
//                   <label id="Genre" name="sexe">
//                     genre :
//                   </label>
//                   <input
//                     type="radio"
//                     name="sexe"
//                     className="rond"
//                     defaultValue="homme"
//                     id="homme"
//                   />
//                   <h4>Homme</h4>

//                   <input
//                     type="radio"
//                     name="sexe"
//                     className="rond"
//                     defaultValue="femme"
//                     id="femme"
//                   />
//                   <h4>Femme</h4>
//                 </div>
//                 <h4>Mot de passe :</h4>
//                 <input
//                   type="password"
//                   placeholder="Entrez votre mot de passe..."
//                 />
//                 <h4>Vérification du mot de passe</h4>
//                 <input
//                   type="password"
//                   placeholder="Entrez votre mot de passe..."
//                 />
//                 <Button>S'inscrire</Button>
//               </form>
//             </div>
//             <h5>
//               Déja Inscrit ?<a href>Connectez-vous</a>
//             </h5>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
