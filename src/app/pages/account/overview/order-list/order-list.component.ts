import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from '../../../../@core/model/order.model';
import {OrderStatus} from '../../../../@core/model/order-status.model';

@Component({
  selector: 'ngx-order-list',
  styleUrls: ['./order-list.component.scss'],
  template: `
    <nb-card class="orders">
      <nb-card-header>
        Your Orders:
      </nb-card-header>
      <nb-card-body>
        <div class="row">
          <div class="col-md-12">
            <select class="form-control" name="year" id="year"
                    [(ngModel)]="currentYear" (ngModelChange)="changeYear()">
              <option *ngFor="let c of years" [value]="c">{{c}}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="list-group col-md-12">
            <div class="col-md-12">
              <table class="table">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let o of orders">
                  <td>{{o.nr}}</td>
                  <td>{{o.amount | currency:'USD'}}</td>
                  <td>{{o.date | date:'yyyy-MM-dd HH:mm'}}</td>
                  <td>{{o.status}}</td>
                  <td>
                    <button *ngIf="canCancelOrder(o)" (click)="cancelOrder(o)"
                            class="btn btn-success">Cancel
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </nb-card-body>
    </nb-card>
  `,
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
