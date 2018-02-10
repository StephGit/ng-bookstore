import {EventEmitter, Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CatalogService {

  searchResults;
  searchResultsUpdated: EventEmitter<any> = new EventEmitter(); //TODO bookInfo object

  constructor(
    private apiService: ApiService
  ) { }


  //TODO mock config for development without backend access?
  searchBooks(keywords: String): void {
    this.apiService.get('/books?keywords=' + keywords, null, null).subscribe((results) => {
      this.searchResults = results;
      this.searchResultsUpdated.emit(this.searchResults);
    });
  }

}
