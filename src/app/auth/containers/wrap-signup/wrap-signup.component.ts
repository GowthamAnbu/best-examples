import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperService } from '../../../utils/helper.service';
import { NotEqualValidator } from '../../directives/equal-validator.directive';

@Component({
  selector: 'template-wrap-signup',
  templateUrl: './wrap-signup.component.html',
  styleUrls: ['./wrap-signup.component.css']
})
export class WrapSignupComponent implements OnInit {

  singupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern(this.helper.emailRegex)]),
    password: new FormControl('', Validators.required), // TODO add validator pattern and also do the same in template-singup
    retypePassword: new FormControl('', Validators.required), // TODO add validator pattern and also do the same in template-singup
  }, { updateOn: 'change', validators: NotEqualValidator});

  constructor(public helper: HelperService,) { }

  ngOnInit() {
  }

  singup(values: any) {
    console.log(values);
    //* this.helper.navigateTo('(login/dashboard/home/landing) page');
    // TODO add action here which internally uses another action to redirect to the target page
  }
}
