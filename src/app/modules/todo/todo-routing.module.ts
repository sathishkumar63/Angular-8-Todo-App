import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

const routes: Routes = [
  {
    path: '', component: TodoComponent, children: [
      {
        path: '', children: [
          { path: 'todoitems', component: TodoItemsComponent },
          { path: '', component: TodoItemsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
