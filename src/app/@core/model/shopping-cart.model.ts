import {ShoppingCartItem} from "./shopping-cart-item.model";

export class ShoppingCart {
  private _items: ShoppingCartItem [] = [];
  private price: number;

  public getTotalPrice(): number {
    return this._items.map(i => i.book.price * i.quantity).reduce((a, b) => a + b, 0);
  }

  public addItem(item: ShoppingCartItem) {
    const existingBook = this._items.find(i => i.book.isbn === item.book.isbn);
    if (existingBook) {
      existingBook.quantity++;
    } else {
      this._items.push(item);
    }
  }

  public removeItem(item: ShoppingCartItem) {
    const existingBook = this._items.find(i => i.book.isbn === item.book.isbn);
    if (existingBook && existingBook.quantity > 1) {
      const index = this._items.findIndex(i => i.book.isbn === item.book.isbn);
      this._items.splice(index, 1);
    }
  }

  get items(): ShoppingCartItem[] {
    return this._items;
  }
}



