import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  books = [{title: "I am a book"}, {title: "I am a book"}, {title: "I am a book"}, {title: "I am a book"}, {title: "I am a book"}, {title: "I am a book"}]

}
