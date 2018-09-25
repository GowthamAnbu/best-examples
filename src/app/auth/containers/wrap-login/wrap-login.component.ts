import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperService } from '../../../utils/helper.service';
import { User } from '../../models/user';

@Component({
  selector: 'template-wrap-login',
  templateUrl: './wrap-login.component.html',
  styleUrls: ['./wrap-login.component.css']
})
export class WrapLoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.helper.emailRegex)]),
    password: new FormControl('', Validators.required), // TODO add validator pattern and also do the same in template-login
  }, { updateOn: 'change'});

  constructor(public helper: HelperService) { }

  ngOnInit() {
  }

  login(user: User) {
    console.log(user);
    // TODO add action here which internally uses another action to redirect to the target page
  }
}
