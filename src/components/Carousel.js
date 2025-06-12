import React from 'react';
import './Carousel.css';

const images = [
  '/assets/img1.jpg',
  '/assets/img2.jpg',
  '/assets/img3.jpg'
];

export default function Carousel() {
  return (
    <div className="carousel">
      {images.map((src,i) =>
        <img key={i} src={src} alt="" className="carousel-image" />
      )}
    </div>
  );
}
