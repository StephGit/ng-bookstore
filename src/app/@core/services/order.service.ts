import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {Order} from '../model/order.model';

@Injectable()
export class OrderService {

  constructor(private apiService: ApiService) {
  }


  public placeOrder(order: Order): Observable<any> {
    return this.apiService.post('/orders', order, null);
  }

  public findOrder(nr: number): Observable<any> {
    return this.apiService.get('/orders/' + nr, null, null);
  }

  public searchOrders(customerNr: number, year: number): Observable<any> {
    return this.apiService.get('/orders?customerNr=' + customerNr + '&year=' + year, null, null);
  }

  public cancelOrder(nr: number): Observable<any> {
    return this.apiService.delete('/orders?nr=' + nr, null);
  }


}
