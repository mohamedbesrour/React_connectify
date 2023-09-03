import { Routes, Route} from 'react-router-dom';
import Navbar from '../navbar/Navbar'

import Home from '../home/Home'
import Connexion from '../connexion/Connexion'
import Inscription from '../inscription/Inscription'
import Profile from '../profile/Profile'
import Error from './Error'

export default function Header() {
  return (
    <div >
<Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion"   element={<Connexion />} />
        <Route path="/inscription" element={<Inscription/>}/>
        <Route path="/profil" element={<Profile/>}  />
        <Route path="*" element={<Error />}  />
        {/* <Route path="/profil/:id" element={<Profile/>}  /> */}
    </Routes>

    </div>
  )
}