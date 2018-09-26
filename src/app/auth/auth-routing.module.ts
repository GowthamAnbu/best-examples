import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapLoginComponent } from './containers/wrap-login/wrap-login.component';
import { WrapSignupComponent } from './containers/wrap-signup/wrap-signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // TODO change it based on the application need
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: WrapLoginComponent
  },
  {
    path: 'singup',
    component: WrapSignupComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
