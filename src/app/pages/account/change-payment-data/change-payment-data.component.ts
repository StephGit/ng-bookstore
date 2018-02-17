import {Component, Input} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';

@Component({
  selector: 'ngx-change-payment-data',
  templateUrl: './change-payment-data.component.html',
  styles: ['.form-control-placeholder {color: #a4abb3 !important;}'],
})

export class ChangePaymentDataComponent {

  constructor() { }

  @Input() customer: Customer;

}
