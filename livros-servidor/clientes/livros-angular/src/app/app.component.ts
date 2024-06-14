import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LivroListaComponent, LivroDadosComponent, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppComponent {
  title = 'livros-angular';
}
