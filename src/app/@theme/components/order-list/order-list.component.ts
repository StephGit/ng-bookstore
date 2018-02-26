import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from '../../../@core/model/order.model';
import {OrderStatus} from '../../../@core/model/order-status.model';

@Component({
  selector: 'ngx-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {

  years: number [] = new Array<number>(11);
  currentYear: number;
  @Input() orders: Order [];
  @Output() onCancelOrder: EventEmitter<Order> = new EventEmitter();
  @Output() onYearChanged: EventEmitter<number> = new EventEmitter();


  constructor() {
    this.currentYear = new Date().getFullYear();
    for (let y = 0; y < this.years.length; y++) {
      this.years[y] = this.currentYear - y;
    }
  }

  canCancelOrder(o: Order) {
    return o.status === OrderStatus.ACCEPTED || o.status === OrderStatus.PROCESSING;
  }

  changeYear() {
    this.onYearChanged.emit(this.currentYear)
  }

  cancelOrder(o: Order) {
    this.onCancelOrder.emit(o);
  }
}
