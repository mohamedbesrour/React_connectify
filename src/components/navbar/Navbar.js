import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <Link to="/">Accueil</Link><br></br>
        <Link to="/connexion">Connexion</Link><br></br>
        <Link to="/inscription">Inscription</Link>
    </nav>
  )
}
