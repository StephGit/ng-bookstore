import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../../@core/data/services/catalog.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {


  books = [{title: 'Sapiens: A Brief History of Humankind', authors:'blalbal', isbn:'123132132', price:'7.99'}, {title: 'Sapiens: A Brief History of Humankind', authors:'blalbal', isbn:'123132132', price:'7.99'},
    {title: 'Sapiens: A Brief History of Humankind', authors:'blalbal', isbn:'123132132', price:'7.99'}, {title: 'Sapiens: A Brief History of Humankind', authors:'blalbal', isbn:'123132132', price:'7.99'},
    {title: 'Sapiens: A Brief History of Humankind', authors:'blalbal', isbn:'123132132', price:'7.99'}, {title: 'Sapiens: A Brief History of Humankind', authors:'blalbal', isbn:'123132132', price:'7.99'}];

  searchCompleted: Boolean;

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit(): void {
    this.catalogService.searchResultsUpdated.subscribe((searchResults) => {
      this.books = searchResults;
      this.searchCompleted = true;
    })
  }


}
