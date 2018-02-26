import {Component, Input} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';

@Component({
  selector: 'ngx-payment-data-view',
  templateUrl: './payment-data-view.component.html',
  styleUrls: ['./payment-data-view.component.scss'],
})
export class PaymentDataViewComponent {
    @Input() customer: Customer;
}
