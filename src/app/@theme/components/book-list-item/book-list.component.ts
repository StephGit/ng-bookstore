import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Book} from '../../../@core/model/book.model';
import {ShoppingCartItem} from '../../../@core/model/shopping-cart-item.model';
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
            <div class="details col-md-4">
              <div class="title">{{ b.title }}</div>
              <div class="authors">
                <div class="desc">by {{ b.authors }}</div>
              </div>
              <div class="isbn">
                <div class="desc">{{ b.isbn }}</div>
              </div>
            </div>
            <div class="price  col-md-4">
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


  constructor(private cartService: ShoppingCartService, private notificationService: NotificationService) {
  }


}
