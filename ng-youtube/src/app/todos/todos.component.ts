import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  public loading = true;
  public searchString = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number): void {
    this.todosService.onToggle(id);
  }

  onRemove(id: number): void {
    this.todosService.removeTodo(id);
  }

}
