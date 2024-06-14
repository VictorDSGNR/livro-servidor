import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista'; // Ajuste para o caminho correto
import LivroDados from './livrodados'; // Ajuste para o caminho correto e nome do arquivo
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Lista de Livros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dados">Cadastro de Livros</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
