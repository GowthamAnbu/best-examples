import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-wrap-login',
  templateUrl: './wrap-login.component.html',
  styleUrls: ['./wrap-login.component.css']
})
export class WrapLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(event) {
    console.log(event);
    // TODO add action here which internally uses another action to redirect to the target page
  }
}
