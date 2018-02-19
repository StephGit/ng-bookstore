import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../../@core/services/catalog.service';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../../@core/services/shopping-cart.service';
import {Book} from '../../@core/model/book.model';
import {ShoppingCart} from '../../@core/model/shopping-cart.model';
import {ShoppingCartItem} from '../../@core/model/shopping-cart-item.model';
import {NotificationService} from "../../@core/services/notification.service";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  recommendatedBooks = [{
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


  books: Book [];

  searchCompleted: Boolean;

  constructor(private catalogService: CatalogService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.books = this.catalogService.getPreviousSearchResults();
    if (this.books && this.books.length > 0) {
      this.searchCompleted = true;
    }
    this.catalogService.searchResultsUpdated.subscribe((searchResults) => {
      this.books = searchResults;
      this.searchCompleted = true;
    })

    // TODO don't allow a second add to the shopping cart when searching again
  }

  navigateToDetails(isbn) {
    this.router.navigate(['/details/' + isbn]);

  }


}
