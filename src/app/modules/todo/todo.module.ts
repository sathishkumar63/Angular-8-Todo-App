import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared-modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AutoFocusDirective } from '../../core/directive/auto-focus.directive';

@NgModule({
  declarations: [TodoComponent, TodoItemsComponent, AutoFocusDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
