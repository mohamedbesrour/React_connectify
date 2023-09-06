import React from "react";
import "../connexion/connexion.css";
import Footer from "../Footer";
import Image from "../../Image/music3.jpg";
import styled from "styled-components";

import { useContext, useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Sources/context/userContext";

import { auth } from "../../Sources/firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

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

export default function Connexion() {
  const logIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);
  const navigate = useNavigate();
  const [connexion, setConnexion] = useState("");

  // VARIABLE QUI VA STOCKER LES INFOS DU FORMULAIRE
  // PREMIER INITIALISATION DE LA VARIABLE AVANT DE L'UTILISER
  const inputs = useRef([]);
  // VA AJOUTER LES INFOS DU FORMULAIRE DANS LA VARIABLE INPUTS
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };


  
  
  const HandleForm = async (e) => {
    e.preventDefault();
//connexion réussit, redirige l'utilisateur vers profil
    try {
      const credits = await logIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      console.log(credits);
      navigate("/profil");
    } catch (erreur) {
//échec,  message d'erreur/ met à jour l'état de connexion.
      console.log("cc l'erreur " + erreur);
      setConnexion("email et/ou mot de passe non valide ! ");
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="left-container">
            <img src={Image} />
          </div>{" "}
          {/**/}
          <div className="right-container">
            <h2 className="lg-view">Connexion</h2>
            <h2 className="sm-view">Connexion</h2>
            <div className="formulaire">
              <form onSubmit={HandleForm}>
                <h4>Email</h4>
                <input
                  ref={addInputs}
                  type="email"
                  placeholder="Entrer votre email"
                />
                <h4>Mot de passe :</h4>
                <input
                  ref={addInputs}
                  type="password"
                  placeholder="Entrez votre mot de passe"
                />
                <p>{connexion}
                <Button>Se connecter</Button></p>
              </form>
            </div>
            <p className="no-account">
              Pas de compte ? ?{" "}
              <Link to="/inscription" id="sign-in-link">
                Inscrivez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
