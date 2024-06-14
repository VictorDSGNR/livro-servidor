import { Livro } from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id?: string | null;
    codEditora: number | null;
    titulo: string;
    resumo: string;
    autores: string[];
   }

export class ControleLivro {
    private livros: Livro[] = [];

    constructor() {
    }

    async obterLivros(): Promise<Livro[]> {
        const response = await fetch(baseURL);
        const livrosMongo: LivroMongo[] = await response.json();
        return livrosMongo.map(livroMongo => new Livro(   
            livroMongo._id,
            livroMongo.codEditora,
            livroMongo.titulo,
            livroMongo.resumo,
            livroMongo.autores
        ));
    }

    async adicionarLivro(livro: Livro): Promise<boolean> {
        const autores = `${livro.autores}`.split('\n')
        const livroMongo: LivroMongo = {
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: autores,
        };
        const response = await fetch(baseURL, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(livroMongo),
        });
        
        return response ? true : false;
    }

    async removerLivro(codigo: string): Promise<boolean> {
        const response = await fetch(`${baseURL}/${codigo}`, {
           method: 'DELETE',
        });
  
        return response ? true : false;
    }

}
