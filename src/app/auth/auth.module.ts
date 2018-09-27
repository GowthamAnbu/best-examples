import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { WrapLoginComponent } from './containers/wrap-login/wrap-login.component';
import { SingupComponent } from './components/singup/singup.component';
import { WrapSignupComponent } from './containers/wrap-signup/wrap-signup.component';
import { NotEqualValidatorDirective } from './directives/equal-validator.directive';
import { MaterialModule } from '../material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    WrapLoginComponent,
    SingupComponent,
    WrapSignupComponent,
    NotEqualValidatorDirective,
  ]
})
export class AuthModule { }
