import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {Order} from '../model/order.model';
import {NotificationService} from './notification.service';

@Injectable()
export class OrderService {

  constructor(private apiService: ApiService,
              private notificationService: NotificationService) {
  }


  public placeOrder(order: Order): Observable<any> {
    return this.apiService.post('/orders', order, null);
  }

  public findOrder(nr: number): Observable<any> {
    return this.apiService.get('/orders/' + nr, null, null);
  }

  // TODO map
  public searchOrders(customerNr: number, year: number): Observable<any> {
    return this.apiService.get('/orders?customerNr=' + customerNr + '&year=' + year, null, null);
  }

  public cancelOrder(nr: number): Observable<any> {
    return this.apiService.delete('/orders?nr=' + nr, null);
  }

  // TODO handle errors and map Error-Codes
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
