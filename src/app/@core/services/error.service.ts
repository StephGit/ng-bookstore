import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  customerErrors: Map<[string, number], string> = new Map <[string, number], string>();
  orderErrors: Map<[string, number], string> = new Map <[string, number], string>();
  catalogErrors: Map<[string, number], string> = new Map <[string, number], string>();


  constructor() {
    this.setCustomerErrors();
    this.setOrderErrors();
  }

  private setCustomerErrors() {
    this.customerErrors.set(['register', 400], 'Invalid registration data');
    this.customerErrors.set(['login', 401], 'Email or password is incorrect');
    this.customerErrors.set(['login', 404], 'Email or password is incorrect');
    this.customerErrors.set(['changePassword', 404], 'Email is incorrect');
    this.customerErrors.set(['find', 404], 'No customer with this number exists');
    this.customerErrors.set(['update', 400], 'Invalid data');
    this.customerErrors.set(['update', 404], 'No customer with this number exists');
    this.customerErrors.set(['update', 409], 'Email is allready used by a customer');
  }

  private setOrderErrors() {
    this.orderErrors.set(['search', 404], 'No orders found.');
    this.orderErrors.set(['place', 402], 'Payment error occurred');
    this.orderErrors.set(['place', 404], 'The order referenced a non existing book or customer');
    this.orderErrors.set(['cancel', 404], 'No order with the specified number exists.');
    this.orderErrors.set(['cancel', 409], 'The order has allready been shipped');
    this.orderErrors.set(['find', 404], 'No order with the specified number exists.');
  }

  getCustomerError(key: [string, number]): string {
    return this.customerErrors.get(key);
  }

  getOrderError(key: [string, number]): string {
    return this.orderErrors.get(key);
  }

}
