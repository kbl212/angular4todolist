import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-app',
  template: `<h1>To-do list for {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
