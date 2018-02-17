import {EventEmitter, Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ShoppingCart} from '../model/shopping-cart.model';
import {Book} from '../model/book.model';
import {ShoppingCartItem} from '../model/shopping-cart-item.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class ShoppingCartService {

  currentShoppingCart: ShoppingCart = new ShoppingCart();
  isMockEnabled = `${environment.mock}`;
  private STORAGE_KEY: string = 'shopping-cart';

  constructor() {
  }

  public getCurrentShoppingCart() {
    if (!this.currentShoppingCart.items || this.currentShoppingCart.items.length === 0) {
      const cartFromStorage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
      if (cartFromStorage && cartFromStorage._items) {
        const storedShoppingCart = new ShoppingCart();
        cartFromStorage._items.forEach(i =>
          storedShoppingCart.addItem(new ShoppingCartItem(
            new Book(i.book.isbn, i.book.authors, i.book.title, i.book.price), i.quantity),
          ));
        this.currentShoppingCart = storedShoppingCart;
      }
    }
    return this.currentShoppingCart;
  }

  public addItemToShoppingCart(item: ShoppingCartItem) {
    this.currentShoppingCart.addItem(item);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentShoppingCart));
  }

  public removeItemFromShoppingCart(item: ShoppingCartItem) {
    this.currentShoppingCart.removeItem(item);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentShoppingCart));
  }


}
