import {Component, OnInit} from '@angular/core';
import {ShoppingCart} from '../../@core/model/shopping-cart.model';
import {ShoppingCartService} from '../../@core/services/shopping-cart.service';
import {OrderService} from '../../@core/services/order.service';
import {NotificationService} from '../../@core/services/notification.service';
import {OrderItem} from '../../@core/model/oder-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  currentShoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService,
              private notficationService: NotificationService, private router: Router) {
  }

  ngOnInit() {
    this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
  }

  placeOrder() {
    const orderItems: OrderItem [] = this.currentShoppingCart.items.map(i => new OrderItem(i.book.isbn, i.quantity));
    this.orderService.placeOrder(orderItems).subscribe((result) => {
      this.notficationService.success('Order with number: ' + result.nr + ' successfully places', 'Order placed');
      this.router.navigate(['/account/overview'])
    })
  }


  get totalPrice(): number { return this.currentShoppingCart.getTotalPrice(); }


}
