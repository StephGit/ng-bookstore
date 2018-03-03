import {Component, Input, ViewChild} from '@angular/core';
import {User} from '../../../@core/model/user.model';
import {Customer} from '../../../@core/model/customer.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  @Input() user: User;
  @Input() customer: Customer;

  constructor() { }
}
