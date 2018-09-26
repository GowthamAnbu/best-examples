import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HelperService } from '../../../utils/helper.service';
import { NotEqualValidator } from '../../directives/equal-validator.directive';
import { Observable } from 'rxjs';
import { map, catchError, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'template-wrap-signup',
  templateUrl: './wrap-signup.component.html',
  styleUrls: ['./wrap-signup.component.css']
})
export class WrapSignupComponent implements OnInit {

  singupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern(this.helper.emailRegex)], [ this.IsValidEmail.bind(this) ]),
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

  /* //* https://github.com/angular/angular/issues/9119
  searchCtrl(control: AbstractControl) {
    return control.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(ctrl => this.IsValidEmail(ctrl)),
      tap(result => console.log(result)),
    );
  } */

  IsValidEmail(ctrl: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.helper.isEmailAlreadyExits(ctrl.value).pipe(
      map(result => (result ? { notValid: true } : null)),
      catchError(() => null),
    );
  }
}
