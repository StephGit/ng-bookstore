import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  customerErrors: Map<[string, number], string> = new Map <[string, number], string>();

  constructor() {
    this.setCustomerErrors();
  }

  private setCustomerErrors() {
    this.customerErrors.set(['Register', 400], 'Invalid registration data');
    this.customerErrors.set(['Login', 401], 'Email or password is incorrect');
    this.customerErrors.set(['Login', 404], 'Email or password is incorrect');
    this.customerErrors.set(['Password-Change', 404], 'Email is incorrect');
    this.customerErrors.set(['Find', 404], 'No customer with this number exists');
    this.customerErrors.set(['Update', 400], 'Invalid data');
    this.customerErrors.set(['Update', 404], 'No customer with this number exists');
    this.customerErrors.set(['Update', 409], 'Email is allready used by a customer');
  }

  getCustomerErrors() {
    return this.customerErrors;
  }

}
