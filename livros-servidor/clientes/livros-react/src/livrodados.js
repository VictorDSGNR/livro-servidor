import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ControleLivro } from './controle/ControleLivros';
const controlador = new ControleLivro

export const obterLivros = () => {
  const livrosSalvos = localStorage.getItem('livros');
  return livrosSalvos ? JSON.parse(livrosSalvos) : [];
};

const LivroDados = () => {
  const navigate = useNavigate();
  
  const opcoes = [
    { codEditora: 1, nome: "Alta Books" },
    { codEditora: 2, nome: "Bookman" },
    { codEditora: 3, nome: "Addison Wesley" },
    { codEditora: 4, nome: "Pearson" },
  ];

  // Inicializa codEditora com o valor do primeiro item de opcoes como string
  const [codEditora, setCodEditora] = useState(opcoes[0]?.codEditora.toString());
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');

  const tratarCombo = (evento) => {
    setCodEditora(evento.target.value);
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const novoLivro = {
      titulo,
      resumo,
      codEditora: Number(codEditora) ?? 1,
      autores
    };

    controlador.adicionarLivro(novoLivro).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Livro</h2>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo">Título</label>
          <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo">Resumo</label>
          <textarea className="form-control" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="editora">Editora</label>
          <select className="form-select" id="editora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map(opcao => (
              <option key={opcao.codEditora} value={opcao.codEditora}>{opcao.nome}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="autores">Autores (1 por linha)</label>
          <textarea className="form-control" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </div>
  );
};

export default LivroDados;
