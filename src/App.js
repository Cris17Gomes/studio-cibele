import React from 'react';
import './App.css';
import About from './components/About';
import Carousel from './components/Carousel';
import CardButton from './components/CardButton';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Carousel />
      <CardButton />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
