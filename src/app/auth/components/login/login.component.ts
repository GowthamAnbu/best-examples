import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user';
import { FormGroup } from '@angular/forms';
import { HelperService } from '../../../core/services/helper.service';

@Component({
  selector: 'template-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  @Input() loginForm: FormGroup;
  @Output() loginEmitter = new EventEmitter<User>();

  constructor(public helper: HelperService) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.loginEmitter.next(this.loginForm.value);
    }
  }


}
