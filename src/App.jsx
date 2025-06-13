import React from 'react';
import Carousel from './components/Carousel';
import HomeButtons from './components/HomeButtons';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import './App.css';

function App() {
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

      <section id="blog">
        <Blog />
      </section>

      <section id="mapa">
        <MapSection />
      </section>

      <Footer />
    </div>
  );
}

export default App;