import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app/app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
