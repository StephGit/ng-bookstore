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

  constructor(nr: number = -1, email: string = '', firstName: string = '', lastName: string = '',
              address: { street: string; city: string; postalCode: string; country: Country },
              creditCard: { type: CreditCardType; number: number;
              expirationMonth: number; expirationYear: number }) {
    this.nr = nr;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.creditCard = creditCard;
  }
}
