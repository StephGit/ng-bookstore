import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Customer} from '../model/customer.model';

@Injectable()
export class CustomerService {

  private currentCustomerSubject = new BehaviorSubject<Customer>(new Customer());
  public currentCustomer = this.currentCustomerSubject.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  private path = '/customers';

  constructor (
    private apiService: ApiService,
  ) {}

  // Verify JWT in localstorage with server & load customer's info.
  // This runs once on application startup.
  populate() {
    const customer = JSON.parse(localStorage.getItem('curCustomer'));
    if (customer) {
      this.setAuth(customer);
    } else {
      this.purgeAuth();
    }
  }

  setAuth(customer: Customer) {
    // Set current customer data into observable
    this.currentCustomerSubject.next(customer);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Set current customer to an empty object
    this.currentCustomerSubject.next(new Customer());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(credentials): Observable<any> {
    const headers = new HttpHeaders({
      'email': credentials.email,
      'password': credentials.password,
    });
    return this.apiService.get(this.path + '/login', null , headers )
      .map(
        data => {
          this.setAuth(data.customer);
          return data;
        })
      .catch(err => this.handleError(err));
  }

  getCurrentCustomer(): Customer {
    return this.currentCustomerSubject.value;
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
        this.currentCustomerSubject.next(data.customer);
        return data.customer;
      })
  }
 // TODO map Error-Codes
  protected handleError(error: any) {
    if (error.status === 401 || error.status === 404) {
      return Observable.throw('Email or password is incorrect');
    }
    return Observable.throw(error);
  }
}
