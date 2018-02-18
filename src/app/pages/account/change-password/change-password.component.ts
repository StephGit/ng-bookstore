import {Component, Input} from '@angular/core';
import {User} from '../../../@core/model/user.model';
import {Customer} from '../../../@core/model/customer.model';

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {

  @Input() user: User;
  @Input() customer: Customer;

  constructor() { }
}
