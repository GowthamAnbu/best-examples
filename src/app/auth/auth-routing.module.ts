import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapLoginComponent } from './containers/wrap-login/wrap-login.component';
import { WrapSignupComponent } from './containers/wrap-signup/wrap-signup.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

/* If you need different shell component add it here as parent and change all to children */
const routes: Routes = [
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
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
