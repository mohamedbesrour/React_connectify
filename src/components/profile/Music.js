import React from "react";
import "../profile/profile.css";
import Image from "../../Image/music1.png";
import Image2 from "../../Image/music2.png";
import AudioPlayer from './AudioPlayer';
function Music() {

  return (
    <div className="musicProfile">

      {/* Music 1 */}
      <div className="musicElement">
        <img className="musicImage" src={Image} />
        <AudioPlayer />
      </div>

      {/* Music 2 */}
      <div className="musicElement">
        <img className="musicImage" src={Image2} />
        <AudioPlayer />
      </div>
    </div>
  );
}

export default Music;
