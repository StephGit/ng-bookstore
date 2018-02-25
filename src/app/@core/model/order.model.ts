import {OrderItem} from './oder-item.model';
import {OrderStatus} from './order-status.model';

export class Order {
  nr: number;
  customerNr: number;
  amount: number;
  date: any;
  status: OrderStatus;
  items: OrderItem [];

  constructor(customerNr: number, items: OrderItem[]) {
    this.customerNr = customerNr;
    this.items = items;
  }
}
