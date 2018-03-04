import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../../@core/model/book.model';
import {ShoppingCartService} from '../../../@core/services/shopping-cart.service';
import {NotificationService} from '../../../@core/services/notification.service';

@Component({
  selector: 'ngx-book-list',
  styleUrls: ['./book-list.component.scss'],
  template: `
    <div class="list-group">
      <div *ngFor="let b of books">
        <div class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="wrapper">
            <div class="details col-md-4" (click)="bookSelected(b.isbn)">
              <div class="title">{{ b.title }}</div>
              <div class="authors">
                <div class="desc">by {{ b.authors | ngxPrettifyAuthors}}</div>
              </div>
              <div class="isbn">
                <div class="desc">{{ b.isbn }}</div>
              </div>
            </div>
            <div class="price  col-md-4" (click)="bookSelected(b.isbn)">
              {{ b.price | currency:'USD'}}
            </div>
            <div class="col-md-2">
              <ngx-shopping-cart-add-button [book]="b"></ngx-shopping-cart-add-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BookListComponent {
  @Input()
  books: Book [];
  @Output()
  onBookSelected: EventEmitter<string> = new EventEmitter();


  constructor(private cartService: ShoppingCartService, private notificationService: NotificationService) {
  }


  bookSelected(isbn) {
    this.onBookSelected.emit(isbn);
  }

}
