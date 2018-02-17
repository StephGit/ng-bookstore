export class Order {
  customerNr: number;
  items: OrderItems [];

  constructor(customerNr: number, items: OrderItems[]) {
    this.customerNr = customerNr;
    this.items = items;
  }
}
