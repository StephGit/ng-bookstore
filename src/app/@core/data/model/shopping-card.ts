import {ShoppingCardItem} from './shopping-card-item';

export class ShoppingCard {
  private items: ShoppingCardItem [];
  private price: number;

   public getTotalPrice(): number {
    return this.items.map(i => i.book.price * i.quantity).reduce((a, b) => a + b, 0);
  }

  public addItem(item: ShoppingCardItem) {
    const existingBook = this.items.find(i => i.book.isbn === item.book.isbn);
    if (existingBook) {
      existingBook.quantity ++;
    } else {
      this.items.push(item);
    }
  }

  public removeItem(item: ShoppingCardItem) {
    const existingBook = this.items.find(i => i.book.isbn === item.book.isbn);
    if (existingBook) {
      existingBook.quantity --;
    } else {
      const index = this.items.findIndex(i => i.book.isbn === item.book.isbn);
      this.items.splice(index, 1);
    }
  }
}



