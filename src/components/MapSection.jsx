// src/components/MapSection.jsx
import React from 'react';

export default function MapSection() {
  return (
    <div id="mapa" style={{ marginTop: 50, textAlign: 'center' }}>
      <h2>Como Chegar</h2>
      <iframe
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=COLE O CÓDIGO DO MAPA AQUI"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
