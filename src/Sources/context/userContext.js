import { createContext, useState, useEffect } from "react"; //useContext,
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const UserContext = createContext();
export function UserContextProvider(props) {
  // Fonction pour l'inscription'
  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);
// Fonction pour la connexion d'un utilisateur
  const logIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

  // État local pour stocker les informations de l'utilisateur actuel
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);


  // Effect surveiller les changements d'état d'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
    // Désinscription
  }, []);

  return (
    <UserContext.Provider value={{ signUp, currentUser, logIn }}>
      {!loadingData && props.children}
    </UserContext.Provider> 
  );{/* Rendre les enfants uniquement lorsque le chargement des données est terminé */}
}
