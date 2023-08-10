import React from 'react'
import Header from './components/home/Header.js'
import Main from './components/home/Page1.js'
import Footer from './components/Footer.js'
import './App.css'


// test Route react js
import {Routes, Route} from "react-router-dom"
import Home from "./components/home/Home.js"
import Connexion from "./components/connexion/Connexion.js"
import Inscription from "./components/inscription/Inscription.js"
import Profile from "./components/profile/Profile.js"
import Navbar from "./components/navbar/Navbar.js"


function App() {
return (
<div className="App">
<Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/connexion"   element={<Connexion />} />
  <Route path="/inscription" element={<Inscription/>}/>
  <Route parth="/profil/:id" element={<Profile/>}  />

</Routes>

{/* <Connexion/> */}
<Header/>
<Main/>
<Footer/>
</div> 
)
}

export default App;
/*
import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}*/
