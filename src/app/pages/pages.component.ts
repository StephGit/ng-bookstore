import { Component } from '@angular/core';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-layout>
      <router-outlet></router-outlet>
    </ngx-layout>
  `,
})
export class PagesComponent {
}
