import {BookBinding} from './book-binding.model';

export class Book {
  isbn: string;
  authors: string;
  title: string;
  price: number;
  publisher?: string;
  publicationYear?: number;
  binding?: BookBinding;
  numberOfPages?: number;
  descritption?: string;
  imageUrl?: string;
  isAddedToCart?: boolean = false;


  constructor(isbn?: string, authors?: string, title?: string, price?: number) {
    this.isbn = isbn;
    this.authors = authors;
    this.title = title;
    this.price = price;
  }
}
