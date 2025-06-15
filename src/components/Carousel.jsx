import React, { useState } from 'react';
import './Carousel.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const images = [img1, img2, img3, img4];

export default function Carousel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel-track">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="carousel-image"
              onClick={() => openModal(src)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalImage} alt="Zoomed" />
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </>
  );
}
