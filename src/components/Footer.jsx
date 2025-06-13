import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://instagram.com/seuPerfil" target="_blank" rel="noreferrer">
        <FaInstagram size={30} color="#ff69b4"/>
      </a>
      <a href="https://wa.me/5511985594558" target="_blank" rel="noreferrer">
        <FaWhatsapp size={30} color="#9932cc"/>
      </a>
    </footer>
  );
}
