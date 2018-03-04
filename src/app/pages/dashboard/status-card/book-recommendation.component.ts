import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-book-recommendation',
  styleUrls: ['./book-recommendation.component.scss'],
  template: `
    <nb-card (click)="bookSelected(isbn)">
      <!--<div class="icon-container">-->
        <!--<div class="icon {{ type }}">-->
          <!--<ng-content></ng-content>-->
        <!--</div>-->
      <!--</div>-->
      <div class="details">
        <div class="preview">
          <img class="book-img" src="{{imgUrl}}">
        </div>
        <div class="title">{{ title }}</div>
        <div class="authors"><div class="desc">by {{ authors }}</div></div>
        <div class="isbn"><div class="desc">{{ isbn }}</div></div>
          <div class="price"><div class="desc">{{ price | currency:'USD'}}</div></div>
      </div>
    </nb-card>
  `,
})
export class BookRecommendationComponent {

  @Input() title: string;
  @Input() authors: string;
  @Input() isbn: string;
  @Input() price: string;
  @Input() imgUrl: string;

  @Output() onBookSelected: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {
  }

  bookSelected(isbn) {
    this.onBookSelected.emit(isbn);
  }
}
