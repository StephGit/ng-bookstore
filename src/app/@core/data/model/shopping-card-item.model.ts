import {Book} from './book.model';

export class ShoppingCardItem {
  book: Book;
  quantity: number;

  constructor(book: Book, quantity: number = 1) {
    this.book = book;
    this.quantity = quantity;
  }
}
