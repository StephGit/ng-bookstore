import {OrderItem} from './oder-item.model';

export class Order {
  nr: number;
  customerNr: number;
  items: OrderItem [];

  constructor(customerNr: number, items: OrderItem[]) {
    this.customerNr = customerNr;
    this.items = items;
  }
}
