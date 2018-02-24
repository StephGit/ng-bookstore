import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Customer} from '../model/customer.model';
import {NotificationService} from './notification.service';
import {CurrentUserService} from './current-user.service';
import {User} from '../model/user.model';
import {ErrorService} from './error.service';

@Injectable()
export class CustomerService {

  private path = '/customers';
  private currentCustomerSubject = new BehaviorSubject<Customer>(new Customer());
  public currentCustomer = this.currentCustomerSubject.asObservable().distinctUntilChanged();

  constructor (
    private apiService: ApiService,
    private errorService: ErrorService,
    private notificationService: NotificationService,
    private currentUserService: CurrentUserService,
  ) {}

  attemptAuth(credentials): Observable<any> {
    const headers = new HttpHeaders({
      'email': credentials.email,
      'password': credentials.password,
    });
    // TODO add type to get call
    return this.apiService.get<any>(this.path + '/login', null , headers )
      .map((data) => {
        const user = new User(data, credentials.email, credentials.password);
        this.currentUserService.setAuth(user);
        return user;
      })
      .catch(err => this.handleError(err, 'login'));
  }

  register(customer: Customer, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'password': password,
      'Content-Type': 'application/json',
      'Accept': 'text/plain',
    });
    return this.apiService.post(this.path, customer , headers )
      .map(
        data => {
          customer.nr = data;
          const user = new User(customer.nr, customer.email, password);
          this.currentCustomerSubject.next(customer);
          this.currentUserService.setAuth(user);
          return data;
        })
      .catch(err => this.handleError(err, 'register'));
  }

  // Update the customer on the server
  update(customer): Observable<Customer> {
    return this.apiService
      .put(this.path + '/' + customer.nr, customer, null)
      .map(data => {
        // Update the currentCustomer observable
        this.currentCustomerSubject.next(data);
        return data;
      })
      .catch(err => this.handleError(err, 'update'));
  }

  find(nr: number): Observable<Customer> {
    return this.apiService
      .get<Customer>(this.path + '/' + nr, null, null)
      .map(data => {
        this.currentCustomerSubject.next(data);
        return data;
      })
      .catch(err => this.handleError(err, 'find'));
  }

  changePassword(user: User): Observable<User> {
    const headers = new HttpHeaders({
      'email': user.email,
      'Content-Type': 'text/plain',
      'Accept': 'application/json',
    });
    return this.apiService
      .put(this.path + '/login', user.password, headers)
      .map(data => {
        return data;
      })
      .catch(err => this.handleError(err, 'changePassword'));
  }


  protected  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  protected handleError(error: any, method: string) {
    this.notificationService.error(
      this.errorService.getCustomerError({method: method, status: error.status}), 'Customer error');
    return Observable.throw(error);
  }
}
