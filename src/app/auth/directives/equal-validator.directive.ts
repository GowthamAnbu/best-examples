import { Directive } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[templateEqualValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NotEqualValidatorDirective, multi: true }]
})
export class NotEqualValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return NotEqualValidator(control);
  }

}

/* //* password and retype password should match */
export const NotEqualValidator : ValidatorFn = (control: FormGroup) : ValidationErrors | null => {
  const password = control.get('password');
  const retypePassword = control.get('retypePassword');
  return password && retypePassword && password.value !== retypePassword.value ? { notEqual : true} : null;
}
