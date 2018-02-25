import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from '../../../../@core/model/order.model';

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
          <div class="list-group col-md-12">
            <div class="col-md-12">
              <table class="table">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let o of orders">
                  <td>{{o.nr}}</td>
                  <td>{{o.amount | currency:'USD'}}</td>
                  <td>{{o.date  |  date:'yyyy-MM-dd HH:mm'}}</td>
                  <td>{{o.status}}</td>
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

  @Input() orders: Order [];


  constructor() {
  }
}
