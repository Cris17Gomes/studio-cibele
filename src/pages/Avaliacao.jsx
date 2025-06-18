import React from 'react';
import { Link } from 'react-router-dom';
import avaliacaoImg from '../assets/avaliacao.jpg'; // Coloque a imagem em src/assets/
import './BlogPage.css'; // Reutiliza o mesmo CSS estilizado

export default function Avaliacao() {
  return (
    <div className="App">
      <div className="blog-container">
        <h2>Deixe sua Avaliação</h2>

         <img src={avaliacaoImg} alt="Avaliação" className="avaliacao-image" />

        <p className="blog-text">
          Sua opinião é muito importante para nós! Deixe uma avaliação sobre seu atendimento e ajude outras pessoas a conhecerem o nosso trabalho.
        </p>

        <div className="blog-buttons">
          <a
            href="https://g.page/r/CWmSY_cc0ueEEAE/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avaliar no Google
          </a>

          <a
            href="https://wa.me/?text=Deixe%20sua%20avalia%C3%A7%C3%A3o%20sobre%20o%20atendimento%20da%20Studio%20Cibele:%20https://studio-cibele.vercel.app/avaliacao"
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
  );
}
