import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

export const routes: Routes = [
 { path: '', redirectTo: '/lista', pathMatch: 'full' },
 { path: 'lista', component: LivroListaComponent },
 { path: 'dados', component: LivroDadosComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
