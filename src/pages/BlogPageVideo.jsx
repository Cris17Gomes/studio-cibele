import React from 'react';
import './BlogPage.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function BlogPageVideo() {
  return (
    <div className="App">
      <div className="blog-container">
        <h2>Dica de Unha: Francesinha Moderna</h2>
        <Link to="/blog" className="back-arrow">← Voltar</Link>


        <div className="video-wrapper small">
          <iframe
            src="https://www.youtube.com/embed/Dhdf8Sx5SM0"
            title="Dica de Unha"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="blog-buttons">
          <a
            href="https://www.youtube.com/watch?v=Dhdf8Sx5SM0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no YouTube
          </a>

          <a
            href="https://wa.me/?text=Confira%20essa%20dica%20de%20unha!%20https://cibelegomesnails.vercel.app/blog/video"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compartilhar no WhatsApp
          </a>

          <Link to="/" className="blog-back-button">
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
