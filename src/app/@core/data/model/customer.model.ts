import {CreditCardType} from './creditcard-type.model';
import {Country} from './country.model';

export class Customer {
  nr: number;
  email: string;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: Country;
  };
  creditCard: {
    type: CreditCardType;
    number: number;
    expirationMonth: number;
    expirationYear: number
  }
}
