import {ShoppingCartItem} from './shopping-cart-item.model';

export class ShoppingCart {
  public items: ShoppingCartItem [] = [];
  private price: number;

  public getTotalPrice(): number {
    return this.items.map(i => i.book.price * i.quantity).reduce((a, b) => a + b, 0);
  }

  public addItem(item: ShoppingCartItem) {
    const existingBook = this.items.find(i => i.book.isbn === item.book.isbn);
    if (existingBook) {
      existingBook.quantity++;
    } else {
      this.items.push(item);
    }
  }

  public removeItem(item: ShoppingCartItem) {
    const existingBook = this.items.find(i => i.book.isbn === item.book.isbn);
    if (existingBook && existingBook.quantity > 0) {
      const index = this.items.findIndex(i => i.book.isbn === item.book.isbn);
      this.items.splice(index, 1);
    }
  }
}



