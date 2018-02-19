import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  customerErrors: Map<[string, number], string> = new Map <[string, number], string>();


    //   [{ method: 'Register', 409}, ]'Email is allready used by a customer'}],
    //   [{ method: 'Login', 401}, ]'Email or password is incorrect'}],
    //   [{ method: 'Login', 404}, ]'Email or password is incorrect'}],
    //   [{ method: 'Password', 404}, ]'Email is incorrect'}],
    //   [{ method: 'Find', 404}, ]'No customer with this number exists'}],
    //   [{ method: 'Update', 400}, ]'Invalid data'}],
    //   [{ method: 'Update', 404}, ]'No customer with this number exists'}],
    //   [{ method: 'Update', 409}, ]'Email is allready used by a customer'}],
    // ];
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
