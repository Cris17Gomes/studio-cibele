import React from 'react';
import './BlogPage.css';

export default function BlogPage() {
  return (
    <div className="blog-container">
      <h2>Dica de Unha: Francesinha Moderna</h2>

      <p>Assista o vídeo abaixo com passo a passo fácil:</p>
      <div className="video-wrapper">
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/Dhdf8Sx5SM0"
    title="Dica de Unha"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


      <p>Dica: Para uma francesinha perfeita, use fita adesiva ou moldes.</p>

      <div className="blog-buttons">
        <a
          href="https://www.youtube.com/watch?v=Dhdf8Sx5SM0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir no YouTube
        </a>

        <a
          href="https://wa.me/?text=Confira%20essa%20dica%20de%20unha%20linda!%20https://seusite.com/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Compartilhar no WhatsApp
        </a>

        {/* <a
          href="https://www.instagram.com/stories/highlights/17987500068451299/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no Instagram
        </a> */}
      </div>
    </div>
  );
}
