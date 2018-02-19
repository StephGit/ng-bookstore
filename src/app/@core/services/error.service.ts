import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  getCustomerErrors() {
    return [
      { method: 'Register', status: 400, message: 'Invalid registration data'},
      { method: 'Register', status: 409, message: 'Email is allready used by a customer'},
      { method: 'Login', status: 401, message: 'Email or password is incorrect'},
      { method: 'Login', status: 404, message: 'Email or password is incorrect'},
      { method: 'Password', status: 404, message: 'Email is incorrect'},
      { method: 'Find', status: 404, message: 'No customer with this number exists'},
      { method: 'Update', status: 400, message: 'Invalid data'},
      { method: 'Update', status: 404, message: 'No customer with this number exists'},
      { method: 'Update', status: 409, message: 'Email is allready used by a customer'},
    ]
  }

}
