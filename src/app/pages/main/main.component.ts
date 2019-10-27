import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public selectedTodoListIndex = 0;
  public todos = [
    {
      name: 'todos',
      todos: []
    }
  ];

  constructor() { }

  addToDo() {
    const input: any = document.getElementById('input');
    const inputText = input.value;
    this.todos[this.selectedTodoListIndex].todos.push({name: inputText, state: 'toDo'});
    (document.getElementById('input') as HTMLInputElement).value = '';
  }

  DoToDo(index: number) {
    this.todos[this.selectedTodoListIndex].todos[index].state = 'done';
  }

  DeleteToDo(index: number) {
    this.todos[this.selectedTodoListIndex].todos.splice(index, 1);
  }

  selectList(index: number) {
    this.selectedTodoListIndex = index;
  }

  addList() {
    this.todos.push({name: (document.getElementById('addListInput') as HTMLInputElement).value, todos: []});
    (document.getElementById('addListInput') as HTMLInputElement).value = '';
  }

  deleteList(index: number) {
    this.todos.splice(index, 1);
  }

  ngOnInit() {
  }

}
