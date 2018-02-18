import {Component, Input} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';
import {CreditCardType} from '../../../@core/model/creditcard-type.model';
import {User} from '../../../@core/model/user.model';

@Component({
  selector: 'ngx-change-payment-data',
  templateUrl: './change-payment-data.component.html',
  styles: ['.form-control-placeholder {color: #a4abb3 !important;}'],
})

export class ChangePaymentDataComponent {

  @Input() user: User;
  @Input() customer: Customer;
  cardTypes = Object.keys(CreditCardType);

  constructor() { }
}
