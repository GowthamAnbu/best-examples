import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { WrapLoginComponent } from './containers/wrap-login/wrap-login.component';
import { SingupComponent } from './components/singup/singup.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, WrapLoginComponent, SingupComponent]
})
export class AuthModule { }
