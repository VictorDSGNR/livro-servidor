import React, { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const controlador = new ControleLivro
const editoraControlador = new ControleEditora

const LivroLista = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    controlador.obterLivros().then(livros => {
      setLivros(livros);
    });
  }, []);

  const excluirLivro = (codigo) => {
    controlador.removerLivro(codigo).then(() => {
      controlador.obterLivros().then(livros => {
        setLivros(livros);
      });
    }).catch((error)=> {
      console.log(error, 'excluirLivro')
    });
  };

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <tr key={index}>
              <td>
                {livro.titulo}
                <br />
                <button 
                  className="btn btn-danger btn-sm mt-2" 
                  onClick={() => excluirLivro(livro._id)}
                >
                  Excluir
                </button>
              </td>
              <td>{livro.resumo}</td>
              <td>{ editoraControlador.getEditoraPorCodigo(livro.codEditora)?.nome ?? '-'}</td>
              <td dangerouslySetInnerHTML={{ __html: livro.autores.join(' <br> ') }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;
