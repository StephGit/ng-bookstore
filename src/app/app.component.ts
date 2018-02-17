
import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from './@core/services/current-user.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUserService.populate();
  }
}
