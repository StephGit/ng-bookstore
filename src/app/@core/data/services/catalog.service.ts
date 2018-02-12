import {EventEmitter, Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {Book} from "../model/book.model";

@Injectable()
export class CatalogService {

  searchResults: Book [];
  searchResultsUpdated: EventEmitter<Book []> = new EventEmitter();
  isMockEnabled = `${environment.mock}`;

  constructor(private apiService: ApiService) {
  }


  searchBooks(keywords: String): void {
    this.apiService.get('/books?keywords=' + keywords, null, null).subscribe((results) => {
      this.searchResults = results.map((r) => {
        return new Book(r.isbn, r.authors, r.title, r.price);
      });
      this.searchResultsUpdated.emit(this.searchResults);
    });
  }

  getPreviousSearchResults(){
    return this.searchResults;
  }

  getBookDetails(isbn: String): Observable<any> {
    return this.apiService.get('/books/' + isbn, null, null);

    /*return Observable.of({
      authors: 'Doug Lowe',
      binding: 'PAPERBACK',
      description: '<b>Your one-stop guide to programming with Java</b> ' +
      '<p>If you\'ve always wanted to program with Java but didn\'t know where to start, this will be the java-stained reference you\'ll turn to again and again.' +
      ' Fully updated for the JDK 9, this deep reference on the world\'s most popular programming language is the perfect starting point for building things with Java—and an invaluable ' +
      'ongoing reference as you continue to deepen your knowledge. <p>Clocking in at over 900 pages, <i>Java All-in-One For Dummies</i> takes the intimidation out of learning Java and offers clear,' +
      ' step-by-step guidance on how to download and install Java tools; work with variables, numbers, expressions, statements, loops, methods, and exceptions; create applets, servlets,' +
      ' and JavaServer pages; handle and organize data; and so much more. <ul> <li>Focuses on the vital information that enables you to get up and running quickly with Java</li> ' +
      '<li>Provides details on the new features of JDK 9</li> <li>Shows you how to create simple Swing programs</li> <li>Includes design tips on layout, buttons, and labels</li> </ul> <p>Everything you need to know to program with Java is included in this practical, easy-to-use guide!',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51h0WwyqCYL.jpg',
      isbn: '1119247799',
      numberOfPages: 960,
      price: 39.99,
      publicationYear: 2017,
      publisher: 'For Dummies',
      title: 'Java All-in-One For Dummies (For Dummies (Computers))'
    })*/
  }


}
