import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './BlogPage.css';

export default function BlogPage() {
  return (
    <div className="blog-page-wrapper">
      <div className="blog-container">
        <h2>Escolha como ver a Dica de Unha</h2>

        <div className="blog-choice-buttons">
          <Link to="/blog/texto" className="card-button">Texto</Link>
          <Link to="/blog/video" className="card-button">Vídeo</Link>
        </div>

        <div className="blog-buttons">
          <Link to="/" className="blog-back-button">Voltar para a Página Inicial</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
