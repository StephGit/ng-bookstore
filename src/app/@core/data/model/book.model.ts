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
}
