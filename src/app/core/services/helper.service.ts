import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, of as ObservableOf} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  readonly emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  constructor(private router: Router) { }

  navigateTo(commands: any[], extras?:NavigationExtras){
    extras === undefined ?
      this.router.navigate(commands) :
      this.router.navigate(commands, extras);
  }

  /* //* mock http call */
  isEmailAlreadyExits(email): Observable<boolean>{
    return ObservableOf<boolean>(EMAIL_LIST.includes(email)).pipe(
    );
  }

}

const EMAIL_LIST = [
  'a@gmail.com',
  'b@gmail.com',
  'c@gmail.com',
  'd@gmail.com'
]
