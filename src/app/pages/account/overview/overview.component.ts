import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../@core/model/customer.model';
import {CustomerService} from '../../../@core/services/customer.service';
import {CurrentUserService} from '../../../@core/services/current-user.service';
import {User} from '../../../@core/model/user.model';
import {Router} from '@angular/router';
import {NotificationService} from '../../../@core/services/notification.service';
import {Country} from '../../../@core/model/country.model';
import {OrderService} from '../../../@core/services/order.service';
import {ChangePasswordComponent} from '../../../@theme/components/change-password/change-password.component';
import {AdItem} from '../../../@core/model/ad-item.model';
import {AdService} from '../../../@core/services/ad.service';
import {ChangeAddressDataComponent} from '../../../@theme/components/change-address-data/change-address-data.component';
import {ChangePaymentDataComponent} from '../../../@theme/components/change-payment-data/change-payment-data.component';
import {Order} from '../../../@core/model/order.model';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  customer: Customer;
  user: User;
  orders: Order [];
  loading: boolean = true;
  Country: typeof Country = Country;
  orderYear = new Date().getFullYear();

  constructor(private adService: AdService,
              private customerService: CustomerService,
              private currentUserService: CurrentUserService,
              private notificationService: NotificationService,
              private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {

    this.currentUserService.currentUser
      .subscribe(user => {
        this.user = user;
      });

    this.customerService.find(this.user.id)
      .subscribe(
        result => {
          this.loading = false;
          this.customerService.currentCustomer
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

  updatePassword() {
    this.adService.setAd(new AdItem(ChangePasswordComponent, 'Password', this.user, null));
    this.router.navigate(['/account/edit'])
  }

  updateAddress() {
    this.adService.setAd(new AdItem(ChangeAddressDataComponent, 'Address', null, this.customer));
    this.router.navigate(['/account/edit'])
  }

  updateCreditCard() {
    this.adService.setAd(new AdItem(ChangePaymentDataComponent, 'Credit-Card', null, this.customer));
    this.router.navigate(['/account/edit'])
  }

  cancelOrder(o: Order) {
    this.orderService.cancelOrder(o.nr).subscribe(result => {
      this.notificationService.info('Order successfully canceled', 'Order canceled');
      this.getOrders();
    });
  }


  private getOrders() {
    this.orderService.searchOrders(this.customer.nr, this.orderYear)
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
