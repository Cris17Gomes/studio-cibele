import React from 'react';
import './BlogPage.css';
import blogImg from '../assets/blogImage.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function BlogPageImage() {
  return (
    <div className="App">
      <div className="blog-container">
        <h2>Dica de Unha</h2>
        {/* <Link to="/blog" className="back-arrow">← Voltar</Link> */}

        {/* Seção de Cor da Semana */}
        <div className="color-trend-box">
          <h3>🎨 Cor da Semana: Lavanda Inverno</h3>
          <p>
            A lavanda é a queridinha da estação! Essa tonalidade suave e elegante combina perfeitamente com os dias mais frios, trazendo delicadeza e sofisticação para as unhas. Use como base para nail arts florais, francesinhas invertidas ou até com um toque de glitter para ocasiões especiais. A Lavanda Inverno representa calma, estilo e atitude. Aposte nessa vibe!
          </p>
        </div>

       <div className="image-buttons-wrapper">
  <img src={blogImg} alt="Lavanda Inverno" className="blog-image-side" />
  <div className="blog-buttons">
    <a
      href="https://wa.me/?text=Confira%20essa%20dica%20de%20unha!%20https://cibelegomesnails.vercel.app/blog/texto"
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

      </div>

      <Footer />
    </div>
  );
}
