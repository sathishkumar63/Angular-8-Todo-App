import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {

  todos = [];
  todoList: any[];
  leftItems: any[];
  currentState = '';
  newTodo: any = { task: '' };
  editTodo: any = { id: '' };
  masterSelected: boolean;
  constructor() { }

  ngOnInit() {
    this.loadTodo();
  }

  public todoName(): string {
    return 'todos';
  }
  public stateName(): string {
    return 'nowShowing';
  }
  public getState() {
    return localStorage.getItem(this.stateName()) !== null ? localStorage.getItem(this.stateName()) : '';
  }
  public setState(val) {
    localStorage.setItem(this.stateName(), val);
    this.loadTodo();
  }
  public getTodos() {
    let todoTasks = [];
    if (localStorage.getItem(this.todoName()) !== null) {
      todoTasks = JSON.parse(localStorage.getItem(this.todoName()));
    }
    return todoTasks;
  }
  public setTodos() {
    localStorage.setItem(this.todoName(), JSON.stringify(this.todos));
    this.loadTodo();
  }
  public activeTodo() {
    this.leftItems = this.todos.filter((todo: any) => {
      return todo.completed === false;
    });
  }
  public loadTodo() {
    this.todos = this.getTodos();
    this.isAllSelected();
    this.currentState = this.getState();
    this.todoList = this.todos.filter((todo: any) => {
      switch (this.currentState) {
        case 'Active':
          return todo.completed === false;
        case 'Completed':
          return todo.completed === true;
        default:
          return todo;
      }
    });
    this.activeTodo();
  }
  public addTodo(todoForm: NgForm) {
    const todo = todoForm.value;
    if (todo.task !== '') {
      this.todos.push({
        completed: false,
        id: Math.random().toString(36).substring(7),
        title: todo.task
      });
      this.setTodos();
      todoForm.reset();
    }
  }
  public hasEditTodo(task) {
    this.editTodo = task;
  }
  public updateTodo(task) {
    if (task.title !== '') {
      this.todos.forEach((element: any) => {
        if (element.id === task.id) {
          element.title = task.title;
          this.setTodos();
          this.editTodo = {};
        }
      });
    }
  }
  public deleteTodo(task) {
    const index = this.todos.indexOf(task);
    this.todos.splice(index, 1);
    this.setTodos();
  }
  public clearCompleted() {
    this.todos.filter((x) => {
      return x.completed === true;
    }).forEach(x => this.todos.splice(this.todos.indexOf(x), 1));
    this.setTodos();
  }
  public updateTodoStatus(task) {
    this.todos.forEach((element: any) => {
      if (element.id === task.id) {
        task.completed = !task.completed;
        this.setTodos();
      }
    });
  }
  public checkUncheckAll() {
    this.todos.forEach((element: any) => {
      element.completed = this.masterSelected;
    });
    this.setTodos();
  }
  public isAllSelected() {
    this.todos.length !== 0 ? this.masterSelected = this.todos.every((item: any) => {
      return item.completed === true;
    }) : this.masterSelected = false;
  }

}
