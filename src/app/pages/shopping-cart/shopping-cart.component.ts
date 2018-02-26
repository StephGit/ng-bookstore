import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../@core/services/shopping-cart.service';
import {ShoppingCart} from '../../@core/model/shopping-cart.model';
import {ShoppingCartItem} from '../../@core/model/shopping-cart-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  currentShoppingCart: ShoppingCart;


  searchCompleted: Boolean;

  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) {

  }

  get totalPrice(): number { return this.currentShoppingCart.getTotalPrice(); }

  ngOnInit(): void {
    this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
  }

  removeFromShoppingCart(item: ShoppingCartItem) {
    this.shoppingCartService.removeItemFromShoppingCart(item);
    this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout'])
  }
}
