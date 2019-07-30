import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule),
    runGuardsAndResolvers: 'always'},
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: '**', redirectTo: '/todo', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
