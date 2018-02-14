import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../../@core/data/services/catalog.service';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../../@core/data/services/shopping-cart.service';
import {Book} from '../../@core/data/model/book.model';
import {ShoppingCart} from '../../@core/data/model/shopping-cart.model';
import {ShoppingCartItem} from '../../@core/data/model/shopping-cart-item.model';
import {NotificationService} from "../../@core/data/services/notification.service";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  recommendatedBooks = [{
    title: 'Java All-in-One For Dummies ',
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
              private cartService: ShoppingCartService,
              private router: Router, private notificationService: NotificationService) {
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
  }

  navigateToDetails(isbn) {
    this.router.navigate(['/details/' + isbn]);

  }

  addToShoppingCart(book: Book) {
    this.cartService.addItemToShoppingCart(new ShoppingCartItem(book, 1));
    book.isAddedToCart = true;
    this.notificationService.info(book.title + ' ' + book.price, '1 item added to Cart');
  }


}
