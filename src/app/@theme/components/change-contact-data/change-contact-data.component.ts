import {Component, Input} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';
import {User} from '../../../@core/model/user.model';

@Component({
  selector: 'ngx-change-contact-data',
  templateUrl: './change-contact-data.component.html',
})
export class ChangeContactDataComponent {

  @Input() user: User;
  @Input() customer: Customer;

  constructor() { }
}
