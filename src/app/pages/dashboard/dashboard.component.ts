import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../../@core/data/services/catalog.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {


  books = [{title: 'I am a book'}, {title: 'I am a book'},
    {title: 'I am a book'}, {title: 'I am a book'},
    {title: 'I am a book'}, {title: 'I am a book'}];

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit(): void {
    this.catalogService.searchResultsUpdated.subscribe((searchResults) => {
      this.books = searchResults;
    })
  }


}
