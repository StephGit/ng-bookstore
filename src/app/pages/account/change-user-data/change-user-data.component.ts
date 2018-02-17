import {Component, Input} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';
import {User} from '../../../@core/model/user.model';

@Component({
  selector: 'ngx-change-user-data',
  templateUrl: './change-user-data.component.html',
})
export class ChangeUserDataComponent {

  constructor() { }

  @Input() customer: Customer;
  @Input() user: User;
}
