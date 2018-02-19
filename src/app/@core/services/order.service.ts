import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {Order} from '../model/order.model';
import {NotificationService} from './notification.service';
import {HttpParams} from '@angular/common/http';
import {ErrorService} from './error.service';

@Injectable()
export class OrderService {

  constructor(private apiService: ApiService,
              private errorService: ErrorService,
              private notificationService: NotificationService) {
  }


  public placeOrder(order: Order): Observable<any> {
    return this.apiService.post('/orders', order, null)
      .catch(err => this.handleError(err, 'place'));;
  }

  public findOrder(nr: number): Observable<any> {
    return this.apiService.get('/orders/' + nr, null, null)
      .catch(err => this.handleError(err, 'find'));;
  }

  // TODO map
  public searchOrders(customerNr: number, year: number): Observable<any> {
    return this.apiService.get('/orders', new HttpParams({
      fromObject: {
        customerNr: customerNr.toString(),
        year: year.toString(),
      }
    }), null)
      .catch(err => this.handleError(err, 'search'));;
  }

  public cancelOrder(nr: number): Observable<any> {
    return this.apiService.delete('/orders?nr=' + nr, null)
      .catch(err => this.handleError(err, 'cancel'));;
  }

  protected handleError(error: any, method: string) {
    this.notificationService.error(
      this.errorService.getCustomerError([method, error.status]), 'Order error');
    return Observable.throw(error);
  }

}
