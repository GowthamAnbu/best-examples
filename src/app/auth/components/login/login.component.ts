import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'template-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: '',
  };
  @Output() loginEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.loginEmitter.next(this.user);
  }
}
