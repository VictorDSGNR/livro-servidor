import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[] = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Bookman' },
    { codEditora: 3, nome: 'Addison Wesley' },
    { codEditora: 4, nome: 'Pearson' }
 ];

 constructor() { }


  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number | null | undefined): string {
    const editora = this.editoras.filter(e => e.codEditora === codEditora);
    return editora.length > 0 ? editora[0].nome : 'Editora não encontrada';
  }
}
