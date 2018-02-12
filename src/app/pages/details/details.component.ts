import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../@core/data/services/catalog.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ngx-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  bookDetail$: Observable<any>;
  isbn;


  constructor(private catalogService: CatalogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.bookDetail$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        const isbn = params.get('id');

        return this.catalogService.getBookDetails(isbn);
      });
  }

}
