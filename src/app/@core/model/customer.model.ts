import {CreditCard} from './creditcard.model';
import {Address} from './address.model';

export class Customer {
  nr: number;
  email: string;
  firstName: string;
  lastName: string;
  address: Address;
  creditCard: CreditCard;

  constructor(nr?: number, email?: string, firstName?: string, lastName?: string,
              address?: Address,
              creditCard?: CreditCard) {
    this.nr = nr;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.creditCard = creditCard;
  }
}
