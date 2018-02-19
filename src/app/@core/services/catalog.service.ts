import {EventEmitter, Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Book} from '../model/book.model';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class CatalogService {

  searchResults: Book [];
  searchResultsUpdated: EventEmitter<Book []> = new EventEmitter();
  isMockEnabled = `${environment.mock}`;

  constructor(private apiService: ApiService) {
  }


  searchBooks(keywords: string): void {
    this.apiService.get<Book []>('/books', new HttpParams({
      fromObject: {
        keywords: keywords,
      },
    }), null).subscribe((results) => {
      this.searchResultsUpdated.emit(results);
    });
  }

  getPreviousSearchResults() {
    return this.searchResults;
  }

  getBookDetails(isbn: String): Observable<any> {
    return this.apiService.get('/books/' + isbn, null, null);

  }


}
