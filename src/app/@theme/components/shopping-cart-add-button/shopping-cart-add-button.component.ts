import {Component, Input} from '@angular/core';
import {Book} from '../../../@core/model/book.model';
import {ShoppingCartItem} from '../../../@core/model/shopping-cart-item.model';
import {ShoppingCartService} from '../../../@core/services/shopping-cart.service';
import {NotificationService} from '../../../@core/services/notification.service';

@Component({
  selector: 'ngx-shopping-cart-add-button',
  styleUrls: ['./shopping-cart-add-button.component.scss'],
  template: `
    <button *ngIf="!book.isAddedToCart" type="button"
            (click)="addToShoppingCart(book)" class="btn btn-success btn-icon">
      <i class="fa fa-cart-plus"></i>
    </button>
  `,
})
export class ShoppingCartAddButtonComponent {
  @Input()
  book: Book;

  constructor(private cartService: ShoppingCartService, private notificationService: NotificationService) {
  }

  addToShoppingCart(book: Book) {
    book.isAddedToCart = true;
    this.cartService.addItemToShoppingCart(new ShoppingCartItem(book, 1));
    this.notificationService.info(book.title + ' ' + book.price, '1 item added to Cart');
  }
}
