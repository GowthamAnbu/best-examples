import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShellComponent } from './components/shell/shell.component';

const COMPONENTS = [
AppComponent,
HomeComponent,
PageNotFoundComponent,
ShellComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    COMPONENTS
  ],
  exports:[
    COMPONENTS
  ]
})
export class CoreModule { }
