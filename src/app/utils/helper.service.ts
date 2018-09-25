import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  readonly emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  constructor(private router: Router) { }

  goto(commands: any[], extras?:NavigationExtras){
    extras === undefined ?
      this.router.navigate(commands) :
      this.router.navigate(commands, extras);
  }

}
