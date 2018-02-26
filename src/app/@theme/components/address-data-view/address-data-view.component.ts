import {Component, Input} from '@angular/core';
import {Country} from '../../../@core/model/country.model';
import {Customer} from '../../../@core/model/customer.model';

@Component({
  selector: 'ngx-address-data-view',
  templateUrl: './address-data-view.component.html',
  styleUrls: ['./address-data-view.component.scss'],
})
export class AddressDataViewComponent {

  @Input() customer: Customer;
  @Input() title: string;
  Country: typeof Country = Country;
}
