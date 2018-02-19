import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../@core/services/catalog.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Book} from "../../@core/model/book.model";

@Component({
  selector: 'ngx-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  bookDetail$: Observable<Book>;
  isbn;


  constructor(private catalogService: CatalogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookDetail$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        const isbn = params.get('isbn');

        return this.catalogService.getBookDetails(isbn);
      });
  }

}
