/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/galleri.css'; // Import the CSS file for styling

// Import images from the local images folder
import image1 from '../img/gallery img/img1.JPG';
import image2 from '../img/gallery img/img2.JPG';
import image3 from '../img/gallery img/img3.JPG';
import image4 from '../img/gallery img/img4.JPG';
import image5 from '../img/gallery img/img5.JPG';
import image6 from '../img/gallery img/img6.JPG';
import image7 from '../img/gallery img/img7.JPG';
import image8 from '../img/gallery img/img8.JPG';
import image9 from '../img/gallery img/img9.JPG';
import image10 from '../img/gallery img/img10.JPG';
import image11 from '../img/gallery img/img11.JPG';
import image12 from '../img/gallery img/img12.JPG';


const Galleri = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12
  ];

  return (
    <div className="gallery-whole-container">
            <div className="gallery-banner">
        <h1>GALLERI</h1>
      </div>
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Galleri;