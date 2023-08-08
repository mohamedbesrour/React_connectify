import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/connexion">Connexion</Link>
    </nav>
  )
}
