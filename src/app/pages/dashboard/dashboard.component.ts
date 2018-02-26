import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../../@core/services/catalog.service';
import {Router} from '@angular/router';
import {Book} from '../../@core/model/book.model';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  recommendedBooks;
  books: Book [];

  constructor(private catalogService: CatalogService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.recommendedBooks = this.catalogService.getRecommendedBooks();
    this.books = this.catalogService.getPreviousSearchResults();
    if (this.books && this.books.length > 0) {
    }
    this.catalogService.searchResultsUpdated.subscribe((searchResults) => {
      this.books = searchResults;
    })
  }

  navigateToDetails(isbn) {
    this.router.navigate(['/details/' + isbn]);

  }


}
