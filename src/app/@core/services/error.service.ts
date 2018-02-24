import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  customerErrors: Map<{}, string> = new Map <{}, string>();
  orderErrors: Map<{}, string> = new Map <{}, string>();
  catalogErrors: Map<{}, string> = new Map <{}, string>();


  constructor() {
    this.setCustomerErrors();
    this.setOrderErrors();
    this.setCatalogErrors();
  }

  private setCustomerErrors() {
    this.customerErrors.set({method: 'register', status: 400}, 'Invalid registration data');
    this.customerErrors.set({method: 'login', status: 401}, 'Email or password is incorrect');
    this.customerErrors.set({method: 'login', status: 404}, 'Email or password is incorrect');
    this.customerErrors.set({method: 'changePassword', status: 404}, 'Email is incorrect');
    this.customerErrors.set({method: 'find', status: 404}, 'No customer with this number exists');
    this.customerErrors.set({method: 'update', status: 400}, 'Invalid data');
    this.customerErrors.set({method: 'update', status: 404}, 'No customer with this number exists');
    this.customerErrors.set({method: 'update', status: 409}, 'Email is allready used by a customer');
  }

  private setOrderErrors() {
    this.orderErrors.set({method: 'search', status: 404}, 'No orders found.');
    this.orderErrors.set({method: 'place', status: 402}, 'Payment error occurred');
    this.orderErrors.set({method: 'place', status: 404}, 'The order referenced a non existing book or customer');
    this.orderErrors.set({method: 'cancel', status: 404}, 'No order with the specified number exists.');
    this.orderErrors.set({method: 'cancel', status: 409}, 'The order has allready been shipped');
    this.orderErrors.set({method: 'find', status: 404}, 'No order with the specified number exists.');
  }

  private setCatalogErrors() {
    this.catalogErrors.set({method: 'add', status: 409}, 'A book with the same ISBN number already exists.');
    this.catalogErrors.set({method: 'find', status: 404}, 'No book with the specified ISBN number exists.');
    this.catalogErrors.set({method: 'update', status: 400},
      'The ISBN number of the book data does not match the path parameter.');
    this.catalogErrors.set({method: 'update', status: 404}, 'No book with the specified ISBN number exists.');
  }

  getCustomerError(key: {}): string {
    console.log(this.customerErrors.get(key));
    return this.customerErrors.get(key);
  }

  getOrderError(key: {}): string {
    return this.orderErrors.get(key);
  }

  getCatalogError(key: {}): string {
    return this.catalogErrors.get(key);
  }


}
