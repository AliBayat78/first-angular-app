import { Component } from '@angular/core';
import { Todo } from './Todo';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-angular-app';

  todos: Todo[] = [
    { name: 'Task1', isCompleted: true },
    { name: 'Task1', isCompleted: true },
  ];
  newTodo: string = '';

  displayedColumns: string[] = ['name', 'isCompleted'];
  dataSource = new MatTableDataSource<Todo>(this.todos);

  addTodo() {
    if (this.newTodo) {
      let todo = { name: '', isCompleted: false };
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.dataSource = new MatTableDataSource<Todo>(this.todos);
      this.newTodo = '';
      console.log(this.todos);
    } else {
      alert('Please Enter Todo');
    }
  }

  removeTodo(todo: Todo) {
    const updatedTodos = this.todos.filter((item) => item !== todo);
    this.todos = updatedTodos;
    this.dataSource = new MatTableDataSource<Todo>(this.todos);
  }

  toggleCompleted() {
    const index = this.todos.findIndex((i) => i);
    !this.todos[index].isCompleted;
    console.log(this.todos);
  }
}
