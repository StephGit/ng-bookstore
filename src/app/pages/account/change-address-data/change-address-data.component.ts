import {Component, Input} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';
import {Country} from '../../../@core/model/country.model';
import {User} from '../../../@core/model/user.model';

@Component({
  selector: 'ngx-change-address-data',
  templateUrl: './change-address-data.component.html',
  styles: ['.form-control-placeholder {color: #a4abb3 !important;}'],
})
export class ChangeAddressDataComponent {

  @Input() user: User;
  @Input() customer: Customer;
  countries = Object.values(Country);

  constructor() {
  }

  parseCountry(type: any) {
    let country;
    for (const key in Country) {
      if (type === Country[key]) {
        country = key;
        break;
      }
    }
    return country;
  }
}
