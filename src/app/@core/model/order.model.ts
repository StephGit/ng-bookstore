import {OrderItem} from './oder-item.model';
import {OrderStatus} from './order-status.model';
import {Address} from './address.model';
import {CreditCard} from './creditcard.model';

export class Order {
  nr: number;
  customerNr: number;
  amount: number;
  date: any;
  status: OrderStatus;
  items: OrderItem [];
  address: Address;
  creditCard: CreditCard;

  constructor(customerNr: number, items: OrderItem[]) {
    this.customerNr = customerNr;
    this.items = items;
  }
}
