import {Component, OnDestroy, OnInit} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';
import {CustomerService} from '../../../@core/services/customer.service';
import {CurrentUserService} from '../../../@core/services/current-user.service';
import {User} from '../../../@core/model/user.model';
import {Router} from '@angular/router';
import {NotificationService} from '../../../@core/services/notification.service';
import {OrderService} from '../../../@core/services/order.service';
import {ChangePasswordComponent} from '../../../@theme/components';
import {AdItem} from '../../../@core/model/ad-item.model';
import {AdService} from '../../../@core/services/ad.service';
import {ChangePaymentDataComponent} from '../../../@theme/components';
import {Order} from '../../../@core/model/order.model';
import {ChangeContactDataComponent} from '../../../@theme/components';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  customer: Customer;
  user: User;
  orders: Order [];
  loading: boolean = true;
  title: string = 'Contact/Address:';

  orderYear = new Date().getFullYear();

  constructor(private adService: AdService,
              private customerService: CustomerService,
              private currentUserService: CurrentUserService,
              private notificationService: NotificationService,
              private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentUserService.currentUser$
      .takeUntil(this.destroy$)
      .subscribe(user => {
        this.user = user;
      });

    this.customerService.find(this.user.id)
      .takeUntil(this.destroy$)
      .subscribe(
        result => {
          this.loading = false;
          this.customerService.currentCustomer$
            .takeUntil(this.destroy$)
            .subscribe(customer => {
              this.customer = customer;
              this.getOrders();
            });
        },
        error => {
          this.notificationService.error(
            'There is a problem with your account. Please login again!', 'Account error');
          this.router.navigate(['/account/logout']);
        },
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  updatePassword() {
    this.user.confirmPassword = undefined;
    this.adService.setAd(new AdItem(ChangePasswordComponent, 'Password', this.user, null));
    this.router.navigate(['/account/edit'], {queryParams: {returnUrl: '/account/overview'}});
  }

  updateAddress() {
    this.adService.setAd(new AdItem(ChangeContactDataComponent, 'Contact/Address', this.user, this.customer));
    this.router.navigate(['/account/edit'], {queryParams: {returnUrl: '/account/overview'}});
  }

  updateCreditCard() {
    this.adService.setAd(new AdItem(ChangePaymentDataComponent, 'Credit-Card', null, this.customer));
    this.router.navigate(['/account/edit'], {queryParams: {returnUrl: '/account/overview'}});
  }

  cancelOrder(o: Order) {
    this.orderService.cancelOrder(o.nr).subscribe(result => {
      this.notificationService.info('Order successfully canceled', 'Order canceled');
      this.getOrders();
    });
  }

  yearChanged(year: number) {
    this.orderYear = year;
    this.getOrders();
  }


  getOrders() {
    this.orderService.searchOrders(this.customer.nr, this.orderYear)
      .takeUntil(this.destroy$)
      .subscribe(
        result => {
          // hack since date from backend is not a valid javascript date format
          result.forEach((o) => {
            o.date = new Date(o.date.substring(0, o.date.length - 6));
          });
          this.orders = result;
        },
      )
  }
}
