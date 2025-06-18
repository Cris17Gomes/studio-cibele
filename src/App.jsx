import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogPageVideo from './pages/BlogPageVideo';
import BlogPageImage from './pages/BlogPageImage';
import Home from './pages/Home';

import ScrollToTop from './components/ScrollToTop'; // Botão flutuante
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'; // Corrige scroll na troca de rota
import Avaliacao from './pages/Avaliacao';

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/texto" element={<BlogPageImage />} />
        <Route path="/blog/video" element={<BlogPageVideo />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
      </Routes>
    </>
  );
}

export default App;
