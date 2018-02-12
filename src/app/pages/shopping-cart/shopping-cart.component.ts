import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../@core/data/services/catalog.service";
import {ShoppingCartService} from "../../@core/data/services/shopping-cart.service";
import {ShoppingCart} from "../../@core/data/model/shopping-cart.model";

@Component({
  selector: 'ngx-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  currentShoppingCart: ShoppingCart;


  searchCompleted: Boolean;

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  ngOnInit(): void {
    this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
  }


}
