import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCart} from '../../@core/model/shopping-cart.model';
import {ShoppingCartService} from '../../@core/services/shopping-cart.service';
import {OrderService} from '../../@core/services/order.service';
import {NotificationService} from '../../@core/services/notification.service';
import {OrderItem} from '../../@core/model/oder-item.model';
import {Router} from '@angular/router';
import {Customer} from '../../@core/model/customer.model';
import {CustomerService} from '../../@core/services/customer.service';
import {ChangePaymentDataComponent} from '../../@theme/components';
import {AdItem} from '../../@core/model/ad-item.model';
import {ChangeAddressDataComponent} from '../../@theme/components';
import {AdService} from '../../@core/services/ad.service';
import {CatalogService} from '../../@core/services/catalog.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  customer: Customer;
  currentShoppingCart: ShoppingCart;
  titleCustomer: string = 'Shipping-Address:';
  isOrderPlaced: boolean = false;

  constructor(private adService: AdService,
              private shoppingCartService: ShoppingCartService,
              private customerService: CustomerService,
              private orderService: OrderService,
              private notficationService: NotificationService,
              private catalogService: CatalogService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
    this.customerService.currentCustomer$.takeUntil(this.destroy$).subscribe(value => this.customer = value);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  placeOrder() {
    const orderItems: OrderItem [] = this.currentShoppingCart.items.map(i => new OrderItem(i.book.isbn, i.quantity));
    this.orderService.placeOrder(orderItems).subscribe((result) => {
        this.notficationService.success('Order with number: ' + result.nr + ' successfully places', 'Order placed');
        this.shoppingCartService.clearCart();
        this.catalogService.resetAddedToCartFlag();
        this.router.navigate(['/account/overview']);
      },
      (error) => {
        this.isOrderPlaced = false;
      });
    this.isOrderPlaced = true;

  }

  get totalPrice(): number {
    return this.currentShoppingCart.getTotalPrice();
  }

  updateAddress() {
    this.adService.setAd(new AdItem(ChangeAddressDataComponent, 'Address', null, this.customer));
    this.router.navigate(['/account/edit'], {queryParams: {returnUrl: '/checkout'}});
  }

  updateCreditCard() {
    this.adService.setAd(new AdItem(ChangePaymentDataComponent, 'Credit-Card', null, this.customer));
    this.router.navigate(['/account/edit'], {queryParams: {returnUrl: '/checkout'}});
  }
}
