import { Component, OnInit } from '@angular/core';
import {ShoppingCartItem} from "../../@core/model/shopping-cart-item.model";
import {ShoppingCart} from "../../@core/model/shopping-cart.model";
import {ShoppingCartService} from "../../@core/services/shopping-cart.service";

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  currentShoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
  }

  placeOrder() {

  }

}
