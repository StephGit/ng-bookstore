import {Book} from './book';

export class ShoppingCardItem {
  book: Book;
  quantity: number;

  constructor(public book: Book, public quantity: number = 1) {}
}
