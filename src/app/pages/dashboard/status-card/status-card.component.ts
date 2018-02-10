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
        <div class="title">{{ title }}</div>
        <hr width="100%" class="title-row">
        <div class="authors">{{ authors }}</div>
        <div class="isbn">{{ isbn }}</div>
        <div class="price">{{ price }}</div>
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
