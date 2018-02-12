import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../../@core/data/services/catalog.service';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {


  books = [{
    title: 'Java All-in-One For Dummies ',
    authors: 'Doug Lowe',
    isbn: '1119247799',
    price: '39.99'
  }, {title: 'Java All-in-One For Dummies ', authors: 'Doug Lowe', isbn: '1119247799', price: '39.99'},
    {
      title: 'Java All-in-One For Dummies ',
      authors: 'Doug Lowe',
      isbn: '1119247799',
      price: '39.99'
    }, {title: 'Java All-in-One For Dummies ', authors: 'Doug Lowe', isbn: '1119247799', price: '39.99'},
    {
      title: 'Java All-in-One For Dummies ',
      authors: 'Doug Lowe',
      isbn: '1119247799',
      price: '39.99'
    }, {title: 'Java All-in-One For Dummies ', authors: 'Doug Lowe', isbn: '1119247799', price: '39.99'}];

  searchCompleted: Boolean;

  constructor(private catalogService: CatalogService, private router: Router) {
  }

  ngOnInit(): void {
    this.catalogService.searchResultsUpdated.subscribe((searchResults) => {
      this.books = searchResults;
      this.searchCompleted = true;
    })
  }

  navigateToDetails(isbn) {
    this.router.navigate(['/pages/details/' + isbn]);

  }


}
