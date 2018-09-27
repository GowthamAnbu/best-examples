import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShellComponent } from './components/shell/shell.component';
import { MaterialModule } from '../material';

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
    MaterialModule
  ],
  declarations: [
    COMPONENTS
  ],
  exports:[
    COMPONENTS
  ]
})
export class CoreModule { }
