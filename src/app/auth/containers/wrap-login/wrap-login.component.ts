import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  /**
   * https://github.com/angular/angular/issues/19163
   * this doesn't have the updateOn feature
   */
  /* loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.helper.emailRegex)]],
    password: ['', [Validators.required]]
  }) */

  constructor(public helper: HelperService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  login(user: User) {
    console.log(user);
    //* this.helper.navigateTo('(dashboard/home/landing) page');
    // TODO add action here which internally uses another action to redirect to the target page
  }
}
