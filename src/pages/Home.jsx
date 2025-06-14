// src/pages/Home.jsx
import React from 'react';
import Carousel from '../components/Carousel';
import HomeButtons from '../components/HomeButtons';
import About from '../components/About';
import Services from '../components/Services';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="App">
      <Carousel />
      <HomeButtons />

      <section id="sobre">
        <About />
      </section>

      <section id="servicos">
        <Services />
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
