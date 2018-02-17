import {Component, Input} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';

@Component({
  selector: 'ngx-change-address-data',
  templateUrl: './change-address-data.component.html',
  styles: ['.form-control-placeholder {color: #a4abb3 !important;}'],
})
export class ChangeAddressDataComponent {

  constructor() { }

  @Input() customer: Customer;
}
