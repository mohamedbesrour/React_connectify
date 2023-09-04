import React from "react";
import "../profile/galerie.css";
// import './galerieJS'
import Image1 from '../../Image/image1.jpg';
import Image2 from '../../Image/image2.jpg';
import Image3 from '../../Image/image3.jpg';
import Image4 from '../../Image/image4.jpg';

export default function galerie() {
  return (
    <div className="galerie">

      <ul id="galerie_mini">
        <li><a href="img/grand1.jpg" title="Photo 1"><img src={Image1} className='avatar' alt="Photo 1" /></a></li>
        <li><a href="img/grand2.jpg" title="Photo 2"><img src={Image2} className='avatar' alt="Photo 2" /></a></li>
        <li><a href="img/grand3.jpg" title="Photo 3"><img src={Image3} className='avatar' alt="Photo 3" /></a></li>
        <li><a href="img/grand4.jpg" title="Photo 4"><img src={Image4} className='avatar' alt="Photo 4" /></a></li>
      </ul>
      {/* <dl id="photo"> */}
        {/*  identifie un terme dans une liste de définitions ou de descriptions. */}
        {/* <dd><img src={Image4} className='avatar' alt="Photo 4" style={{ height:235 }}/></dd>
      </dl> */}

    </div>
  );
}