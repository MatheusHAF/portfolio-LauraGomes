import './styles/App.css';
import Navbar from './components/Pages/Navbar';

import { BrowserRouter as Router, Routes, Route,HashRouter } from 'react-router-dom';
import Container from './components/Pages/Container';
import Home from './components/Pages/Home';
import Sobre from './components/Pages/Sobre';
import Projetos from './components/Pages/Projetos';
import Contatos from './components/Pages/Contatos';
import Footer from './components/Pages/Footer';
import Projeto from './components/Pages/Projeto';
import Galerias from './components/Pages/Galerias';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Sobre' element={<Sobre />} />
            <Route path='/Projetos' element={<Projetos />} />
            <Route path='/Galerias' element={<Galerias />} />
            <Route path='/Contatos' element={<Contatos />} />
            <Route path='/Projeto/:id' element={<Projeto />} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
