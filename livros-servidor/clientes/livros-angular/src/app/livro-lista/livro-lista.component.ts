import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-livro-lista',
 templateUrl: './livro-lista.component.html',
 styleUrls: ['./livro-lista.component.css'],
 standalone: true,
 imports: [CommonModule],
})
export class LivroListaComponent implements OnInit {
 public editoras: Editora[] = [];
 public livros: Livro[] = [];

 constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) { }

 ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.servLivros.obterLivros().then((livros:Livro[]) => {
      this.livros = livros;
    });
 }

 excluir(codigo: string | null | undefined): void {
  this.servLivros.excluir(codigo).then(() => {
    this.servLivros.obterLivros().then((livros:Livro[]) => {
      this.livros = livros;
    });
  });
 }

 obterNome = (codEditora: number | null | undefined): string => {
    return this.servEditora.getNomeEditora(codEditora);
 }
}
