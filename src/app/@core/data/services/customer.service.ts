import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Customer} from '../model/customer.model';
import {NotificationService} from './notification.service';
import {CurrentUserService} from './current-user.service';
import {User} from '../model/user.model';

@Injectable()
export class CustomerService {

  private path = '/customers';

  constructor (
    private apiService: ApiService,
    private notificationService: NotificationService,
    private currentUserService: CurrentUserService,
  ) {}

  attemptAuth(credentials): Observable<any> {
    const headers = new HttpHeaders({
      'email': credentials.email,
      'password': credentials.password,
    });
    return this.apiService.get(this.path + '/login', null , headers )
      .map((data) => {
        const user = new User(data, credentials.email);
        this.currentUserService.setAuth(user);
        return user;
      })
      .catch(err => this.handleError(err));
  }

  register(customer: Customer, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'password': password,
    });
    return this.apiService.post(this.path, customer , headers )
      .map(
        data => {
          return data;
        })
      .catch(err => this.handleError(err));
  }

  // Update the customer on the server
  update(customer): Observable<Customer> {
    return this.apiService
      .put('/customer/' + customer.nr, { customer }, null)
      .map(data => {
        // Update the currentCustomer observable
        this.currentUserService.setAuth(data.customer);
        return data.customer;
      })
  }

  protected  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

 // TODO map Error-Codes
  protected handleError(error: any) {
    if (error.status === 401 || error.status === 404) {
      this.notificationService.error('Email or password is incorrect', 'Login error');
    } else if (error.status === 400) {
      this.notificationService.error('Email or password is incorrect', 'Login error');
    } else if (error.status === 409) {
      this.notificationService.error('Email or password is incorrect', 'Login error');
    }
      return Observable.throw(error);
  }
}
