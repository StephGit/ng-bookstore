import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  customerErrors: Map<string, string> = new Map <string, string>();
  orderErrors: Map<string, string> = new Map <string, string>();
  catalogErrors: Map<string, string> = new Map <string, string>();

  constructor() {
    this.setCustomerErrors();
    this.setOrderErrors();
    this.setCatalogErrors();
  }

  private setCustomerErrors() {
    this.customerErrors.set('register400', 'Invalid registration data');
    this.customerErrors.set('register409', 'Email is allready used by a customer');
    this.customerErrors.set('login401', 'Email or password is incorrect');
    this.customerErrors.set('login404', 'Email or password is incorrect');
    this.customerErrors.set('changePassword404', 'Email is incorrect');
    this.customerErrors.set('find404', 'No customer with this number exists');
    this.customerErrors.set('update400', 'Invalid data');
    this.customerErrors.set('update404', 'No customer with this number exists');
    this.customerErrors.set('update409', 'Email is allready used by a customer');
  }

  private setOrderErrors() {
    this.orderErrors.set('search404', 'No orders found.');
    this.orderErrors.set('place402', 'Payment error occurred');
    this.orderErrors.set('place404', 'The order referenced a non existing book or customer');
    this.orderErrors.set('cancel404', 'No order with the specified number exists.');
    this.orderErrors.set('cancel409', 'The order has allready been shipped');
    this.orderErrors.set('find404', 'No order with the specified number exists.');
  }

  private setCatalogErrors() {
    this.catalogErrors.set('add409', 'A book with the same ISBN number already exists.');
    this.catalogErrors.set('find404', 'No book with the specified ISBN number exists.');
    this.catalogErrors.set('update400', 'The ISBN number of the book data does not match the path parameter.');
    this.catalogErrors.set('update404', 'No book with the specified ISBN number exists.');
  }

  getCustomerError(key: string): string {
    return this.customerErrors.get(key);
  }

  getOrderError(key: string): string {
    return this.orderErrors.get(key);
  }

  getCatalogError(key: string): string {
    return this.catalogErrors.get(key);
  }


}
