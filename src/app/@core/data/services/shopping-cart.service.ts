import {EventEmitter, Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ShoppingCart} from "../model/shopping-cart.model";
import {Book} from "../model/book.model";
import {ShoppingCartItem} from "../model/shopping-cart-item.model";

@Injectable()
export class ShoppingCartService {

  currentShoppingCart: ShoppingCart = new ShoppingCart();

  mockShoppingCart = [{
    title: 'Java All-in-One For Dummies ',
    authors: 'Doug Lowe',
    isbn: '1119247799',
    price: '39.99',
  }, {title: 'Java All-in-One For Dummies ', authors: 'Doug Lowe', isbn: '1119247799', price: '39.99'},
    {
      title: 'Java All-in-One For Dummies ',
      authors: 'Doug Lowe',
      isbn: '1119247799',
      price: '39.99',
    }, {title: 'Java All-in-One For Dummies ', authors: 'Doug Lowe', isbn: '1119247799', price: '39.99'}]

  constructor() {
  }

  public getCurrentShoppingCart() {
    return this.currentShoppingCart;
  }

  public addBookToShoppingCart(item: ShoppingCartItem) {
    this.currentShoppingCart.addItem(item);
  }


}
