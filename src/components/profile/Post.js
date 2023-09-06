import React from 'react'
import '../profile/profile.css'
import ImgHomer from '../../Image/imgHomer.gif'
function Post() {
  return (
    <>
      <div className='postProfile'>
        <div className='postElement1'><p>Le Rap US vs Rap FR</p></div>
        <div className='postElement2'><img src={ImgHomer} className='gifHomer' alt="Gif Homer" /></div>
      </div>
    </>
  )
}

export default Post