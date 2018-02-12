import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../../@core/data/services/catalog.service";
import {ShoppingCartService} from "../../@core/data/services/shopping-cart.service";
import {ShoppingCart} from "../../@core/data/model/shopping-cart.model";
import {Book} from "../../@core/data/model/book.model";
import {ShoppingCartItem} from "../../@core/data/model/shopping-cart-item.model";

@Component({
  selector: 'ngx-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  currentShoppingCart: ShoppingCart;


  searchCompleted: Boolean;

  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  ngOnInit(): void {
    this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
  }

  removeFromShoppingCart(item: ShoppingCartItem) {
    this.shoppingCartService.removeItemFromShoppingCart(item);
    this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
  }


}
