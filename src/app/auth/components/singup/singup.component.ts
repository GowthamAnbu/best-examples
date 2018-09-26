import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { HelperService } from '../../../utils/helper.service';

@Component({
  selector: 'template-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingupComponent implements OnInit {

  @Input() singupForm: FormGroup;
  @Output() singupEmitter = new EventEmitter<User>();

  constructor(public helper: HelperService) { }

  ngOnInit() {
  }

  singup() {
    if (this.singupForm.valid) {
      this.singupEmitter.next(this.singupForm.value);
    }
  }

}
