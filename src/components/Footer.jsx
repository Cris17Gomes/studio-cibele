import React from 'react';
import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com/cibelegomesnails?igsh=MWNlaTVkbG0zemFjdQ==" target="_blank" rel="noreferrer">
          <FaInstagram size={30} color="#ff69b4"/>
        </a>
        <a href="https://wa.me/5511985594558" target="_blank" rel="noreferrer">
          <FaWhatsapp size={30} color="#9932cc"/>
        </a>
        <a href="https://github.com/Cris17Gomes" target="_blank" rel="noreferrer">
          <FaGithub size={30} color="#000"/>
        </a>
      </div>
      <p className="footer-text">
  © 2025 Desenvolvido por Cristiano Gomes. Todos os direitos reservados.
</p>
{/* <div className="visitor-counter">
  <img
    src="https://api.visitorbadge.io/api/visitors?path=cibelegomesnails&label=Visitors&countColor=%23f072d1&labelColor=%23e8c1f8&style=flat"
    alt="visitors"
  />
</div> */}


    </footer>
  );
}
