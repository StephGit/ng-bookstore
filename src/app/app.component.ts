
import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from './@core/services/current-user.service';
import {CustomerService} from './@core/services/customer.service';
import {ShoppingCartService} from './@core/services/shopping-cart.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private currentUserService: CurrentUserService,
              private customerService: CustomerService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    const userId = this.currentUserService.populate();
    if (userId !== null) {
      this.customerService.find(userId).subscribe(
        result => result);
    }
    this.shoppingCartService.getCurrentShoppingCart();
  }
}
