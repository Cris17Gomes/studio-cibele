// src/components/HomeButtons.jsx
import React from 'react';
import './HomeButtons.css';

const buttons = [
  { label: 'Agenda Seu Horário', link: 'https://wa.me/5511985594558', external: true },
  { label: 'Como chegar', link: '#mapa' },
  { label: 'Deixe sua avaliação', link: 'https://g.page/studiomusgravita/review', external: true },
  { label: 'Sobre Mim', link: '#sobre' },
  { label: 'Nossos Serviços', link: '#servicos' },
  { label: 'Dicas de Unhas', link: '#blog' },
];

export default function HomeButtons() {
  return (
    <div className="home-buttons">
      {buttons.map((btn, i) => (
        <a
          key={i}
          href={btn.link}
          className="card-button"
          target={btn.external ? '_blank' : '_self'}
          rel="noopener noreferrer"
        >
          {btn.label}
        </a>
      ))}
    </div>
  );
}
