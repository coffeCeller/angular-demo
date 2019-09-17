import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
   <div>
    <input #username type="text">
    <input #password type="password">
    <button (click)="onClick()">login</button>
   </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    console.log('test');
  }
}
