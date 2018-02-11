import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="navigateToDetails(isbn)">
      <!--<div class="icon-container">-->
        <!--<div class="icon {{ type }}">-->
          <!--<ng-content></ng-content>-->
        <!--</div>-->
      <!--</div>-->
      <div class="details">
        <div >
          <img class="book-img" src="https://images-na.ssl-images-amazon.com/images/I/41KJV7-HS0L.jpg">
        </div>
        <div class="title">{{ title }}</div>
        <div class="authors"><div class="desc">by {{ authors }}</div></div>
        <div class="isbn"><div class="desc">{{ isbn }}</div></div>
          <div class="price"><div class="desc">{{ price | currency:'USD'}}</div></div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() authors: string;
  @Input() isbn: string;
  @Input() price: string;
  @Input() type: string;
  @Input() on = true;


  constructor(private router: Router) {
  }

  navigateToDetails(isbn) {
    console.log('navigating to book details with isbn: ' + isbn);
    this.router.navigate(['/pages/details/' + isbn]);

  }
}
