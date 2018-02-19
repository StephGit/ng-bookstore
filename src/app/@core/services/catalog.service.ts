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
        this.searchResultsUpdated.emit(results);
      });
  }

  getPreviousSearchResults() {
    return this.searchResults;
  }

  getBookDetails(isbn: String): Observable<Book> {
    return this.apiService.get<Book>('/books/' + isbn, null, null)
    .catch(err => this.handleError(err, 'find'));
  }

  protected handleError(error: any, method: string) {
    this.notificationService.error(
      this.errorService.getCatalogError([method, error.status]), 'Catalog error');
    return Observable.throw(error);
  }

}
