import {CreditCardType} from './creditcard-type.model';

export class CreditCard {
  type: CreditCardType;
  number: number;
  expirationMonth: number;
  expirationYear: number;
  constructor(type?: CreditCardType, number?: number, expirationMonth?: number, expirationYear?: number) {
    this.type = type;
    this.number = number;
    this.expirationMonth = expirationMonth;
    this.expirationYear = expirationYear;
  }
}
