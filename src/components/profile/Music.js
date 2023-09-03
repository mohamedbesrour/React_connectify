import React from 'react'
import '../profile/profile.css';
import Image from '../../Image/music1.png';
import Image2 from '../../Image/music2.png';
function Music() {
  return (
    <div className='musicProfile'>
        <div className='musicElement'><img className='musicImage' src={Image} /></div>
        <div className='musicElement'><img className='musicImage' src={Image2} /></div>
    </div>
  )
}

export default Music