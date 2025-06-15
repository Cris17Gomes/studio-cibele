import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegação interna
import './HomeButtons.css';

const buttons = [
  { label: 'Agenda Seu Horário', link: 'https://wa.me/5511985594558', external: true },
  { label: 'Como chegar', link: 'https://maps.app.goo.gl/rFQnePA9Xv4qfuKR7?g_st=aw', external: true },
  { label: 'Nossas Redes Sociais', link: 'https://www.instagram.com/cibelegomesnails?igsh=MWNlaTVkbG0zemFjdQ==', external: true },
  { label: 'Deixe sua avaliação', link: 'https://g.page/r/CWmSY_cc0ueEEAE/review', external: true },
  { label: 'Sobre Mim', link: '#sobre', external: false },
  { label: 'Nossos Serviços', link: '#servicos', external: false },
{ label: 'Dicas de Unhas', link: '/blog', external: false }
];

export default function HomeButtons() {
  return (
    <div className="home-buttons">
     {buttons.map((btn, i) => {
  // Se o link começa com '#' (âncora), use <a> simples para scroll na mesma página
  if (!btn.external && btn.link.startsWith('#')) {
    return (
      <a
        key={i}
        href={btn.link}
        className="card-button"
      >
        {btn.label}
      </a>
    );
  }

  // Se for link externo
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
  }

  // Se for link interno do react-router
  return (
    <Link
      key={i}
      to={btn.link}
      className="card-button"
    >
      {btn.label}
    </Link>
  );
})}

    </div>
  );
}
