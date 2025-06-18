import React from 'react';
import './Carousel.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const images = [img1, img2, img3, img4];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-header">
<h2>
  <span className="magic-icon">✨</span> Transforme suas unhas em arte! <span className="magic-icon">✨</span>
</h2>
        <p>Confira alguns dos nossos trabalhos recentes 💅</p>
      </div>

      <div className="carousel">
        <div className="carousel-track">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Slide ${i + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>
    </div>
  );
}
