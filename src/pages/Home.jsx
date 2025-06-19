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
      <img src="https://api.visitorbadge.io/api/visitors?path=cibelegomesnails&label=Visitantes&countColor=%23f072d1&labelColor=%23e8c1f8&style=flat" alt="visitors" />

    </div>
  );
}
