import React from 'react';
import ReactPlayer from 'react-player';

// import Video from "../../Image/videoConnectify.mp4";
import '../profile/profile.css';


function Video() {
  const videoEnded = () => {
    alert('la vidéo est terminée')
  }
  return (
    <div className='videoProfile'>
    {/* <video src={Video} className='videoProfile' autoPlay loop muted></video> */}
    <ReactPlayer url='https://www.youtube.com/watch?v=SMcztSqSQ18'
    controls
    // playing
    // muted
    onEnded={videoEnded}
    className='wrapper'
    width="100%"/>
    </div>
  )
}

export default Video;