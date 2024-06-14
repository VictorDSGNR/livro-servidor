import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-livro-dados',
 templateUrl: './livro-dados.component.html',
 styleUrls: ['./livro-dados.component.css'],
 standalone: true,
 imports: [FormsModule, CommonModule],
})
export class LivroDadosComponent implements OnInit {
 public livro: Livro = new Livro('', 1, '', '', []);
 public editoras: Array<Editora> = [];

 constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
 ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras()
  }

  incluir(): void {
    this.servLivros.incluir(this.livro).then(() => {
       this.router.navigateByUrl('/lista');
    });
  }
}
