import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage'; // Adicione essa importação
import BlogPageVideo from './pages/BlogPageVideo';
import BlogPageImage from './pages/BlogPageImage';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<BlogPage />} /> {/* Página com os dois botões */}
      <Route path="/blog/texto" element={<BlogPageImage />} />
      <Route path="/blog/video" element={<BlogPageVideo />} />
    </Routes>
  );
}

export default App;
