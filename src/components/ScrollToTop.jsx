import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

 const toggleVisible = () => {
  const scrolled = window.scrollY || document.documentElement.scrollTop;
  setVisible(scrolled > 300);
};


  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={`scroll-to-top ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}
