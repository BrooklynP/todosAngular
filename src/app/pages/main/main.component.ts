import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public todos = [
  ];

  constructor() { }

  addToDo() {
    const input: any = document.getElementById('input');
    const inputText = input.value;
    this.todos.push({name: inputText, state: 'toDo'});
    (document.getElementById('input') as HTMLInputElement).value = '';
  }

  DoToDo(index: number) {
    this.todos[index].state = 'done';
  }

  DeleteToDo(index: number) {
    this.todos.splice(index, 1);
  }

  ngOnInit() {
  }

}
