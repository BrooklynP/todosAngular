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
    console.log('toadd');
    const input: any = document.getElementById('input');
    const inputText = input.value;
    this.todos.push({name: inputText});
    document.getElementById('input').value = '';
  }

  ngOnInit() {
  }

}
