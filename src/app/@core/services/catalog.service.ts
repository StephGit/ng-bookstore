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
    isbn: '1119247799',
    price: '39.99',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51h0WwyqCYL._SL160_.jpg',
  }, {
    title: 'Java: A Beginner\'s Guide, Seventh Edition',
    authors: 'Herbert Schildt',
    isbn: '1259589315',
    price: '24.66',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41SfK-5%2BD9L._SL160_.jpg',
  },
    {
      title: 'Java EE 7: The Big Picture',
      authors: 'Dr Danny Coward',
      isbn: '0071837345',
      price: '31.96',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41sIavzGIqL._SL160_.jpg',
    }, {
      title: 'Java EE 7 Essentials: Enterprise Developer Handbook',
      authors: 'Arun Gupta',
      isbn: '1449370179',
      price: '31.77',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51%2BSlQFQExL._SL160_.jpg',
    },
    {
      title: 'Lonely Planet Colombia (Travel Guide)',
      authors: 'Lonely Planet, Alex Egerton, Tom Masters, Kevin Raub',
      isbn: '1742207847',
      price: '16.99',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/518nBIWx1rL._SL160_.jpg',
    }, {
      title: 'Fishing for Dummies',
      authors: 'Fishing for Dummies',
      isbn: '0470930683',
      price: '12.71',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51d2JhAOWtL._SL160_.jpg',
    }];
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
        if (results.length === 0) {
          this.notificationService.info('no books found for this keywords', null);
        }
        this.searchResults = results;
        this.searchResultsUpdated.emit(results);
        if (results.length === 0) {
          this.notificationService.info(
            'No book available for this search parameter. Please try again.', 'No book found');
        }
      });
  }

  resetAddedToCartFlag() {
    this.searchResults.forEach(b => {
      b.isAddedToCart = false;
    });
    this.searchResultsUpdated.emit(this.searchResults);
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
