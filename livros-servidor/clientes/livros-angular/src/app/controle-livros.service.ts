import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id?: string | null;
  codEditora: number  | null;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
 providedIn: 'root'
})
export class ControleLivrosService {
 livros: Livro[] = [];

 constructor() { }


 async obterLivros(): Promise<Livro[]> {
  try {
     const response = await fetch(baseURL);
     const livrosMongo: LivroMongo[] = await response.json();
     return livrosMongo.map(livroMongo => new Livro(
       livroMongo._id,
       livroMongo.codEditora,
       livroMongo.titulo,
       livroMongo.resumo,
       livroMongo.autores
     ));
  } catch (error) {
     console.error('Erro ao obter livros:', error);
     return [];
  }
 }

  async incluir(livro: Livro): Promise<boolean> {
    try {
        const autores = `${livro.autores}`.split('\n')
        const livroMongo: LivroMongo = {
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: autores,
        };
        const response = await fetch(baseURL, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(livroMongo),
       });
       const result = await response.json();
       return result.ok;
    } catch (error) {
       console.error('Erro ao incluir livro:', error);
       return false;
    }
   }

  async excluir(codigo: string | null | undefined): Promise<boolean> {
    try {
       const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
       const result = await response.json();
       return result.ok;
    } catch (error) {
       console.error('Erro ao excluir livro:', error);
       return false;
    }
  }
}

