import {EventEmitter, Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Book} from '../model/book.model';
import {HttpParams} from '@angular/common/http';
import {NotificationService} from './notification.service';
import {ErrorService} from './error.service';

@Injectable()
export class CatalogService {

  searchResults: Book [];
  searchResultsUpdated: EventEmitter<Book []> = new EventEmitter();
  recommendedBooks = [{
    title: 'Java All-in-One For Dummies',
    authors: 'Doug Lowe',
    isbn: '111924779921312313',
    price: '39.99',
  }, {title: 'Java All-in-One For Dummies ', authors: 'Doug Lowe', isbn: '1119247799', price: '39.99'},
    {
      title: 'Java All-in-One For Dummies ',
      authors: 'Doug Lowe',
      isbn: '1119247799',
      price: '39.99',
    }, {title: 'Java All-in-One For Dummies ', authors: 'Doug Lowe', isbn: '1119247799', price: '39.99'},
    {
      title: 'Java All-in-One For Dummies ',
      authors: 'Doug Lowe',
      isbn: '1119247799',
      price: '39.99',
    }, {title: 'Java All-in-One For Dummies ', authors: 'Doug Lowe', isbn: '1119247799', price: '39.99'}];
  isMockEnabled = `${environment.mock}`;

  constructor(private apiService: ApiService,
              private errorService: ErrorService,
              private notificationService: NotificationService) {
  }


  searchBooks(keywords: string): void {
    this.apiService.get<Book []>('/books', new HttpParams({
      fromObject: {
        keywords: keywords,
      },
    }), null)
      .catch(err => this.handleError(err, 'search'))
      .subscribe((results) => {
        this.searchResults = results;
        this.searchResultsUpdated.emit(results);
      });
  }

  getPreviousSearchResults() {
    return this.searchResults;
  }

  getRecommendedBooks() {
    return this.recommendedBooks;
  }

  getBookDetails(isbn: String): Observable<Book> {
    return this.apiService.get<Book>('/books/' + isbn, null, null)
      .catch(err => this.handleError(err, 'find'));
  }

  protected handleError(error: any, method: string) {
    this.notificationService.error(
      this.errorService.getCatalogError(method + error.status), 'Catalog error');
    return Observable.throw(error);
  }

}
