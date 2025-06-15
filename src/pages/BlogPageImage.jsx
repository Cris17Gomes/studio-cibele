import React from 'react';
import './BlogPage.css';
import blogImg from '../assets/francesinha.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function BlogPageImage() {
  return (
    <div className="App">
      <div className="blog-container">
        <h2>Dica de Unha: Francesinha Moderna</h2>

        <div className="image-text-section">
          <img src={blogImg} alt="Francesinha moderna" className="blog-image-side" />

          <p className="blog-text-side">
            A francesinha nunca sai de moda, mas você pode inovar usando tons diferentes, glitter ou até desenhos delicados.
            Uma dica é usar fita adesiva para deixar a linha perfeita. Finalize com um top coat para brilho duradouro!
          </p>
        </div>

        <div className="blog-buttons">
          <a
            href="https://wa.me/?text=Confira%20essa%20dica%20de%20unha!%20https://studio-cibele.vercel.app/blog/texto"
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
