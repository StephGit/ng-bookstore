import {Injectable} from '@angular/core';
import {ShoppingCart} from '../model/shopping-cart.model';
import {Book} from '../model/book.model';
import {ShoppingCartItem} from '../model/shopping-cart-item.model';
import {environment} from '../../../environments/environment';
import {User} from '../model/user.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingCartService {
  private cartItemsCountSubject = new BehaviorSubject<number>(0);
  public currentCartItemsCount$ = this.cartItemsCountSubject.asObservable();
  currentShoppingCart: ShoppingCart = new ShoppingCart();
  isMockEnabled = `${environment.mock}`;
  private STORAGE_KEY: string = 'shopping-cart';

  constructor() {
  }

  public getCurrentShoppingCart() {
    if (!this.currentShoppingCart.items || this.currentShoppingCart.items.length === 0) {
      const cartFromStorage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
      if (cartFromStorage && cartFromStorage.items) {
        const storedShoppingCart = new ShoppingCart();
        cartFromStorage.items.forEach(i =>
          storedShoppingCart.addItem(new ShoppingCartItem(
            new Book(i.book.isbn, i.book.authors, i.book.title, i.book.price), i.quantity),
          ));
        this.currentShoppingCart = storedShoppingCart;
      }
      this.cartItemsCountSubject.next(this.currentShoppingCart.items.length);
    }
    return this.currentShoppingCart;
  }

  public addItemToShoppingCart(item: ShoppingCartItem) {
    this.currentShoppingCart.addItem(item);
    this.cartItemsCountSubject.next(this.currentShoppingCart.items.length);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentShoppingCart));
  }

  public clearCart() {
    this.currentShoppingCart.items = [];
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentShoppingCart));
    this.cartItemsCountSubject.next(0);
  }

  public removeItemFromShoppingCart(item: ShoppingCartItem) {
    this.currentShoppingCart.removeItem(item);
    this.cartItemsCountSubject.next(this.currentShoppingCart.items.length);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentShoppingCart));
  }
}
