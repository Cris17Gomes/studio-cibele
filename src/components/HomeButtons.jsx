import React from 'react';
import './HomeButtons.css';
import { Link } from 'react-router-dom';

const buttons = [
  { label: 'Agenda Seu Horário', link: 'https://wa.me/5511985594558', external: true },
  { label: 'Como chegar', link: 'https://maps.app.goo.gl/rFQnePA9Xv4qfuKR7?g_st=aw', external: true },
  { label: 'Nossas Redes Sociais', link: 'https://www.instagram.com/cibelegomesnails?igsh=MWNlaTVkbG0zemFjdQ==', external: true },
  { label: 'Deixe sua avaliação', link: '/avaliacao', internal: true },
  { label: 'Sobre Mim', link: '#sobre', anchor: true },
  { label: 'Nossos Serviços', link: '#servicos', anchor: true },
  { label: 'Dicas de Unhas', link: '/blog/texto', internal: true }
];

export default function HomeButtons() {
  return (
    <div className="home-buttons">
      {buttons.map((btn, i) => {
        if (btn.external) {
          return (
            <a
              key={i}
              href={btn.link}
              className="card-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn.label}
            </a>
          );
        } else if (btn.anchor) {
          return (
            <a key={i} href={btn.link} className="card-button">
              {btn.label}
            </a>
          );
        } else {
          return (
            <Link key={i} to={btn.link} className="card-button">
              {btn.label}
            </Link>
          );
        }
      })}
    </div>
  );
}
