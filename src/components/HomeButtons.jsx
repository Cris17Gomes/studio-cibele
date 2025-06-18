import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButtons.css';

const buttons = [
  { label: 'Agenda Seu Horário', link: 'https://wa.me/5511985594558', external: true },
  { label: 'Como chegar', link: 'https://maps.app.goo.gl/rFQnePA9Xv4qfuKR7?g_st=aw', external: true },
  { label: 'Nossas Redes Sociais', link: 'https://www.instagram.com/cibelegomesnails?igsh=MWNlaTVkbG0zemFjdQ==', external: true },
  { label: 'Deixe sua avaliação', link: '/avaliacao', external: false }, // Rota interna
  { label: 'Sobre Mim', link: '#sobre', external: false },
  { label: 'Nossos Serviços', link: '#servicos', external: false },
  { label: 'Dicas de Unhas', link: '/blog', external: false }
];

export default function HomeButtons() {
  return (
    <div className="home-buttons">
      {buttons.map((btn, i) =>
        btn.external ? (
          <a
            key={i}
            href={btn.link}
            className="card-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {btn.label}
          </a>
        ) : (
          <Link key={i} to={btn.link} className="card-button">
            {btn.label}
          </Link>
        )
      )}
    </div>
  );
}
