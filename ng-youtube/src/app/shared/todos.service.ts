import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({ providedIn: 'root' })

export class TodosService {
  private todos: Todo[] = [];

  constructor(private http: HttpClient) {

  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(delay(2000))
      .pipe(tap((todos) => this.todos = todos));
  }

  onToggle(id: number): void {
    const ind = this.todos.findIndex((item) => item.id === id);
    this.todos[ind].completed = !this.todos[ind].completed;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((item) => item.id !== id);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}
