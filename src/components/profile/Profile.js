import React from 'react';
import '../profile/profile.css';
import Image from '../../Image/avatar.png';
import Text from '../home/text.js'
import Post from '../profile/Post';
import Galerie from '../profile/galerie.js';
import Music from '../profile/Music.js';
import Video from './Video.js';
import Footer from '../Footer';
export default function Profile() {
  return (
    <div>
      <div className="banner">
        {/* <img className='image' src={Image}/> */}
        <div className='bannerProfile'><img className='avatar' src={Image} />
          <Text cName="name"
                text="Besrour"
                text2="Mohamed"
                />
        </div>
      </div>

      <div className="containerProfile">{/* conteneur */}
        <h2>Profil d'utilisateur</h2>
        <input className="radio" id="one" name="group" type="radio" defaultChecked="" />{/* liens entre les tabss */}
        <input className="radio" id="two" name="group" type="radio" />
        <input className="radio" id="three" name="group" type="radio" />
        <input className="radio" id="four" name="group" type="radio" />
        <input className="radio" id="five" name="group" type="radio" />

        <div className="tabs">{/* tabs */}
          <label className="tab" id="one-tab" htmlFor="one">ALL</label>
          <label className="tab" id="two-tab" htmlFor="two">profile</label>
          <label className="tab" id="three-tab" htmlFor="three">galerie</label>
          <label className="tab" id="four-tab" htmlFor="four">vidéo</label>
          <label className="tab" id="five-tab" htmlFor="five">Music</label>
        </div>

        <div className="panels">{/* contenue des tabs */}

          <div className="panel" id="one-panel">
            <div className="panel-title">ALL</div>
            <Post />
            <Galerie />
            <Video />
            <Music />
          </div>
          <div className="panel" id="two-panel">
            <div className="panel-title">profile</div>
            <Post />
          </div>
          <div className="panel" id="three-panel">
            <div className="panel-title">galerie</div>
            <Galerie />
          </div>
          <div className="panel" id="four-panel">
            <div className="panel-title">Video</div>
            <Video />
          </div>
          <div className="panel" id="five-panel">
            <div className="panel-title">Music</div>
            <Music />
          </div>

        </div>
      </div>

      
      <Footer />
    </div>
  )
}
