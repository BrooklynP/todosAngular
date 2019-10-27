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

  constructor() {
    if (localStorage.getItem('todos') !== '') {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
    // Save Data
    setInterval(() => {
      const stringifiedArray = JSON.stringify(this.todos);
      localStorage.setItem('todos', stringifiedArray);
  }, 3000);
  }

  addToDo() {
    const input: any = document.getElementById('input');
    const inputText = input.value;
    if (inputText === '') {
      alert('Please give a name for your todo');
      return;
    }
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
    const inputText = document.getElementById('addListInput') as HTMLInputElement;
    const inputTextString = inputText.value;
    if (inputTextString === '') {
      alert('Please give a name for your list');
      return;
    }
    this.todos.push({name: inputTextString, todos: []});
    (document.getElementById('addListInput') as HTMLInputElement).value = '';
  }

  deleteList(index: number) {
    this.todos.splice(index, 1);
  }

  ngOnInit() {
  }

}
